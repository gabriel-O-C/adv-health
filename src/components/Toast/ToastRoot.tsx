import { useCallback, useEffect, useState } from "react";
import { ToastData } from "../../types/toastData";
import { toastManager } from "../../utils/toast";
import { ToastMessage } from "./ToastMessage";


export default function ToastContainer() {
  const [messages, setMessages] = useState<ToastData[]>([]);

  useEffect(() => {
    function handleAddToast({ text, type, duration }: ToastData) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          text,
          type,
          duration,
        },
      ]);
    }

    toastManager.on("addtoast", handleAddToast);

    return () => {
      //@ts-expect-error figuring it out...
      toastManager.removeListener("addtoast", handleAddToast);
    };
  });

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <div className="fixed left-[50%] bottom-10 z-20 -translate-x-[50%]">
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </div>
  );
}
