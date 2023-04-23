import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="my-4 mx-0 bg-slate-600 p-4">
      <header className="flex justify-between align-baseline">
        <h3 className="mb-2 text-2xl">{title}</h3>
        <div className="text-2xl font-bold">
          ${total.toFixed(2)}{" "}
          <span className="font-normal text-base italic">
            (${price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div>
          x <span className="text-2xl font-bold">{quantity}</span>
        </div>
        <div className="flex justify-end my-2 mx-0">
          <button
            className="bg-transparent border-2 border-white border-solid ml-2 py-1 px-4 text-white hover: active: bg-gray-700"
            onClick={removeItemHandler}
          >
            -
          </button>
          <button
            className="bg-transparent border-2 border-white border-solid ml-2 py-1 px-4 text-white hover: active: bg-gray-700"
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
