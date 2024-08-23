import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatUI = ({ sideBarOpen, toggleSidebar }: IChatUIProps) => {
  return (
    <div
      className={`${sideBarOpen ? "justify-end" : "justify-between"} flex flex-col w-full h-full`}
    >
      <div className={`${sideBarOpen ? "hidden" : "block"}`}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      <div className="flex self-end flex-col items-center w-full">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatUI;
