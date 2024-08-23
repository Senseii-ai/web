import ToggleSidebarIcon from "./ToggleSideBar";

const SideBar = ({ sideBarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${sideBarOpen ? "w-1/4" : "w-0 hidden"} border-gray-300 border-r`}
    >
      <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
    </div>
  );
};

export default SideBar;
