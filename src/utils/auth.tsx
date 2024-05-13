import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export type AuthContextType = {
  user?: string | null;
  login?: (user: string) => void;
  logout?: () => void;
};

const AuthContext = createContext<AuthContextType>({});
const Provider = AuthContext.Provider;
export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return <Provider value={{ user, login, logout }}>{children}</Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
