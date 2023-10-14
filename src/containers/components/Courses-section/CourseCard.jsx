import React from "react";
import styles from './coursescard.module.css'
import { Button } from "semantic-ui-react";
import PostButton from "../Button/Button";



const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;
  
  return (
    <div className={styles.single_course_item}>
      <div className={styles.course_img}>
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className={styles.course_details}>
        

        <div className={styles.design}>
        <h6>{title}</h6>
          <span className={styles.main_design}>
            
            <i className="ri-book-open-line">{lesson} Lessons</i>
            <i className="ri-user-line">{students}K</i>
          </span>
        </div>
        <PostButton buttonText='Enroll Now'/> 
{/* 
        <div className="d-flex justify-content-between align-items-center">
          <p className={`${styles.rating} d-flex align-items-center gap-1`}>
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className={`${styles.enroll} d-flex align-items-center gap-1`}>
            <a href="facebook.com"> Enroll Now</a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
