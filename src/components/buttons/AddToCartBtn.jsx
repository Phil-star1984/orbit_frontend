import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddToCartBtn = ({ gameId }) => {
  const addToCart = () => {
    const storedCartString = localStorage.getItem("cart");
    const storedCart = storedCartString ? JSON.parse(storedCartString) : [];

    localStorage.setItem("cart", JSON.stringify([...storedCart, gameId]));
  };

  return (
    <button
      className="hidden group-hover:inline-flex items-center ml-2 text-white hover:text-gray-300"
      onClick={addToCart}
    >
      <PlusCircleIcon className="h-6 w-6" />
      {/* <span className="ml-2">Add to Cart</span> */}
    </button>
  );
};

export default AddToCartBtn;
