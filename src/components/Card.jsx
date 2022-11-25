import { useState } from 'react'

export default function Card(props) {
  const {
    path,
    text,
    price,
    onAddItem,
    onFavoriteItem,
    taggedFavorite = false,
  } = props

  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(taggedFavorite)

  const onClickedAdd = () => {
    onAddItem(props)
    setIsAdded((prev) => !prev)
  }

  const onClickedFavorite = () => {
    onFavoriteItem(props)
    setIsFavorite((prev) => !prev)
  }

  return (
    <div className="max-w-[210px] rounded-3xl border border-[#F3F3F3] py-5 px-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F8F8F8] hover:shadow-md">
      <button onClick={onClickedFavorite}>
        <img
          src={
            isFavorite ? '/img/favorite-like.svg' : '/img/favorite-unlike.svg'
          }
          alt="Unlike"
        />
      </button>
      <img className="mb-3" src={path} alt="Кроссовки" />

      <p className="mb-3 text-sm">{text}</p>

      <div className="flex justify-between">
        <div>
          <h5 className="text-xs uppercase opacity-50">Цена:</h5>
          <b className="text-sm">{price} ₽</b>
        </div>

        <button onClick={onClickedAdd}>
          <img
            className="cardBtn"
            src={isAdded ? '/img/btn-success.svg' : '/img/btn-plus.svg'}
            alt="Добавить"
          />
        </button>
      </div>
    </div>
  )
}
