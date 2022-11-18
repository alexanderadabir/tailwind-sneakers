const Aside = () => {
  return (
    <aside className="absolute top-0 left-0 z-10 hidden h-screen w-full bg-black/50">
      {/* Aside Container */}
      <div className="absolute right-0 top-0 flex h-full min-w-[400px] flex-col bg-white px-8 pt-8">
        <h2 className="mb-7 text-2xl font-bold">Корзина</h2>

        {/* BuyItemsContainer */}
        <div className="flex grow flex-col gap-5 overflow-y-auto">
          {/* BuyItem */}
          <div className="flex items-center gap-5 rounded-2xl border p-5">
            <div
              style={{
                background:
                  'url(/img/sneakers/1.jpg) no-repeat center /contain',
              }}
              className="h-[70px] w-full max-w-[70px]"
            ></div>

            <div className="max-w-[150px] text-sm">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>

            <button className="opacity-50 duration-300 ease-linear hover:opacity-100">
              <img src="/img/btn-remove.svg" alt="Удалить" />
            </button>
          </div>
          {/* ./BuyItem */}

          {/* BuyItem */}
          <div className="flex items-center gap-5 rounded-2xl border p-5">
            <div
              style={{
                background:
                  'url(/img/sneakers/2.jpg) no-repeat center /contain',
              }}
              className="h-[70px] w-full max-w-[70px]"
            ></div>

            <div className="max-w-[150px] text-sm">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 999 руб.</b>
            </div>

            <button className="opacity-50 duration-300 ease-linear hover:opacity-100">
              <img src="/img/btn-remove.svg" alt="Удалить" />
            </button>
          </div>
          {/* ./BuyItem */}
        </div>
        {/* ./BuyItemsContainer */}

        {/* Aside Footer */}
        <div className="flex flex-col gap-5 py-8">
          <div className="flex items-baseline justify-between">
            <p>Итого:</p>
            <span className="relative w-1/2 border-b border-dashed"></span>
            <b>21 498 руб. </b>
          </div>
          <div className="flex items-baseline justify-between">
            <p>Налог 5%:</p>
            <span className="relative w-1/2 border-b border-dashed"></span>
            <b>1074 руб.</b>
          </div>
          <button className="relative flex h-14 w-full items-center justify-center rounded-3xl bg-lime-500 font-medium text-white transition-colors duration-300 ease-linear hover:bg-lime-400 active:bg-lime-600">
            Оформить заказ
            <img
              className="absolute right-5 animate-bounce"
              src="/img/arrow.svg"
              alt="Arrow right"
            />
          </button>
        </div>
        {/* ./Aside Footer */}
      </div>
      {/* ./Aside Container */}
    </aside>
  )
}

export default Aside
