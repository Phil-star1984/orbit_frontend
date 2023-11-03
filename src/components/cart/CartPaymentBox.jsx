const CartPaymentBox = ({ totalPrice }) => {
  return (
    <div className="text-white h-fit min-w-[20rem] bg-gray-800 flex rounded-lg p-6 flex-col">
      <h2 className="text-2xl font-bold mb-4">Games summary</h2>

      <div className="flex justify-between mb-2">
        <p>Price</p>
        <p>{totalPrice} €</p>
      </div>

      <div className="flex justify-between mb-2">
        <p>Bonus Discount</p>
        <p>- 10 €</p>
      </div>

      <div className="flex justify-between mb-2">
        <p>Taxes</p>
        <p>Calculated at Checkout</p>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-2">
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">{totalPrice - 10} €</p>
        </div>
      </div>
      <button className="mt-4 w-full h-12 bg-deep-purple-400 rounded-lg hover:bg-deep-purple-300 active:bg-deep-purple-400 font-semibold">
        CHECK OUT
      </button>
    </div>
  );
};

export default CartPaymentBox;
