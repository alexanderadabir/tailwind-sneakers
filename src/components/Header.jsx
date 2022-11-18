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
          <li
            onClick={showShoppingCart}
            className="flex cursor-pointer items-center"
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
          </li>
          <li className="cursor-pointer">
            <img width={20} src="/img/favorite.svg" alt="Закладки" />
          </li>
          <li className="cursor-pointer">
            <img width={20} src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
        {/* ./Header Right */}
      </div>
      {/* ./Header Container */}
    </header>
  )
}

export default Header
