import { useEffect } from "react";
import { useAuth } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";

const CartPaymentBox = ({ totalPrice }) => {
  const { isLoggedIn } = useAuth();
  const { emptyCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=ARTJD83_v4H0fbxwOLR98FCxeOOf5bzdVOXMiokYapQv6InMHnZuAibSFLnMOgw3YSemIemjqG531G3K&currency=EUR`;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: (totalPrice * 0.9).toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              // alert(
              //   'Transaction completed. Good luck' +
              //     // details.payer.name.given_name +
              //     '!'
              // );
              emptyCart();
              navigate("/paymentid512873128");
            });
          },
          onError: (err) => {
            console.error(err);
            // Here you can handle errors
          },
        })
        .render("#paypal-button-container");
    };

    /* if (totalPrice > 0 && !document.querySelector("#paypal-button-script")) {
      script.id = "paypal-button-script";
      document.body.appendChild(script);
    } */

    script.id = "paypal-button-script";
    document.body.appendChild(script);
  }, [totalPrice]);

  return (
    <div className="text-white h-fit min-w-[18rem] w-full lg:max-w-[24rem] bg-gray-800 flex rounded-lg p-6 flex-col">
      <h2 className="text-2xl font-bold mb-4">Games summary</h2>

      <div className="flex justify-between mb-2">
        <p>Price</p>
        <p>{totalPrice} €</p>
      </div>

      <div className="flex justify-between mb-2">
        <p>Bonus Discount</p>
        <p>- 10%</p>
      </div>

      <div className="flex justify-between mb-2">
        <p>Taxes</p>
        <p>Calculated at Checkout</p>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-2">
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">{(totalPrice * 0.9).toFixed(2)} €</p>
        </div>
      </div>

      {isLoggedIn ? (
        <div id="paypal-button-container" className="mt-4"></div> // PayPal button container
      ) : (
        <Link to="/login">
          <button className="mt-4 w-full h-12 bg-deep-purple-400 rounded-lg hover:bg-deep-purple-300 active:bg-deep-purple-400 font-semibold">
            LOGIN
          </button>
        </Link>
      )}
    </div>
  );
};

export default CartPaymentBox;
