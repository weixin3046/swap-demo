"use client";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { erc20Abi, parseUnits } from "viem";
import { useWriteContract } from "wagmi";

export default function ApproveErc20() {
  const [decimals, setDecimals] = useState(18);
  const [amount, setAmount] = useState<string | undefined>();
  const [erc20Address, setErc20Address] = useState<string | undefined>();
  const addRecentTransaction = useAddRecentTransaction();
  const { error, isPending, writeContract } = useWriteContract();
  const handleErc20 = (address?: string, amount?: string) => {
    if (!address) return alert("你还没有输入地址");
    if (!amount) return alert("你还没有输入金额");
    const formatAmount = parseUnits(amount, decimals);
    writeContract(
      {
        address: address as `0x${string}`,
        abi: erc20Abi,
        functionName: "approve",
        args: ["0x473aebc79d8683e4c2db002d6413024ed6131ff3", formatAmount],
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
  if (error) {
    return <div>error</div>;
  }
  return (
    <>
      <div className="space-y-6">
        <input
          type="text"
          placeholder="Erc20 address"
          value={erc20Address}
          onChange={(e) => setErc20Address(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          className="appearance-none no-spinner"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          value={decimals}
          className="appearance-none no-spinner"
          onChange={(e) => setDecimals(Number(e.target.value))}
        />
        <button
          disabled={isPending}
          onClick={() => {
            handleErc20(erc20Address, amount);
          }}
        >
          Approve ERC721
        </button>
      </div>
    </>
  );
}
