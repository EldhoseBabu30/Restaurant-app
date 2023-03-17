import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="//view-restauran/{restaurant.id}">
            <img
              alt=""
              src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            &nbsp; Adukkala
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header