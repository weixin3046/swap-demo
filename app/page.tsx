import { ConnectButton } from "@rainbow-me/rainbowkit";
import TextModdal from "./components/Modal/TextModal";
import Approve from "./components/Approve/Approve";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-3 p-24">
      <ConnectButton />
      <TextModdal />
      <Approve />
      {/* <Min */}
    </main>
  );
}
