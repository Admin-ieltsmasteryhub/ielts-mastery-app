import React from 'react';
import styles from './navlink.module.css';
import { NavLink } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

function NavButton({ url }) {
  return (
    <div className={styles.course_all_link}>
    <NavLink className={styles.course_all_link} to={url}>View All <HiArrowRight></HiArrowRight></NavLink>
  </div>
  );
}

export default NavButton;
