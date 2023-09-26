function App() {
  return (
    <>
      <header className="flex flex-col">
        <nav className="fixed flex  bg-slate-300 w-full justify-between items-center p-4">
          <div>
            <a className="navbar-brand" href="#">
              Nome da clínica
            </a>
          </div>
          <div>
            <img src="" alt="foto do médico" />
            <span>Nome do médico</span>
          </div>
        </nav>
        <aside
          className="h-screen z-10 bg-slate-300 border-t border-t-slate-500 fixed w-32 mt-[95px]"
          role="menu"
        >
          <div className="flex items-end w-full ml-[80%] p-2 text-2xl cursor-pointer">
            {">"}
          </div>
          <div className="gap-4 flex flex-col w-full items-center [&>*]:aspect-square [&>*]:w-10 [&>*]:bg-gray-500">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </aside>
      </header>
    </>
  );
}

export default App;
