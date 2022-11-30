import { useContext, useState } from 'react'
import ContentLoader from 'react-content-loader'
import AppContext from '../AppContext'

export default function Card(props) {
  const {
    itemID,
    path,
    text,
    price,
    onAddItem,
    onFavoriteItem,
    isLoading = false,
    addKeys = true,
  } = props

  const { addedToCart, taggedFavorite } = useContext(AppContext)

  const onClickedAdd = () => {
    onAddItem({ text, price, path, itemID })
  }

  const onClickedFavorite = () => {
    onFavoriteItem({ text, price, path, itemID })
  }

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-[#F3F3F3] py-5 px-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F8F8F8] hover:shadow-md sm:max-w-[210px]">
        <ContentLoader
          speed={2}
          width={150}
          height={255}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="110" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="132" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="171" rx="8" ry="8" width="80" height="24" />
          <rect x="117" y="163" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      </div>
    )
  }

  return (
    <div className="min-h-[255px] rounded-3xl border border-[#F3F3F3] py-5 px-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F8F8F8] hover:shadow-md sm:max-w-[210px]">
      {addKeys && (
        <button onClick={onClickedFavorite}>
          <img
            src={
              taggedFavorite(itemID)
                ? 'img/favorite-like.svg'
                : 'img/favorite-unlike.svg'
            }
            alt="Добавить в избранное"
          />
        </button>
      )}

      <img className="mb-3" src={path} alt="Фото пары кроссовок" />

      <p className="mb-3 text-sm">{text}</p>

      <div className="flex justify-between">
        <div>
          <h5 className="text-xs uppercase opacity-50">Цена:</h5>
          <b className="text-sm">{price} ₽</b>
        </div>

        {addKeys && (
          <button onClick={onClickedAdd}>
            <img
              src={
                addedToCart(itemID) ? 'img/btn-success.svg' : 'img/btn-plus.svg'
              }
              alt="Добавить в корзину"
            />
          </button>
        )}
      </div>
    </div>
  )
}
