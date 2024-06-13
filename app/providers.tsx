"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bscTestnet } from "viem/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: `2724d308a0ea7acb1238664e287e8e9b`,
  chains: [bscTestnet],
  ssr: true,
});
const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider showRecentTransactions={true}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
