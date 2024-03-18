import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
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
} from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiconfig } from "@/configs/wagmi";
import { Provider } from "react-redux";
import { store } from "@/state/store";

// const config = getDefaultConfig({
//   appName: "RainbowKit App",
//   projectId: "b443d5e4ae375524964a2953959e826c",
//   chains: [...wagmiconfig.chains],
//   ssr: true,
// });

const client = new QueryClient();
// const roboto = Roboto({
//   weight: ["400", "500", "300", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiProvider config={wagmiconfig}>
        <QueryClientProvider client={client}>
          {/* <RainbowKitProvider> */}
          {/* <main className={roboto.className}> */}
          <Component {...pageProps} />
          {/* </main> */}

          {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}

export default MyApp;
