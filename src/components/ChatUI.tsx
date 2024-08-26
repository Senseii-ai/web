import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatUI = ({ sideBarOpen, toggleSidebar }: IChatUIProps) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const serverResponse = async () => {
      const { data }: { data: string } = await axios.get(
        "http://localhost:9090/api/health",
      );
      setResponse(data);
    };

    serverResponse();
  }, []);

  return (
    <div
      className={`${sideBarOpen ? "justify-end" : "justify-between"} flex flex-col w-full h-full`}
    >
      <div className={`${sideBarOpen ? "hidden" : "block"}`}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>

      {response}
      <div className="flex self-end flex-col items-center w-full">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatUI;
