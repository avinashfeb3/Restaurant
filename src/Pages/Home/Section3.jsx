import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../../assets/images/menu/menu-1.jpg";
import Image2 from "../../assets/images/menu/menu-2.jpg";
import Image3 from "../../assets/images/menu/menu-3.jpg";
import Image4 from "../../assets/images/menu/menu-4.jpg";
import Image5 from "../../assets/images/menu/menu-5.jpg";
import Image6 from "../../assets/images/menu/menu-6.jpg";
import Image7 from "../../assets/images/menu/menu-7.jpg";
import Image8 from "../../assets/images/menu/menu-8.jpg";
import Cards from "../../components/Layouts/Card";

const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Smoked Bacon Chicken",
      paragraph: "Indulge in the succulent bliss of smoked bacon-infused chicken, a mouthwatering.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Bacon Sausage",
      paragraph: "Savor the irresistible combination of smoky bacon and savory sausage.",
      rating: 4.5,
      price: 84.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Bacon Fried Tomato",
      paragraph: "Experience the perfect marriage of crispy bacon and juicy tomatoes.",
      rating: 4,
      price:79.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Bacon Fried Mushrooms",
      paragraph: "Savor bacon-fried mushrooms: crispy, savory, and irresistible.",
      rating: 3.5,
      price: 69.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Bacon Black Pudding",
      paragraph: "Crumbled bacon infused into savory black pudding, a tantalizing marriage of smoky and rich flavors.",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Bacon Baked Beans",
      paragraph: "Bacon-studded baked beans, a hearty embrace of smoky indulgence in every spoonful.",
      rating: 3,
      price: 89.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Bacon Eggs",
      paragraph: "Start your day with sizzling bacon paired with perfectly scrambled or sunny-side-up eggs.",
      rating: 2.5,
      price: 79.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Avocado Toast Poached Egg",
      paragraph: "Savor creamy avocado toast crowned with a perfect poached egg—a breakfast delight.",
      rating: 2.0,
      price: 95.12,
    },
    // Add more mock data objects as needed
  ];
  
  // Rating Logical Data
  const renderRatingIcons = (rating) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

function Section3() {
  return (
    <>
         <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR CRAZY Restaurant Menu</h2>
              <p className="para">
              Explore Our Crazy Restaurant Menu, a tantalizing culinary adventure that promises to surprise and delight your taste buds with unexpected flavor combinations and inventive dishes.
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                Key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section3;