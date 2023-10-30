import { useState, useEffect } from "react";

const useCart = () => {
  const addToCart = (gameId) => {
    setCart([...cart, gameId]);
  };

  const removeFromCart = (gameId) => {
    const updatedCart = cart.filter((currGameId) => currGameId !== gameId);
    setCart(updatedCart);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
