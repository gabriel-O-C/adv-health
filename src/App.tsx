import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import AppRoutes from "./routes/AppRoutes";
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <BrowserRouter>
      <Menu.Root>
        <Menu.Nav></Menu.Nav>
        <Menu.Aside
          isOpen={isSideBarOpen}
          toggle={() => setIsSideBarOpen(!isSideBarOpen)}
        ></Menu.Aside>
        {!isSideBarOpen && (
          <div
            className="mt-[205px] ml-4 w-8 aspect-square cursor-pointer"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            title="toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </div>
        )}
      </Menu.Root>
      <main className="grid place-items-center w-screen h-screen">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
