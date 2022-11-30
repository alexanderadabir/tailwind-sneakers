import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default function Info({
  onClick,
  title,
  text,
  img,
  alt,
  to,
  titleLink,
}) {
  return (
    <>
      <img width={70} className="mb-5" src={img} alt={alt} />
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-10 max-w-[285px] text-center opacity-40">{text}</p>

      <Link
        title={titleLink}
        onClick={onClick}
        to={to}
        className="relative flex h-14 w-full max-w-[245px] items-center justify-center rounded-3xl bg-[#50d268] font-medium text-white transition-colors duration-300 ease-linear hover:bg-[#2d8f3f]"
      >
        Вернуться назад
        <BsArrowLeft className="absolute left-4 hidden animate-pulse text-xl sm:block" />
      </Link>
    </>
  )
}
