export default function ShoppingCartItem(props) {
  const { path, text, price, onRemoveItem } = props
  return (
    <div className="flex items-center justify-between  gap-3 rounded-2xl sm:gap-5 sm:border sm:p-5">
      <div
        style={{
          background: `url(${path}) no-repeat center /contain`,
        }}
        className="h-[70px] w-[70px]"
      ></div>

      <div className="max-w-[150px] text-sm">
        <p>{text}</p>
        <b>{price} ₽</b>
      </div>

      <button
        type="button"
        onClick={() => onRemoveItem(props)}
        className="opacity-50 duration-300 ease-linear hover:opacity-100 "
      >
        <img src="/img/btn-remove.svg" alt="Удалить" />
      </button>
    </div>
  )
}
