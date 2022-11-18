const Card = (props) => {
  const { img, text, price, actionProduct, added } = props
  return (
    <div className="max-w-[210px] rounded-3xl border border-[#F3F3F3] py-5 px-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F8F8F8] hover:shadow-md">
      <button>
        <img src={'/img/favorite-unlike.svg'} alt="Unlike" />
      </button>
      <img className="mb-3" src={img} alt="Кроссовки" />

      <p className="mb-3 text-sm">{text}</p>

      <div className="flex justify-between">
        <div>
          <h5 className="text-xs uppercase opacity-50">Цена:</h5>
          <b className="text-sm">{price} ₽</b>
        </div>

        <button onClick={() => actionProduct(props)}>
          {added ? (
            <img src="/img/btn-success.svg" alt="Добавить" />
          ) : (
            <img src="/img/btn-plus.svg" alt="Добавить" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Card
