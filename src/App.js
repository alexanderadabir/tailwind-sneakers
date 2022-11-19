import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";

import p from "./data/products";

const listProducts = p.map((item) => ({
  ...item,
  id: uuidv4(),
  addedForPurchase: false
}));

const App = () => {
  const [products, setProducts] = useState([...listProducts]);

  const [searchValue, setSearchValue] = useState("");

  const searchChangeHandler = (value) => {
    setSearchValue(value);
    const searchValues = value.toLowerCase().split(" ");
    const searchProduct = listProducts.filter((product) =>
      searchValues.every((value) => product.text.toLowerCase().includes(value))
    );
    setProducts([...searchProduct]);
  };

  const [price, setPrice] = useState(0);

  const showShoppingCartHandler = () => {
    setIsVisibleShoppingCart("visible");
  };

  const [isVisibleShoppingCart, setIsVisibleShoppingCart] =
    useState("invisible");

  const hideShoppingCartHandler = () => {
    setIsVisibleShoppingCart("invisible");
  };

  const [productsCart, setProductsCart] = useState([]);

  const addProductHandler = (product) => {
    setProductsCart([...productsCart, { ...product, addedForPurchase: true }]);
    setProducts(
      products.map((prod) =>
        product.id === prod.id
          ? { ...prod, addedForPurchase: true }
          : { ...prod }
      )
    );
    setPrice(price + product.price);
  };

  const deleteProductHandler = (product) => {
    setProductsCart(
      productsCart.filter((productCart) => productCart.id !== product.id)
    );
    setProducts(
      products.map((prod) =>
        product.id === prod.id
          ? { ...prod, addedForPurchase: false }
          : { ...prod }
      )
    );
    setPrice(price - product.price);
  };

  const [lastOrders, setLastOrders] = useState({});

  const actionProductHandler = (product) =>
    !product.addedForPurchase
      ? addProductHandler(product)
      : deleteProductHandler(product);

  const orderSuccessHandler = () => {
    setProducts([...listProducts]);
    setIsVisibleShoppingCart("invisible");
    setProductsCart([]);
    setPrice(0);
    setOrderState(false);
    setSearchValue("");
  };

  const [orderState, setOrderState] = useState(false);

  const changeStateOrderHanlder = (e) => {
    e.preventDefault();
    setOrderState(true);
    const newOrder = {
      products: [...productsCart],
      order: Math.floor(Math.random() * 20),
      price
    };
    setLastOrders(newOrder);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                lastOrderPrice={lastOrders.price}
                price={price}
                productsCart={productsCart}
                orderState={orderState}
                isVisibleShoppingCart={isVisibleShoppingCart}
                showShoppingCart={showShoppingCartHandler}
                hideShoppingCart={hideShoppingCartHandler}
                actionProduct={actionProductHandler}
                orderSuccess={orderSuccessHandler}
                changeStateOrder={changeStateOrderHanlder}
                orderNumber={lastOrders.order}
              />
            }
          >
            <Route
              index
              element={
                <MainPage
                  searchValue={searchValue}
                  products={products}
                  actionProduct={actionProductHandler}
                  searchChange={searchChangeHandler}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
