"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc, bscTestnet } from "viem/chains";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "projectId";

export const config = getDefaultConfig({
  appName: "Swap demo",
  projectId: projectId,
  chains: [bsc, bscTestnet],
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
