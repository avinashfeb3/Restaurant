import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import user1 from "../../assets/images/review/review-author-1.jpg";
import user2 from "../../assets/images/review/review-author-2.jpg";
import user3 from "../../assets/images/review/review-author-3.jpg";
import user4 from "../../assets/images/review/review-author-5.jpg";

function Section6() {

    // Array of review objects
  const reviews = [
    {
      text: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque",
      userImg: user1,
      userName: "AMELIE NEWLOVE"
    },
    {
      text: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque",
      userImg: user2,
      userName: "AMELIE NEWLOVE"
    },
    {
      text: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque",
      userImg: user3,
      userName: "AMELIE NEWLOVE"
    },
    {
      text: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque",
      userImg: user4,
      userName: "AMELIE NEWLOVE"
    }
  ];

  return (
    <>
      <section className="review_section">
        <Container>
          <Row>
            <Carousel>
              {/* Mapping through reviews to generate Carousel items */}
              {reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <Carousel.Caption>
                    <div className="user_img">
                      <img
                        src={review.userImg}
                        className="img-fluid"
                        alt={`User${index + 1}`}
                      />
                    </div>
                    <p>{review.text}</p>
                    <div className="item_rating mnb-2">
                      {/* Assuming you want to maintain the same static rating */}
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <h5>BY {review.userName}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section6;
