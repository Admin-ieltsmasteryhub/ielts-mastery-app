import React from "react";
import Button from "../Button/Button"
import './free-course.css'

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="free__btn"><Button buttonText="Free"/></div>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
