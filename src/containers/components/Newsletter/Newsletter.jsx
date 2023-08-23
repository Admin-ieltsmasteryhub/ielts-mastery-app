import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
  <input type="email" placeholder="Email" className="subscribe__input" />
  <button className="subscribe__button">
  <i className="ri-mail-fill"></i>
  </button>
</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
