import React, { createContext, useContext, useState, useEffect } from "react";

const StorageContext = createContext();

export const useStorageContext = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
  const [selectedStorage, setSelectedStorage] = useState({
    name: "", // Name of the selected product
    imageSrc: "", // Image source of the selected product
  });

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("selectedStorage"));
    if (storedProduct) {
      setSelectedStorage(storedProduct);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedStorage", JSON.stringify(selectedStorage));
  }, [selectedStorage]);

  return (
    <StorageContext.Provider value={{ selectedStorage, setSelectedStorage }}>
      {children}
    </StorageContext.Provider>
  );
};
