// MobileHeader.js
import React from "react";
import styles from "./mobileStyles.module.css";
import Links from "../NavLinks";
import nextIcon from "../../assets/images/next.png";
import { NavLink } from "react-router-dom";
import SearchBar from "../Search-bar/SearchBar";
import MenuIcon from "@mui/icons-material/Menu";

const MobileHeader = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  setActiveMainItem,
  activeMainItem,
  toggleSubItem,
  activeSubItem,
  toggleSubSubItem,
  activeSubSubItem,
}) => {
  return (
    <div className={styles.mobile_menu_overlay}>
      <div className={styles.mobile_menu_content}>
        <div className={styles.mobile_menu_header_container}>
          <div className={styles.mobile_menu_header}>
            <NavLink to="/">IELTS</NavLink>
            <i onClick={toggleMobileMenu}>x</i>
          </div>
        </div>
        <div className={styles.mobile_menu_links_container}>
          {Links.navLinks.map((item, index) => (
            <div className={styles.mobile_menu_container} key={index}>
              <div className={styles.menu_item} onClick={() => setActiveMainItem(item)}>
                {item.display}
              </div>
              {activeMainItem === item && item.subLinks && (
                <div
                  className={`${styles.mobile_submenu_container} ${
                    activeMainItem === item ? styles.active : ""
                  }`}
                >
                  <div className={styles.menu_item} onClick={() => setActiveMainItem(null)}>
                    {"<"} Back
                  </div>
                  {item.subLinks.map((subItem, subIndex) => (
                    <div key={subIndex} className={styles.menu_item}>
                      <NavLink
                        className={styles.links}
                        to={`${subItem.url}`}
                        onClick={() => toggleSubItem(subItem)}
                      >
                        {subItem.display}
                        {subItem.subLinks && <> {">"} </>}
                      </NavLink>

                      {subItem.subLinks && activeSubItem === subItem && (
                        <>
                          <div className={styles.sub_menu_item}>
                            {subItem.subLinks.map((subSubItem, subSubIndex) => (
                              <div
                                key={subSubIndex}
                                className={`${styles.menu_item} ${
                                  activeSubSubItem === subSubItem ? styles.active : ""
                                }`}
                              >
                                <NavLink
                                  className={styles.linkssub}
                                  to={`/${subItem.display.replace(/\s+/g, "-")}/${subSubItem.url}`}
                                  onClick={() => toggleSubSubItem(subSubItem)}
                                >
                                  {subSubItem.display}
                                </NavLink>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
