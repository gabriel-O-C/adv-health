function MenuNav() {
  return (
    <nav className="flex fixed z-20 bg-slate-300 w-full justify-between items-center p-4">
      <div>
        <a className="navbar-brand" href="/">
          Nome da clínica
        </a>
      </div>
      <div>
        <img src="" alt="user photo" className="w-20 rounded-full bg-gray-300 aspect-square" />
        <span>User</span>
      </div>
    </nav>
  );
}

export default MenuNav;
