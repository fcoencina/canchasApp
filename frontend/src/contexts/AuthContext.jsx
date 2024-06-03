
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ?? false);
  const [role, setRole] = useState(localStorage.getItem("role") ?? null);

  const login = useCallback((userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
    localStorage.setItem("role", userRole); // Almacena el rol en localStorage
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setRole(null);
  }, []);

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated,
    role
  }), [login, logout, isAuthenticated, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContextProvider;
