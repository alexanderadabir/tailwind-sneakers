const Header = ({ showShoppingCart, price }) => {
  return (
    <header className="border-b p-10">
      {/* Header Container */}
      <div className="flex justify-between">
        {/* Header Left */}
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
        {/* ./Header Left */}

        {/* Header Right */}
        <ul className="flex items-center gap-7">
          <li>
            <button
              title="Корзина"
              className="flex cursor-pointer items-center"
              onClick={showShoppingCart}
            >
              <img
                className={`${
                  !!price ? '-translate-x-2' : 'translate-x-0'
                } transition-transform`}
                width={20}
                src="/img/cart.svg"
                alt="Корзина"
              />
              <span
                className={`relative ${
                  !!price ? 'visible animate-price' : 'hidden'
                } text-sm text-[#5C5C5C] transition-all`}
              >
                {price} ₽
              </span>
            </button>
          </li>
          <li className="cursor-pointer">
            <a href="#" title="Закладки">
              <img width={20} src="/img/favorite.svg" alt="Закладки" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#" title="Личный кабинет">
              <img width={20} src="/img/user.svg" alt="Пользователь" />
            </a>
          </li>
        </ul>
        {/* ./Header Right */}
      </div>
      {/* ./Header Container */}
    </header>
  )
}

export default Header
