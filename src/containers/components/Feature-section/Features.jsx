import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./features.module.css";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our structured learning approach and expert guidance enable you to grasp complex concepts efficiently, making your IELTS preparation time-effective and accelerating your progress.",
    icon: <SchoolOutlinedIcon fontSize='large' sx={{ color: '#e31837',width: '40px',height:'40px',marginRight:'16px'}} />,
  },

  {
    title: "All Time Support",
    desc: "Our dedicated support team is available round the clock to address your queries, provide feedback on practice tests, and offer personalized assistance at every step of your IELTS journey.",
    icon: <SupportAgentOutlinedIcon fontSize='large' sx={{ color: '#e31837',width: '40px',height:'40px',marginRight:'16px'}} />,
  },

  {
    title: "Comprehensive Study Materials",
    desc: "Gain access to a wide range of comprehensive study materials, including practice exercises, sample essays, and interactive learning resources, ensuring a well-rounded and effective preparation for your IELTS exam.",
    icon: <BookOutlinedIcon fontSize='large' sx={{ color: '#e31837',width: '40px',height:'40px',marginRight:'16px'}} />,
  },
];

const Features = () => {
  return (
    <section >
      <Container fluid className={styles.features_section}>
        <Row>
        <div className={styles.choose__content}>
              <div className={styles.key_features}>Key Features</div>
            </div>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index} className="d-flex align-items-stretch">
              <div className={styles.single__feature}>
                <div className={styles.features_section_heading}> <>{item.icon}</>{item.title}</div>
                <p className={styles.features_section_p}>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
