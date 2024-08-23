import ToggleSidebarIcon from "./ToggleSideBar";
import React from "react";

interface ISidebarProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<ISidebarProps> = ({
  sideBarOpen,
  toggleSidebar,
}: ISidebarProps) => {
  return (
    <div
      className={`${sideBarOpen ? "w-1/4" : "w-0 hidden"} border-gray-300 border-r`}
    >
      <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
    </div>
  );
};

export default SideBar;
