import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/moralis-logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 px-6">
      <div className="flex gap-5 items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
        <Link href="/swap" className="hidden md:block">
          <div>Swap</div>
        </Link>
        <Link href="/tokens" className="hidden md:block">
          <div>Tokens</div>
        </Link>
      </div>
      <div className="flex gap-5 items-center justify-end">
        {/* <div className="headerItem">
          <Image src={Eth} alt="eth" className="eth" />
          Ethereum
        </div> */}
        <ConnectButton />
      </div>
    </header>
  );
}
