import { Modal } from "@/app/components/Modal/Modal";
import { tokens } from "@/app/constants/tokenList";
import Image from "next/image";
// import { TokenProps } from "@/app/constants";
interface TokenProps {
  isOpen: boolean;
  onClose: () => void;
  tokenList: typeof tokens;
}

function TokenItem({
  item,
  onClick,
}: {
  item: {
    ticker: string;
    img: string;
    name: string;
    address: string;
    decimals: number;
  };
  onClick: () => void;
}) {
  return (
    <>
      <div
        onClick={onClick}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
      >
        <div className="flex  flex-none items-center justify-center ">
          {/* <item.icon
            aria-hidden="true"
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
          /> */}
          <img src={item.img} alt="" width={36} height={36} />
        </div>
        <div className="flex-auto">
          <p className="block font-semibold text-gray-900">{item.ticker}</p>
          <p className="mt-1 text-gray-600">{item.name}</p>
        </div>
      </div>
    </>
  );
}

export default function TokenModal({ isOpen, onClose, tokenList }: TokenProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="选择代币">
        <div>
          <input type="text" />
        </div>
        <div className="flex gap-1 justify-start items-center flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border border-teal-300 px-4 py-2 m-1 rounded-full flex items-center"
            >
              <div>
                <Image src={""} alt="icon" />
              </div>
              <div>ETH</div>
            </div>
          ))}
        </div>
        <div className="overflow-y-auto h-[477px]">
          {tokenList.map((token) => (
            <TokenItem key={token.address} item={token} onClick={onClose} />
          ))}
        </div>
      </Modal>
    </>
  );
}
