import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const login = (newToken, newUsername) => {
    console.log("logging in")
    setToken(newToken);
    setUsername(newUsername);
    console.log(newUsername)
    localStorage.setItem("jwt", newToken);
    localStorage.setItem("username", newUsername);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("jwt");
    setUsername(null);
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};
