import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "./FreeCourseCard";
import styles from "./free-course.module.css";
import PostButton from "../Button/Button";

const freeCourseData = [
  {
    id: "01",
    title: "What's your IELTS Type?",
    options: ["General", "Academic", "Not Sure"],
  },
  {
    id: "02",
    title: "What are you currently doing?",
    options: ["Working", "Studying", "Others"],
  },
  {
    id: "03",
    title: "When are you giving IELTS?",
    options: ["Next Month", "Next 3 Months", "Already Booked"],
  },
];

const FreeCourse = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: option,
    }));
  };

  const isOptionSelected = (questionId, option) => {
    return selectedOptions[questionId] === option;
  };

  const handleSubmit = () => {
    // Do something with the selected options
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <section>
      <Container fluid className={styles.questionssec}>
        <Row>
          <Col>
            <div className={styles.question_form_container}>
              <div className={styles.question_form_ielts}>
                {freeCourseData.map((item) => (
                  <div key={item.id} className={styles.questions_ielts}>
                    {item.title}
                    <ul className={styles.horizontal_options}>
                      {item.options.map((option) => (
                        <li
                          key={option}
                          className={`${styles.question_options} ${
                            isOptionSelected(item.id, option)
                              ? styles.selected_option
                              : ""
                          }`}
                          onClick={() => handleOptionSelect(item.id, option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className={styles.questions_ielts_button}>
              <PostButton  buttonText={'Continue'} onClick={handleSubmit}></PostButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
