import React from "react";
import "./Menu.scss";
import Layout from "../../components/Layouts/layout";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/Layouts/Card";
import Image1 from "../../assets/images/menu/menu-1.jpg";
import Image2 from "../../assets/images/menu/menu-2.jpg";
import Image3 from "../../assets/images/menu/menu-3.jpg";
import Image4 from "../../assets/images/menu/menu-4.jpg";
import Image5 from "../../assets/images/menu/menu-5.jpg";
import Image6 from "../../assets/images/menu/menu-6.jpg";
import Image7 from "../../assets/images/menu/menu-7.jpg";
import Image8 from "../../assets/images/menu/menu-8.jpg";
import Image9 from "../../assets/images/menu/menu-9.jpg";
import Image10 from "../../assets/images/menu/menu-10.jpg";
import Image11 from "../../assets/images/menu/menu-11.jpg";
import Image12 from "../../assets/images/menu/menu-12.jpg";
import Image13 from "../../assets/images/menu/menu-13.jpg";
import Image14 from "../../assets/images/menu/menu-14.jpg";
import Image15 from "../../assets/images/menu/menu-15.jpg";
import Image16 from "../../assets/images/menu/menu-16.jpg";
import Image17 from "../../assets/images/menu/menu-17.jpg";
import Image18 from "../../assets/images/menu/menu-18.jpg";
import Image19 from "../../assets/images/menu/menu-19.jpg";
import Image20 from "../../assets/images/menu/menu-20.jpg";

// Menu Data

// Breakfast Mock Data
const breakfastData = [
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
    {
      id: "0009",
      image: Image9,
      title: "Avocado Toast With Onion",
      paragraph: "A savory symphony of creamy avocado and caramelized onion, a delectable twist on a classic favorite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0010",
      image: Image10,
      title: "Avocado Toast With Tomatoes",
      paragraph: "A harmonious blend of creamy avocado and tangy tomatoes, elevating toast to a gourmet delight.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0011",
      image: Image11,
      title: "Avocado Toast Bread",
      paragraph: "The perfect canvas for creamy avocado goodness, a satisfying crunch in every bite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0012",
      image: Image12,
      title: "Burrito Tortilla",
      paragraph: "The warm embrace that holds together a flavorful fiesta of fillings, a taste of Mexico in every fold.",
      rating: 3.5,
      price: 95.12,
    },
    {
      id: "0013",
      image: Image13,
      title: "Burrito Egg",
      paragraph: "A protein-packed delight, adding a fluffy richness to every savory bite of your burrito adventure.",
      rating: 3.0,
      price: 95.12,
    },
    {
      id: "0014",
      image: Image14,
      title: "Burrito Cheese",
      paragraph: "The melty, gooey goodness that binds together a symphony of flavors in every savory bite.",
      rating: 4.0,
      price: 95.12,
    },
    {
      id: "0015",
      image: Image15,
      title: "Burrito Potatoes",
      paragraph: "Savory potatoes wrapped snugly in a warm tortilla embrace, creating the ultimate comfort fusion.",
      rating: 2.5,
      price: 95.12,
    },
    {
      id: "0016",
      image: Image16,
      title: "Burrito Pork Meat",
      paragraph: "Indulge in our tantalizing Burrito Pork Meat: tender, flavorful pork wrapped in a soft tortilla for a mouthwatering.",
      rating: 3.5,
      price: 95.12,
    },
  ];

//   Lunch Mock Data
const lunchData = [
    {
      id: "0017",
      image: Image17,
      title: "Chicken Breast",
      paragraph: "Juicy and lean chicken breast, perfect for grilling, baking, or stir-frying.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0018",
      image: Image18,
      title: "Romaine Lettuce",
      paragraph: "Crisp and refreshing Romaine Lettuce, ideal for salads, wraps, and sandwiches.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0019",
      image: Image19,
      title: "Croutons",
      paragraph: "Crunchy flavor boosters for salads, soups, and snacks.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0020",
      image: Image20,
      title: "Parmesan",
      paragraph: "A savory burst of aged perfection for your culinary creations.",
      rating: 5,
      price: 99.15,
    },
  ];

//   Dinner Mock Data
const dinnerData = [
    {
      id: "0017",
      image: Image17,
      title: "Chicken Breast",
      paragraph: "Savor the succulence of our premium Chicken Breast: tender, juicy, and packed with wholesome flavor, perfect for elevating any meal.",
      rating: 5,
      price: 99.15,
    },
  ];

//   Dessert Mock Data
const dessertData = [
    {
      id: "0017",
      image: Image17,
      title: "Chicken Breast",
      paragraph: "Savor the succulence of our premium Chicken Breast: tender, juicy, and packed with wholesome flavor, perfect for elevating any meal.",
      rating: 5,
      price: 99.15,
    },
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
function Menu() {
  return (
    <>
      <Layout>
        {/* Menu Parallax Section Start */}
        <section className="menu_wrapper"></section>
        {/* Menu Parallax Section End */}

        {/* Menu Section Start */}
        <section className="menu_card">
           <Container>
            <Row>
                 <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h3>OUR CRAZY Restaurant Menu</h3>
              <p className="para">
              Explore Our Crazy Restaurant Menu, a tantalizing culinary adventure that promises to surprise and delight your taste buds with unexpected flavor combinations and inventive dishes.
              </p>
            </Col>
            </Row>
            <Row>
                <h3 className="text-center mt-1 mb-3 pt-1 pb-1">BreakFast Menu</h3>
            {breakfastData.map((cardData, index) => (
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
            <Row>
                <h3 className="text-center mt-3 mb-3 pt-3 pb-3">Lunch Menu</h3>
            {lunchData.map((cardData, index) => (
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
            <Row>
                <h3 className="text-center mt-3 mb-3 pt-3 pb-3">Dinner Menu</h3>
            {dinnerData.map((cardData, index) => (
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
            <Row>
                <h3 className="text-center mt-3 mb-3 pt-3 pb-3">Dessert Menu</h3>
            {dessertData.map((cardData, index) => (
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
        {/* Menu Section End */}
      </Layout>
    </>
  );
}

export default Menu;
