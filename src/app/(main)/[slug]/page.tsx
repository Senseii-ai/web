"use client";

import React, { useState, useEffect } from "react";
import SideBar from "@/components/Sidebar";
import ChatUI from "@/components/ChatUI";
import { getThreadMessages } from "@/actions/api/threads";
import { useAuth } from "@/hooks/auth";
import { Message } from "openai/src/resources/beta/threads/messages.js";

const Chat = ({ params }: { params: { slug: string } }) => {
  const [sideBarOpen, toggleSidebar] = useState(true);
  const handleSidebarToggle = () => {
    toggleSidebar((sideBarOpen) => !sideBarOpen);
  };
  const { token } = useAuth();
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    // get all the messages in the thread
    const threadId = "thread_A0BouZ0cNpcJHVBp7xccwuju";
    const getMessages = async () => {
      console.log("I was called after");
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
    <div className="flex w-full h-full">
      <SideBar sideBarOpen={sideBarOpen} toggleSidebar={handleSidebarToggle} />
      <div className="w-full">
        <ChatUI
          sideBarOpen={sideBarOpen}
          toggleSidebar={handleSidebarToggle}
          messages={messages as Message[]}
        />
      </div>
    </div>
  );
};
export default Chat;
