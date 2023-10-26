import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from './newsletter.module.css';
import { EmailOutlined} from "@mui/icons-material";

const Newsletter = () => {
  return (
    <section>
      <Container fluid className={styles.newsletter}>
        <Row>
          <Col lg="12" className="text-center">
            <div className={styles.newsletter_heading} >Subscribe Our Newsletter</div>
            <div className={styles.newsletter_para} >Stay updated with our newsletter!</div>
            <div className={styles.input_container}>
            <EmailOutlined style={{position:'absolute', color:'red'}}/>
  <input type="email" placeholder="Email Address" className={styles.subscribe__input} />
  </div>
  <button className={styles.subscribe__button}>
  
  </button>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
