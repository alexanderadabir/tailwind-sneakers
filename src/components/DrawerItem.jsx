const DrawerItem = (props) => {
  const { img, text, price, actionProduct } = props
  return (
    <div className="flex items-center gap-5 rounded-2xl border p-5">
      <div
        style={{
          background: `url(${img}) no-repeat center /contain`,
        }}
        className="h-[70px] w-full max-w-[70px]"
      ></div>

      <div className="max-w-[150px] text-sm">
        <p>{text}</p>
        <b>{price} ₽</b>
      </div>

      <button
        onClick={() => actionProduct(props)}
        className="opacity-50 duration-300 ease-linear hover:opacity-100 "
      >
        <img src="/img/btn-remove.svg" alt="Удалить" />
      </button>
    </div>
  )
}

export default DrawerItem
