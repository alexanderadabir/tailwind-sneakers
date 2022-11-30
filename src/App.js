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
  const [shoppingCart, setShoppingCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false)
  const [order, setOrder] = useState([])
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  useEffect(() => {
    try {
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
        const orderRes = await axios.get(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/order'
        )
        setShoppingCart(shoppingCartRes.data)
        setFavorites(favoritesRes.data)
        setItems(itemsRes.data)
        setOrder(orderRes.data)
      }
      fetchData()
    } catch (error) {
      alert('Не удалось получить данные с сервера')
      console.error(error)
    }
  }, [])

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
      console.error(error)
    }
  }

  const onOrderPlacedHandler = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(
        'https://637cbe8e72f3ce38eaac43cb.mockapi.io/order',
        { items: [...shoppingCart] }
      )

      setOrder([data])
      setIsOrderComplete(true)
      setTimeout(() => {
        setIsOrderComplete(false)
      }, 5000)

      for (let i = 0; i < shoppingCart.length; i++) {
        await axios.delete(
          `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${shoppingCart[i].id}`
        )
      }
      setShoppingCart([])
    } catch (error) {
      alert('Не удалось сделать заказ')
      console.error(error)
    }
  }

  const onRemoveItemHandler = (item) => {
    try {
      axios.delete(
        `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${item.id}`
      )
      setShoppingCart((prev) =>
        prev.filter((cartItem) => cartItem.itemID !== item.itemID)
      )
    } catch (error) {
      alert('Не удалось удалить заказ из корзины')
    }
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
      console.error(error)
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
        items,
        shoppingCart,
        searchValue,
        addedToCart,
        taggedFavorite,
        isOrderComplete,
        order,
        toggleShoppingCart,
      }}
    >
      <div className="App xl:p-20">
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

            <Route
              path="/orders"
              element={
                <Orders
                  onAddItem={onAddItemHandler}
                  onFavoriteItem={onFavoriteItemHandler}
                />
              }
            />
          </Routes>
          <ShoppingCart
            onRemoveItem={onRemoveItemHandler}
            onToggleVisibilityShoppingCart={
              onToggleVisibilityShoppingCartHandler
            }
            onOrderPlaced={onOrderPlacedHandler}
          />
        </div>
      </div>
    </AppContext.Provider>
  )
}
