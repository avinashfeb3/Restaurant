import React from "react";
import Layout from "../../components/Layouts/layout";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./Contact.scss";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <Layout>
        <div className="contact_wrapper"></div>
        <section className="contactform_wrapper">
          <Container>
            <Row>
              <Col lg={7} md={6} className="mb-4">
                <Form className="text-start">
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3 py-1"
                      >
                        <Form.Control
                          placeholder="Full Name"
                          className="custom-form-control"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 py-1"
                      >
                        <Form.Control
                          placeholder="Email Address"
                          className="custom-form-control"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Contact"
                        className="mb-3 mt-2 py-1 custom-floating-label"
                      >
                        <Form.Control
                          placeholder="Contact"
                          className="custom-form-control"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Subject"
                        className="mb-3 mt-2 py-1 custom-floating-label"
                      >
                        <Form.Control
                          placeholder="Subject"
                          className="custom-form-control"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Type your message in here..."
                        className="mt-2 py-1 custom-floating-label"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Type your message in here..."
                          style={{ height: "200px" }}
                          className="custom-form-control"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Link to="#" className="btn contact_button text-uppercase">
                    Send Message
                  </Link>
                </Form>
              </Col>
              <Col lg={5} md={6} className="address_details mb-4">
                <Card className="company_phone">
                  <Card.Body>
                    <h4>Company Email/Phone</h4>
                    <p>yourmail@example.com</p>
                    <p>
                    <a href="tel:+1234567890">123-456-7890</a>
                    </p>
                  </Card.Body>
                </Card>
                <Card className="address_details company_address">
                  <Card.Body>
                    <h4>Company Address</h4>
                    <p>5505 Waterford District, Dr, Miami, FL 33126, United States</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Google Map Section Start */}
        <section className="map-responsive">
            <Container>
                <Row>
                    <Col lg={12} md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.6389025350327!2d-80.28971912402623!3d25.782488107744857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9dcc8616a2b%3A0xc8cb92d36df969a8!2s5505%20Waterford%20District%20Dr%2C%20Miami%2C%20FL%2033126%2C%20USA!5e0!3m2!1sen!2sin!4v1710588531512!5m2!1sen!2sin" width="1200" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Responsive Google Map"></iframe>
                    </Col> 
                </Row>
            </Container>
        </section>
        {/* Google Map Section End */}
      </Layout>
    </>
  );
}

export default Contact;
