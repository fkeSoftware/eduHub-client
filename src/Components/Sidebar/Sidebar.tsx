import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { menuItems } from "./SidebarMenu";
import { RiCheckboxBlankCircleFill, RiShutDownLine  } from "react-icons/ri";
import cat from "../../assets/user__cat.png"
import logoFeyza from "../../assets/profile_p.jpg"
const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className="component-layout sidebar-layout d-grid justify-space-between align-i-f-start padding-1">
      <div className="sidebar-layout__user d-flex f-direction-row justify-space-evenly align-i-center o-hidden gap-2">
        <Link to="" className=" profile-sidebar f-direction-row d-flex align-i-center justify-center o-hidden">
          <img src={logoFeyza} alt="" className="w48"/></Link>
        <div className="sidebar-layout__user__info__container d-flex f-direction-column">
          <Link className="text text-dark-mode" to="">Feyza KARANFİL ERAT</Link>
          <small className="small-text small-text-dark-mode italic">IT Manager</small>
        </div>
      </div>
      <div className="sidebar-layout__link__container d-flex f-direction-column">
        {menuItems.map((menu) => (
          <div
            key={menu.id}
            className="sidebar-layout__link f-direction-column"
          >
            <div className="d-flex f-direction-row align-i-center gap-1">
              <span className="icon">{menu.icon}</span>
              <Link
                to="#"
                className="big-text-dark-mode d-flex align-i-center"
                onClick={() => toggleExpand(menu.id)}
              >
                {""}
                <span className="title">{menu.title}</span>
              </Link>
            </div>
            <div
              className={`sidebar-layout__link__submenu d-flex f-direction-column  ${
                expandedMenu === menu.id ? "is-visible" : ""
              }`}
            >
              {menu.links.map((link) => (
                <Link className="text-dark-mode" key={link.path} to={link.path}>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  <span>
                    {" "}
                    <b>{link.label}</b>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar-layout__action text-right">
        <Link to="" className="first-head text-warning"><RiShutDownLine /></Link>
      </div>
    </div>
  );
};

export default Sidebar;
