import { useSelector } from "react-redux";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Cart from "@/components/Cart/Cart";

const ContactPage = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Hero heading="contacto" message="todos los contactos" />
      {showCart && <Cart />}
      <Contact />
    </>
  );
};

export default ContactPage;
