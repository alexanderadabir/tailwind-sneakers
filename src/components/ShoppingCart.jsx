import Button from './Button'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCart({
  price,
  shoppingCart,
  onRemoveItem,
  onToggleVisibilityShoppingCart,
}) {
  return (
    <aside className={`fixed top-0 left-0 z-10 h-screen w-full bg-black/50`}>
      <form
        className={`absolute top-0 right-0 flex h-full min-w-[400px] flex-col bg-white px-8 pt-8 transition-all`}
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
            <span className="relative w-1/2 border-dashed file:border-b"></span>
            <b>{Math.floor((price / 100) * 5)} ₽</b>
          </div>
          <Button
            text={'Оформить заказ'}
            direction={'right-5'}
            animation={'animate-arrow'}
            type={'submit'}
          />
        </div>
      </form>
    </aside>
  )
}
