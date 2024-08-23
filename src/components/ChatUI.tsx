import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatUI = ({ sideBarOpen, toggleSidebar }: IChatUIProps) => {
  return (
    <div className="w-full ">
      <div className={`${sideBarOpen ? "hidden" : "block"}`}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      <div className="flex justify-between h-full flex-col items-center w-full">
        <div>I am Chat UI</div>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatUI;
