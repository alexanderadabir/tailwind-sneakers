const AsideFooter = () => {
  return (
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
  )
}

export default AsideFooter
