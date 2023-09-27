import { Link, useLocation } from 'react-router-dom';
interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function MenuAside({ isOpen, toggle }: Props) {
  const location = useLocation()
  return (
    <aside
      className={
        isOpen
          ? `h-screen z-10 bg-slate-300 fixed w-24`
          : "hidden"
      }
      role="menu"
    >
      <div
        className="mt-[205px] px-8 mb-8 w-full flex justify-end items-start cursor-pointer"
        onClick={toggle}
        title="toggle sidebar"
      >
        <svg
          className="w-8 aspect-square"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </div>

      <div className="gap-4 flex flex-col w-full items-center [&>*]:aspect-square [&>*]:w-10 [&>*]:cursor-pointer">
        <Link to={"/"} title="Home" className={location.pathname == '/' ? 'bg-gray-100' : 'bg-gray-500'} />
        <Link to={"/consulta"} title="Home" className={location.pathname == '/consulta' ? 'bg-gray-100' : 'bg-gray-500'} />
        <Link to={"/agendamentos"} title="Home" className={location.pathname == '/agendamentos' ? 'bg-gray-100' : 'bg-gray-500'} />
      </div>
    </aside>
  );
}

export default MenuAside;
