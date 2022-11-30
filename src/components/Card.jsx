import { useContext } from 'react'
import ContentLoader from 'react-content-loader'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io'
import { BiRuble } from 'react-icons/bi'

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
      <div className="min-h-[255px] rounded-3xl border border-[#F3F3F3] py-5 px-7 duration-300 hover:border-[#F8F8F8] hover:shadow-md hover:shadow-[#a9d2eb] sm:max-w-[210px]">
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
    <div className="min-h-[255px] rounded-3xl border border-[#F3F3F3] py-5 px-7 duration-300 hover:border-[#F8F8F8] hover:shadow-md hover:shadow-[#a9d2eb] sm:max-w-[210px]">
      {addKeys && (
        <button
          className="scale-100 opacity-100 duration-300 hover:scale-[2] active:scale-[2]"
          onClick={onClickedFavorite}
        >
          {taggedFavorite(itemID) ? (
            <AiFillHeart className="text-xl text-[#fe6d48]" />
          ) : (
            <AiOutlineHeart className="text-xl text-[#d3d3d3]" />
          )}
        </button>
      )}

      <img className="mb-3" src={path} alt="Фото пары кроссовок" />

      <p className="mb-3 text-sm">{text}</p>

      <div className="flex justify-between">
        <div>
          <h5 className="text-xs uppercase opacity-50">Цена:</h5>
          <b className="flex items-center text-sm">
            {price} <BiRuble className="inline-block text-sm opacity-50" />
          </b>
        </div>

        {addKeys && (
          <button
            className="scale-100 opacity-100 duration-300 hover:scale-[2] active:scale-[2]"
            onClick={onClickedAdd}
          >
            {addedToCart(itemID) ? (
              <IoIosAddCircle className="text-2xl text-[#50d268]" />
            ) : (
              <IoIosAddCircleOutline className="text-2xl text-[#d3d3d3]" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}
