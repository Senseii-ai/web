"use client";

import { useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";

const Home = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);

  const handleSidebarToggle = () => {
    toggleSidebar(!sideBarOpen);
  };
  return (
    <div className="flex w-full h-full">
      <SideBar sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      <div className="w-full flex">
        <ChatUI sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      </div>
    </div>
  );
};
export default Home;
