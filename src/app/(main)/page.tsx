"use client";

import React, { useEffect, useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI, { IChatMessage } from "@/components/ChatUI";
import { useAuth } from "@/hooks/auth";

const Home: React.FC = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);
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
