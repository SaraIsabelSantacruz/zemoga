import React, { Component } from 'react';
import BoxText from '../components/box-text-layout'
import '../home-style.scss'

class BoxDown extends Component {
  render(){
    return(
      <BoxText>
        <div className="text-box-right">
          <p>Is there anyone else you would want us to add?</p>
        </div>
        <div className="btn-text-down">
          Submit a Name
        </div>
      </BoxText>
    )
  }
}

export default BoxDown;
