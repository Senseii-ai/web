"use client";

import React, { useState } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";

const Home: React.FC = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);
  const handleSidebarToggle = () => {
    toggleSidebar((sideBarOpen) => !sideBarOpen);
  };

  return (
    <div className="flex w-full h-full">
      <SideBar sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      <div className="w-full">
        <ChatUI
          sideBarOpen={sideBarOpen}
          toggleSidebar={handleSidebarToggle}
          threadId=""
        />
      </div>
    </div>
  );
};
export default Home;
