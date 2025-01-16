// @ts-nocheck
import { createClient } from "viem";
import { http, createConfig } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
  arbitrumNova,
  zkSync,
  kava,
  klaytn,
  celo,
  opBNB,
  astar,
  fuse,
  scroll,
  bsc,
  avalanche,
  gnosis,
  fantom,
  coreDao,
  harmonyOne,
  moonbeam,
  moonriver,
  linea,
  metis,
  mantle,
  confluxESpace,
  canto,
  polygonZkEvm,
  tenet,
} from "wagmi/chains";
import {
  ChainId as LZChainId,
  ChainKey,
  LZ_ADDRESS,
} from "@layerzerolabs/lz-sdk";

export const wagmiconfig = createConfig({
  chains: [
    {
      ...mainnet,
      custom: {
        V1_EID: 101,
        CHAIN_ID: LZChainId[101],
        CHAIN_KEY: ChainKey[LZChainId[101]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[101]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },

    {
      ...arbitrum,
      custom: {
        V1_EID: LZChainId.ARBITRUM,
        CHAIN_ID: LZChainId[LZChainId.ARBITRUM],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.ARBITRUM]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.ARBITRUM]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...bsc,
      custom: {
        V1_EID: LZChainId.BSC,
        CHAIN_ID: LZChainId[LZChainId.BSC],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.BSC]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.BSC]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...avalanche,
      custom: {
        V1_EID: LZChainId.AVALANCHE,
        CHAIN_ID: LZChainId[LZChainId.AVALANCHE],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.AVALANCHE]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.AVALANCHE]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...gnosis,
      custom: {
        V1_EID: LZChainId.GNOSIS,
        CHAIN_ID: LZChainId[LZChainId.GNOSIS],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.GNOSIS]],
        V1_ENDPOINT: "0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4",
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...fantom,
      custom: {
        V1_EID: LZChainId.FANTOM,
        CHAIN_ID: LZChainId[LZChainId.FANTOM],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.FANTOM]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.FANTOM]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...coreDao,
      custom: {
        V1_EID: LZChainId.COREDAO,
        CHAIN_ID: LZChainId[LZChainId.COREDAO],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.COREDAO]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.COREDAO]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...harmonyOne,
      custom: {
        V1_EID: LZChainId.HARMONY,
        CHAIN_ID: LZChainId[LZChainId.HARMONY],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.HARMONY]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.HARMONY]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...moonbeam,
      custom: {
        V1_EID: LZChainId.MOONBEAM,
        CHAIN_ID: LZChainId[LZChainId.MOONBEAM],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.MOONBEAM]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.MOONBEAM]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...moonriver,
      custom: {
        V1_EID: LZChainId.MOONRIVER,
        CHAIN_ID: LZChainId[LZChainId.MOONRIVER],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.MOONRIVER]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.MOONRIVER]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...metis,
      custom: {
        V1_EID: LZChainId.METIS,
        CHAIN_ID: LZChainId[LZChainId.METIS],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.METIS]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.METIS]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...mantle,
      custom: {
        V1_EID: LZChainId.MANTLE,
        CHAIN_ID: LZChainId[LZChainId.MANTLE],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.MANTLE]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.MANTLE]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...confluxESpace,
      custom: {
        V1_EID: LZChainId.CONFLUX,
        CHAIN_ID: LZChainId[LZChainId.CONFLUX],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.CONFLUX]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.CONFLUX]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...canto,
      custom: {
        V1_EID: LZChainId.CANTO,
        CHAIN_ID: LZChainId[LZChainId.CANTO],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.CANTO]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.CANTO]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...tenet,
      custom: {
        V1_EID: LZChainId.TENET,
        CHAIN_ID: LZChainId[LZChainId.TENET],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.TENET]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.TENET]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/ethereum.jpg",
      },
    },
    {
      ...kava,
      custom: {
        V1_EID: LZChainId.KAVA,
        CHAIN_ID: LZChainId[LZChainId.KAVA],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.KAVA]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.KAVA]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...base,
      custom: {
        V1_EID: LZChainId.BASE,
        CHAIN_ID: LZChainId[LZChainId.BASE],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.BASE]],
        V1_ENDPOINT: "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7",
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...arbitrumNova,
      custom: {
        V1_EID: LZChainId.NOVA,
        CHAIN_ID: LZChainId[LZChainId.NOVA],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.NOVA]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.NOVA]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },

    {
      ...celo,
      custom: {
        V1_EID: LZChainId.CELO,
        CHAIN_ID: LZChainId[LZChainId.CELO],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.CELO]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.CELO]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },

    {
      ...zkSync,
      custom: {
        V1_EID: LZChainId.ZKSYNC,
        CHAIN_ID: LZChainId[LZChainId.ZKSYNC],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.ZKSYNC]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.ZKSYNC]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...polygon,
      custom: {
        V1_EID: LZChainId.POLYGON,
        CHAIN_ID: LZChainId[LZChainId.POLYGON],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.POLYGON]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.POLYGON]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...fuse,
      custom: {
        V1_EID: LZChainId.FUSE,
        CHAIN_ID: LZChainId[LZChainId.FUSE],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.FUSE]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.FUSE]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...klaytn,
      custom: {
        V1_EID: LZChainId.KLAYTN,
        CHAIN_ID: LZChainId[LZChainId.KLAYTN],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.KLAYTN]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.KLAYTN]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...optimism,
      custom: {
        V1_EID: LZChainId.OPTIMISM,
        CHAIN_ID: LZChainId[LZChainId.OPTIMISM],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.OPTIMISM]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.OPTIMISM]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...opBNB,
      custom: {
        V1_EID: LZChainId.OPBNB,
        CHAIN_ID: LZChainId[LZChainId.OPBNB],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.OPBNB]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.OPBNB]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    {
      ...scroll,
      custom: {
        V1_EID: LZChainId.SCROLL,
        CHAIN_ID: LZChainId[LZChainId.SCROLL],
        CHAIN_KEY: ChainKey[LZChainId[LZChainId.SCROLL]],
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.SCROLL]]],
        logo: "https://raw.githubusercontent.com/sushiswap/list/master/logos/network-logos/kava.svg",
      },
    },
    // {
    //   ...mainnet,
    //   custom: {
    //     V1_EID: 101,
    //     CHAIN_ID: LZChainId[101],
    //     CHAIN_KEY: ChainKey[LZChainId[101]],
    //     V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[101]]],
    //   },
    // },
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // arbitrumNova,
    // zora,
    // zkSync,
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

// Function to convert array to key-value object with nested objects
function arrayToKeyValueWithObjects(array, keyName) {
  const keyValueObject = {};
  array.forEach((item) => {
    keyValueObject[item[keyName]] = { ...item };
  });
  return keyValueObject;
}

export const configuredChains = arrayToKeyValueWithObjects(
  wagmiconfig.chains,
  "id"
);
