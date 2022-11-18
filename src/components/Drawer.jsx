import DrawerItem from './DrawerItem'
import OrderMessage from './OrderMessage'
import Button from './Button'

const Drawer = ({ productsCart, actionProduct, hideShoppingCart }) => {
  return (
    <div className="flex grow flex-col gap-5">
      {!productsCart.length && (
        <OrderMessage
          title={'Корзина пустая'}
          text={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          img={'/img/basket.png'}
          hideShoppingCart={hideShoppingCart}
        >
          <Button
            type={'button'}
            onClick={hideShoppingCart}
            text={'Вернуться назад'}
            direction={'left-12 rotate-180'}
          />
        </OrderMessage>
      )}
      {productsCart.map(
        (product, index) =>
          index < 5 && (
            <DrawerItem
              {...product}
              key={product.id}
              actionProduct={actionProduct}
            />
          )
      )}
    </div>
  )
}

export default Drawer
