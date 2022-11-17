export default function App() {
  return (
    <div className="container mx-auto max-w-[1080px] bg-white rounded-3xl">
      {/* Aside */}
      <aside className="bg-black/50 w-full h-full absolute top-0 left-0 z-10">
        {/* Aside Container */}
        <div className="bg-white w-[400px] h-full p-8 absolute right-0 top-0 flex flex-col justify-between">
          {/* Asider Header */}
          <div>
            <h2 className="text-2xl font-bold mb-7">Корзина</h2>

            {/* BuyItemsContainer */}
            <div className="flex flex-col gap-5">
              {/* BuyItem */}
              <div className="flex items-center gap-5 p-5 border rounded-2xl">
                <div
                  style={{
                    background:
                      'url(/img/sneakers/1.jpg) no-repeat center /contain',
                  }}
                  className="max-w-[70px] w-full h-[70px]"
                ></div>

                <div className="text-sm max-w-[150px]">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>

                <button className="opacity-50 hover:opacity-100 ease-linear duration-300">
                  <img src="/img/btn-remove.svg" alt="Удалить" />
                </button>
              </div>
              {/* ./BuyItem */}

              {/* BuyItem */}
              <div className="flex items-center gap-5 p-5 border rounded-2xl">
                <div
                  style={{
                    background:
                      'url(/img/sneakers/2.jpg) no-repeat center /contain',
                  }}
                  className="max-w-[70px] w-full h-[70px]"
                ></div>

                <div className="text-sm max-w-[150px]">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>8 999 руб.</b>
                </div>

                <button className="opacity-50 hover:opacity-100 ease-linear duration-300">
                  <img src="/img/btn-remove.svg" alt="Удалить" />
                </button>
              </div>
              {/* ./BuyItem */}
            </div>
            {/* ./BuyItemsContainer */}
          </div>
          {/* ./Aside Header */}

          {/* Aside Footer */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-baseline">
              <p>Итого:</p>
              <span className="border-b border-dashed w-1/2 relative"></span>
              <b>21 498 руб. </b>
            </div>
            <div className="flex justify-between items-baseline">
              <p>Налог 5%:</p>
              <span className="border-b border-dashed w-1/2 relative"></span>
              <b>1074 руб.</b>
            </div>
            <button className="w-full h-14 rounded-3xl bg-lime-500 hover:bg-lime-700 transition-colors ease-linear duration-300 text-white">
              Оформить заказ
            </button>
          </div>
          {/* ./Aside Footer */}
        </div>
        {/* ./Aside Container */}
      </aside>
      {/* ./Aside */}

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

      <main className="px-14 py-10">
        <section>
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <h1 className="font-bold text-3xl">Все кроссовки</h1>

            <div className="flex border rounded-xl overflow-hidden px-5">
              <img src="/img/search.svg" alt="Поиск" />

              <input
                className="px-2 py-3 outline-none text-sm max-w-[100px] focus:max-w-xs ease-linear duration-300"
                placeholder="Поиск..."
                type="text"
              />
            </div>
          </div>
          {/* ./Section Header */}

          {/* Cards Wrapper */}
          <div className="flex justify-between gap-10">
            {/* Card */}
            <div className="max-w-[210px] border border-[#F3F3F3] hover:border-[#F8F8F8] hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-3xl py-5 px-7">
              <button>
                <img src="/img/favorite-unlike.svg" alt="Unlike" />
              </button>
              <img className="mb-3" src="/img/sneakers/1.jpg" alt="Кроссовки" />

              <p className="text-sm mb-3">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>

              <div className="flex justify-between">
                <div>
                  <h5 className="text-xs uppercase opacity-50">Цена:</h5>
                  <b className="text-sm">12 999 руб.</b>
                </div>

                <button>
                  <img src="/img/btn-plus.svg" alt="Добавить" />
                </button>
              </div>
            </div>
            {/* ./Card */}

            {/* Card */}
            <div className="max-w-[210px] border border-[#F3F3F3] hover:border-[#F8F8F8] hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-3xl py-5 px-7">
              <button>
                <img src="/img/favorite-unlike.svg" alt="Unlike" />
              </button>
              <img className="mb-3" src="/img/sneakers/2.jpg" alt="Кроссовки" />

              <p className="text-sm mb-3">Мужские Кроссовки Nike Air Max 270</p>

              <div className="flex justify-between">
                <div>
                  <h5 className="text-xs uppercase opacity-50">Цена:</h5>
                  <b className="text-sm">12 999 руб.</b>
                </div>

                <button>
                  <img src="/img/btn-plus.svg" alt="Добавить" />
                </button>
              </div>
            </div>
            {/* ./Card */}

            {/* Card */}
            <div className="max-w-[210px] border border-[#F3F3F3] hover:border-[#F8F8F8] hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-3xl py-5 px-7">
              <button>
                <img src="/img/favorite-unlike.svg" alt="Unlike" />
              </button>
              <img className="mb-3" src="/img/sneakers/3.jpg" alt="Кроссовки" />

              <p className="text-sm mb-3">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>

              <div className="flex justify-between">
                <div>
                  <h5 className="text-xs uppercase opacity-50">Цена:</h5>
                  <b className="text-sm">8 499 руб.</b>
                </div>

                <button>
                  <img src="/img/btn-plus.svg" alt="Добавить" />
                </button>
              </div>
            </div>
            {/* ./Card */}

            {/* Card */}
            <div className="max-w-[210px] border border-[#F3F3F3] hover:border-[#F8F8F8] hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-3xl py-5 px-7">
              <button>
                <img src="/img/favorite-unlike.svg" alt="Unlike" />
              </button>
              <img className="mb-3" src="/img/sneakers/4.jpg" alt="Кроссовки" />

              <p className="text-sm mb-3">
                Кроссовки Puma X Aka Boku Future Rider
              </p>

              <div className="flex justify-between">
                <div>
                  <h5 className="text-xs uppercase opacity-50">Цена:</h5>
                  <b className="text-sm">8 999 руб.</b>
                </div>

                <button>
                  <img src="/img/btn-plus.svg" alt="Добавить" />
                </button>
              </div>
            </div>
            {/* ./Card */}
          </div>
          {/* ./Cards Wrapper */}
        </section>
      </main>
    </div>
  )
}
