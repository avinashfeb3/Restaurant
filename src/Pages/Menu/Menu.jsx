import React from "react";
import "./Menu.scss";
import Layout from "../../components/Layouts/layout";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/Layouts/Card";

// Menu Data

// Breakfast Mock Data
const breakfastData = [
    {
      id: "0001",
      image: new URL('../../assets/images/menu/menu-1.jpg', import.meta.url).href,
      title: "Smoked Bacon Chicken",
      paragraph: "Indulge in the succulent bliss of smoked bacon-infused chicken, a mouthwatering.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: new URL('../../assets/images/menu/menu-2.jpg', import.meta.url).href,
      title: "Bacon Sausage",
      paragraph: "Savor the irresistible combination of smoky bacon and savory sausage.",
      rating: 4.5,
      price: 84.32,
    },
    {
      id: "0003",
      image: new URL('../../assets/images/menu/menu-3.jpg', import.meta.url).href,
      title: "Bacon Fried Tomato",
      paragraph: "Experience the perfect marriage of crispy bacon and juicy tomatoes.",
      rating: 4,
      price:79.15,
    },
    {
      id: "0004",
      image: new URL('../../assets/images/menu/menu-4.jpg', import.meta.url).href,
      title: "Bacon Fried Mushrooms",
      paragraph: "Savor bacon-fried mushrooms: crispy, savory, and irresistible.",
      rating: 3.5,
      price: 69.25,
    },
    {
      id: "0005",
      image: new URL('../../assets/images/menu/menu-5.jpg', import.meta.url).href,
      title: "Bacon Black Pudding",
      paragraph: "Crumbled bacon infused into savory black pudding, a tantalizing marriage of smoky and rich flavors.",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: new URL('../../assets/images/menu/menu-6.jpg', import.meta.url).href,
      title: "Bacon Baked Beans",
      paragraph: "Bacon-studded baked beans, a hearty embrace of smoky indulgence in every spoonful.",
      rating: 3,
      price: 89.18,
    },
    {
      id: "0007",
      image: new URL('../../assets/images/menu/menu-7.jpg', import.meta.url).href,
      title: "Bacon Eggs",
      paragraph: "Start your day with sizzling bacon paired with perfectly scrambled or sunny-side-up eggs.",
      rating: 2.5,
      price: 79.19,
    },
    {
      id: "0008",
      image: new URL('../../assets/images/menu/menu-8.jpg', import.meta.url).href,
      title: "Avocado Toast Poached Egg",
      paragraph: "Savor creamy avocado toast crowned with a perfect poached egg—a breakfast delight.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0009",
      image: new URL('../../assets/images/menu/menu-9.jpg', import.meta.url).href,
      title: "Avocado Toast With Onion",
      paragraph: "A savory symphony of creamy avocado and caramelized onion, a delectable twist on a classic favorite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0010",
      image: new URL('../../assets/images/menu/menu-10.jpg', import.meta.url).href,
      title: "Avocado Toast With Tomatoes",
      paragraph: "A harmonious blend of creamy avocado and tangy tomatoes, elevating toast to a gourmet delight.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0011",
      image: new URL('../../assets/images/menu/menu-11.jpg', import.meta.url).href,
      title: "Avocado Toast Bread",
      paragraph: "The perfect canvas for creamy avocado goodness, a satisfying crunch in every bite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      id: "0012",
      image: new URL('../../assets/images/menu/menu-12.jpg', import.meta.url).href,
      title: "Burrito Tortilla",
      paragraph: "The warm embrace that holds together a flavorful fiesta of fillings, a taste of Mexico in every fold.",
      rating: 3.5,
      price: 95.12,
    },
    {
      id: "0013",
      image: new URL('../../assets/images/menu/menu-13.jpg', import.meta.url).href,
      title: "Burrito Egg",
      paragraph: "A protein-packed delight, adding a fluffy richness to every savory bite of your burrito adventure.",
      rating: 3.0,
      price: 95.12,
    },
    {
      id: "0014",
      image: new URL('../../assets/images/menu/menu-14.jpg', import.meta.url).href,
      title: "Burrito Cheese",
      paragraph: "The melty, gooey goodness that binds together a symphony of flavors in every savory bite.",
      rating: 4.0,
      price: 95.12,
    },
    {
      id: "0015",
      image: new URL('../../assets/images/menu/menu-15.jpg', import.meta.url).href,
      title: "Burrito Potatoes",
      paragraph: "Savory potatoes wrapped snugly in a warm tortilla embrace, creating the ultimate comfort fusion.",
      rating: 2.5,
      price: 95.12,
    },
    {
      id: "0016",
      image: new URL('../../assets/images/menu/menu-16.jpg', import.meta.url).href,
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
      image: new URL('../../assets/images/menu/menu-17.jpg', import.meta.url).href,
      title: "Chicken Breast",
      paragraph: "Juicy and lean chicken breast, perfect for grilling, baking, or stir-frying.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0018",
      image: new URL('../../assets/images/menu/menu-18.jpg', import.meta.url).href,
      title: "Romaine Lettuce",
      paragraph: "Crisp and refreshing Romaine Lettuce, ideal for salads, wraps, and sandwiches.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0019",
      image: new URL('../../assets/images/menu/menu-19.jpg', import.meta.url).href,
      title: "Croutons",
      paragraph: "Crunchy flavor boosters for salads, soups, and snacks.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0020",
      image: new URL('../../assets/images/menu/menu-20.jpg', import.meta.url).href,
      title: "Parmesan",
      paragraph: "A savory burst of aged perfection for your culinary creations.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0021",
      image: new URL('../../assets/images/menu/menu-21.jpg', import.meta.url).href,
      title: "Spaghetti",
      paragraph: "Long, thin pasta strands, typically served with a variety of sauces and toppings.",
      rating: 3.5,
      price: 99.15,
    },
    {
      id: "0022",
      image: new URL('../../assets/images/menu/menu-22.jpg', import.meta.url).href,
      title: "Pancetta",
      paragraph: "Italian cured pork belly, seasoned with salt and spices, used to add rich flavor.",
      rating: 3,
      price: 99.15,
    },
    {
      id: "0023",
      image: new URL('../../assets/images/menu/menu-23.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Garlic",
      paragraph: "A rich blend of creamy goodness with a garlicky twist.",
      rating: 3.3,
      price: 99.15,
    },
    {
      id: "0024",
      image: new URL('../../assets/images/menu/menu-24.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Eggs",
      paragraph: "Traditional Italian pasta infused with creamy, egg-enriched sauce.",
      rating: 4.2,
      price: 99.15,
    },
    {
      id: "0025",
      image: new URL('../../assets/images/menu/menu-25.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Parmesan",
      paragraph: "A decadent blend of creamy sauce and aged Parmesan cheese.",
      rating: 4.5,
      price: 99.15,
    },
    {
      id: "0026",
      image: new URL('../../assets/images/menu/menu-27.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Pepper",
      paragraph: "A zesty twist on a classic dish, featuring the bold flavors of cracked black pepper.",
      rating: 4,
      price: 99.15,
    },
  
  ];

//   Dinner Mock Data
const dinnerData = [
    {
      id: "0017",
      image: new URL('../../assets/images/menu/menu-3.jpg', import.meta.url).href,
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
      image: new URL('../../assets/images/menu/menu-3.jpg', import.meta.url).href,
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
