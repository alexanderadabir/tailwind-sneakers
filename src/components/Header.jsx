export default function Header({ price, switchVisibilityCart }) {
  return (
    <header className="border-b p-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Логотип Sneakers"
          />
          <div>
            <h2 className="text-2xl font-bold uppercase">Tailwind Sneakers</h2>
            <p className="text-sm opacity-60">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="flex items-center gap-7">
          <li>
            <button
              onClick={switchVisibilityCart}
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
          <li className="cursor-pointer">
            <a href="/" title="Закладки">
              <img width={20} src="/img/favorite.svg" alt="Закладки" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="/" title="Личный кабинет">
              <img width={20} src="/img/user.svg" alt="Пользователь" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
