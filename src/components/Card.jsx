const Card = (props) => {
  const { img, text, price } = props
  return (
    <div className="max-w-[210px] border border-[#F3F3F3] hover:border-[#F8F8F8] hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-3xl py-5 px-7">
      <button>
        <img src={'/img/favorite-unlike.svg'} alt="Unlike" />
      </button>
      <img className="mb-3" src={img} alt="Кроссовки" />

      <p className="text-sm mb-3">{text}</p>

      <div className="flex justify-between">
        <div>
          <h5 className="text-xs uppercase opacity-50">Цена:</h5>
          <b className="text-sm">{price}</b>
        </div>

        <button>
          <img src="/img/btn-plus.svg" alt="Добавить" />
        </button>
      </div>
    </div>
  )
}

export default Card
