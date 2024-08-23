import ToggleSidebarIcon from "./ToggleSideBar";

const ChatUI = ({ sideBarOpen, toggleSidebar }) => {
  return (
    <div className="w-full h-full">
      <div className={`${sideBarOpen ? "hidden" : "block"}`}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div>I am Chat UI</div>
      </div>
    </div>
  );
};

export default ChatUI;
