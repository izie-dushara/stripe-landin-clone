import { useState, useEffect, useRef } from "react";
import SubMenuLink from "./SubMenuLink";
import { useGlobalContext } from "../hooks/useGlobalContext";
const SubMenuNav = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3")
    }

    if (links.length > 3) {
      setColumns("col-4")
    }
  }, [location, links]);
  console.log(columns);
  return (
    <aside className={`submenu ${isSubMenuOpen && "show"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <SubMenuLink key={index} label={label} icon={icon} url={url} />
          );
        })}
      </div>
    </aside>
  );
};

export default SubMenuNav;
