import React from 'react';
import styles from './navlink.module.css';
import { NavLink } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

function NavButton({ url ,icon,linkText,textAlign}) {
  return (
    <div >
    <NavLink className={styles.course_all_link} to={url}>{linkText}{icon}</NavLink>
  </div>
  );
}

export default NavButton;
