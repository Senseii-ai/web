import { continueChat, startChat } from "@/actions/api/threads";
import { useAuth } from "@/hooks/auth";
import { usePathname, useRouter } from "next/navigation";
import { Message } from "openai/src/resources/beta/threads/messages.js";
import React, { FormEvent, useState } from "react";
import { IoMdSend } from "react-icons/io";

interface IChatInputProps {
  sideBarOpen: boolean;
  threadId: string;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInput = ({
  sideBarOpen,
  threadId,
  messages,
  setMessages,
}: IChatInputProps) => {
  const [userMessage, setUserMessage] = useState("");
  const { token } = useAuth();
  const router = useRouter();

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (threadId === "") {
      const newThreadId = await startChat(token as string, userMessage);
      if (!newThreadId) {
        console.error("Internal server error");
      }
      router.push(`/${newThreadId}`);
    } else {
      const response: Message[] | null = await continueChat(
        token,
        threadId,
        userMessage,
      );
      if (response === null) {
        console.error("Error talking to server");
        return;
      }
      if (response[0].content[0].type === "text") {
        const assistantResponse = response[0];
        const userMessage = response[1];
        setMessages([assistantResponse, userMessage, ...messages]);
      }
    }
  };

  return (
    <div
      className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex  rounded-xl justify-center`}
    >
      <form
        onSubmit={(e) => handleChatSubmit(e)}
        className="w-full p-3 rounded-xl border-2 outline-[#8b969e] flex justify-center"
      >
        <input
          value={userMessage}
          type="text"
          name="name"
          placeholder="Message Senseii"
          className={`w-full`}
          required
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button type="submit">{<IoMdSend className="text-4xl" />}</button>
      </form>
    </div>
  );
};

export default ChatInput;
