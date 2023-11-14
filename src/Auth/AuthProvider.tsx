import { createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserInfo {
  accessCode: string;
  accessDescription: string;
  email: string;
  username: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userInfo: {
    accessCode: "",
    accessDescription: "",
    email: "",
    username: "",
  },
  setUserInfo: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    accessCode: "",
    accessDescription: "",
    email: "",
    username: "",
  });

  const handleSetIsAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
  };

  const handleSetUserInfo = (info: UserInfo) => {
    setUserInfo(info);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated: handleSetIsAuthenticated,
        userInfo,
        setUserInfo: handleSetUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
