/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { appConfig } from "../../appConfig";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  /* const { isLoggedIn, userData } = useAuth();
  const userId = userData._id; */

  const [cart, setCart] = useState([]);

  const isLoggedIn = true;
  const userId = "653683a38f6ba7aa384a66ba"; // John Doe

  useEffect(() => {
    const getInitialCart = async () => {
      let cartData;

      try {
        const localCartString = localStorage.getItem("cart");
        const localCart = JSON.parse(localCartString) || [];

        if (isLoggedIn && localCart) {
          await axios.put(`${appConfig.baseUrl}/user/${userId}/cart`, {
            games: localCart,
          });
          // Clear local storage after syncing with the backend
          localStorage.removeItem("cart");
        }

        if (isLoggedIn) {
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
  }, [isLoggedIn]);

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

      if (isLoggedIn) {
        axios
          .post(`${appConfig.baseUrl}/user/${userId}/cart`, {
            gameId,
          })
          .then((response) => {
            console.log("Game added to cart (backend):", response.data);
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

  const removeFromCart = (gameId) => {
    console.log(gameId);
    setCart((prevCart) => {
      const isGameInCart = prevCart.some((game) => game.gameId === gameId);
      if (!isGameInCart) {
        console.error("No game in cart to remove.");
        return prevCart;
      }
      const filteredCart = prevCart.filter((game) => game.gameId !== gameId);

      const newCart = [...filteredCart];

      if (isLoggedIn) {
        axios
          .delete(`${appConfig.baseUrl}/user/${userId}/cart`, {
            data: { gameId },
          })
          .then((response) => {
            console.log("Game deleted from cart (backend):", response.data);
          })
          .catch((error) => {
            console.error("Error deleting game from cart (backend):", error);
          });
      } else {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }

      return newCart;
    });
  };

  const clearCart = (gameId) => {
    setCart((prevCart) => {
      const isGameInCart = prevCart.some((game) => game.gameId === gameId);
      if (isGameInCart) {
        console.error("Game already in cart.");
        return prevCart;
      }

      const newCart = [...prevCart, { gameId: gameId }];

      if (isLoggedIn) {
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
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
