import { ConnectButton } from "@rainbow-me/rainbowkit";
import TextModdal from "@/app/components/Modal/TextModal";
import Approve from "@/app/components/Approve/Approve";

export default function Home() {
  return (
    <div>
      {/* <ConnectButton />
      <TextModdal />
      <Approve /> */}
      {/* <Min */}
      <h1>欢迎大家来到我的个人Dapp页面</h1>
      <div>
        <h3>这是用来测试 Approve功能的演示</h3>
        <Approve />
      </div>
    </div>
  );
}
