import React from 'react';
import Layout from "../../components/Layouts/layout";
import './Services.scss';
import { Col, Container, Row } from 'react-bootstrap';

function Services() {
  return (
    <>
    <Layout>
        <section className="services_wrapper bg_parallax_scroll"></section>

        {/* Services Section Start */}
        <section className='services_text'>
            <Container>
                <Row className='align-items-center justify-content-center mt-4 pt-4 mb-4 pb-4'>
                    <Col lg={12} md={6} className='text-start'>
                    <h3>Borcelle Catering Services</h3>
                    <p>
                        We provide a wide range of services to our customers, including:
                    </p>
                    <ul>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Personalized Menu Consultation: </strong> <span>Borcelle Catering offers personalized menu consultations where clients can discuss their preferences, dietary restrictions, and theme preferences with the expert culinary team. This ensures that every event has a bespoke menu tailored to the client's tastes and requirements.</span>
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>High-Quality Ingredients: </strong> 
                            <span>
                            Borcelle Catering sources only the finest and freshest ingredients for their dishes, ensuring exceptional quality and flavor in every bite. They prioritize locally sourced, seasonal produce to create dishes that are not only delicious but also sustainable.
                            </span>
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Professional Staff: </strong>  
                            <span>
                            Borcelle Catering employs a team of highly trained and professional staff who are dedicated to providing exceptional service. From chefs to servers, every member of the team is committed to ensuring that every aspect of the dining experience exceeds expectations.    
                            </span>
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Customized Event Planning: </strong> 
                            <span>
                            Whether it's a corporate event, wedding, or private party, Borcelle Catering offers customized event planning services to ensure that every detail is taken care of. From venue selection to decor and entertainment, their team works closely with clients to create unforgettable events.    
                            </span>
                            
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Seamless Execution: </strong> 
                            <span>
                                Borcelle Catering prides itself on its ability to execute flawless events, from intimate gatherings to large-scale affairs. Their attention to detail and meticulous planning ensure that everything runs smoothly, allowing clients to relax and enjoy their special occasion.
                            </span>    
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Flexibility and Adaptability: </strong> 
                            <span>
                                Borcelle Catering understands that every event is unique, and they are committed to being flexible and adaptable to meet the needs of their clients. Whether it's last-minute changes to the menu or accommodating special requests, they go above and beyond to ensure customer satisfaction.
                            </span>    
                        </li>
                        <li className='mt-2 mb-2 pt-2 pb-2'>
                            <strong>Exceptional Presentation: </strong> 
                            <span>
                            In addition to delicious food and impeccable service, Borcelle Catering pays special attention to presentation. From elegant plating to stunning tablescapes, every dish is presented with style and sophistication, adding to the overall dining experience.
                            </span>
                        </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Services Section End */}
    </Layout>
    </>
  )
}

export default Services;