import { useState, useEffect } from "react";

const useCart = () => {
  const addToCart = (gameId) => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    localStorage.setItem("cart", JSON.stringify([...storedCart, gameId]));
  };

  const removeFromCart = (gameId) => {
    const updatedCart = cart.filter((currGameId) => currGameId !== gameId);
    setCart(updatedCart);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
