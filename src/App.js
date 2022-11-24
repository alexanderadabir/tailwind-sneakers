import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'

export default function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [price, setPrice] = useState(0)
  const [productsCart, setProductsCart] = useState([])
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [toggleCart, setToggleCart] = useState(false)

  useEffect(() => {
    axios
      .get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
        setIsLoadingPage(false)
      })

    axios
      .get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/cart')
      .then((res) => setProductsCart(res.data))
  }, [])

  useEffect(() => {
    setPrice(productsCart.reduce((sum, product) => (sum += product.price), 0))
  }, [productsCart])

  const searchChangeHandler = (value) => setSearchValue(value)

  const addProductHandler = (item) => {
    axios.post('https://637cbe8e72f3ce38eaac43cb.mockapi.io/cart', item)
    setProductsCart([...productsCart, item])
  }

  const deleteProductHandler = (item) => {
    axios.delete(`https://637cbe8e72f3ce38eaac43cb.mockapi.io/cart/${item.id}`)
    setProductsCart(productsCart.filter((product) => product.id !== item.id))
  }

  const switchVisibilityCartHandler = () => {
    setToggleCart((prev) => !prev)
  }

  return (
    <div className="App">
      <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
        <Header
          price={price}
          switchVisibilityCart={switchVisibilityCartHandler}
        />

        <Main
          items={items}
          searchChange={searchChangeHandler}
          searchValue={searchValue}
          isLoadingPage={isLoadingPage}
          addProduct={addProductHandler}
          deleteProduct={deleteProductHandler}
        />

        {toggleCart && (
          <Aside
            productsCart={productsCart}
            price={price}
            deleteProduct={deleteProductHandler}
          />
        )}
      </div>
    </div>
  )
}
