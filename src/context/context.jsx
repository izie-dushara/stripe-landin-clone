import { useState, createContext } from "react";
import sublinks from "../data/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSidebarOpen,
        openSubMenu,
        openSidebar,
        closeSubMenu,
        closeSidebar,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
