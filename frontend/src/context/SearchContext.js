import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [choice, setChoice] = useState("Popularity");
  const [choice1, setChoice1] = useState("Popularity");
  const [choice2, setChoice2] = useState("Popularity");
  const [logisticsType, setLogisticsType] = useState("Filter by type");
  const [logisticsSize, setLogisticsSize] = useState("Filter by size");
  const [storageType, setStorageType] = useState("Filter by type");
  const [storageSize, setStorageSize] = useState("Filter by size");

  return (
    <SearchContext.Provider
      value={{
        products,
        setProducts,
        products1,
        setProducts1,
        choice,
        setChoice,
        logisticsSize,
        setLogisticsSize,
        logisticsType,
        setLogisticsType,
        storageType,
        setStorageType,
        storageSize,
        setStorageSize,
        choice1,
        setChoice1,
        choice2,
        setChoice2,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
