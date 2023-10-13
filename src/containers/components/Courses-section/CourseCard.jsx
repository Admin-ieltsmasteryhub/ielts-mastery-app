import React from "react";
import styles from './coursescard.module.css'

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className={styles.single_course_item}>
      <div className={styles.course_img}>
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className={styles.course_details}>
        <h6 className={styles.course_title}>{title}</h6>

        <div className="d-flex justify-content-between align-items-center">
          <p className={`${styles.lesson} d-flex align-items-center gap-1`}>
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className={`${styles.students} d-flex align-items-center gap-1`}>
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <p className={`${styles.rating} d-flex align-items-center gap-1`}>
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className={`${styles.enroll} d-flex align-items-center gap-1`}>
            <a href="facebook.com"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
