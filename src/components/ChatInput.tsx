import { useState } from "react";
import { IoMdSend } from "react-icons/io";

interface IChatInputProps {
  sideBarOpen: boolean;
  handleChatSubmit: () => void;
}

const ChatInput = ({ sideBarOpen, handleChatSubmit }: IChatInputProps) => {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div
      className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex  rounded-xl justify-center`}
    >
      <form className="w-full p-3 rounded-xl border-2 outline-[#8b969e] flex justify-center">
        <input
          value={userMessage}
          type="text"
          name="name"
          placeholder="Message Senseii"
          className={`w-full`}
          required
          onChange={(e) => setUserMessage(e.target.value)}
        ></input>
        <button onClick={handleChatSubmit}>
          {<IoMdSend className="text-4xl" />}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
