"use client";

import { useContext, createContext, ReactNode, useState } from "react";

interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginContext {
  token: string | null;
  user: string | null;
  // login: (data: ILoginData) => Promise<void>;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<ILoginContext | null>(null);

// Provider to provide authentication context to its child.
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("site") || "");

  const login = async () => {
    try {
      // const response = await fetch("http://localhost:9090/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      //
      // const res = await response.json();
      // if (res.data) {
      //   setUser(res.data.user);
      //   setToken(res.token);
      //   localStorage.setItem("site", res.token);
      // }
      const tempToken = "akjjhgjhg2jhgjhg2jhg2jhg2j";
      const tempName = "Prateek";
      setUser(tempName);
      setToken(tempToken);
      localStorage.setItem("site", tempToken);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// custom hook
export const useAuth = (): ILoginContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
