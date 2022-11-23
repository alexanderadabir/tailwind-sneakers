import Main from "./Main";

export default function MainPage({
                                   searchValue,
                                   products,
                                   actionProduct,
                                   searchChange,
                                   searchClear
                                 }) {
  return (
    <Main
      searchValue={searchValue}
      products={products}
      actionProduct={actionProduct}
      searchChange={searchChange}
      searchClear={searchClear}
    />
  );
}
