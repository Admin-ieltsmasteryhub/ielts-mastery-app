import React, { useState } from "react";
import { Container } from "reactstrap";
import styles from "./header.module.css";
import Links from "../NavLinks";
import nextIcon from "../../assets/images/next.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeSubSubItem, setActiveSubSubItem] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubItem = (subItem) => {
    setActiveSubItem((prevSubItem) => (prevSubItem === subItem ? null : subItem));
  };

  const toggleSubSubItem = (subSubItem) => {
    setActiveSubSubItem((prevSubSubItem) => (prevSubSubItem === subSubItem ? null : subSubItem));
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <h2 className={styles.navprop}>
              <div><NavLink to="/" className='ri-pantone-line'>IELTS </NavLink>
              </div>
            </h2>
          </div>

          <div className={styles.nav}>
            <div className={styles.nav__menu}>
              <ul className={styles.nav__list}>
                {Links.navLinks.map((item, index) => (
                  <li key={index} className={styles.nav__item}>
                    <NavLink className={styles["hover-underline-animation"]} to={`${item.url}`}>{item.display}</NavLink>
                    {item.subLinks && (
                      <ul className={styles["sub__list"]}>
                        {item.subLinks.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={`${styles["sub__item"]} ${activeSubItem === subItem ? styles.active : ''}`}
                          >
                            <NavLink to={`${subItem.url}`} onClick={() => toggleSubItem(subItem)}>
                              {subItem.display}
                              {subItem.subLinks && (
                                <img src={nextIcon} alt="Next" className={styles["next__icon"]} />
                              )}
                            </NavLink>
                            {subItem.subLinks && activeSubItem === subItem && (
                              <ul className={styles["sub__sub__list"]}>
                                {subItem.subLinks.map((subSubItem, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className={`${styles["sub__sub__item"]} ${
                                      activeSubSubItem === subSubItem ? styles.active : ''
                                    }`}
                                  >
                                    <NavLink
                                      to={`/${subItem.display.replace(/\s+/g, "-")}/${subSubItem.url}`}
                                      onClick={() => toggleSubSubItem(subSubItem)}
                                    >
                                      {subSubItem.display}
                                    </NavLink>
                                  </li>
                                ))}
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

          <div className={styles["mobile__menu"]} onClick={toggleMobileMenu}>
            <span>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={styles["mobile__menu__overlay"]} onClick={toggleMobileMenu}>
            <div className={styles["mobile__menu__content"]} onClick={(e) => e.stopPropagation()}>
              <ul className={styles["mobile__nav__list"]}>
                {Links.navLinksMobile.map((item, index) => (
                  <li
                    key={index}
                    className={`mobile__nav__item ${activeItem === item ? styles.active : ""}`}
                  >
                    <NavLink
                      to={item.url}
                      onClick={() =>
                        setActiveItem((prevItem) => (prevItem === item ? null : item))
                      }
                    >
                      {item.display}
                      {item.subLinks && (
                        <img src={nextIcon} alt="Next" className={styles["next__icon"]} />
                      )}
                    </NavLink>
                    {item.subLinks && activeItem === item && (
                      <ul className={styles["mobile__sub__list"]}>
                        {item.subLinks.map((subItem, subIndex) => (
                          <li key={subIndex} className={styles["mobile__sub__item"]}>
                            <NavLink to={subItem.url}>{subItem.display}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
