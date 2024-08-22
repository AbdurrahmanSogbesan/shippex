import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthData {
  fullName: string;
}

interface TAuthContext {
  isLoggedIn: boolean;
  fullName: string | null;
  login: (fullName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const useAuth = (): TAuthContext => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storedAuth = localStorage.getItem("auth");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!storedAuth);
  const [fullName, setFullName] = useState<string | null>(
    storedAuth ? JSON.parse(storedAuth).fullName : null
  );

  useEffect(() => {
    if (storedAuth) {
      const { fullName } = JSON.parse(storedAuth) as AuthData;
      setIsLoggedIn(true);
      setFullName(fullName);
    }
  }, [storedAuth]);

  const login = (fullName: string) => {
    setIsLoggedIn(true);
    setFullName(fullName);
    localStorage.setItem("auth", JSON.stringify({ fullName }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setFullName(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, fullName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
