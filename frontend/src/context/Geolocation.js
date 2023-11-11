import { createContext, useContext, useState } from "react";

const GeolocationContext = createContext();

export const useGeolocation = () => {
  return useContext(GeolocationContext);
};

export const GeolocationProvider = ({ children }) => {
  const [locationChanged, setLocationChanged] = useState(false);

  return (
    <GeolocationContext.Provider
      value={{ locationChanged, setLocationChanged }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};
