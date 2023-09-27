import { useEffect } from "react";
import checkCircleIcon from "../../assets/check-circle.svg";
import xCircleIcon from "../../assets/x-circle.svg";

interface Props {
  message: {
    text: string;
    type: "danger" | "success" | "default";
    id: number;
    duration?: number;
  };
  onRemoveMessage: (id: number) => void;
}

export function ToastMessage({ message, onRemoveMessage }: Props) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
      className={
        message.type === "success"
          ? "flex bg-green-400 items-center shadow-md text-white px-4 py-8 cursor-pointer rounded"
          : "flex bg-green-400 items-center shadow-md text-white px-4 py-8 cursor-pointer rounded"
      }
    >
      {message.type === "danger" && (
        <img src={xCircleIcon} alt="X" className="mr-2" />
      )}
      {message.type === "success" && (
        <img src={checkCircleIcon} alt="check" className="mr-2" />
      )}
      <strong>{message.text}</strong>
    </div>
  );
}
