import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(
    JSON.parse(localStorage.getItem("totalPrice")) || 0
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cartItems, totalPrice]);

  const addToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    setCount((prevCount) => prevCount + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + newItem.price);
  };

  const updateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce(
      (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        count,
        totalPrice,
        setCartItems,
        updateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
