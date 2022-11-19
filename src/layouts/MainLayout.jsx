import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";

const MainLayout = ({
                      price,
                      showShoppingCart,
                      productsCart,
                      isVisibleShoppingCart,
                      hideShoppingCart,
                      actionProduct,
                      orderSuccess,
                      changeStateOrder,
                      orderState,
                      orderNumber,
                      lastOrderPrice
                    }) => {
  return (
    <div className="container mx-auto max-w-[1080px] rounded-3xl bg-white">
      <Header
        lastOrderPrice={lastOrderPrice}
        showShoppingCart={showShoppingCart}
      />
      <Aside
        productsCart={productsCart}
        isVisibleShoppingCart={isVisibleShoppingCart}
        hideShoppingCart={hideShoppingCart}
        price={price}
        actionProduct={actionProduct}
        orderSuccess={orderSuccess}
        changeStateOrder={changeStateOrder}
        orderState={orderState}
        orderNumber={orderNumber}
      />
      <Outlet />
    </div>
  );
};

export default MainLayout;
