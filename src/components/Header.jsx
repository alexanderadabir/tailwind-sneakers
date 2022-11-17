const Header = () => {
  return (
    <>
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
              <h2 className="uppercase text-2xl font-bold">
                Tailwind Sneakers
              </h2>
              <p className="text-sm opacity-60">Магазин лучших кроссовок</p>
            </div>
          </div>
          {/* ./Header Left */}

          {/* Header Right */}
          <ul className="flex gap-7 items-center">
            <li className="flex items-center cursor-pointer">
              <img
                className="mr-2"
                width={18}
                src="/img/cart.svg"
                alt="Корзина"
              />
              <span className="text-sm text-[#5C5C5C]">1205 руб.</span>
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
    </>
  )
}

export default Header
