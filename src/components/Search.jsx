const Search = ({ searchValue, searchChange, searchClear }) => {
  return (
    <div className="flex overflow-hidden rounded-xl border px-5 relative">
      <img src="/img/search.svg" alt="Поиск" />
      <input
        onChange={(e) => searchChange(e.target.value)}
        value={searchValue}
        className="max-w-[100px] px-2 py-3 text-sm outline-none duration-300 ease-linear focus:max-w-xs"
        placeholder="Поиск..."
        type="text"
      />
      {
        searchValue && <div onClick={searchClear} className="absolute right-2 top-1/2 group -translate-y-1/2 cursor-pointer p-2">
          <img className="w-3 rotate-45 group-hover:scale-150 transition-transform" src="/img/cross.svg" alt="Очистить" />
        </div>
      }
    </div>
  );
};

export default Search;
