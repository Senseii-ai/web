"use client";

import { useState } from "react";
import SideBar from "@/components/Sidebar";
import ToggleSidebarIcon from "@/components/ToggleSideBar";

const Home = () => {
  const [sideBarOpen, toggleSidebar] = useState(true);

  const handleSidebarToggle = () => {
    toggleSidebar(!sideBarOpen);
  };
  return (
    <div className="flex h-full">
      <SideBar sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      <div>
        <div className={`${sideBarOpen ? "hidden" : "block"}`}>
          <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};
export default Home;
