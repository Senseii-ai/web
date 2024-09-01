import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/hooks/auth";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

const ChatUI = ({ sideBarOpen, toggleSidebar }: IChatUIProps) => {
  const [response, setResponse] = useState("");
  const { logout } = useAuth();

  useEffect(() => {
    const serverResponse = async () => {
      const { data }: { data: string } = await axios.get(
        "http://localhost:9090/api/health",
      );
      setResponse(data);
    };

    serverResponse();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`${sideBarOpen ? "justify-end" : "justify-end"} flex flex-col h-full w-full`}
    >
      <div className={`${sideBarOpen ? "hidden" : "block"} absolute top-0 `}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      {/* FIX: Add Logout button */}
      {/* <div className="self-end border-green-500 border-2 p-2 rounded-lg mr-5 mt-2"> */}
      {/*   <button onClick={handleLogout}>Logout</button> */}
      {/* </div> */}
      <div className="flex flex-col overflow-auto items-center w-full pt-5">
        <div
          className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex flex-col-reverse gap-y-5 py-2`}
        >
          {messages?.map((item, index) => {
            return <ChatBlob key={index} content={item} />;
          })}
        </div>
      </div>
      <div className="flex self-end flex-col items-center w-full pb-5">
        <ChatInput sideBarOpen={sideBarOpen} />
      </div>
    </div>
  );
};

      <div className="flex self-end flex-col items-center w-full">
        <button onClick={handleLogout}>Logout</button>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatUI;
