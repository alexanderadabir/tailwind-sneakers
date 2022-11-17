const Search = () => {
  return (
    <div className="flex border rounded-xl overflow-hidden px-5">
      <img src="/img/search.svg" alt="Поиск" />

      <input
        className="px-2 py-3 outline-none text-sm max-w-[100px] focus:max-w-xs ease-linear duration-300"
        placeholder="Поиск..."
        type="text"
      />
    </div>
  )
}

export default Search
