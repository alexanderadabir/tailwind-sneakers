import Cards from './Cards'
import Search from './Search'

const Main = () => {
  return (
    <>
      <main className="px-14 py-10">
        <section>
          <div className="flex justify-between items-center mb-16">
            <h1 className="font-bold text-3xl">Все кроссовки</h1>
            <Search />
          </div>
          <Cards />
        </section>
      </main>
    </>
  )
}

export default Main
