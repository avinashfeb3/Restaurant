import React from "react";
import Layout from "../../components/Layouts/layout";
import "./About.scss";
import { Col, Container, Row} from "react-bootstrap";
import AboutIntro from "../../assets/images/about/about-intro.jpg";
import TeamImage from "../../assets/images/about/team-img.jpg";

function About() {
    // Sample team member data
    const teamMembers = [
        { name: "John Doe", role: "Deputy Head Chef", image: TeamImage }, // Use imported image directly
        { name: "Jane Smith", role: "Head Chef", image: TeamImage },  // Use imported image directly
        { name: "Jane Doe", role: "Supervisior Chef", image: TeamImage },  // Use imported image directly
        { name: "Alane James", role: "Lead Chef", image: TeamImage },  // Use imported image directly
        { name: "Jane Stephen", role: "Junior Chef", image: TeamImage },  // Use imported image directly
        { name: "Jane Waston", role: "Intern Chef", image: TeamImage }, // Use imported image directly
        // Add more team members as needed
      ];
  return (
    <>
      <Layout>
        <section className="about_wrapper">
          <Container>
            <Row>
              <Col
                md={12}
                lg={8}
                sm={6}
                className="mb-4 mb-md-0 align-items-center justify-content-center"
              >
                <h2 className="about_text">Welcome To Borcelle Catering</h2>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Borcelle Catering */}
        <section className="about_intro">
          <Container>
            <Row>
              <Col lg={6} md={6} className="mb-4 mb-md-0 py-5 my-5">
                <img
                  src={AboutIntro}
                  className="img-fluid"
                  alt="About Borcelle Catering"
                />
              </Col>
              <Col lg={6} md={6} className="mb-4 mb-md-0 py-5 my-5">
                <div className="about_intro_text">
                  <p>
                    At Borcelle Catering, we believe that every event is an
                    opportunity to create unforgettable culinary experiences.
                    With a passion for excellence and a commitment to
                    exceptional service, we specialize in crafting bespoke menus
                    that elevate your event to new heights. Our journey began
                    with a simple yet profound vision: to redefine catering by
                    offering a harmonious fusion of flavors, creativity, and
                    impeccable presentation. From intimate gatherings to lavish
                    celebrations, we pour our heart and soul into every dish,
                    ensuring that each bite tells a story of craftsmanship and
                    dedication.
                  </p>
                  <p>
                    What sets us apart is our relentless pursuit of perfection.
                    We source the finest ingredients, handpicked for their
                    quality and freshness, and transform them into culinary
                    masterpieces that delight the senses. Our talented chefs
                    infuse each dish with innovation and artistry, pushing the
                    boundaries of taste and imagination. But it's not just about
                    the food; it's about the experience. From the moment you
                    engage with us, you'll feel the warmth and dedication of our
                    team. We understand that every event is unique, and we take
                    the time to listen to your vision, tailoring our services to
                    exceed your expectations.
                  </p>
                  <p>
                    Whether you're planning a wedding, corporate event, or
                    private celebration, trust Borcelle Catering to turn your
                    dreams into reality. Let us be a part of your special
                    moments, creating memories that linger long after the last
                    bite is savored. Experience the difference with Borcelle
                    Catering—where culinary excellence meets unparalleled
                    service.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Our Team Section Start */}
        <section className="team_section">
          <Container>
            <h2 className="text-center mt-4 mb-4">Our Team</h2>
            <Row className="mt-4 mb-4 pt-4 pb-4">
            {teamMembers.map((member, index) => (
                <Col key={index} md={4}>
                  <div className="card border-0">
                  <div className="team-img">
                    <img src={member.image} className="img-fluid" alt="Team Image" />
                  </div>
                  <div className="team-details mt-3 mb-4">
                     <h5 className="text-center">{member.name}</h5>
                     <p className="text-center">{member.role}</p>
                  </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* Our Team Section End */}
      </Layout>
    </>
  );
}

export default About;
