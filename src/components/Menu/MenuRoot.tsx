import { Children } from "../../types/children";

function MenuRoot({ children }: Children) {
  return <header className="flex flex-col">{children}</header>;
}

export default MenuRoot;
