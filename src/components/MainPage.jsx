import Main from './Main'

export default function MainPage({
  searchValue,
  products,
  actionProduct,
  searchChange,
  searchClear,
  isLoadingPage,
}) {
  return (
    <Main
      isLoadingPage={isLoadingPage}
      searchValue={searchValue}
      products={products}
      actionProduct={actionProduct}
      searchChange={searchChange}
      searchClear={searchClear}
    />
  )
}
