import { v4 as uuid } from 'uuid'

import Card from '../components/Card'

export default function Home({
  onChangeSearchValue,
  onAddItem,
  onFavoriteItem,
  items,
  searchValue,
}) {
  return (
    <main className="p-12">
      <section>
        <div className="mb-16 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          {!!searchValue.length ? (
            <h1 className="basis-2/3 overflow-hidden whitespace-nowrap text-3xl font-bold">
              Поиск:
              <span className="ml-2 text-2xl opacity-40">
                {`'${searchValue.join(' ')}'`}
              </span>
            </h1>
          ) : (
            <h1 className="basis-2/3 overflow-hidden whitespace-nowrap text-3xl font-bold">
              Все кроссовки
            </h1>
          )}

          <div className="relative flex max-w-[200px] overflow-hidden rounded-xl border px-5 duration-1000 ease-in-out focus-within:max-w-full">
            <img width={15} src="/img/search.svg" alt="Поиск" />
            <input
              onChange={(e) => onChangeSearchValue(e.target.value.split(' '))}
              value={searchValue.join(' ')}
              className="px-2 py-3 text-sm outline-none"
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
        <div className="flex flex-col flex-wrap gap-10 sm:flex-row lg:grid lg:grid-cols-4">
          {!items.length
            ? [...Array(12)].map((_, index) => <Card key={index} isLoading />)
            : items
                .filter((item) =>
                  searchValue.every((value) =>
                    item.text.toLowerCase().includes(value.toLowerCase())
                  )
                )
                .map((item) => (
                  <Card
                    {...item}
                    key={uuid()}
                    onAddItem={onAddItem}
                    onFavoriteItem={onFavoriteItem}
                  />
                ))}
        </div>
      </section>
    </main>
  )
}
