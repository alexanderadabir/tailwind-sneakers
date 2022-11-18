const Search = () => {
  return (
    <div className="flex overflow-hidden rounded-xl border px-5">
      <img src="/img/search.svg" alt="Поиск" />

      <input
        className="max-w-[100px] px-2 py-3 text-sm outline-none duration-300 ease-linear focus:max-w-xs"
        placeholder="Поиск..."
        type="text"
      />
    </div>
  )
}

export default Search
