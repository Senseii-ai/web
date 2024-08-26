import axios from "axios";
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
  useEffect(() => {
    const getThreads = async () => {
      const { data } = await axios.get(
        "http://localhost:9090/api/health/threads",
      );
      const threads = data.message;
      console.log("This is fetched threads", threads);

      setThreadList(threads);
    };
    getThreads();
  }, []);

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
