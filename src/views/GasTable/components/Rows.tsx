import useEthPrice from "@/hooks/useUsdPrice";
import { useAppSelector } from "@/state/hooks";
import React from "react";
import _ from "lodash";
import Row from "./Row";

type Props = {};

function Rows({}: Props) {
  const ethPrice = useEthPrice();
  const chainMappedData = useAppSelector(
    (state) => state.feeDatas?.defaultEndpointDatas
  );
  console.log(`🚀 ~ file: Rows.tsx:12 ~ chainMappedData:`, chainMappedData);

  return (
    <div>
      <div className="bg-base-300 grid grid-cols-5  gap-5 p-5 py-2">
        <p className="p-2">DEID</p>
        <p className="p-2">Destination </p>
        <p className="p-2">Endpoint </p>
        <p className="p-2">Gas</p>
        <p className="p-2">GAS/USD</p>
      </div>
      <div className="space-y-2">
        {_.orderBy(chainMappedData, ["data"], ["desc"])?.map((call, idx) => {
          // const [nativeFee = 0, zroFee = 0] = call?.data?.result || [];
          const d = call?.data;
          console.log("call?.data", call?.data);
          return (
            <Row
              key={call?.extra?.key}
              eid={call?.extra?.chainId}
              ekey={call?.extra?.key}
              isFailed={call?.status === "failure"}
              isLoading={call?.isLoading}
              price={d}
              priceUsd={ethPrice?.ethPrice}
              endpoint={call?.extra?.deid}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rows;
