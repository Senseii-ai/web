"use client";

import { Bebas_Neue } from "next/font/google";
import { useAuth } from "@/hooks/auth";
import { ChangeEvent, useState } from "react";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const LoginForm = () => {
  const { login } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username: userName, password: password });
  };

  return (
    <div className="h-full">
      <div className="flex rounded-r-lg flex-col justify-between h-full text-black bg-[#6d68a6] p-10 ">
        <div className={`${bebas.className} text-white font-semibold text-6xl`}>
          Log in
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col mb-20 gap-y-5"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-base font-medium text-white">
              User Name
            </label>
            <input
              className="rounded-lg p-3 text-base"
              type="text"
              placeholder="Enter username here"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-base font-medium text-white">Password</label>
            <input
              className="rounded-lg p-3 text-sm"
              type="password"
              placeholder="Enter password here"
              value={password}
              onChange={handlePasswordInputChange}
            />
          </div>
          <button className="bg-[#d8568c] px-5 py-2 rounded-lg text-white text-lg font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
