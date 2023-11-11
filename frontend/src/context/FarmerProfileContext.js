import { createContext, useContext, useState, useEffect } from "react";

const FarmerProfileContext = createContext();

export const useFarmerProfile = () => {
  return useContext(FarmerProfileContext);
};

export const FarmerProfileProvider = ({ children }) => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [farmState, setFarmState] = useState("");
  const [farmersProducts, setFarmersProducts] = useState([]);
  const [id, setId] = useState(null);
  const [editedUsername, setEditedUsername] = useState({
    first_name: "", // Provide default value here
    last_name: "", // Provide default value here
  });
  const [editedFarmInfo, setEditedFarmInfo] = useState({
    farm_name: "", // Provide default value here
  });
  const [editedFarmAddress, setEditedFarmAddress] = useState({
    street: "", // Provide default value here
    city: "", // Provide default value here
    state: "", // Provide default value here
  });
  const [selectedImage, setSelectedImage] = useState({
    image: null,
  });
  const [profilePicture, setProfilePicture] = useState(null);

  const loadUserProfileData = () => {
    const storedUserData = localStorage.getItem("userProfile1");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setfirst_name(userData.first_name);
      setlast_name(userData.last_name);
      setEmail(userData.email);
      setFarmName(userData.farmName);
      setStreet(userData.street);
      setCity(userData.city);
      setFarmState(userData.farmState);
      setProfilePicture(userData.profilePicture);
      setSelectedImage(userData.selectedImage);
      setId(userData.id);
      setEditedUsername({
        first_name: userData.first_name,
        last_name: userData.last_name,
      });

      setEditedFarmInfo({
        farm_name: userData.farmName || farmName,
      });
      setEditedFarmAddress({
        street: userData.street,
        city: userData.city,
        state: userData.farmState,
      });
    }
  };

  // Load user profile data when the context provider mounts
  useEffect(() => {
    loadUserProfileData();
    console.log("loadUserProfileData triggered");
  }, []);

  // Function to save user profile data to localStorage
  const saveUserProfileData = () => {
    const userData = {
      first_name,
      last_name,
      email,
      farmName,
      street,
      city,
      farmState,
      selectedImage,
      profilePicture,
      id,
    };
    localStorage.setItem("userProfile1", JSON.stringify(userData));
  };

  useEffect(() => {
    saveUserProfileData();
    console.log("saveUserProfileData triggered");
  }, [
    first_name,
    last_name,
    email,
    farmName,
    street,
    city,
    farmState,
    id,
    profilePicture,
    selectedImage,
  ]);

  return (
    <FarmerProfileContext.Provider
      value={{
        first_name,
        last_name,
        setfirst_name,
        setlast_name,
        email,
        setEmail,
        farmName,
        setFarmName,
        editedFarmInfo,
        setEditedFarmInfo,
        editedUsername,
        setEditedUsername,
        street,
        setStreet,
        city,
        setCity,
        farmState,
        setFarmState,
        editedFarmAddress,
        setEditedFarmAddress,
        profilePicture,
        setProfilePicture,
        selectedImage,
        setSelectedImage,
        farmersProducts,
        setFarmersProducts,
        id,
        setId,
      }}
    >
      {children}
    </FarmerProfileContext.Provider>
  );
};
