import { useState } from "react";
import { AuthContext } from "./authContext";
import AuthStatus from "./AuthStatus";
export default function AuthProvider() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);

  const login = (value) => setIsAuthenticated(value);
  const logout = (value) => setIsAuthenticated(value);

  const addUserName = (name) => setUserName(name);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userName, addUserName }}
    >
      <AuthStatus />
    </AuthContext.Provider>
  );
}
