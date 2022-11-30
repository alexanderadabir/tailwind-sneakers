import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function Header({ onToggleVisibilityShoppingCart }) {
  const { price } = useCart()

  return (
    <header className="border-b p-10">
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
        <ul className="flex items-center gap-7">
          <li>
            <button
              onClick={onToggleVisibilityShoppingCart}
              title="Корзина"
              className="flex cursor-pointer items-center"
            >
              <img
                className={`${
                  !!price && '-translate-x-2'
                } transition-transform`}
                width={20}
                src="img/cart.svg"
                alt="Корзина"
              />
              <span
                className={`${
                  !!price
                    ? 'visible relative translate-x-0'
                    : 'invisible absolute translate-x-5'
                } text-sm transition-transform duration-500 ease-out`}
              >
                {price} ₽
              </span>
            </button>
          </li>
          <li>
            <Link to="/favorites" title="Закладки">
              <img width={20} src="img/favorite.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <Link to="/orders" title="Заказы">
              <img width={20} src="img/user.svg" alt="Заказы" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
