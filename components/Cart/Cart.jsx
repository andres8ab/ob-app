import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const closeCartHandler = () => {
    dispatch(uiActions.close());
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") closeCartHandler();
  };

  return (
    <div
      className="fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="max-w-md bg-zinc-800 text-white my-auto mx-4 rounded p-1 w-11/12 text-center">
        <h2 className="text-xl my-2 mx-0">Tu Pedido</h2>
        <ul className="list-none p-0 m-0">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </div>
      <button onClick={closeCartHandler} className="text-white text-xl">
        X
      </button>
    </div>
  );
};

export default Cart;
