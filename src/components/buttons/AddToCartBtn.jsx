import { PlusCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../Context/CartProvider";

const AddToCartBtn = ({ gameId }) => {
  const { cart, addToCart } = useCart();
  const isGameInCart = cart.some((game) => game.gameId === gameId);

  return isGameInCart ? (
    <button className="inline-flex items-center ml-2 text-white ">
      <CheckCircleIcon className="h-6 w-6 stroke-purple-200" />
      {/* <span className="ml-2">Add to Cart</span> */}
    </button>
  ) : (
    <button
      className="hidden group-hover:inline-flex items-center ml-2 text-white hover:text-gray-300 hover:stroke-purple-200 stroke-white"
      onClick={() => {
        addToCart(gameId);
      }}
    >
      <PlusCircleIcon className="h-6 w-6 stroke-inherit" />
      {/* <span className="ml-2">Add to Cart</span> */}
    </button>
  );
};

export default AddToCartBtn;
