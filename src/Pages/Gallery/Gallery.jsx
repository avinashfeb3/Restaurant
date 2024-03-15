import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Layout from "../../components/Layouts/layout";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    // Your list of image URLs
    require('../../assets/images/menu/dessert-13.jpg'),
    require('../../assets/images/menu/dessert-12.jpg'),
    require('../../assets/images/menu/dessert-11.jpg'),
    // Add more images as needed
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Layout>
      <section className='mt-5 mb-5 pt-5 pb-5'>
        <div className="gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleShow(index)}
              style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px', cursor: 'pointer' }}
            />
          ))}
        </div>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Image {currentIndex + 1}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: '100%' }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePrev}>
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNext}>
              Next
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </Layout>
  );
};

export default Gallery;
