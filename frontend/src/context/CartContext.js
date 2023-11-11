import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const initialCartItemCount =
    parseInt(localStorage.getItem("cartItemCount")) || 0;

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItemCount, setCartItemCount] = useState(initialCartItemCount);

  const addToCart = (item) => {
    const itemId = uuidv4();

    // Update cartItems and cartItemCount
    const updatedCartItems = [...cartItems, { ...item, id: itemId }];
    const updatedCartItemCount = cartItemCount + 1;

    // Update state variables
    setCartItems(updatedCartItems);
    setCartItemCount(updatedCartItemCount);

    // Update local storage using the updated values
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartItemCount", updatedCartItemCount.toString());
  };

  const updateCartItemQuantity = useCallback(
    (itemId, newQuantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: newQuantity,
                total: newQuantity * item.pricePerKg,
              }
            : item
        )
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          cartItems.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  quantity: newQuantity,
                  total: newQuantity * item.pricePerKg,
                }
              : item
          )
        )
      );
    },
    [cartItems]
  );

  const removeCartItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCartItemCount(cartItemCount - 1);
  };

  useEffect(() => {
    // Any additional logic you want to execute when cartItems change

    // Example: Logging updated cart items
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartItemCount", cartItemCount.toString());
  }, [cartItems, cartItemCount]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem,
        cartItemCount,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
