import ApproveErc20 from "./ApproveErc20";
import ApproveErc721 from "./ApproveErc721";

export default function Approve() {
  return (
    <div className="py-8">
      <div className="pb-3">
        <div>合约地址：{"0x0D3b0b607DC1C983B5e7E9a300e1c197e7F3EB0A"}</div>
        <div>网络：Bsc testnet </div>
      </div>
      <div className="space-y-4">
        <ApproveErc20 />
        <ApproveErc721 />
      </div>
    </div>
  );
}
