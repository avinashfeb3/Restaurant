import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from '../../assets/images/features/pizza.png';
import Salad from '../../assets/images/features/salad.png';
import Delivery  from '../../assets/images/features/delivery-bike.png';

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the distinctiveness of Borcelle Catering's original culinary creations, where innovation meets exceptional taste in every dish.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Indulge in the unparalleled quality of Borcelle Catering's culinary creations, where every bite is a testament to our commitment to excellence.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Experience the convenience of Borcelle Catering's lightning-fast delivery service, ensuring your gourmet delights reach you promptly and fresh, every time.`,
  },
  // Add more mock data objects as needed
];
function Section2() {
  return (
    <>
      <section className="features_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Discover the Distinctive Features of Borcelle Catering</h2>
              <p>
                Welcome to Borcelle Catering, where culinary excellence meets
                impeccable service. Our features section showcases what sets us
                apart in the realm of catering services. At Borcelle, we pride
                ourselves on our diverse menu offerings, tailored to suit any
                event or occasion. Whether you're planning a corporate luncheon,
                a wedding reception, or a private dinner party, our skilled
                chefs are dedicated to crafting exquisite dishes that tantalize
                the taste buds and leave a lasting impression.
              </p>
              <Link to="/menu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="features_wrapper">
        <Container>
        <Row className="justify-content-end">
                {mockData.map((cardData, index) =>(
                    <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                        <div className="features_box text-center">
                          <div className="features_icon">
                            <img src={cardData.image} className="img-fluid" alt="icon"/>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                          </div>
                        </div>
                    </Col>
                ))}   
            </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
