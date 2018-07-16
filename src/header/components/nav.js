import React from 'react';
import { Navbar } from 'react-bootstrap';
import Search from '../../icons/components/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav (props){
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand className="navbarTitle">
          <a href="#home">Rule of Thumb.</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <div className="navbar-right">
          <Navbar.Link className="main-menu" href="#">Past Trials</Navbar.Link>
          <Navbar.Link className="main-menu" href="#">How it Works</Navbar.Link>
          <Navbar.Link className="main-menu" href="#">Login/Sign Up</Navbar.Link>
          <Navbar.Link className="main-menu"> <FontAwesomeIcon icon="search" /> </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav;
