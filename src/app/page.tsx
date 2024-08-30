"use client";

import React, { useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";

import { useAuth } from "@/hooks/auth";
import { ILoginContext } from "@/hooks/auth";
import { redirect } from "next/navigation";

const Home: React.FC = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);
  const { token }: ILoginContext = useAuth();
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
