import { useAuth } from "@/hooks/auth";
import ToggleSidebarIcon from "./ToggleSideBar";
import React, { useEffect, useState } from "react";

interface ISidebarProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

interface IThreadList {
  name: string;
}

const SideBar: React.FC<ISidebarProps> = ({
  sideBarOpen,
  toggleSidebar,
}: ISidebarProps) => {
  const [threadList, setThreadList] = useState<IThreadList[]>([]);
  const { token } = useAuth();

  const getThreads = async () => {
    const bearer = "Bearer " + token;

    const response = await fetch("http://localhost:9090/api/threads/", {
      headers: {
        Authorization: bearer,
      },
    });
    const data = await response.json();
    setThreadList(data);
    console.log("this is the data", data);
  };

  useEffect(() => {
    if (token) {
      getThreads();
    }
  }, [token]);

  return (
    <div
      className={`${sideBarOpen ? "w-1/4" : "w-0 hidden"} border-gray-300 border-r`}
    >
      <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      <div>
        {threadList.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SideBar;
