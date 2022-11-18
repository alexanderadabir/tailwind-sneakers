import Drawer from './Drawer'
import AsideFooter from './AsideFooter'
import { useState } from 'react'
import OrderMessage from './OrderMessage'
import Button from './Button'

const Aside = ({
  isVisibleShoppingCart,
  hideShoppingCart,
  price,
  productsCart,
  actionProduct,
  orderSuccess,
  changeStateOrder,
  orderState,
  orderNumber,
}) => {
  return (
    <aside
      onClick={(e) => e.target.id && hideShoppingCart()}
      id="aside"
      className={`fixed top-0 left-0 z-10 ${isVisibleShoppingCart} h-screen w-full bg-black/50`}
    >
      <form
        onSubmit={(e) => changeStateOrder(e)}
        className={`absolute top-0 right-0 flex h-full min-w-[400px] ${
          isVisibleShoppingCart === 'visible'
            ? 'animate-rightFromLeft'
            : 'animate-leftFromRight'
        } flex-col bg-white px-8 pt-8 transition-all`}
      >
        <h2 className="mb-7 text-2xl font-bold">Корзина</h2>

        {orderState ? (
          <OrderMessage
            img={'/img/success-order.png'}
            title={'Заказ оформлен'}
            titleStyles={'text-lime-500'}
            text={`Ваш заказ #${orderNumber} скоро будет передан курьерской доставке`}
          >
            <Button
              type={'button'}
              onClick={orderSuccess}
              text={'Вернуться назад'}
              direction={'left-12 rotate-180'}
            />
          </OrderMessage>
        ) : (
          <>
            <Drawer
              productsCart={productsCart}
              actionProduct={actionProduct}
              hideShoppingCart={hideShoppingCart}
            />
            <AsideFooter price={price} productsCart={productsCart} />
          </>
        )}
      </form>
    </aside>
  )
}

export default Aside
