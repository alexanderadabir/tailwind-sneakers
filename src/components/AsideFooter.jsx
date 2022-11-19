import Button from "./Button";

const AsideFooter = ({ price, productsCart }) => {
  if (!productsCart.length) {
    return;
  }

  return (
    <div className="flex flex-col gap-5 py-8">
      <div className="flex items-baseline justify-between">
        <p>Итого:</p>
        <span className="relative w-1/2 border-b border-dashed"></span>
        <b>{price} ₽</b>
      </div>
      <div className="flex items-baseline justify-between">
        <p>Налог 5%:</p>
        <span className="relative w-1/2 border-dashed file:border-b"></span>
        <b>{Math.floor((price / 100) * 5)} ₽</b>
      </div>
      <Button
        text={"Оформить заказ"}
        direction={"right-5"}
        animation={"animate-arrow"}
        type={"submit"}
      />
    </div>
  );
};

export default AsideFooter;
