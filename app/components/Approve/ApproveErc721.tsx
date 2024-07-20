"use client";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { erc721Abi } from "viem";
import { useWriteContract } from "wagmi";

export default function ApproveErc721() {
  const addRecentTransaction = useAddRecentTransaction();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [erc721Address, setErc721Address] = useState<string | undefined>();
  const [tokenId, setTokenId] = useState<number | undefined>();

  const handleErc721 = async () => {
    if (!erc721Address) return alert("你还没有输入地址");
    if (!tokenId) return alert("你还没有输入tokenId");
    writeContract(
      {
        address: erc721Address as `0x${string}`,
        abi: erc721Abi,
        functionName: "approve",
        args: ["0x473aebc79d8683e4c2db002d6413024ed6131ff3", BigInt(tokenId)],
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
    <>
      <div className="space-y-6">
        <input
          type="text"
          placeholder="address"
          value={erc721Address}
          onChange={(e) => setErc721Address(e.target.value)}
        />
        <input
          type="number"
          placeholder="tokenId"
          value={tokenId}
          onChange={(e) => setTokenId(Number(e.target.value))}
        />
        <button disabled={isPending} onClick={handleErc721}>
          Approve ERC721
        </button>
      </div>
    </>
  );
}
