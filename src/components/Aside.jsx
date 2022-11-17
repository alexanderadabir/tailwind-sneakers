const Aside = () => {
  return (
    <>
      {/* Aside */}
      <aside className="bg-black/50 w-full h-screen absolute top-0 left-0 z-10">
        {/* Aside Container */}
        <div className="bg-white w-[400px] h-full px-8 pt-8 absolute right-0 top-0 flex flex-col">
          <h2 className="text-2xl font-bold mb-7">Корзина</h2>

          {/* BuyItemsContainer */}
          <div className="flex flex-col gap-5 overflow-y-auto grow">
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

          {/* Aside Footer */}
          <div className="flex flex-col gap-5 py-8">
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
            <button className="w-full h-14 rounded-3xl bg-lime-500 hover:bg-lime-400 active:bg-lime-600 transition-colors ease-linear duration-300 text-white font-medium flex items-center justify-center relative">
              Оформить заказ
              <img
                className="animate-bounce absolute right-5"
                src="/img/arrow.svg"
                alt="Arrow right"
              />
            </button>
          </div>
          {/* ./Aside Footer */}
        </div>
        {/* ./Aside Container */}
      </aside>
      {/* ./Aside */}
    </>
  )
}

export default Aside
