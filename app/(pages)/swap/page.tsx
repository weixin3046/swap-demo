"use client";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function SwapPage() {
  const switchTokens = () => {};
  return (
    <>
      <div className="max-w-[480px] w-full pt-6 md:pt-16 px-2 ">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4 font-medium">
              <Link
                href={"/swap"}
                className="px-4 py-2 rounded-3xl bg-slate-500"
              >
                Swap
              </Link>
              <Link href={"/swap"} className="px-2 py-4">
                Limit
              </Link>
              <Link href={"/swap"} className="px-2 py-4">
                Send
              </Link>
              <Link href={"/swap"} className="px-2 py-4">
                Buy
              </Link>
            </div>
            <div>
              <button>
                <IoSettings />
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl bg-slate-100 h-32 p-4 font-medium text-sm w-full">
            <span>卖</span>
            <div className="flex items-center justify-between mt-1">
              <div className="flex grow">
                <input
                  type="text"
                  placeholder="0"
                  className="border-0 text-4xl p-0 w-0 relative flex-1"
                />
              </div>
              <div>
                <button>ETH</button>
              </div>
            </div>
            <div className="flex items-center flex-row pt-2">
              <div className="flex w-full items-center justify-between">
                <div></div>
                <div className="flex items-center justify-start">余额： 0</div>
              </div>
            </div>
            {/* <input type="text" /> */}
          </div>
          <div
            className="relative bg-slate-100 border-2 z-10 rounded-xl w-10 h-10 my-[-18px] mx-auto"
            onClick={switchTokens}
          >
            <div className="flex justify-center items-center w-full h-full">
              <FaArrowDown />
            </div>
          </div>
          <div className="relative rounded-2xl bg-slate-100 h-32 p-4 font-medium text-sm w-full">
            <span>买</span>
            <div className="flex items-center justify-between mt-1">
              <div className="flex grow">
                <input
                  type="text"
                  placeholder="0"
                  className="border-0 text-4xl p-0 w-0 relative flex-1"
                />
              </div>
              <div>
                <button>ETH</button>
              </div>
            </div>
            <div className="flex items-center flex-row pt-2">
              <div className="flex w-full items-center justify-between">
                <div></div>
                <div className="flex items-center justify-start">余额： 0</div>
              </div>
            </div>
            {/* <input type="text" /> */}
          </div>
          <div>
            <button className="w-full mt-2">Swap</button>
          </div>
        </div>
      </div>
    </>
  );
}
