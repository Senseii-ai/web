import { useAuth } from "@/hooks/auth";
import ToggleSidebarIcon from "./ToggleSideBar";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ISidebarProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

interface IThreadList {
  name: string;
  id: string;
}

const sampleThreads: IThreadList[] = [
  {
    name: "Hello",
    id: "1",
  },
  {
    name: "Again",

    id: "2",
  },
  {
    name: "Hello",

    id: "3",
  },
  {
    name: "Again",

    id: "4",
  },
];

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
    // const data = await response.json();
    setThreadList(sampleThreads);
    // setThreadList(data);
    // console.log("this is the data", data);
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
        <div>
          <Link href={"/"}>Create new Thread</Link>
        </div>
        {threadList.map((item, index) => {
          return (
            <Link key={index} href={`/${item.id}`}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
