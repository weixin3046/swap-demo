"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import { toast } from "sonner";

export default function TextModdal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
      <input type="text" placeholder="test" />
      <button onClick={() => setOpen(true)}>modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>test</div>
      </Modal>
    </div>
  );
}
