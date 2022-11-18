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
      className={`fixed top-0 left-0 z-10 ${isVisibleShoppingCart} h-screen w-full bg-black/50`}
    >
      <div
        className={`absolute top-0 right-0 flex h-full min-w-[420px] ${
          isVisibleShoppingCart === 'visible'
            ? 'animate-rightFromLeft'
            : 'animate-leftFromRight'
        } flex-col bg-white px-8 pt-8 transition-all`}
      >
        <h2 className="mb-7 text-2xl font-bold">Корзина</h2>

        <Drawer
          productsCart={productsCart}
          actionProduct={actionProduct}
          hideShoppingCart={hideShoppingCart}
        />

        <AsideFooter price={price} productsCart={productsCart} />
      </div>
    </aside>
  )
}

export default Aside
