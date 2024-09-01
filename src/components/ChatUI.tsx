import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";
import { useEffect, useState } from "react";
import { FaInstalod } from "react-icons/fa6";
import { redirect, RedirectType, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { startChat } from "@/actions/api/threads";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

export interface IChatMessage {
  role: "user" | "assistant";
  message: string;
}

const ChatUI = ({ sideBarOpen, toggleSidebar }: IChatUIProps) => {
  const [messages, setMessages] = useState<IChatMessage[]>();
  const path = usePathname();
  const { token, logout } = useAuth();

  const threadId = path;

  const handleChatSubmit = async () => {
    if (threadId === "/") {
      // const newThreadId = await startChat(token as string);
      const newThreadId = "hello";
      redirect(`/?threadid=${newThreadId}`, RedirectType.push);
    } else {
      redirect(`/${threadId}`);
    }
  };

  useEffect(() => {
    const getThreadMessages = async () => {
      const bearer = "Bearer" + token;
      const data = await fetch("http://localhost:9090/api/threads/1/messages", {
        headers: {
          Authorization: bearer,
        },
      });
      console.log("These are the threads", await data.json());
      setMessages(await data.json());
    };

    // getThreadMessages();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`${sideBarOpen ? "justify-end" : "justify-end"} flex flex-col w-full h-full`}
    >
      <div className={`${sideBarOpen ? "hidden" : "block"} absolute top-0 `}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      {/* FIX: Add logout functionality */}
      <div className="self-end border-green-500 border-2 p-2 rounded-lg mr-5 mt-2">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="flex flex-col overflow-auto items-center w-full pt-5">
        <div
          className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex flex-col-reverse gap-y-5 py-2`}
        >
          {/* {messages.map((item, index) => { */}
          {/*   return <ChatBlob key={index} content={item} />; */}
          {/* })} */}
        </div>
      </div>
      <div className="flex self-end flex-col items-center w-full pb-5">
        <ChatInput
          sideBarOpen={sideBarOpen}
          handleChatSubmit={handleChatSubmit}
        />
      </div>
    </div>
  );
};

const ChatBlob = ({ content }: { content: IChatMessage }) => {
  return (
    <div className={`${content.role === "user" ? "self-end" : "self-start"}`}>
      <div
        className={`${content.role === "user" ? "rounded-t-2xl rounded-bl-2xl bg-[#68ac7b] text-white px-3 py-3" : "rounded-2xl ring-1 ring-[#68ac7b] bg-[#e1eee5] px-2 py-2"} drop-shadow-xl  flex gap-x-5 items-center justify-center  `}
      >
        {content.role === "assistant" && (
          <div className="ring-1 ring-black rounded-full p-2">
            <FaInstalod className="text-xl" />
          </div>
        )}
        {content.message}
      </div>
    </div>
  );
};

export default ChatUI;
