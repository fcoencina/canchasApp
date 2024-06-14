
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ?? false);
  const [role, setRole] = useState(localStorage.getItem("role") ?? null);
  const [userID, setUserID] = useState(localStorage.getItem("userID") ?? null);
  const [username, setUsername] = useState(localStorage.getItem("username") ?? null);

  const login = useCallback((userRole, id, username) => {
    setIsAuthenticated(true);
    setRole(userRole);
    setUserID(id);
    setUsername(username)
    localStorage.setItem("role", userRole); // Almacena el rol en localStorage
    localStorage.setItem("userID", id); // Almacena el userID en localStorage
    localStorage.setItem("username", username); // Almacena el username en localStorage
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userID");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setRole(null);
    setUserID(null);
    setUsername(null);
  }, []);

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated,
    role,
    userID,
    username
  }), [login, logout, isAuthenticated, role, userID, username]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
