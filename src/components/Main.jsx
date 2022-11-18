import Cards from './Cards'
import Search from './Search'

const Main = () => {
  return (
    <main className="px-14 py-10">
      <section>
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Все кроссовки</h1>
          <Search />
        </div>
        <Cards />
      </section>
    </main>
  )
}

export default Main
