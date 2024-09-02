import { useAuth } from "@/hooks/auth";
import ToggleSidebarIcon from "./ToggleSideBar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getThreads } from "@/actions/api/threads";

interface ISidebarProps {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

export interface IThreadList {
  name: string;
  id: string;
}

const SideBar: React.FC<ISidebarProps> = ({
  sideBarOpen,
  toggleSidebar,
}: ISidebarProps) => {
  const [threadList, setThreadList] = useState<IThreadList[] | null>([]);
  const { token } = useAuth();

  const getThreadList = async () => {
    const data = await getThreads(token as string);
    setThreadList(data);
  };

  useEffect(() => {
    if (token) {
      getThreadList();
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
        {threadList?.map((item, index) => {
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
