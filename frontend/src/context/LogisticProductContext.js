import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "", // Name of the selected product
    imageSrc: "", // Image source of the selected product
  });

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (storedProduct) {
      setSelectedProduct(storedProduct);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  }, [selectedProduct]);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
