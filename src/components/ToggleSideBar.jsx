import { FiSidebar } from "react-icons/fi";

const ToggleSidebarIcon = ({ handleSidebarToggle }) => {
  return (
    <div className="p-2" onClick={handleSidebarToggle}>
      <FiSidebar className="w-8 h-8" />
    </div>
  );
};

export default ToggleSidebarIcon;
