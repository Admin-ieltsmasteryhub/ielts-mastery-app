import React from "react";
import styles from './testimonialcard.module.css'
import { Button } from "semantic-ui-react";
import PostButton from "../Button/Button";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

const TestimonialCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;
  
  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarOutlinedIcon key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalfOutlinedIcon key={filledStars} />);
    }

    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarOutlineOutlinedIcon key={filledStars + (hasHalfStar ? 1 : 0) + i} />);
    }

    return stars;
  };

  return (
    
    <div className={styles.single_course_item}>
      <div className={styles.course_img}>
        <img className={styles.image_testimonial} src={imgUrl} alt="" />
        <div className={styles.testimonialtitle}>Chirag Soni</div>
      </div>

      <div className={styles.course_details}>
        
        <div className={styles.testimonials_star_container}>
          {renderStars()}
        </div>
        <div className={styles.design}>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
