import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/layout";
function NotFound() {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col lg={12} md={6} className="text-center mt-5 mb-5 pt-5 pb-5">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <Link to= "/" className="btn order_now">Back to Homepage</Link>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default NotFound;
