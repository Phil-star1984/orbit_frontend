import { useState, useEffect } from "react";
import axios from "axios";
import CartGameList from "../components/cart/CartGameList.jsx";
import CartPaymentBox from "../components/cart/CartPaymentBox.jsx";
import { useCart } from "../Context/CartProvider.jsx";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart } = useCart();

  const [games, setGames] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    const gameIds = cart.map((game) => game.gameId);
    setTotalPrice(() => {
      const sum = gameIds
        .map((gameId) => {
          return parseFloat(calcArbitraryPrice(gameId));
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2);

      return sum;
    });

    const getGames = async () => {
      try {
        if (cart.length === 0) {
          setGames([]);
          return;
        }

        const response = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: "a68824e64475471abcd6b96285019ac7",
            ids: gameIds.join(","),
          },
        });

        const data = response.data.results;

        const sortedGames = gameIds.map((id) =>
          data.find((game) => game.id === id)
        );

        setGames([...sortedGames]);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    getGames();
  }, [cart]);

  return (
    <>
      <div class="min-h-screen max-w-screen-xl mx-auto p-8">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white pb-4">My Cart</h1>
          <div className="flex gap-8">
            <CartGameList games={games} />
            {cart.length ? <CartPaymentBox totalPrice={totalPrice} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
