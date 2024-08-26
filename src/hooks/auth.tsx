"use client";

import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginContext {
  token: string | null;
  user: string | null;
  login: (data: ILoginData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<ILoginContext | null>(null);

// Provider to provide authentication context to its child.
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  // const [token, setToken] = useState(window.localStorage.getItem("site") || "");
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const browserToken = localStorage.getItem("site");
    setToken(browserToken);
  }, []);

  const login = async ({ username, password }: ILoginData) => {
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
      console.log("Got the data here", username, password);
      const tempToken = "akjjhgjhg2jhgjhg2jhg2jhg2j";
      const tempName = "Prateek";
      setUser(tempName);
      setToken(tempToken);
      localStorage.setItem("checkThis", tempToken);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = () => {
    setUser("");
    setToken(null);
    localStorage.removeItem("checkThis");
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
