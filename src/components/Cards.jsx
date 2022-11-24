import Card from './Card'

const Cards = ({ products, actionProduct, isLoadingPage }) => {
  if (isLoadingPage) {
    return <h3 className="text-2xl font-bold">Загрузка...</h3>
  }

  return (
    <div className="flex flex-wrap gap-10">
      {products.map((product) => (
        <Card {...product} key={product.uuid} actionProduct={actionProduct} />
      ))}
    </div>
  )
}

export default Cards
