import Main from "./Main";

export default function MainPage({
                                   searchValue,
                                   products,
                                   actionProduct,
                                   searchChange
                                 }) {
  return (
    <Main
      searchValue={searchValue}
      products={products}
      actionProduct={actionProduct}
      searchChange={searchChange}
    />
  );
}
