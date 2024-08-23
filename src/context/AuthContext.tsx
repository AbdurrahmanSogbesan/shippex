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
  isLoading: boolean;
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { fullName } = JSON.parse(storedAuth) as AuthData;
      setIsLoggedIn(true);
      setFullName(fullName);
    }
    setIsLoading(false);
  }, []);

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
    <AuthContext.Provider
      value={{ isLoggedIn, fullName, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
