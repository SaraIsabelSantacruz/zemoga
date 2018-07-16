import React, { Component } from 'react';
import BoxText from '../components/box-text-layout'
import '../home-style.scss'

class BoxUp extends Component {
  render(){
    return(
      <BoxText>
        <div className="text-box-left hidden-xs">
          <p><span>Speak out. </span> <span>Be heard.</span></p>
          <p id="text-one">Be counted</p>
        </div>
        <div className="text-box-right">
          <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div>
      </BoxText>
    )
  }
}

export default BoxUp;
