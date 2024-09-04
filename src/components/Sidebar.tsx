import { useAuth } from "@/hooks/auth";
import ToggleSidebarIcon from "./ToggleSideBar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getThreads } from "@/actions/api/threads";
import { useRouter } from "next/navigation";

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
  }, []);

  return (
    <div
      className={`${sideBarOpen ? "w-1/4" : "w-0 hidden"} border-gray-300 border-r`}
    >
      <ToggleSidebarIcon handleSidebarToggle={toggleSidebar} />
      <div className="px-2 my-5">
        <CreateNewThread />
        <div className="flex flex-col mt-5 h-full overflow-y-auto">
          {threadList?.map((item, index) => {
            return <ThreadListItem key={index} item={item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CreateNewThread = () => {
  return (
    <div className="flex rounded-xl items-center justify-center ring ring-green-600 text-lg font-semibold p-2">
      <Link href={"/"}>Create new Chat</Link>
    </div>
  );
};

const ThreadListItem = ({ item, index }: { item: string; index: number }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/${item}`);
  };
  return (
    <div onClick={onClickHandler} className="text-black">
      Thread {index}
    </div>
  );
};

export default SideBar;
