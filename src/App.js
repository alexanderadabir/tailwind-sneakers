import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import p from './data/products'

import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'

const listProducts = p.map((item) => ({
  ...item,
  id: uuidv4(),
  addedForPurchase: false,
}))

export default function App() {
  const [products, setProducts] = useState([...listProducts])

  const [isVisibleShoppingCart, setIsVisibleShoppingCart] = useState('hidden')
  const showShoppingCartHandler = () => {
    document.body.classList.add('overflow-hidden')
    setIsVisibleShoppingCart('visible')
  }
  const hideShoppingCartHandler = () => {
    document.body.classList.remove('overflow-hidden')
    setIsVisibleShoppingCart('hidden')
  }
  const [productsCart, setProductsCart] = useState([])
  const [price, setPrice] = useState(0)

  const addProductHandler = (product) => {
    setProductsCart([...productsCart, { ...product, addedForPurchase: true }])
    setProducts(
      products.map((prod) =>
        product.id === prod.id
          ? { ...prod, addedForPurchase: true }
          : { ...prod }
      )
    )
    setPrice(price + product.price)
  }

  const deleteProductHandler = (product) => {
    setProductsCart(
      productsCart.filter((productCart) => productCart.id !== product.id)
    )
    setProducts(
      products.map((prod) =>
        product.id === prod.id
          ? { ...prod, addedForPurchase: false }
          : { ...prod }
      )
    )
    setPrice(price - product.price)
  }

  const actionProductHandler = (product) =>
    !product.addedForPurchase
      ? addProductHandler(product)
      : deleteProductHandler(product)

  return (
    <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
      <Aside
        productsCart={productsCart}
        isVisibleShoppingCart={isVisibleShoppingCart}
        hideShoppingCart={hideShoppingCartHandler}
        price={price}
        actionProduct={actionProductHandler}
      />
      <Header price={price} showShoppingCart={showShoppingCartHandler} />
      <Main products={products} actionProduct={actionProductHandler} />
    </div>
  )
}
