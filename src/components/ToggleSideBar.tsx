import { FiSidebar } from "react-icons/fi";

interface IToggleSidebarIconProps {
  handleSidebarToggle: () => void;
}

const ToggleSidebarIcon = ({
  handleSidebarToggle,
}: IToggleSidebarIconProps) => {
  return (
    <div className="p-2" onClick={handleSidebarToggle}>
      <FiSidebar className="w-8 h-8" />
    </div>
  );
};

export default ToggleSidebarIcon;
