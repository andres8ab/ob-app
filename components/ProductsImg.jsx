import { useDispatch } from "react-redux";
import Image from "next/image";

import { cartActions } from "@/store/cart-slice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const InstagramImg = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id, productImg } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <button
      onClick={addToCartHandler}
      className="bg-white rounded-lg group hover:drop-shadow-2xl"
    >
      <li className="relative">
        <h2>{id}</h2>
        <Image
          src={productImg}
          alt="/"
          className="w-full h-full"
          layout="responsive"
          width="500"
          height="500"
        />
        <header className="flex justify-between items-baseline mx-1">
          <h3 className="my-4 mx-0 text-xl">{title}</h3>
          <div className="rounded-full py-1 px-6 bg-slate-700 text-white text-2xl">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="opacity-0 group-hover:opacity-100">{description}</p>
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <p className="text-teal-500 hidden group-hover:block">
            <AiOutlineShoppingCart size={30} className="z-10" />
          </p>
        </div>
      </li>
    </button>
  );
};

export default InstagramImg;
