export type ToastData = {
  text: string;
  duration?: number;
  type: "danger" | "success" | "default";
  id: number
}