import { ToastData } from "../types/toastData";

export default class EventManager {
  listeners
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.listeners = new Map<string, any>();
  }

  on(event: string, listener: ({type, duration, text}: ToastData) => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event: string, payload: string) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event).forEach((listener: (arg0: string) => void) => {
      listener(payload);
    });
  }

  removeListener(event: string, listenerToRemove: string) {
    const listeners = this.listeners.get(event);
    if (!listeners) return;

    const filteredListeners = listeners.filter((listener: string) => listener !== listenerToRemove);

    this.listeners.set(event, filteredListeners);
  }
}