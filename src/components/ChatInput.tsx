import { useState } from "react";

const ChatInput = ({ sideBarOpen }: { sideBarOpen: boolean }) => {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div
      className={`${sideBarOpen ? "w-11/12" : "w-2/3"} flex rounded-xl justify-center`}
    >
      <form className="w-full flex justify-center">
        <input
          value={userMessage}
          type="text"
          name="name"
          placeholder="Message Senseii"
          className={`w-full p-3 rounded-xl border-2 outline-[#8b969e]`}
          required
          onChange={(e) => setUserMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatInput;
