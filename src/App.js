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
    async function fetchData() {
      try {
        const [shoppingCartRes, favoritesRes, itemsRes, orderRes] =
          await Promise.all([
            axios.get(
              'https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart'
            ),
            axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites'),
            axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/items'),
            axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/order'),
          ])

        setShoppingCart(shoppingCartRes.data)
        setFavorites(favoritesRes.data)
        setItems(itemsRes.data)
        setOrder(orderRes.data)
      } catch (error) {
        alert('Не удалось загрузить данные с сервера')
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const onChangeSearchValueHandler = (value) => setSearchValue(value)

  const onAddItemHandler = async (item) => {
    try {
      const findItem = shoppingCart.find(
        (cartItem) => cartItem.itemID === item.itemID
      )
      if (findItem) {
        setShoppingCart((prev) =>
          prev.filter((cartItem) => cartItem.itemID !== item.itemID)
        )
        await axios.delete(
          `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${findItem.id}`
        )
      } else {
        setShoppingCart((prev) => [...prev, item])
        const { data } = await axios.post(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart',
          item
        )
        setShoppingCart((prev) =>
          prev.map((cartItem) => {
            if (cartItem.itemID === data.itemID) {
              return {
                ...cartItem,
                id: data.id,
              }
            } else {
              return cartItem
            }
          })
        )
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
      console.error(error)
    }
  }

  const onOrderPlacedHandler = async (e) => {
    try {
      e.preventDefault()

      setIsOrderComplete(true)
      setTimeout(() => {
        setIsOrderComplete(false)
      }, 5000)

      const { data } = await axios.post(
        'https://637cbe8e72f3ce38eaac43cb.mockapi.io/order',
        { items: [...shoppingCart] }
      )
      setOrder([data])

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

  const onRemoveItemHandler = async (item) => {
    try {
      setShoppingCart((prev) =>
        prev.filter((cartItem) => cartItem.itemID !== item.itemID)
      )
      await axios.delete(
        `https://637cbe8e72f3ce38eaac43cb.mockapi.io/ShoppingCart/${item.id}`
      )
    } catch (error) {
      alert('Не удалось удалить заказ из корзины')
    }
  }

  const onFavoriteItemHandler = async (item) => {
    try {
      const findItem = favorites.find(
        (favItem) => favItem.itemID === item.itemID
      )
      if (findItem) {
        setFavorites((prev) =>
          prev.filter((favItem) => favItem.itemID !== item.itemID)
        )
        await axios.delete(
          `https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites/${findItem.id}`
        )
      } else {
        setFavorites((prev) => [...prev, item])
        const { data } = await axios.post(
          'https://637cbe8e72f3ce38eaac43cb.mockapi.io/favorites',
          item
        )
        setFavorites((prev) =>
          prev.map((favItem) => {
            if (favItem.itemID === data.itemID) {
              return {
                ...favItem,
                id: data.id,
              }
            } else {
              return favItem
            }
          })
        )
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
        shoppingCart,
        addedToCart,
        taggedFavorite,
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
              exact
              element={
                <Home
                  items={items}
                  onChangeSearchValue={onChangeSearchValueHandler}
                  onAddItem={onAddItemHandler}
                  onFavoriteItem={onFavoriteItemHandler}
                  searchValue={searchValue}
                />
              }
            />

            <Route
              path="/favorites"
              exact
              element={
                <Favorites
                  items={favorites}
                  onAddItem={onAddItemHandler}
                  onFavoriteItem={onFavoriteItemHandler}
                />
              }
            />

            <Route path="/orders" exact element={<Orders order={order} />} />
          </Routes>
          <ShoppingCart
            isOrderComplete={isOrderComplete}
            order={order}
            toggleShoppingCart={toggleShoppingCart}
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
