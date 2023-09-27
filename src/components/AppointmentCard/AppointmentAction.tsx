import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
export function AppointmentAction({ children, onClick }: Props) {
  return (
    <div className="w-8 aspect-square cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
}
