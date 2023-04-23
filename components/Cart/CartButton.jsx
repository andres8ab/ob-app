import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import { useEffect, useState } from "react";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  // const bumped = useSelector((state) => state.cart.changed);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const [bumpp, setbumpp] = useState("");

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setbumpp("bump");

    const timer = setTimeout(() => {
      setbumpp("");
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  return (
    <button
      className=" flex bg-transparent border-teal-500 text-teal-500 hover: active:text-white"
      onClick={toggleCartHandler}
    >
      <span className="my-0 mx-2">
        <HiShoppingCart size={30} className={bumpp} />
      </span>
      <span className="bg-teal-500 rounded-lg py-1 px-5 text-white">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;
