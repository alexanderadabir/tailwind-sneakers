import Drawer from './Drawer'
import AsideFooter from './AsideFooter'

const Aside = () => {
  return (
    <aside className="absolute top-0 left-0 z-10 hidden h-screen w-full bg-black/50">
      <div className="absolute right-0 top-0 flex h-full min-w-[400px] flex-col bg-white px-8 pt-8">
        <h2 className="mb-7 text-2xl font-bold">Корзина</h2>

        <Drawer />

        <AsideFooter />
      </div>
    </aside>
  )
}

export default Aside
