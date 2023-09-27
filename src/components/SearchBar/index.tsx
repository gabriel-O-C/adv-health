import searchIcon from "../../assets/search.svg";
export function SearchBar() {
  return (
    <form className="mb-4" >
      <fieldset className="flex flex-col relative">
        <input
          type="text"
          placeholder="Busca..."
          className="bg-slate-200 rounded p-1"
          id="search"
          role="search"
          name="search"
        />
        <img
          src={searchIcon}
          alt="ícone de busca"
          className="cursor-pointer w-6 h-6 absolute right-1 top-1"
        />
      </fieldset>
    </form>
  );
}
