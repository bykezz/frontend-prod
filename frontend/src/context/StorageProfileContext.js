import { createContext, useContext, useState, useEffect } from "react";

const StorageProfileContext = createContext();

export const useStorageProfile = () => {
  return useContext(StorageProfileContext);
};

export const StorageProfileProvider = ({ children }) => {
  const [first_name3, setfirst_name3] = useState("");
  const [last_name3, setlast_name3] = useState("");
  const [email3, setEmail3] = useState("");
  const [street3, setStreet3] = useState("");
  const [city3, setCity3] = useState("");
  const [state3, setState3] = useState("");
  const [storageName, setStorageName] = useState("");
  const [editedStorageName, setEditedStorageName] = useState({
    storage_name: "",
  });

  const [editedAddress, setEditedAddress] = useState({
    street: "",
    city: "",
    state: "",
  });

  const loadUserProfileData = () => {
    const storedUserData = localStorage.getItem("userProfile4");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setfirst_name3(userData.first_name3);
      setlast_name3(userData.last_name3);
      setEmail3(userData.email3);
      setStreet3(userData.street3);
      setCity3(userData.city3);
      setState3(userData.state3);
      setStorageName(userData.storageName);

      setEditedStorageName({
        storage_name: userData.storageName,
      });

      setEditedAddress({
        street: userData.street3 || street3,
        city: userData.city3 || city3,
        state: userData.state3 || state3,
      });
    }
  };

  useEffect(() => {
    loadUserProfileData();
  }, []);

  const saveUserProfileData = () => {
    const userData = {
      first_name3,
      last_name3,
      email3,
      street3,
      city3,
      state3,
      storageName,
    };
    localStorage.setItem("userProfile4", JSON.stringify(userData));
  };

  useEffect(() => {
    saveUserProfileData();
  }, [first_name3, last_name3, email3, street3, city3, state3, storageName]);

  return (
    <StorageProfileContext.Provider
      value={{
        first_name3,
        last_name3,
        setfirst_name3,
        setlast_name3,
        email3,
        setEmail3,
        editedStorageName,
        setEditedStorageName,
        street3,
        setStreet3,
        city3,
        setCity3,
        state3,
        setState3,
        editedAddress,
        setEditedAddress,
        storageName,
        setStorageName,
      }}
    >
      {children}
    </StorageProfileContext.Provider>
  );
};
