import EventManager from "../libs/EventManager";
import { ToastData } from "../types/toastData";

export const toastManager = new EventManager();

export default function toast({ type, text, duration }: Omit<ToastData, "id">) {
  //@ts-expect-error its correct
  toastManager.emit("addtoast", { type, text, duration });
}
