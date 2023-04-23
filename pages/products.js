import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Notification from "@/components/Notification";
import Cart from "@/components/Cart/Cart";
import { sendCartData, fetchCartData } from "@/store/cart-actions";

let isInitial = true;

const ProductsPage = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Hero heading="productos" message="todos los productos" />
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showCart && <Cart />}
      <Products />
    </>
  );
};

export default ProductsPage;
