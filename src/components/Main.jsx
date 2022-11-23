import Cards from './Cards'
import Search from './Search'

const Main = ({
  products,
  actionProduct,
  searchValue,
  searchChange,
  searchClear,
}) => {
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

          <Search
            searchValue={searchValue}
            searchChange={searchChange}
            searchClear={searchClear}
          />
        </div>
        <Cards products={products} actionProduct={actionProduct} />
      </section>
    </main>
  )
}

export default Main
