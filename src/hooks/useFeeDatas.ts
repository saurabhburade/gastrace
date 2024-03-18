import { useInfiniteReadContracts } from "wagmi";
import MERKLY_OFT_ABI from "@/configs/abis/MERKLY_OFT_ABI.json";
import ENDPOINT_ABI from "@/configs/abis/ENDPOINT_ABI.json";

import { ChainId, ChainKey, LZ_ADDRESS } from "@layerzerolabs/lz-sdk";
import _ from "lodash";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { Chain } from "viem";
import { formatEther } from "viem";

import { useQueries } from "@tanstack/react-query";
import { multicall } from "wagmi/actions";
import { log } from "console";
import { wagmiconfig } from "@/configs/wagmi";
import { zkSync } from "viem/zksync";
import { base } from "viem/chains";
import { verifyTypedDataQueryKey } from "wagmi/query";
import { useDispatch } from "react-redux";
import feeDataSlice from "@/state/features/fees/feeDataSlice";

export const useFeeDatas = (
  chainConfig: Chain,
  srceid: number,
  _payload?: string = "0x",
  _payInZRO?: boolean = false,
  _adapterParams?: string = "0x"
) => {
  const dispatch = useDispatch();
  // console.log("LZ_ADDRESS", LZ_ADDRESS[ChainKey["ZKSYNC"]], ChainId[srceid]);
  const ENDPOINT_ADDRESS = LZ_ADDRESS[ChainKey[ChainId[srceid]]];
  console.log(
    "LZ_ADDRESS",
    LZ_ADDRESS[ChainKey[ChainId[srceid]]],
    ChainId[srceid]
  );

  const endpointContractConfig = {
    address: ENDPOINT_ADDRESS,
    abi: ENDPOINT_ABI,
  } as const;
  const V1_CHAIN_IDS = Object.entries(ChainId)
    ?.map(([c, key], idx) => {
      if (
        c?.split("_")?.includes("TESTNET") ||
        c?.split("_")?.includes("SANDBOX")
      ) {
        return null;
      }
      return key > 0 ? key : null;
    })
    ?.filter((c) => c);
  console.log("V1_CHAIN_IDS", V1_CHAIN_IDS);

  const allcalls = V1_CHAIN_IDS?.map((_chainId) => {
    const destEndpoint = LZ_ADDRESS[ChainKey[ChainId[_chainId]]];

    return {
      ...endpointContractConfig,
      functionName: "estimateFees",
      args: [
        _chainId,
        destEndpoint || ENDPOINT_ADDRESS,
        _payload,
        _payInZRO,
        _adapterParams,
      ],
      extra: {
        chainId: _chainId,
        key: ChainId[_chainId],
        deid: destEndpoint,
      },
    };
  });

  const callsSplits = _.chunk(allcalls, 20);
  const queries = callsSplits?.map(
    (calls: any[], idx: number): UseQueryOptions<any> => {
      return {
        queryKey: ["endpoint_multicall", idx, chainConfig?.name],
        queryFn: async () => {
          try {
            const d = await multicall(wagmiconfig, {
              contracts: calls,
              chainId: chainConfig?.id,
            });
            console.log("d", d);
            return d;
          } catch (e) {
            console.log("e", e);
            throw e;
          }
        },
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        enabled: false,
      };
    }
  );

  const results = useQueries({ queries });

  const chainMappedDataChunk = results?.map((result, idx) => {
    const callChunk = callsSplits[idx];
    const dataMappedChunk = callChunk?.map((call, i) => {
      const [nativeFee = 0, zroFee = 0] =
        result?.data && result?.data[i]?.status === "success"
          ? result?.data[i]?.result
          : [0, 0];

      const d = formatEther(nativeFee.toString());

      return {
        ...result,
        data: d || 0,
        status: result?.data ? result?.data[i]?.status : "failure",
        extra: call?.extra,
        isLoading: result?.isLoading || result?.isRefetching,
      };
    });
    return dataMappedChunk;
  });
  const dataUnion = _.flatten(chainMappedDataChunk);
  if (dataUnion?.length > 0 && srceid) {
    dispatch(feeDataSlice.actions?.setDefaultEndpointFeeData(dataUnion || []));
  }
  // console.log("result", result.data, result.error, results);
  return {
    data: dataUnion,
    refetch: async () => {
      // for (let index = 0; index < results.length; index++) {
      //   const element = results[index];
      //   await element?.refetch()
      // }
      const promises = results?.map((r) => r?.refetch());
      await Promise.all(promises);
    },
  };
};
