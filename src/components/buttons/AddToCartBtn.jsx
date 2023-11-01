import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../Context/CartProvider";

const AddToCartBtn = ({ gameId }) => {
  const { addToCart } = useCart();

  /* const addToCart = () => {
    const storedCartString = localStorage.getItem("cart");
    const storedCart = storedCartString ? JSON.parse(storedCartString) : [];

    localStorage.setItem("cart", JSON.stringify([...storedCart, gameId]));
  }; */

  return (
    <button
      className="hidden group-hover:inline-flex items-center ml-2 text-white hover:text-gray-300"
      onClick={() => {
        addToCart(gameId);
      }}
    >
      <PlusCircleIcon className="h-6 w-6" />
      {/* <span className="ml-2">Add to Cart</span> */}
    </button>
  );
};

export default AddToCartBtn;
