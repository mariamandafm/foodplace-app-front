import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("site")? true : false);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async(data) => {
    try {
      const response = await api.post("user/token/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data) {
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("site", response.data.token);
        navigate("/user-panel");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setToken("");
    setIsAuthenticated(false);
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
