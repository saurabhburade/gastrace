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
  zkSync,``
  kava,
  klaytn,
  celo,
  opBNB,
  astar,
  fuse,
  scroll,
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
        V1_ENDPOINT: LZ_ADDRESS[ChainKey[LZChainId[LZChainId.BASE]]],
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
