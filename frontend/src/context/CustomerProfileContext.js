import { createContext, useContext, useState, useEffect } from "react";

const CustomerProfileContext = createContext();

export const useCustomerProfile = () => {
  return useContext(CustomerProfileContext);
};

export const CustomerProfileProvider = ({ children }) => {
  const [first_name1, setfirst_name1] = useState("");
  const [last_name1, setlast_name1] = useState("");
  const [email1, setEmail1] = useState("");
  const [street1, setStreet1] = useState("");
  const [city1, setCity1] = useState("");
  const [state1, setState1] = useState("");
  const [editedUsername, setEditedUsername] = useState({
    first_name: "",
    last_name: "",
  });

  const [editedAddress, setEditedAddress] = useState({
    street: "",
    city: "",
    state: "",
  });

  const loadUserProfileData = () => {
    const storedUserData = localStorage.getItem("userProfile2");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setfirst_name1(userData.first_name1);
      setlast_name1(userData.last_name1);
      setEmail1(userData.email1);
      setStreet1(userData.street1);
      setCity1(userData.city1);
      setState1(userData.state1);

      setEditedUsername({
        first_name: userData.first_name1,
        last_name: userData.last_name1,
      });

      setEditedAddress({
        street: userData.street1,
        city: userData.city1,
        state: userData.state1,
      });
    }
  };

  useEffect(() => {
    loadUserProfileData();
  }, []);

  const saveUserProfileData = () => {
    const userData = {
      first_name1,
      last_name1,
      email1,
      street1,
      city1,
      state1,
    };
    localStorage.setItem("userProfile2", JSON.stringify(userData));
  };

  useEffect(() => {
    saveUserProfileData();
  }, [first_name1, last_name1, email1, street1, city1, state1]);

  return (
    <CustomerProfileContext.Provider
      value={{
        first_name1,
        last_name1,
        setfirst_name1,
        setlast_name1,
        email1,
        setEmail1,
        editedUsername,
        setEditedUsername,
        street1,
        setStreet1,
        city1,
        setCity1,
        state1,
        setState1,
        editedAddress,
        setEditedAddress,
      }}
    >
      {children}
    </CustomerProfileContext.Provider>
  );
};
