import { createContext, useContext, useState, useEffect } from "react";

const LogisticsProfileContext = createContext();

export const useLogisticsProfile = () => {
  return useContext(LogisticsProfileContext);
};

export const LogisticsProfileProvider = ({ children }) => {
  const [first_name2, setfirst_name2] = useState("");
  const [last_name2, setlast_name2] = useState("");
  const [email2, setEmail2] = useState("");
  const [street2, setStreet2] = useState("");
  const [city2, setCity2] = useState("");
  const [state2, setState2] = useState("");
  const [logisticsName, setLogisticsName] = useState("");
  const [editedLogisticsName, setEditedLogisticsName] = useState({
    logistics_name: "",
  });

  const [editedAddress, setEditedAddress] = useState({
    street: "",
    city: "",
    state: "",
  });

  const loadUserProfileData = () => {
    const storedUserData = localStorage.getItem("userProfile3");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setfirst_name2(userData.first_name2);
      setlast_name2(userData.last_name2);
      setEmail2(userData.email2);
      setStreet2(userData.street2);
      setCity2(userData.city2);
      setState2(userData.state2);
      setLogisticsName(userData.logisticsName);

      setEditedLogisticsName({
        logistics_name: userData.logistics_name,
      });

      setEditedAddress({
        street: userData.street2,
        city: userData.city2,
        state: userData.state2,
      });
    }
  };

  useEffect(() => {
    loadUserProfileData();
  }, []);

  const saveUserProfileData = () => {
    const userData = {
      first_name2,
      last_name2,
      email2,
      street2,
      city2,
      state2,
      logisticsName,
    };
    localStorage.setItem("userProfile3", JSON.stringify(userData));
  };

  useEffect(() => {
    saveUserProfileData();
  }, [first_name2, last_name2, email2, street2, city2, state2, logisticsName]);

  return (
    <LogisticsProfileContext.Provider
      value={{
        first_name2,
        last_name2,
        setfirst_name2,
        setlast_name2,
        email2,
        setEmail2,
        editedLogisticsName,
        setEditedLogisticsName,
        street2,
        setStreet2,
        city2,
        setCity2,
        state2,
        setState2,
        editedAddress,
        setEditedAddress,
        logisticsName,
        setLogisticsName,
      }}
    >
      {children}
    </LogisticsProfileContext.Provider>
  );
};
