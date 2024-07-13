import { Modal } from "@/app/components/Modal/Modal";
import { TokenProps } from "@/app/constants";

export default function TokenModal({
  onClose,
  tokenList,
}: {
  onClose: () => void;
  tokenList: TokenProps[];
}) {
  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <div>选择代币</div>
        <div>
          {tokenList.map((token) => (
            <div key={token.address}>{token.name}</div>
          ))}
        </div>
      </Modal>
    </>
  );
}
