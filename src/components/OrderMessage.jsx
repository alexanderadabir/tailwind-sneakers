const OrderMessage = ({ img, title, text, children, titleStyles }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <img className="mb-5" src={img} alt="Состояние заказа" />
      <h3 className={`mb-2 text-2xl font-semibold ${titleStyles}`}>{title}</h3>
      <p className="mb-10 max-w-[285px] text-center opacity-40">{text}</p>

      {children}
    </div>
  )
}

export default OrderMessage
