import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const handleLogin = () => setLogin(true);
  const handleLogout = () => setLogin(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
