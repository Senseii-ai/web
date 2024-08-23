"use client";

import { useState } from "react";

const ChatInput = () => {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div className="w-1/2 flex rounded-xl my-5 justify-center">
      <form className="w-full flex justify-center">
        <input
          value={userMessage}
          type="text"
          name="name"
          placeholder="How can I help you"
          className="bg-gray-600 text-white rounded-xl py-5 w-full px-5"
          required
          onChange={(e) => setUserMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatInput;
