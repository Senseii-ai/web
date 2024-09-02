import { startChat } from "@/actions/api/threads";
import { useAuth } from "@/hooks/auth";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoMdSend } from "react-icons/io";

interface IChatInputProps {
  sideBarOpen: boolean;
  threadId: string;
}

const ChatInput = ({ sideBarOpen, threadId }: IChatInputProps) => {
  const [userMessage, setUserMessage] = useState("");
  const { token } = useAuth();
  const router = useRouter();

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (threadId === "") {
      console.log("creating a new thread and run");
      const newThreadId = await startChat(token as string, userMessage);
      if (!newThreadId) {
        console.error("Internal server error");
      }
      router.push(`/${newThreadId}`);
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
