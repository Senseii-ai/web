"use client";

import { ChangeEvent, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const success = await login({ email: email, password: password });
    // console.log("This is the response", success);
    // if (!success) {
    //   resetForm();
    // }
  };

  return (
    <div className="h-full max-w-[40rem] lg:px-20 px-2 container mx-auto text-black">
      <div className="h-full flex flex-col gap-y-5 justify-center items-center">
        <div className="flex flex-col items-center">
          <h1
            className={`${poppins.className} lg:hidden text-4xl font-semibold text-black mb-20 text-center`}
          >
            Senseii AI
          </h1>

          <h1 className="text-black font-semibold text-3xl">
            Create a free account
          </h1>
          <h3 className="text-[#bdbdbf] text-center text-lg">
            Provide your email and choose a password
          </h3>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col gap-y-5 items-start"
        >
          <div className="flex w-full flex-col gap-y-2">
            <label className="text-lg font-semibold">Email*</label>
            <input
              className="p-3 rounded-xl border border-[#8b969e]"
              type="email"
              placeholder="Enter email here"
              value={email}
              onChange={handleUserNameChange}
            />
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <label className="text-lg font-semibold">Password*</label>
            <input
              className="p-3 rounded-xl border border-[#8b969e]"
              type="email"
              placeholder="Enter email here"
              value={password}
              onChange={handlePasswordInputChange}
            />
          </div>

          <button className="text-white text-xl w-full p-4 rounded-xl bg-[#087443]">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
