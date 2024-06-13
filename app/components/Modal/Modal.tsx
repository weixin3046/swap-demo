import { ReactNode, MouseEvent } from "react";

export const Modal = (p: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!p.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-50 animate-fade-in"
      onClick={p.onClose}
    >
      <div
        className="bg-white rounded-t-lg sm:rounded-lg shadow-lg w-full sm:w-1/3 sm:animate-none animate-slide-in-bottom"
        style={{ maxWidth: "400px" }}
      >
        <div className="p-4">{p.children}</div>
      </div>
    </div>
  );
};
