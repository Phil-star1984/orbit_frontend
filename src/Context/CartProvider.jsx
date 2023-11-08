import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { isLoggedIn, userData } = useAuth();
  const userId = userData && userData._id;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getInitialCart = async () => {
      let cartData;

      try {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (isLoggedIn && localCart.length) {
          await axios.put(
            `https://orbitback.onrender.com/user/${userId}/cart`,
            {
              games: localCart,
            }
          );
          localStorage.removeItem("cart");
        }

        if (isLoggedIn) {
          const response = await axios.get(
            `https://orbitback.onrender.com/user/${userId}/cart`
          );
          cartData = response.data.games || [];
        } else {
          cartData = localCart;
        }
      } catch (error) {
        console.error("Error fetching/initializing cart data:", error);
      }

      setCart(cartData);
    };

    getInitialCart();
  }, [isLoggedIn, userId]);

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
          .post(`https://orbitback.onrender.com/user/${userId}/cart`, {
            gameId,
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
    setCart((prevCart) => {
      if (!prevCart.some((game) => game.gameId === gameId)) {
        console.error("No game in cart to remove.");
        return prevCart;
      }

      const newCart = prevCart.filter((game) => game.gameId !== gameId);

      if (isLoggedIn) {
        axios
          .delete(`https://orbitback.onrender.com/user/${userId}/cart`, {
            data: { gameId },
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

  const emptyCart = () => {
    setCart([]);

    if (isLoggedIn) {
      axios
        .put(`https://orbitback.onrender.com/user/${userId}/cart`, {
          data: { games: [] },
        })
        .catch((error) => {
          console.error("Error clearing cart on the backend:", error);
        });
    } else {
      localStorage.removeItem("cart");
    }
  };

  const validatePayment = async (orderId) => {
    try {
      const response = await axios.post("/api/validate-payment", { orderId });
      return response.data;
    } catch (error) {
      console.error("Error during payment validation:", error);
      throw error;
    }
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
    validatePayment,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
