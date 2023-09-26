import { type Children } from "../../types/children";

export function ReminderRoot({ children }: Children) {
  return (
    <table className="border border-gray-400 text-center">{children}</table>
  );
}
