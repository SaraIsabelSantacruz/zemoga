import React, { Component } from 'react';
import HeaderLayout from '../components/header-layout'
import Navbar from '../components/nav'
import BoxText from '../components/box-text'
import BoxClosing from '../components/box-closing'
import '../headerStyle.scss'

class Header extends Component{

  render(){
    return(
      <HeaderLayout>
        <div className="header">
          <Navbar/>
          <BoxText/>
          <BoxClosing/>
        </div>
      </HeaderLayout>
    )
  }
}

export default Header;
