"use client";

import React, { useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";
import Login from "./login/page";

import { useAuth } from "@/hooks/auth";
import { ILoginContext } from "@/hooks/auth";

const Home: React.FC = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);
  const { token }: ILoginContext = useAuth();
  console.log("This is the token", token);
  if (token === null) {
    return <Login />;
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
