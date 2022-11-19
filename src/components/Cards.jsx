import Card from "./Card";

const Cards = ({ products, actionProduct }) => {
  return (
    <div className="flex flex-wrap gap-10">
      {products.map((product) => (
        <Card {...product} key={product.id} actionProduct={actionProduct} />
      ))}
    </div>
  );
};

export default Cards;
