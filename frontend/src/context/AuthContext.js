import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(Cookies.get("jwtToken") || null);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check for the presence of a JWT token during component initialization
    const jwtToken = Cookies.get("jwtToken");
    const storedUserRole = Cookies.get("userRole");
    const storedUserName = Cookies.get("userName");
    const storedUserId = Cookies.get("userId");
    if (jwtToken) {
      setIsLoggedIn(true);
      setToken(jwtToken);
      setUserRole(storedUserRole);
      setUserName(storedUserName);
      setUserId(storedUserId);
    }

    console.log("userRole:", storedUserRole);
    console.log("userName:", storedUserName);
    console.log("userid:", storedUserId);
  }, []);

  const handleLoginSuccess = useCallback(
    (token, userRole, userName, userId) => {
      setIsLoggedIn(true);
      setToken(token);
      Cookies.set("jwtToken", token, { secure: true, sameSite: "strict" });
      Cookies.set("userRole", userRole, { secure: true, sameSite: "strict" });
      Cookies.set("userName", userName, { secure: true, sameSite: "strict" });
      Cookies.set("userId", userId, { secure: true, sameSite: "strict" });
    },
    []
  );

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    Cookies.remove("jwtToken");
    setUserRole("");
    setUserName("");
    setUserId("");
  }, []);

  const value = {
    isLoggedIn,
    token,
    handleLoginSuccess,
    handleLogout,
    setUserRole,
    userRole,
    userName,
    setUserName,
    userId,
    setUserId,
    selectedOption,
    setSelectedOption,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
