import Card from '../components/Card'

export default function Home({
  items,
  searchValue,
  onChangeSearchValue,
  onAddItem,
  onFavoriteItem,
}) {
  return (
    <main className="px-14 py-10">
      <section>
        <div className="mb-16 flex items-center justify-between">
          {searchValue ? (
            <h1 className="basis-2/3 overflow-hidden whitespace-nowrap text-3xl font-bold">
              Поиск:{' '}
              <span className="text-2xl opacity-30">'{searchValue}'</span>
            </h1>
          ) : (
            <h1 className="text-3xl font-bold">Все кроссовки</h1>
          )}

          <div className="relative flex overflow-hidden rounded-xl border px-5">
            <img src="/img/search.svg" alt="Поиск" />
            <input
              onChange={(e) => onChangeSearchValue(e.target.value)}
              value={searchValue}
              className="max-w-[100px] px-2 py-3 text-sm outline-none duration-300 ease-linear focus:max-w-xs"
              placeholder="Поиск..."
              type="text"
            />
            {searchValue && (
              <div className="group absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-2">
                <img
                  className="w-3 rotate-45 transition-transform group-hover:scale-150"
                  src="/img/cross.svg"
                  alt="Очистить"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          {items
            .filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                {...item}
                key={item.id}
                onAddItem={onAddItem}
                onFavoriteItem={onFavoriteItem}
              />
            ))}
        </div>
      </section>
    </main>
  )
}
