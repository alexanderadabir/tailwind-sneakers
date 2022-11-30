import { Link } from 'react-router-dom'

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
      <img className="mb-5" src={img} alt={alt} />
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-10 max-w-[285px] text-center opacity-40">{text}</p>

      <Link
        title={titleLink}
        onClick={onClick}
        to={to}
        className="relative flex h-14 w-full max-w-[245px] items-center justify-center rounded-3xl bg-lime-400 font-medium text-white transition-colors duration-300 ease-linear hover:bg-lime-500 active:bg-lime-600"
      >
        Вернуться назад
        <img
          className="absolute left-6 hidden rotate-180 sm:block"
          src="img/arrow.svg"
          alt="Вернуться назад"
        />
      </Link>
    </>
  )
}
