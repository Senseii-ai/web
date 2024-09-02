"use client";

import { useRouter } from "next/navigation";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ILoginData {
  email: string;
  password: string;
}

interface ISignupData {
  email: string;
  password: string;
}

export interface ILoginContext {
  token: string | null;
  user: string | null;
  login: (data: ILoginData) => Promise<boolean>;
  signup: (data: ISignupData) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<ILoginContext | null>(null);

// Provider to provide authentication context to its child.
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const localToken = localStorage.getItem("site");
    if (!localToken) {
      router.push("/login");
    }
    setToken(localStorage.getItem("site"));
  }, []);

  const login = async ({ email, password }: ILoginData) => {
    try {
      const response = await fetch("http://localhost:9090/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status == 400) {
        throw new Error("user does not exist");
      }

      const res = await response.json();
      console.log("res data", res);
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        localStorage.setItem("site", res.accessToken);
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const signup = async ({ email, password }: ISignupData) => {
    try {
      console.log("I was here");
      const response = await fetch("http://localhost:9090/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      router.push("/login");

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, signup, logout }}>
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
