export default function Button({ text, direction, animation, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="relative flex h-14 w-full items-center justify-center rounded-3xl bg-lime-500 font-medium text-white transition-colors duration-300 ease-linear hover:bg-lime-400 active:bg-lime-600"
    >
      {text}
      <img
        className={`absolute ${direction} ${animation}`}
        src="/img/arrow.svg"
        alt={`Arrow`}
      />
    </button>
  )
}
