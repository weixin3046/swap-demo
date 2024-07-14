"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  footer,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-end justify-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="max-w-[420px] w-screen md:w-[50vw] max-h-[700px] relative transform overflow-hidden rounded-t-[20px]  md:rounded-[20px] bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
            {footer && (
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {footer}
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
