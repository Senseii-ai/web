"use client";

import React, { useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";

import { useAuth } from "@/hooks/auth";
import { ILoginContext } from "@/hooks/auth";

const Home: React.FC = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);
  const handleClick = () => {
    login();
  };

  const { user, login }: ILoginContext = useAuth();
  console.log(user);
  if (!user) {
    return (
      <div>
        <div>Hello world</div>
        <button onClick={handleClick} className="text-white">
          Click me
        </button>
      </div>
    );
  }

  const handleSidebarToggle = () => {
    toggleSidebar((sideBarOpen) => !sideBarOpen);
  };
  return (
    <div className="flex w-full h-full">
      <SideBar sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      <div className="w-full">
        <ChatUI sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      </div>
    </div>
  );
};
export default Home;
