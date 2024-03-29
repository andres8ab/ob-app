import { useSelector } from "react-redux";

import Hero from "@/components/Hero";
import Cart from "@/components/Cart/Cart";

const HomePage = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <Hero heading="OB GENUINE PARTS" message="la pagina" />
      {showCart && <Cart />}
    </>
  );
};

export default HomePage;
