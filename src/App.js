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

  const [searchValue, setSearchValue] = useState('')

  const searchChangeHandler = (value) => {
    setSearchValue(value)
    const searchValues = value.toLowerCase().split(' ')
    const searchProduct = listProducts.filter((product) =>
      searchValues.every((value) => product.text.toLowerCase().includes(value))
    )
    setProducts([...searchProduct])
  }

  const [isVisibleShoppingCart, setIsVisibleShoppingCart] =
    useState('invisible')

  const showShoppingCartHandler = () => {
    setIsVisibleShoppingCart('visible')
  }

  const hideShoppingCartHandler = () => {
    setIsVisibleShoppingCart('invisible')
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

  const [lastOrders, setLastOrders] = useState(...products)

  const actionProductHandler = (product) =>
    !product.addedForPurchase
      ? addProductHandler(product)
      : deleteProductHandler(product)

  const orderSuccessHandler = () => {
    setProducts([...listProducts])
    setIsVisibleShoppingCart('invisible')
    setProductsCart([])
    setPrice(0)
    setOrderState(false)
  }

  const [orderState, setOrderState] = useState(false)

  const changeStateOrderHanlder = (e) => {
    e.preventDefault()
    setOrderState(true)
  }

  return (
    <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
      <Aside
        productsCart={productsCart}
        isVisibleShoppingCart={isVisibleShoppingCart}
        hideShoppingCart={hideShoppingCartHandler}
        price={price}
        actionProduct={actionProductHandler}
        orderSuccess={orderSuccessHandler}
        changeStateOrder={changeStateOrderHanlder}
        orderState={orderState}
      />
      <Header price={price} showShoppingCart={showShoppingCartHandler} />
      <Main
        searchValue={searchValue}
        products={products}
        actionProduct={actionProductHandler}
        searchChange={searchChangeHandler}
      />
    </div>
  )
}
