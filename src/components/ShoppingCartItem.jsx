import { RiDeleteBin2Line } from 'react-icons/ri'
import { BiRuble } from 'react-icons/bi'

export default function ShoppingCartItem(props) {
  const { path, text, price, onRemoveItem } = props
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl hover:shadow-sm hover:shadow-[#a9d2eb] sm:gap-5 sm:border sm:p-5">
      <div
        style={{
          background: `url(${path}) no-repeat center /contain`,
        }}
        className="h-[70px] w-[70px]"
      ></div>

      <div className="max-w-[150px] text-sm">
        <p>{text}</p>
        <b className="flex items-center">
          {price} <BiRuble className="inline-block text-sm opacity-50" />
        </b>
      </div>

      <RiDeleteBin2Line
        onClick={() => onRemoveItem(props)}
        className="cursor-pointer text-2xl opacity-40 duration-300 hover:scale-150 active:scale-150"
      />
    </div>
  )
}
