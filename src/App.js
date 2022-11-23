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
    setPrice(productsCart.reduce((acc, product) => acc += product.price, 0))
    axios.post('https://637cbe8e72f3ce38eaac43cb.mockapi.io/cart', ...productsCart)
  }, [])

  useEffect(() => {
    axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/items')
      .then(res => setItems(res.data.map((item) => ({
        ...item,
        uuid: uuidv4(),
        addedForPurchase: false
      }))))

    axios.get('https://637cbe8e72f3ce38eaac43cb.mockapi.io/cart')
      .then(res => setProductsCart([...res.data]))
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
    const updateProduct = {...product, addedForPurchase: true}

    setProductsCart([...productsCart, updateProduct]);

    setProducts(
      products.map((prod) =>
        product.uuid === prod.uuid
          ? updateProduct
          : { ...prod }
      )
    );

  };

  const deleteProductHandler = (product) => {
    const updateProduct = {...product, addedForPurchase: false}

    setProductsCart(
      productsCart.filter((productCart) => productCart.uuid !== product.uuid)
    );

    setProducts(
      products.map((prod) =>
        product.uuid === prod.uuid
          ? updateProduct
          : { ...prod }
      )
    );
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
