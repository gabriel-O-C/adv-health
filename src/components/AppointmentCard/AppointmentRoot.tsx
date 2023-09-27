import { Children } from "../../types/children";

export function AppointmentRoot({ children }: Children) {
  return (
    <div className="bg-gray-300 mt-4 rounded p-2 flex gap-4 min-w-[420px] max-w-[500px]">
      {children}
    </div>
  );
}
