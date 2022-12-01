import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart2, BsBasket } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiRuble } from 'react-icons/bi'

import { useCart } from '../hooks/useCart'

export default function Header({ onToggleVisibilityShoppingCart }) {
  const { price } = useCart()

  const [color, setColor] = useState('bg-white rounded-t-3xl')

  useEffect(() => {
    window.addEventListener('scroll', onChangeHeaderColor)
    return () => window.removeEventListener('scroll', onChangeHeaderColor)
  }, [])

  function onChangeHeaderColor(event) {
    if (window.scrollY > 50) {
      setColor('bg-[#bbe2f0]')
    } else {
      setColor('bg-white rounded-t-3xl')
    }
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-10 rounded-b-3xl border-b shadow-md shadow-[#e7f6ff] transition-colors duration-500 ${color} p-10`}
    >
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link className="group" to="/" title="На главную">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <img
              className="hidden transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] sm:block"
              src="img/logo.png"
              alt="Интернет-магазин Sneakers"
            />

            <div>
              <h2 className="text-2xl font-bold uppercase">
                Tailwind Sneakers
              </h2>
              <p className="text-sm opacity-60">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <button
            onClick={onToggleVisibilityShoppingCart}
            title="Корзина"
            className="flex cursor-pointer items-center text-xl hover:text-[#fe6d48]"
          >
            <BsCart2
              className={`${
                !!price && '-translate-x-2'
              } opacity-40 transition-transform duration-300 hover:scale-150 active:scale-150`}
            />
            <span
              className={`${
                !!price
                  ? 'visible relative translate-x-0'
                  : 'invisible absolute translate-x-5'
              } flex items-center text-sm transition-transform duration-500 ease-out`}
            >
              {price} <BiRuble className="inline-block text-sm opacity-50" />
            </span>
          </button>
          <Link
            className="text-xl hover:text-[#fe6d48]"
            to="/favorites"
            title="Закладки"
          >
            <AiOutlineHeart className="opacity-40 duration-300 hover:scale-150 active:scale-150" />
          </Link>
          <Link
            className="text-xl hover:text-[#fe6d48]"
            to="/orders"
            title="Заказы"
          >
            <BsBasket className="opacity-40 duration-300 hover:scale-150 active:scale-150" />
          </Link>
        </div>
      </div>
    </header>
  )
}
