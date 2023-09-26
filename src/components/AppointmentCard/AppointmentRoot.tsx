import { Children } from "../../types/children";

export function AppointmentRoot({children}: Children) {
  return (
    <div className="ml-20 mt-4 bg-gray-300 rounded p-2 flex gap-4 w-[420px]">
      {children}
    </div>
  )
}