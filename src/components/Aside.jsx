import Drawer from './Drawer'
import AsideFooter from './AsideFooter'

const Aside = ({
  isVisibleShoppingCart,
  hideShoppingCart,
  price,
  productsCart,
  actionProduct,
}) => {
  console.log(isVisibleShoppingCart)

  return (
    <aside
      onClick={(e) => e.target.id && hideShoppingCart()}
      id="aside"
      className={`fixed top-0 left-0 z-10 ${isVisibleShoppingCart} h-full w-full bg-black/50`}
    >
      <div
        className={`linear absolute top-0 flex h-full min-w-[420px] flex-col bg-white px-8 pt-8 transition-transform duration-300 ${
          isVisibleShoppingCart === 'hidden'
            ? '-right-full hidden'
            : 'visible right-0'
        }`}
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
