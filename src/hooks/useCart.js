import { useContext } from 'react'
import AppContext from '../AppContext'

export const useCart = () => {
  const { shoppingCart, isOrderComplete } = useContext(AppContext)
  const price = shoppingCart.reduce(
    (sum, cartItem) => (sum += cartItem.price),
    0
  )
  return { price, shoppingCart, isOrderComplete }
}
