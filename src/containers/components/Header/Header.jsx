import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import styles from "./header.module.css";
import Links from "../NavLinks";
import nextIcon from "../../assets/images/next.png";
import { NavLink } from "react-router-dom";
import SearchBar from "../Search-bar/SearchBar";
import { Progress } from "semantic-ui-react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeSubSubItem, setActiveSubSubItem] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(0); // Added a state for showProgressBar

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubItem = (subItem) => {
    setActiveSubItem((prevSubItem) =>
      prevSubItem === subItem ? null : subItem
    );
  };

  function toggleSubSubItem(subSubItem) {
    const subSubMenu = subSubItem.parentElement.parentElement;
    subSubMenu.classList.toggle(styles.show);
    subSubMenu.classList.toggle(styles.flip);
  
    subSubItem.classList.toggle(styles.show);
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 100) {
      setShowProgressBar(true); // Show progress bar when scroll position is greater than 100
    } else {
      setShowProgressBar(false); // Hide progress bar otherwise
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windowHeight = window.innerHeight; // Changed from document to window
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  return (
    <>
      <style>{`
        .ui.progress {
          border-radius: 0;
        }

        .ui.progress .bar {
          border-radius: 0;
        }

        #progress-bar {
          //display: ${
            showProgressBar ? "block" : "none"
          }; // Show/hide progress bar based on showProgressBar state
        }
        .ui.progress:last-child {
          margin: 0;
      }
      .progress, .progress-stacked {
        --bs-progress-height: 1;
      }

      .ui.red.progress .bar {
        background-color: #e31837;
        min-width: 0;
        
    }
    

      `}</style>
      <header className={styles.header}>
        <Container fluid className={styles.header_container}>
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <h2 className={styles.navprop}>
                <div>
                  <NavLink to="/" className="ri-pantone-line">
                    IELTS
                  </NavLink>
                </div>
              </h2>
            </div>

            <div className={styles.nav}>
              <div className={styles.nav_menu}>
                <ul className={styles.nav_list}>
                  {Links.navLinks.map((item, index) => (
                    <li key={index} className={styles.nav_item}>
                      <NavLink to={`${item.url}`}>{item.display}</NavLink>
                      {item.subLinks && (
                        <ul className={styles.sub_list}>
                          {item.subLinks.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${styles.sub_item} ${
                                activeSubItem === subItem ? styles.active : ""
                              }`}
                            >
                              <NavLink
                                to={`${subItem.url}`}
                                onClick={() => toggleSubItem(subItem)}
                              >
                                {subItem.display}
                                {subItem.subLinks && (
                                  <img
                                    src={nextIcon}
                                    alt="Next"
                                    className={styles["next_icon"]}
                                  />
                                )}
                              </NavLink>
                              {subItem.subLinks &&
                                activeSubItem === subItem && (
                                  <ul className={styles.sub_sub_list}>
                                    {subItem.subLinks.map(
                                      (subSubItem, subSubIndex) => (
                                        <li
                                          key={subSubIndex}
                                          className={`${styles.sub_sub_item} ${
                                            activeSubSubItem === subSubItem
                                              ? styles.active
                                              : ""
                                          }`}
                                        >
                                          <NavLink
                                            to={`/${subItem.display.replace(
                                              /\s+/g,
                                              "-"
                                            )}/${subSubItem.url}`}
                                            onClick={() =>
                                              toggleSubSubItem(subSubItem)
                                            }
                                          >
                                            {subSubItem.display}
                                          </NavLink>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.search_bar}>
              <SearchBar />
            </div>
            <div className={styles.mobile_menu}>
              <div className={styles.search_bar_mobile}>
                <SearchBar />
              </div>
              <div className={styles.menu}>
                <MenuIcon onClick={toggleMobileMenu} />
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className={styles.mobile_menu_overlay}>
              <div className={styles.mobile_menu_content}>
                <div className={styles.mobile_menu_header}>
                  <NavLink to="/" className="ri-pantone-line">
                    IELTS
                  </NavLink>
                  <i onClick={toggleMobileMenu}>x</i>
                </div>
                {Links.navLinks.map((item, index) => (
                  <div className={styles.nav_mobile_item_container}>
                    <ul key={index} className={styles.nav_mobile_item}>
                      <NavLink
                        className={`${styles.nav_item_text} ${
                          activeMainItem === item ? styles.active : ""
                        }`}
                        onClick={() => setActiveMainItem(item)}
                        //className={styles.hover_underline_animation}
                        to={`${item.url}`}
                      >
                        {item.display}
                      </NavLink>
                      {activeMainItem === item && item.subLinks && (
                        <ul className={styles.sub_mobile_list}>
                          {item.subLinks.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${styles.sub_mobile_item} ${
                                activeSubItem === subItem ? styles.active : ""
                              }`}
                            >
                              <NavLink
                                className={`${styles.nav_item_text} ${
                                  activeSubItem === subItem ? styles.active : ""
                                }`}
                                to={`${subItem.url}`}
                                onClick={() => toggleSubItem(subItem)}
                              >
                                {subItem.display}
                                {subItem.subLinks && <> {">"} </>}
                              </NavLink>
                              {subItem.subLinks &&
                                activeSubItem === subItem && (
                                  <ul className={styles.sub_sub_mobile_list}>
                                    {subItem.subLinks.map(
                                      (subSubItem, subSubIndex) => (
                                        <li
                                          key={subSubIndex}
                                          className={`${styles.sub_sub_item} ${
                                            activeSubSubItem === subSubItem
                                              ? styles.active
                                              : ""
                                          }`}
                                        >
                                          <NavLink
                                            className={styles.nav_item_text}
                                            to={`/${subItem.display.replace(
                                              /\s+/g,
                                              "-"
                                            )}/${subSubItem.url}`}
                                            onClick={() =>
                                              toggleSubSubItem(subSubItem)
                                            }
                                          >
                                            {subSubItem.display}
                                          </NavLink>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
        <div id="progress-bar">
          <Progress percent={scrollPercentage} size="tiny" color="red" />
        </div>
      </header>
    </>
  );
};

export default Header;
