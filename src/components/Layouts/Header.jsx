import React, {useState}from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '/src/assets/images/logo.png';
import './Header.scss';

function Header() {
    const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand'>
              <img src={Logo} alt="Restaurant Logo" className='img-fluid'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link as= {Link} to='/'>Home</Nav.Link>
              <Nav.Link as= {Link} to='/about'>About</Nav.Link>
              <Nav.Link as= {Link} to='/services'>Services</Nav.Link>
              <Nav.Link as= {Link} to='/menu'>Menu</Nav.Link>
              <Nav.Link as= {Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header