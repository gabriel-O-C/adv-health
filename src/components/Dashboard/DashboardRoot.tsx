import { type Children } from "../../types/children";

export function DashboardRoot({ children }: Children) {
  return <div className="grid grid-cols-2 gap-28">{children}</div>;
}
