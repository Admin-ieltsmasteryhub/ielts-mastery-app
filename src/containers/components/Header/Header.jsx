import React, { useState } from "react";
import { Container } from "reactstrap";
import "./header.css";
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
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <div><NavLink to="/" className="ri-pantone-line">IELTS Mastery Hub.</NavLink>
              </div>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu">
              <ul className="nav__list">
                {Links.navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                    {item.subLinks && (
                      <ul className="sub__list">
                        {item.subLinks.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={`sub__item ${activeSubItem === subItem ? 'active' : ''}`}
                          >
                            <a href={subItem.url} onClick={() => toggleSubItem(subItem)}>
                              {subItem.display}
                              {subItem.subLinks && (
                                <img src={nextIcon} alt="Next" className="next__icon" />
                              )}
                            </a>
                            {subItem.subLinks && activeSubItem === subItem && (
                              <ul className="sub__sub__list">
                                {subItem.subLinks.map((subSubItem, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className={`sub__sub__item ${
                                      activeSubSubItem === subSubItem ? 'active' : ''
                                    }`}
                                  >
                                    <a
                                      href={subSubItem.url}
                                      onClick={() => toggleSubSubItem(subSubItem)}
                                    >
                                      {subSubItem.display}
                                    </a>
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

          <div className="mobile__menu" onClick={toggleMobileMenu}>
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile__menu__overlay" onClick={toggleMobileMenu}>
            <div className="mobile__menu__content" onClick={(e) => e.stopPropagation()}>
              <ul className="mobile__nav__list">
                {Links.navLinksMobile.map((item, index) => (
                  <li
                    key={index}
                    className={`mobile__nav__item ${activeItem === item ? "active" : ""}`}
                  >
                    <a
                      href={item.url}
                      onClick={() =>
                        setActiveItem((prevItem) => (prevItem === item ? null : item))
                      }
                    >
                      {item.display}
                      {item.subLinks && (
                        <img src={nextIcon} alt="Next" className="next__icon" />
                      )}
                    </a>
                    {item.subLinks && activeItem === item && (
                      <ul className="mobile__sub__list">
                        {item.subLinks.map((subItem, subIndex) => (
                          <li key={subIndex} className="mobile__sub__item">
                            <a href={subItem.url}>{subItem.display}</a>
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
