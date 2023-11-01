import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get(
          "https://orbitback.onrender.com/auth/me",
          {
            withCredentials: true,
          }
        );

        if (response.data && response.data._id) {
          setIsLoggedIn(true);
          setuserData(response.data);
        } else {
          setIsLoggedIn(false);
          setuserData({});
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUserData({});
      }
    };
    checkUser();
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
