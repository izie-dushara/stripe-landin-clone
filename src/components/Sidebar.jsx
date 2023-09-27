import Sublink from "./Sublink";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data/data";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return <Sublink key={index} links={links} page={page} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
