import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import AppContext from './AppContext'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

import Header from './components/Header'
import ShoppingCart from './components/ShoppingCart'

export default function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState([])
  const [price, setPrice] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const shoppingCartRes = await axios.get(
        'https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart'
      )
      const favoritesRes = await axios.get(
        'https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites'
      )
      const itemsRes = await axios.get(
        'https://637cbe8e72f3ce38eaac43cb.mockapi.io/items'
      )
      setShoppingCart(shoppingCartRes.data)
      setFavorites(favoritesRes.data)
      setItems(itemsRes.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setPrice(shoppingCart.reduce((sum, cartItem) => (sum += cartItem.price), 0))
  }, [shoppingCart])

  const onChangeSearchValueHandler = (value) => setSearchValue(value)

  const onAddItemHandler = async (item) => {
    try {
      if (shoppingCart.find((cartItem) => cartItem.itemID === item.itemID)) {
        for (let i = 0; i < shoppingCart.length; i++) {
          if (shoppingCart[i].itemID === item.itemID) {
            axios.delete(
              `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${shoppingCart[i].id}`
            )
            break
          }
        }

        setShoppingCart((prev) =>
          prev.filter((cartItem) => cartItem.itemID !== item.itemID)
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
      prev.filter((cartItem) => cartItem.itemID !== item.itemID)
    )
  }

  const onFavoriteItemHandler = async (item) => {
    try {
      if (favorites.find((favItem) => favItem.itemID === item.itemID)) {
        for (let i = 0; i < favorites.length; i++) {
          if (favorites[i].itemID === item.itemID) {
            axios.delete(
              `https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites/${favorites[i].id}`
            )
            break
          }
        }

        setFavorites((prev) =>
          prev.filter((favItem) => favItem.itemID !== item.itemID)
        )
      } else {
        const { data } = await axios.post(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites',
          item
        )
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }

  const onToggleVisibilityShoppingCartHandler = () =>
    setToggleShoppingCart((prev) => !prev)

  const addedToCart = (id) => {
    return shoppingCart.some((cartItem) => cartItem.itemID === id)
  }

  const taggedFavorite = (id) => {
    return favorites.some((favItem) => favItem.itemID === id)
  }

  return (
    <AppContext.Provider
      value={{
        favorites,
        price,
        items,
        shoppingCart,
        searchValue,
        addedToCart,
        taggedFavorite,
      }}
    >
      <div className="App">
        <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
          <Header
            onToggleVisibilityShoppingCart={
              onToggleVisibilityShoppingCartHandler
            }
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onChangeSearchValue={onChangeSearchValueHandler}
                  onAddItem={onAddItemHandler}
                  onFavoriteItem={onFavoriteItemHandler}
                />
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  onAddItem={onAddItemHandler}
                  onFavoriteItem={onFavoriteItemHandler}
                />
              }
            />

            <Route path="/orders" element={<Orders />} />
          </Routes>

          {toggleShoppingCart && (
            <ShoppingCart
              onRemoveItem={onRemoveItemHandler}
              onToggleVisibilityShoppingCart={
                onToggleVisibilityShoppingCartHandler
              }
            />
          )}
        </div>
      </div>
    </AppContext.Provider>
  )
}
