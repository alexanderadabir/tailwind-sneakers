import { useContext } from 'react'
import AppContext from '../AppContext'
import Info from './Info'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCart({
  onRemoveItem,
  onToggleVisibilityShoppingCart,
}) {
  const { price, shoppingCart } = useContext(AppContext)

  return (
    <aside className={`fixed top-0 left-0 z-10 h-screen w-full bg-black/50`}>
      <form
        className={`absolute top-0 right-0 flex h-full w-full max-w-[400px] flex-col bg-white px-8 pt-8 transition-all`}
      >
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <button type="button" onClick={onToggleVisibilityShoppingCart}>
            <img
              width={15}
              className="rotate-45"
              src="/img/cross.svg"
              alt="Закрыть"
            />
          </button>
        </div>
        {!shoppingCart.length ? (
          <div className="flex h-full max-w-[285px] flex-col items-center justify-center">
            <Info
              img={'/img/basket.png'}
              title="Корзина пустая"
              text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              onClick={onToggleVisibilityShoppingCart}
              alt="Пустая корзина"
              titleLink="Закрыть корзину"
              to="#"
            />
          </div>
        ) : (
          <>
            <div className="flex grow flex-col gap-5">
              {shoppingCart.map((item) => (
                <ShoppingCartItem
                  {...item}
                  key={item.id}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>
            <div className="flex flex-col gap-5 py-8">
              <div className="flex items-baseline justify-between">
                <p>Итого:</p>
                <span className="relative w-1/2 border-b border-dashed"></span>
                <b>{price} ₽</b>
              </div>
              <div className="flex items-baseline justify-between">
                <p>Налог 5%:</p>
                <span className="relative w-1/2 border-b border-dashed"></span>
                <b>{Math.floor((price / 100) * 5)} ₽</b>
              </div>
              <button
                type="button"
                className="rounded-3xl bg-lime-400 py-4 font-semibold text-white duration-300 hover:bg-lime-500"
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </form>
    </aside>
  )
}
