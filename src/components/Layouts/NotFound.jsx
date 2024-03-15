import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Notfound.scss';
import Notfound from '/src/assets/images/notfound/notfound.png';

function NotFound() {
  return (
    <>
      <section className="notfound_wrapper">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={12} md={6} sm={4} className="text-center">
                <img
                  src={Notfound}
                  alt="notfound"
                  className="notfound_img"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={6} sm={4}className="text-center mt-3 mb-3 pt-3 pb-3">
                <Link to="/">
                  <button className="btn order_now">Back to Homepage</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  );
}

export default NotFound;
