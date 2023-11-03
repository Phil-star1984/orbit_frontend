import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { appConfig } from "../../appConfig";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loggedIn = true;
  const userId = "653683a38f6ba7aa384a66ba"; // John Doe

  useEffect(() => {
    const getInitialCart = async () => {
      let cartData;

      try {
        const localCartString = localStorage.getItem("cart");
        const localCart = JSON.parse(localCartString) || [];

        if (loggedIn && localCart) {
          await axios.put(`${appConfig.baseUrl}/user/${userId}/cart`, {
            games: localCart,
          });
          // Clear local storage after syncing with the backend
          localStorage.removeItem("cart");
        }

        if (loggedIn) {
          // Fetch cart data from the backend
          const response = await axios.get(
            `${appConfig.baseUrl}/user/${userId}/cart`
          );
          cartData = response.data.games || [];
        } else {
          // Get local cart data
          const localCartString = localStorage.getItem("cart");
          const localCart = JSON.parse(localCartString);
          cartData = localCart || [];
        }
      } catch (error) {
        console.error("Error fetching/initializing cart data:", error);
      }

      setCart([...cartData]);

      // If user logs in and there are local cart items, save them in the backend
    };

    getInitialCart();
  }, [loggedIn]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (gameId) => {
    setCart((prevCart) => {
      const isGameInCart = prevCart.some((game) => game.gameId === gameId);
      if (isGameInCart) {
        console.error("Game already in cart.");
        return prevCart;
      }

      const newCart = [...prevCart, { gameId: gameId }];

      if (loggedIn) {
        axios
          .post(`${appConfig.baseUrl}/user/${userId}/cart`, {
            gameId,
          })
          .then((response) => {
            console.log("Game added to cart in the backend:", response.data);
          })
          .catch((error) => {
            console.error("Error adding game to cart (backend):", error);
          });
      } else {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }

      return newCart;
    });
  };

  const contextValue = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
