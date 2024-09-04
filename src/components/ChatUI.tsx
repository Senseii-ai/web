import ChatInput from "./ChatInput";
import ToggleSidebarIcon from "./ToggleSideBar";
import { FaInstalod } from "react-icons/fa6";
import { Message } from "openai/src/resources/beta/threads/messages.js";
import { useEffect, useState } from "react";
import { getThreadMessages } from "@/actions/api/threads";
import { useAuth } from "@/hooks/auth";
import Logout from "./Logout";

interface IChatUIProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
  threadId: string;
}

export interface IChatMessage {
  role: "user" | "assistant";
  message: string;
}

const ChatUI = ({ sideBarOpen, toggleSidebar, threadId }: IChatUIProps) => {
  const { token } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const messages = await getThreadMessages(token, threadId);
      if (messages === null) {
        setMessages([]);
        return;
      }
      setMessages(messages);
    };
    getMessages();
  }, []);

  return (
    <div
      className={`${sideBarOpen ? "justify-end" : "justify-end"} flex flex-col w-full h-full`}
    >
      <div className={`${sideBarOpen ? "hidden" : "block"} absolute top-0 `}>
        <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      </div>
      <div className="flex flex-col overflow-auto items-center w-full pt-5">
        <div
          className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex flex-col-reverse gap-y-5 py-2`}
        >
          {messages && messages.length > 0
            ? messages.map((item, index) => {
                return <ChatBlob key={index} content={item} />;
              })
            : ""}
        </div>
      </div>
      <Logout />
      <div className="flex self-end flex-col items-center w-full pb-5">
        <ChatInput
          sideBarOpen={sideBarOpen}
          threadId={threadId}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
};

const ChatBlob = ({ content }: { content: Message }) => {
  let message = "";
  if (content.content[0].type === "text") {
    message = content.content[0].text.value;
  }
  return (
    <div
      className={`${content.role === "user" ? "self-end" : "self-start"} max-w-2xl `}
    >
      <div
        className={`${content.role === "user" ? "rounded-t-2xl rounded-bl-2xl bg-[#68ac7b] text-white px-3 py-3" : "rounded-2xl ring-1 ring-[#68ac7b] bg-[#e1eee5] px-2 py-2"} drop-shadow-xl  flex gap-x-5 items-center justify-center`}
      >
        {content.role === "assistant" && (
          <div className="ring-1 ring-black rounded-full p-2">
            <FaInstalod className="text-xl" />
          </div>
        )}
        <div className="text-black"> {message}</div>
      </div>
    </div>
  );
};

export default ChatUI;
