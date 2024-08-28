"use client";

import { ChangeEvent, useState } from "react";
import { Poppins } from "next/font/google";
import { useAuth } from "@/hooks/auth";
import { usePathname, useRouter } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const SignupForm = () => {
  const router = useRouter();
  const path = usePathname();
  const { signup, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEqual, setIsEqual] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(() => e.target.value);
    if (confirmPassword !== "") {
      setIsEqual(password === e.target.value);
    }
  };

  const handleFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    let success: boolean;
    if (path === "/login") {
      success = await login({ email, password });
    } else {
      success = await signup({ email: email, password: password });
    }
    if (!success) {
      router.push("/");
    }
  };

  return (
    <div className="h-full backdrop-blur-lg max-w-[40rem]  lg:px-20 px-2 container mx-auto text-black">
      <div className="h-full flex flex-col gap-y-5 justify-center items-center">
        <div className="flex flex-col items-center ">
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
              className="p-3 rounded-xl border-2 outline-[#8b969e]"
              type="email"
              placeholder="Enter email here"
              value={email}
              onChange={handleUserNameChange}
            />
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <label className="text-lg font-semibold">Password*</label>
            <input
              className="p-3 rounded-xl border-2 outline-[#8b969e]"
              type="password"
              placeholder="Enter email here"
              value={password}
              onChange={handlePasswordInputChange}
            />
          </div>
          {path === "/signup" && (
            <div className="flex w-full flex-col gap-y-2">
              <label className="text-lg font-semibold">Confirm Password*</label>
              <input
                className={`${isEqual ? "outline-[#087443]" : "outline-[#8b969e]"} p-3 rounded-xl border-2 `}
                type="password"
                placeholder="Enter email here"
                value={confirmPassword}
                onChange={handlePasswordConfirmChange}
              />
            </div>
          )}

          <button className="text-white text-xl w-full p-4 rounded-xl bg-[#087443]">
            {path === "/login" ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
