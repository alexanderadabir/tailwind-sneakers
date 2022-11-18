import Drawer from './Drawer'
import AsideFooter from './AsideFooter'

const Aside = ({
  isVisibleShoppingCart,
  hideShoppingCart,
  price,
  productsCart,
  actionProduct,
}) => {
  return (
    <aside
      onClick={(e) => e.target.id && hideShoppingCart()}
      id="aside"
      className={`fixed top-0 left-0 z-10 ${isVisibleShoppingCart} h-full w-full bg-black/50`}
    >
      <div className="absolute top-0 right-0 flex h-full min-w-[400px] animate-rightFromLeft flex-col bg-white px-8 pt-8">
        <h2 className="mb-7 text-2xl font-bold">Корзина</h2>

        <Drawer productsCart={productsCart} actionProduct={actionProduct} />

        <AsideFooter price={price} productsCart={productsCart} />
      </div>
    </aside>
  )
}

export default Aside
