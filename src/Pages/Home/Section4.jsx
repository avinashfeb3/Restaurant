import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/images/promotions/promo.jpg";
function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center">
              <img
                src={PromotionImage}
                className="img-fluid"
                alt="Promotion Image"
              />
            </Col>
            <Col lg={6} className="px-5">
              <h2>
                Nothing brings people together like a good restaurant foods
              </h2>
              <p>
                Experience culinary excellence with Borcelle Catering - where
                every event is an unforgettable feast! Indulge in exquisite
                flavors, meticulously crafted menus tailored to your
                preferences. From elegant weddings to corporate gatherings, our
                team ensures seamless execution, leaving you free to savor every
                moment.
              </p>
              <ul>
                <li>
                  <p>
                    Elevate your event with Borcelle Catering's mastery in
                    culinary artistry, delivering dishes that delight the senses
                    and leave a lasting impression.
                  </p>
                </li>
                <li>
                  <p>
                    From elegant weddings to corporate luncheons, our diverse
                    menu options are meticulously crafted to suit any event,
                    ensuring each dish reflects your unique style and vision.
                  </p>
                </li>
                <li>
                  <p>
                    We prioritize quality, sourcing the freshest seasonal
                    ingredients from local suppliers, guaranteeing a
                    farm-to-table experience that bursts with flavor and
                    supports the community.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Parallax Section Start */}
      <section className="bg_parallax_scroll"></section>
      {/* Parallax Section End */}
    </>
  );
}

export default Section4;
