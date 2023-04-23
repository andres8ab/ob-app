import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Notification from "@/components/Notification";
import Cart from "@/components/Cart/Cart";
import { sendCartData, fetchCartData } from "@/store/cart-actions";
import { useSession, signIn, signOut } from "next-auth/react";

let isInitial = true;

const OrderPage = () => {
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

  const { data: session } = useSession();
  if (session) {
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
  }
  return signIn();
  // return (
  //   <div className="signIn">
  //     Inicia sesion para hacer tu pedido
  //     <button onClick={() => signIn()}>Iniciar Sesion</button>
  //   </div>
  // );
};

export default OrderPage;
