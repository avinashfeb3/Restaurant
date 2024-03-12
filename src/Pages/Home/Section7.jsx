import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <>
        <section className='contact_section'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col sm={8} className='text-center'>
                    <h4>We Guarantee</h4>
                    <h2>30 Minutes Delivery!</h2>
                    <p>
                        Experience the convenience of swift service with our 30-minute delivery guarantee, ensuring your orders arrive promptly, fresh, and ready to delight your taste buds, every time.
                    </p> 
                    <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>Call: 999-888-7777</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section7;