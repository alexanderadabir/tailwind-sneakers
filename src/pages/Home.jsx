import { useContext } from 'react'
import AppContext from '../AppContext'
import Card from '../components/Card'

export default function Home({
  onChangeSearchValue,
  onAddItem,
  onFavoriteItem,
}) {
  const { items, searchValue } = useContext(AppContext)

  return (
    <main className="px-14 py-10">
      <section>
        <div className="mb-16 flex items-center justify-between">
          {!!searchValue.length ? (
            <h1 className="basis-2/3 overflow-hidden whitespace-nowrap text-3xl font-bold">
              Поиск:
              <span className="ml-2 text-2xl opacity-40">
                {searchValue.join(' ')}
              </span>
            </h1>
          ) : (
            <h1 className="basis-2/3 overflow-hidden whitespace-nowrap text-3xl font-bold">
              Все кроссовки
            </h1>
          )}

          <div className="relative flex overflow-hidden rounded-xl border px-5">
            <img src="/img/search.svg" alt="Поиск" />
            <input
              onChange={(e) => onChangeSearchValue(e.target.value.split(' '))}
              value={searchValue.join(' ')}
              className="max-w-[100px] px-2 py-3 text-sm outline-none duration-300 ease-linear focus:max-w-xs"
              placeholder="Поиск..."
              type="text"
            />
            {searchValue && (
              <div
                onClick={() => onChangeSearchValue([])}
                className="group absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-2"
              >
                <img
                  className="w-3 rotate-45 transition-transform group-hover:scale-150"
                  src="/img/cross.svg"
                  alt="Очистить"
                />
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {!items.length
            ? [...Array(12)].map((item, index) => (
                <Card key={index} isLoading />
              ))
            : items
                .filter((item) =>
                  searchValue.every((value) =>
                    item.text.toLowerCase().includes(value.toLowerCase())
                  )
                )
                .map((item) => (
                  <Card
                    {...item}
                    key={item.itemID}
                    onAddItem={onAddItem}
                    onFavoriteItem={onFavoriteItem}
                  />
                ))}
        </div>
      </section>
    </main>
  )
}
