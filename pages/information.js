import { useSelector } from "react-redux";

import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Cart from "@/components/Cart/Cart";

const InformationPage = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <Hero heading="Informacion" message="acerca de OB" />
      {showCart && <Cart />}
      <Information />
    </>
  );
};

export default InformationPage;
