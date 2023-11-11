import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create a CartContext
const CartContext1 = createContext();

// Custom hook to access the CartContext
export const useCartContext1 = () => useContext(CartContext1);

export const CartProvider1 = ({ children }) => {
  const [cartId, setCartId] = useState(Cookies.get("cartId") || "");

  const [cartItems1, setCartItems1] = useState(() => {
    const cartItems1Cookie = Cookies.get("cartItems1");
    if (cartItems1Cookie) {
      try {
        return JSON.parse(cartItems1Cookie);
      } catch (error) {
        console.error("Error parsing 'cartItems1' cookie:", error);
      }
    }
    return [];
  });

  const [cartItems2, setCartItems2] = useState(() => {
    const cartItems2Cookie = Cookies.get("cartItems2");
    if (cartItems2Cookie) {
      try {
        return JSON.parse(cartItems2Cookie);
      } catch (error) {
        console.error("Error parsing 'cartItems2' cookie:", error);
      }
    }
    return [];
  });

  const totalCookie = Cookies.get("total");
  const [total, setTotal] = useState(Number(totalCookie ?? 0));

  const countCookie = Cookies.get("count");
  const [count, setCount] = useState(Number(countCookie ?? 0));

  useEffect(() => {
    Cookies.set("cartId", cartId);
    Cookies.set("cartItems1", JSON.stringify(cartItems1));
    Cookies.set("total", total.toString());
    Cookies.set("count", count.toString());
    Cookies.set("cartItems2", JSON.stringify(cartItems2));
  }, [cartId, cartItems1, cartItems2, total, count]);

  return (
    <CartContext1.Provider
      value={{
        cartId,
        setCartId,
        cartItems1,
        setCartItems1,
        total,
        setTotal,
        count,
        setCount,
        cartItems2,
        setCartItems2,
      }}
    >
      {children}
    </CartContext1.Provider>
  );
};
