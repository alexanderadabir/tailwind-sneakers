import DrawerItem from './DrawerItem'
import Button from './Button'

const Drawer = ({ productsCart, actionProduct }) => {
  return (
    <div className="flex grow flex-col gap-5 overflow-y-auto">
      {!productsCart.length && (
        <div className="flex h-full flex-col items-center justify-center">
          <img
            className="mb-5"
            width={120}
            height={120}
            src="/img/basket.png"
            alt="Корзина"
          />
          <h3 className="mb-2 text-2xl font-semibold">Корзина пустая</h3>
          <p className="mb-10 max-w-[285px] text-center opacity-40">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
          <Button text={'Вернуться назад'} direction={'left-12 rotate-180'} />
        </div>
      )}
      {productsCart.map((product) => (
        <DrawerItem
          {...product}
          key={product.id}
          actionProduct={actionProduct}
        />
      ))}
    </div>
  )
}

export default Drawer
