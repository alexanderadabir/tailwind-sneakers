import { Link } from 'react-router-dom'

export default function Header({ price, onToggleVisibilityShoppingCart }) {
  return (
    <header className="border-b p-10">
      <div className="flex justify-between">
        <Link to="/" title="На главную">
          <div className="flex items-center gap-3">
            <img
              width={40}
              height={40}
              src="/img/logo.png"
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
                className="mr-2"
                width={20}
                src="/img/cart.svg"
                alt="Корзина"
              />
              <span>{price} ₽</span>
            </button>
          </li>
          <li>
            <Link to="/favorites" title="Закладки">
              <img width={20} src="/img/favorite.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <Link to="/users" title="Личный кабинет">
              <img width={20} src="/img/user.svg" alt="Личный кабинет" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
