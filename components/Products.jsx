import PrImg1 from "../public/alternator.jpg";
import PrImg2 from "../public/starter.jpg";
import PrImg3 from "../public/fanmotor.jpg";
import InstagramImg from "./ProductsImg";

const DUMMY_PRODUCTS = [
  {
    id: "Pr1",
    title: "alternator",
    price: 10,
    image: PrImg1,
    description: "alternator",
  },
  {
    id: "Pr2",
    title: "starter",
    price: 20,
    image: PrImg2,
    description: "stater",
  },
  {
    id: "Pr3",
    title: "fan motor",
    price: 30,
    image: PrImg3,
    description: "fan motor",
  },
];

const Products = () => {
  return (
    <div className="max-w-[1204px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Productos</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {DUMMY_PRODUCTS.map((product) => (
          <InstagramImg
            productImg={product.image}
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
