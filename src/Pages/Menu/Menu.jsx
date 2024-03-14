import React from "react";
import "./Menu.scss";
import Layout from "../../components/Layouts/layout";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/Layouts/Card";

// Menu Data

// Breakfast Mock Data
const breakfastData = [
    {
      image: new URL('../../assets/images/menu/menu-1.jpg', import.meta.url).href,
      title: "Smoked Bacon Chicken",
      paragraph: "Indulge in the succulent bliss of smoked bacon-infused chicken, a mouthwatering.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-2.jpg', import.meta.url).href,
      title: "Bacon Sausage",
      paragraph: "Savor the irresistible combination of smoky bacon and savory sausage.",
      rating: 4.5,
      price: 84.32,
    },
    {
      image: new URL('../../assets/images/menu/menu-3.jpg', import.meta.url).href,
      title: "Bacon Fried Tomato",
      paragraph: "Experience the perfect marriage of crispy bacon and juicy tomatoes.",
      rating: 4,
      price:79.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-4.jpg', import.meta.url).href,
      title: "Bacon Fried Mushrooms",
      paragraph: "Savor bacon-fried mushrooms: crispy, savory, and irresistible.",
      rating: 3.5,
      price: 69.25,
    },
    {
      image: new URL('../../assets/images/menu/menu-5.jpg', import.meta.url).href,
      title: "Bacon Black Pudding",
      paragraph: "Crumbled bacon infused into savory black pudding, a tantalizing marriage of smoky and rich flavors.",
      rating: 3.0,
      price: 59.25,
    },
    {
      image: new URL('../../assets/images/menu/menu-6.jpg', import.meta.url).href,
      title: "Bacon Baked Beans",
      paragraph: "Bacon-studded baked beans, a hearty embrace of smoky indulgence in every spoonful.",
      rating: 3,
      price: 89.18,
    },
    {
      image: new URL('../../assets/images/menu/menu-7.jpg', import.meta.url).href,
      title: "Bacon Eggs",
      paragraph: "Start your day with sizzling bacon paired with perfectly scrambled or sunny-side-up eggs.",
      rating: 2.5,
      price: 79.19,
    },
    {
      image: new URL('../../assets/images/menu/menu-8.jpg', import.meta.url).href,
      title: "Avocado Toast Poached Egg",
      paragraph: "Savor creamy avocado toast crowned with a perfect poached egg—a breakfast delight.",
      rating: 2.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-9.jpg', import.meta.url).href,
      title: "Avocado Toast With Onion",
      paragraph: "A savory symphony of creamy avocado and caramelized onion, a delectable twist on a classic favorite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-10.jpg', import.meta.url).href,
      title: "Avocado Toast With Tomatoes",
      paragraph: "A harmonious blend of creamy avocado and tangy tomatoes, elevating toast to a gourmet delight.",
      rating: 2.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-11.jpg', import.meta.url).href,
      title: "Avocado Toast Bread",
      paragraph: "The perfect canvas for creamy avocado goodness, a satisfying crunch in every bite.",
      rating: 2.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-12.jpg', import.meta.url).href,
      title: "Burrito Tortilla",
      paragraph: "The warm embrace that holds together a flavorful fiesta of fillings, a taste of Mexico in every fold.",
      rating: 3.5,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-13.jpg', import.meta.url).href,
      title: "Burrito Egg",
      paragraph: "A protein-packed delight, adding a fluffy richness to every savory bite of your burrito adventure.",
      rating: 3.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-14.jpg', import.meta.url).href,
      title: "Burrito Cheese",
      paragraph: "The melty, gooey goodness that binds together a symphony of flavors in every savory bite.",
      rating: 4.0,
      price: 95.12,
    },
    {
      image: new URL('../../assets/images/menu/menu-15.jpg', import.meta.url).href,
      title: "Burrito Potatoes",
      paragraph: "Savory potatoes wrapped snugly in a warm tortilla embrace, creating the ultimate comfort fusion.",
      rating: 2.5,
      price: 95.12,
    },
    {
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
      image: new URL('../../assets/images/menu/menu-17.jpg', import.meta.url).href,
      title: "Chicken Breast",
      paragraph: "Juicy and lean chicken breast, perfect for grilling, baking, or stir-frying.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-18.jpg', import.meta.url).href,
      title: "Romaine Lettuce",
      paragraph: "Crisp and refreshing Romaine Lettuce, ideal for salads, wraps, and sandwiches.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-19.jpg', import.meta.url).href,
      title: "Croutons",
      paragraph: "Crunchy flavor boosters for salads, soups, and snacks.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-20.jpg', import.meta.url).href,
      title: "Parmesan",
      paragraph: "A savory burst of aged perfection for your culinary creations.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-21.jpg', import.meta.url).href,
      title: "Spaghetti",
      paragraph: "Long, thin pasta strands, typically served with a variety of sauces and toppings.",
      rating: 3.5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-22.jpg', import.meta.url).href,
      title: "Pancetta",
      paragraph: "Italian cured pork belly, seasoned with salt and spices, used to add rich flavor.",
      rating: 3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-23.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Garlic",
      paragraph: "A rich blend of creamy goodness with a garlicky twist.",
      rating: 3.3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-24.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Eggs",
      paragraph: "Traditional Italian pasta infused with creamy, egg-enriched sauce.",
      rating: 4.2,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-25.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Parmesan",
      paragraph: "A decadent blend of creamy sauce and aged Parmesan cheese.",
      rating: 4.5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-26.jpg', import.meta.url).href,
      title: "Spaghetti Carbonara Pepper",
      paragraph: "A zesty twist on a classic dish, featuring the bold flavors of cracked black pepper.",
      rating: 4,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-27.jpg', import.meta.url).href,
      title: "Pizza Chorizo",
      paragraph: "Savory pizza topped with spicy chorizo sausage for a kick.",
      rating: 3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-28.jpg', import.meta.url).href,
      title: "Pizza Italian Salami",
      paragraph: "Italian salami on a delicious, flavorful pizza.",
      rating: 3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-29.jpg', import.meta.url).href,
      title: "Pizza Tomatoes",
      paragraph: "Pizza topped with real tomatoes for a burst of flavor.",
      rating: 3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-30.jpg', import.meta.url).href,
      title: "Pizza Mushrooms",
      paragraph: "Pizza topped with savory mushrooms. Delicious mushrooms for a flavorful.",
      rating: 3,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/menu-31.jpg', import.meta.url).href,
      title: "Pizza Olives",
      paragraph: "Olives for a delicious pop of flavor on your pizza.",
      rating: 3,
      price: 99.15,
    },
  
  ];

//   Dinner Mock Data
const dinnerData = [
    {      
      image: new URL('../../assets/images/menu/dinner-1.jpg', import.meta.url).href,
      title: "Spicy Beef",
      paragraph: "Bold spices and juicy beef for a taste bud adventure.",
      rating: 2.5,
      price: 69.15,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-2.jpg', import.meta.url).href,
      title: "Spicy Beef Potatoes",
      paragraph: "Flavorful beef and potatoes packed with heat.",
      rating: 3,
      price: 85.35,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-3.jpg', import.meta.url).href,
      title: "Spicy Beef Carrots",
      paragraph: "Savory beef with a spicy kick and sweet carrots.",
      rating: 3.5,
      price: 75.23,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-4.jpg', import.meta.url).href,
      title: "Spicy Beef Cheese Sauce",
      paragraph: "Dive into creamy cheese sauce loaded with spicy beef for a flavor fiesta.",
      rating: 4,
      price: 70.69,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-5.jpg', import.meta.url).href,
      title: "Spicy Beef Spices",
      paragraph: "Unleash the heat with these sizzling spices.",
      rating: 3.3,
      price: 80.96,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-6.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Onion",
      paragraph: "Succulent Bolognese and caramelized onions for a flavorful spaghetti dish.",
      rating: 3.3,
      price: 50.96,
    },
    {      
      image: new URL('../../assets/images/menu/dinner-7.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Carrot",
      paragraph: "Classic Bolognese with a touch of carrot for hidden sweetness.",
      rating: 3.3,
      price: 65.96,
    },
    {
      image: new URL('../../assets/images/menu/dinner-8.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Celery",
      paragraph: "Classic Bolognese with a touch of celery for a deeper, earthy flavor.",
      rating: 3.3,
      price: 70.96,
    },
    {
      image: new URL('../../assets/images/menu/dinner-9.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Minced Meat",
      paragraph: "Savory minced meat sauce simmered in rich tomato sauce, served over spaghetti.",
      rating: 2.2,
      price: 56.96,
    },
    {
      image: new URL('../../assets/images/menu/dinner-10.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Spaghetti",
      paragraph: "Hearty meat sauce simmered to perfection, served over spaghetti.",
      rating: 3.3,
      price: 66.96,
    },
    {
      image: new URL('../../assets/images/menu/dinner-11.jpg', import.meta.url).href,
      title: "Spaghetti Bolognese Parmesan",
      paragraph: "Hearty Bolognese gets a decadent touch with grated Parmesan cheese.",
      rating: 3.5,
      price: 76.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-12.jpg', import.meta.url).href,
      title: "Chickpea Curry",
      paragraph: "Chickpeas in a warming curry sauce, perfect for vegetarians and vegans.",
      rating: 2.5,
      price: 36.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-13.jpg', import.meta.url).href,
      title: "Chickpea Curry Onion",
      paragraph: "Tender chickpeas and caramelized onions in a flavorful curry.",
      rating: 3.5,
      price: 76.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-14.jpg', import.meta.url).href,
      title: "Chickpea Curry Garlic",
      paragraph: "Creamy chickpea curry bursting with garlicky goodness.",
      rating: 3.7,
      price: 66.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-15.jpg', import.meta.url).href,
      title: "Chickpea Curry Mushrooms",
      paragraph: " Earthy mushrooms and protein-rich chickpeas in a delicious curry.",
      rating: 3.5,
      price: 76.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-16.jpg', import.meta.url).href,
      title: "Chickpea Curry Tomatoes",
      paragraph: "Chickpeas simmered in a vibrant tomato sauce for a taste of summer.",
      rating: 3.5,
      price: 86.45,
    },
    {
      image: new URL('../../assets/images/menu/dinner-17.jpg', import.meta.url).href,
      title: "Chickpea Curry Spices",
      paragraph: "Create a delicious chickpea curry with this authentic spice mix.",
      rating: 3.3,
      price: 46.45,
    },
  ];

//   Dessert Mock Data
const dessertData = [
    {
      image: new URL('../../assets/images/menu/dessert-1.jpg', import.meta.url).href,
      title: "Lemon Cake Flour",
      paragraph: "Cake flour creates a lighter, more tender crumb in lemon cakes.",
      rating: 3.5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-2.jpg', import.meta.url).href,
      title: "Lemon Cake Sugar",
      paragraph: "A touch of sweet complements the bright lemon flavor in this delicious cake.",
      rating: 4,
      price: 76.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-3.jpg', import.meta.url).href,
      title: "Lemon Cake Baking Powder",
      paragraph: "Tangy lemon cake with a light and airy crumb, thanks to baking powder.",
      rating: 2.7,
      price: 55.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-4.jpg', import.meta.url).href,
      title: "Lemon Cake Lemon",
      paragraph: "Zesty lemon cake bursting with bright flavor, perfect for any occasion.",
      rating: 3.3,
      price: 69.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-5.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Flour",
      paragraph: "Made with high-quality flour for fluffy, tender cinnamon rolls.",
      rating: 3.5,
      price: 75.80,
    },
    {
      image: new URL('../../assets/images/menu/dessert-6.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Salt",
      paragraph: "Classic cinnamon rolls with a touch of salt for a delightful contrast.",
      rating: 4,
      price: 77.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-7.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Sugar",
      paragraph: "Gooey cinnamon rolls drizzled with a sweet sugar glaze.",
      rating: 5,
      price: 99.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-8.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Cinnamon",
      paragraph: "Classic cinnamon rolls bursting with fragrant cinnamon.",
      rating: 3.5,
      price: 39.15,
    },
    {
      image: new URL('../../assets/images/menu/dessert-9.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Yeast",
      paragraph: "Real yeast creates light, airy dough for perfect cinnamon rolls.",
      rating: 4,
      price: 49,
    },
    {
      image: new URL('../../assets/images/menu/dessert-10.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Sour Cream",
      paragraph: "Sour cream adds a touch of tang to our classic cinnamon rolls.",
      rating: 4.2,
      price: 30,
    },
    {
      image: new URL('../../assets/images/menu/dessert-11.jpg', import.meta.url).href,
      title: "Cinnamon Rolls Milk",
      paragraph: "Milk adds richness to the dough, making our cinnamon rolls extra delicious.",
      rating: 4,
      price: 60,
    },
    {
      image: new URL('../../assets/images/menu/dessert-12.jpg', import.meta.url).href,
      title: "Vegan Pancakes Flour",
      paragraph: "Make delicious vegan pancakes with this easy-to-use flour blend.",
      rating: 4.5,
      price: 65,
    },
    {
      image: new URL('../../assets/images/menu/dessert-13.jpg', import.meta.url).href,
      title: "Vegan Pancakes Sugar",
      paragraph: "Plant-powered pancakes with a touch of sugar for classic sweetness.",
      rating: 3.5,
      price: 70,
    },
    {
      image: new URL('../../assets/images/menu/dessert-14.jpg', import.meta.url).href,
      title: "Vegan Pancakes Baking Powder",
      paragraph: "Baking powder lifts these dairy-free pancakes for a light and airy stack.",
      rating: 4,
      price: 75,
    },
    {
      image: new URL('../../assets/images/menu/dessert-15.jpg', import.meta.url).href,
      title: "Vegan Pancakes Soya Milk",
      paragraph: "Delicious vegan pancakes made with creamy soy milk.",
      rating: 4.5,
      price: 80,
    },
    {
      image: new URL('../../assets/images/menu/dessert-16.jpg', import.meta.url).href,
      title: "Vegan Pancakes Blueberries",
      paragraph: "Light and fluffy pancakes packed with blueberries, all plant-based.",
      rating: 5,
      price: 85,
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
            {breakfastData.map((cardData) => (
              <Cards
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
            {lunchData.map((cardData) => (
              <Cards
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
            {dinnerData.map((cardData) => (
              <Cards
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
            {dessertData.map((cardData) => (
              <Cards
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
