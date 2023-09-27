import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
export function Modal({
  title,
  children,
  confirmLabel,
  cancelLabel,
  visible,
  onCancel,
  onConfirm,
}: Props) {
  if (!visible) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="bg-black_rgba backdrop-blur fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex flex-col gap-2">{children}</div>
      <div className="flex gap-2">
        <button className="btn btn-primary" onClick={onConfirm}>
          {confirmLabel ? confirmLabel : "Agendar"}
        </button>
        <button className="btn btn-danger" onClick={onCancel}>
          {cancelLabel ? cancelLabel : "Cancelar"}
        </button>
      </div>
    </div>,
    //@ts-expect-error ts is flaky with this error
    document.getElementById("modal-root")
  );
}
