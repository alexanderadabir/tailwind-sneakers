import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Home from './pages/Home'
import Favorites from './pages/Favorites'

import Header from './components/Header'
import ShoppingCart from './components/ShoppingCart'

export default function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [price, setPrice] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false)

  useEffect(() => {
    axios
      .get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })

    axios
      .get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart')
      .then((res) => setShoppingCart(res.data))

    axios
      .get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites')
      .then((res) => setFavorites(res.data))
  }, [])

  useEffect(() => {
    setPrice(shoppingCart.reduce((sum, cartItem) => (sum += cartItem.price), 0))
  }, [shoppingCart])

  const onChangeSearchValueHandler = (value) => setSearchValue(value)

  const onAddItemHandler = async (item) => {
    try {
      if (shoppingCart.find((cartItem) => cartItem.id === item.id)) {
        axios.delete(
          `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${item.id}`
        )
        setShoppingCart((prev) =>
          prev.filter((cartItem) => cartItem.id !== item.id)
        )
      } else {
        const { data } = await axios.post(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart',
          item
        )
        setShoppingCart((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }

  const onRemoveItemHandler = (item) => {
    axios.delete(
      `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${item.id}`
    )
    setShoppingCart((prev) =>
      prev.filter((cartItem) => cartItem.id !== item.id)
    )
  }

  const onFavoriteItemHandler = async (item) => {
    try {
      if (favorites.find((favItem) => favItem.id === item.id)) {
        axios.delete(
          `https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites/${item.id}`
        )
        setFavorites((prev) => prev.filter((favItem) => favItem.id !== item.id))
      } else {
        const { data } = await axios.post(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites',
          item
        )
        console.log(data)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }

  const onToggleVisibilityShoppingCartHandler = () =>
    setToggleShoppingCart((prev) => !prev)

  return (
    <div className="App">
      <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
        <Header
          price={price}
          onToggleVisibilityShoppingCart={onToggleVisibilityShoppingCartHandler}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                onChangeSearchValue={onChangeSearchValueHandler}
                searchValue={searchValue}
                onAddItem={onAddItemHandler}
                onFavoriteItem={onFavoriteItemHandler}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                items={favorites}
                onAddItem={onAddItemHandler}
                onFavoriteItem={onFavoriteItemHandler}
              />
            }
          />
        </Routes>

        {toggleShoppingCart && (
          <ShoppingCart
            shoppingCart={shoppingCart}
            price={price}
            onRemoveItem={onRemoveItemHandler}
            onToggleVisibilityShoppingCart={
              onToggleVisibilityShoppingCartHandler
            }
          />
        )}
      </div>
    </div>
  )
}
