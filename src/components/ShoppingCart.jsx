import { v4 as uuid } from 'uuid'

import { useCart } from '../hooks/useCart'
import Info from './Info'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCart({
  toggleShoppingCart,
  onRemoveItem,
  onToggleVisibilityShoppingCart,
  onOrderPlaced,
  isOrderComplete,
  order,
}) {
  const { price, shoppingCart } = useCart()
  const orderNumber = order.reduce((_, obj) => ({ ...obj }), {}).id

  return (
    <aside
      className={`group fixed top-0 left-0 z-10 h-screen w-full bg-black/50 ${
        toggleShoppingCart ? 'visible' : 'invisible'
      }`}
    >
      <form
        onSubmit={(e) => onOrderPlaced(e)}
        className={`absolute top-0 -right-full flex h-full w-full max-w-[400px] flex-col bg-white px-8 pt-8 transition-all duration-300 ease-in-out group-[.visible]:right-0`}
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
          <div className="flex h-full flex-col items-center justify-center">
            <Info
              img={
                isOrderComplete ? '/img/success-order.png' : '/img/basket.png'
              }
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
              text={
                isOrderComplete
                  ? `Ваш заказ №${orderNumber} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
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
                  key={uuid()}
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
                type="submit"
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
