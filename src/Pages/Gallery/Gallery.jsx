import React, { useState } from 'react';
import Layout from "../../components/Layouts/layout";
import './Gallery.scss';
import { Col, Container, Row, Modal, Button} from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = images.findIndex(img => img === selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // Define your array of images here
  const images = [
   new URL('../../assets/images/menu/menu-1.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-3.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-5.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-7.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-9.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-11.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-15.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-18.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-1.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-2.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-3.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-5.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-7.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-9.jpg', import.meta.url).href, 
   new URL('../../assets/images/menu/dinner-10.jpg', import.meta.url).href, 
   new URL('../../assets/images/menu/dinner-16.jpg', import.meta.url).href, 
   new URL('../../assets/images/menu/dinner-13.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-1.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-2.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-3.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-5.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-7.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-10.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-15.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-9.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/menu-8.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dessert-4.jpg', import.meta.url).href,
   new URL('../../assets/images/menu/dinner-4.jpg', import.meta.url).href,
  ]; // Example: Showing Menu13 four times

  return (
    <>
      <Layout>
        {/* Banner Section Start */}
        <section className='bg_parallax_scroll'></section>
        {/* Banner Section End */}

        {/* Gallery Section Start */}
        <section className='gallery_wrapper'>
          <Container>
            <Row className='align-items-center justify-content-center my-2 py-2'>
              <Col lg={12} md={6} className='text-center menu_card'>
                <h3>Borcelle Catering Gallery Images</h3>
              </Col>
            </Row>
            <Row>
              {images.map((image, index) => (
                <Col key={index} sm={6} lg={3} className="mb-4">
                  <div className="gallery_container">
                    <div className="gallery_item">
                      <img
                        src={image}
                        alt={`menu-${index}`}
                        className="img-fluid"
                        onClick={() => handleShow(image)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* Gallery Section End */}

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} contentClassName="custom-modal-content text-center">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {selectedImage && <img src={selectedImage} alt="menu" className="d-block w-100" />}

            <div className="modal-controls mt-3 pt-3 mb-0 pb-0 text-center">
              <Button variant="light" onClick={handlePrevious}><BsChevronLeft /></Button>
              <Button variant="light" onClick={handleNext}><BsChevronRight /></Button>
            </div>
          </Modal.Body>
        </Modal>
      </Layout>
    </>
  );
};

export default Gallery;
