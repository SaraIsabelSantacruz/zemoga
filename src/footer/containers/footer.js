import React, { Component } from 'react';
import FooterLayout from '../components/footer-layout'
import '../footerStyle.scss'

class Header extends Component{

  render(){
    return(
      <FooterLayout>
        <div className="footer-box-one">
          <p>
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
          </p>
        </div>
        <div className="footer-box-two">
          <p>
            <span>Follow Us</span>
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-twitter"></i></span>
          </p>
        </div>
      </FooterLayout>
    )
  }
}

export default Header;
