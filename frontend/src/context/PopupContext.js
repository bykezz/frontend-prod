import React, { createContext, useContext, useState, useEffect } from "react";

const PopupContext = createContext();

export const usePopupContext = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "", // Name of the selected product
    imageSrc: "", // Image source of the selected product
    weight: "",
    price: "",
  });

  return (
    <PopupContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </PopupContext.Provider>
  );
};
