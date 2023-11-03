import { useCart } from "../../Context/CartProvider";

const CartGame = ({ id, title, imageSrc, price }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="h-[10rem] w-full bg-gray-800 p-4 flex rounded-lg">
      <div className="w-96 h-full overflow-hidden ">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full aspect-[5/3] object-cover rounded-lg "
        />
      </div>
      <div className="flex flex-col px-4 py-2 w-full">
        {/* Top Container */}
        <header className="w-full h-1/3">
          <h3 className="text-xl font-semibold truncate">{title}</h3>
        </header>
        {/* Bottom Container */}
        <div className="flex items-center h-full">
          <div className="flex gap-4 w-full h-full justify-start items-end text-base text-gray-400 underline">
            <button className="p-2 hover:text-gray-300 active:text-gray-400">
              Move to Wishlist
            </button>
            <button
              className="p-2 hover:text-gray-300 active:text-gray-400"
              onClick={() => {
                console.log(id);
                removeFromCart(id);
              }}
            >
              Remove
            </button>
          </div>
          <div className="w-1/3 flex justify-end">
            <p className="text-white text-lg self-center">{price} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartGame;
