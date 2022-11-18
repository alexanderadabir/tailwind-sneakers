const DrawerItem = () => {
  return (
    <div className="flex items-center gap-5 rounded-2xl border p-5">
      <div
        style={{
          background: 'url(/img/sneakers/1.jpg) no-repeat center /contain',
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
  )
}

export default DrawerItem
