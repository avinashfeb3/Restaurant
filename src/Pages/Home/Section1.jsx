import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerImg from '../../assets/images/banner/banner-1.jpg';

function Section1() {
  return (
    <section className="hero_section">
    <Container>
       <Row>
         <Col lg={7} className="mb-5 mb-lg-0">
           <div className="position-relative">
             <img src={BannerImg} className="img-fluid rounded-image" alt="Hero Banner"/>
           </div>
         </Col>
         <Col lg={5} className="mt-5 mt-lg-0">
           <div className="hero_text text-center">
               <h1 className="text-white">Welcome To</h1>
               <h2 className="text-white">Borcelle Catering</h2>
               <p className="text-white pt-2 pb-4">
                  where exquisite flavors meet unparalleled service, creating unforgettable dining experiences tailored to your every need.
               </p>
               <Link to= "/" className="btn order_now">Our Menu</Link>
           </div>
         </Col>
       </Row>
     </Container> 
 </section>
  );
}

export default Section1;
