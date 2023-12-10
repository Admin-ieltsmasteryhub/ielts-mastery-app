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
    <div >
    <div className={styles.card}>
        <img className={styles.card_img} src={imgUrl} alt="" />
        <div className={styles.card_p}>This is the review</div>
        <div className={styles.card_h2}>Chirag Soni</div>
        <div className={styles.card_h4}></div>  
        
        <div className={styles.testimonials_star_container}>
          {renderStars()}
        </div>
        </div>
    </div>
  );
};

export default TestimonialCard;
