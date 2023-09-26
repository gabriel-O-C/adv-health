import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function MenuRoot({ children }: Props) {
  return <header className="flex flex-col">{children}</header>;
}

export default MenuRoot;
