import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [items, setItems] = useState([])
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [price, setPrice] = useState(0);
  const [productsCart, setProductsCart] = useState([]);
  const [lastOrders, setLastOrders] = useState({});
  const [isVisibleShoppingCart, setIsVisibleShoppingCart] =
    useState("invisible");

  useEffect(() => {
    axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/items')
      .then(res => setItems(res.data.map((item) => ({
        ...item,
        id: uuidv4(),
        addedForPurchase: false
      }))))
  }, [])

  useEffect(() =>  setProducts([...items]), [items])

  const searchClearHandler = () => {
    setSearchValue('')
    setProducts([...items])
  }

  const searchChangeHandler = (value) => {
    setSearchValue(value);

    const searchValues = value.toLowerCase().split(" ");

    const searchProduct = items.filter((product) =>
      searchValues.every((value) => product.text.toLowerCase().includes(value))
    );

    setProducts([...searchProduct]);
  };

  const showShoppingCartHandler = () => {
    setIsVisibleShoppingCart("visible");
  };

  const hideShoppingCartHandler = () => {
    setIsVisibleShoppingCart("invisible");
  };

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

  const actionProductHandler = (product) =>
    !product.addedForPurchase
      ? addProductHandler(product)
      : deleteProductHandler(product);

  const orderSuccessHandler = () => {
    setProducts([...items]);

    setIsVisibleShoppingCart("invisible");

    setProductsCart([]);

    setPrice(0);

    setOrderState(false);

    setSearchValue("");
  };

  const [orderState, setOrderState] = useState(false);

  const changeStateOrderHandler = (e) => {
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
                changeStateOrder={changeStateOrderHandler}
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
                  searchClear={searchClearHandler}
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
