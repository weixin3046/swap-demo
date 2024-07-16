"use client";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { erc20Abi, erc721Abi } from "viem";
import { useWriteContract } from "wagmi";

export default function Approve() {
  const addRecentTransaction = useAddRecentTransaction();
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  console.log(hash, error, isPending);
  const handleClick = async () => {
    writeContract(
      {
        address: "0x0D3b0b607DC1C983B5e7E9a300e1c197e7F3EB0A",
        abi: erc721Abi,
        functionName: "approve",
        args: ["0x473aebc79d8683e4c2db002d6413024ed6131ff3", BigInt(1)],
      },
      {
        onSuccess: (hash) => {
          addRecentTransaction({
            hash: hash,
            description: "approve",
          });
        },
      }
    );
  };
  return (
    <div>
      {isPending && "loading"}
      {`address: ${0x0d3b0b607dc1c983b5e7e9a300e1c197e7f3eb0a}`}
      <div>
        {`args: ["0x473aebc79d8683e4c2db002d6413024ed6131ff3", BigInt(1)]`}
      </div>
      <button onClick={handleClick}>Approve ERC721</button>
    </div>
  );
}
