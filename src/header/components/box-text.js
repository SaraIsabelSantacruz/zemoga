import React from 'react';
import Like from '../../icons/components/like'
import Dislike from '../../icons/components/dislike'

function BoxText(){
  return(
    <div className="">
      <div className="filter-blur hidden-xs"></div>
      <div className="box-container">
        <div className="text-container">
          <p className="question-text">Whats your opinion on?</p>
          <h1>Pope Francis?</h1>

          <p className="cont-text">
            He’s talking tough on clergy sexual abuse, but is he just another papal
            pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
          </p>

          <a>More information</a>

          <p className="cuestion-veredict">What's Your Veredict?</p>
        </div>
        <div className="icons-container">
          <div className="icons-text">
            <Like sizeH={50} viewBox="0 -4 38 50" color="white"/>
          </div>
          <div className="icons-text">
            <Dislike sizeH={50} viewBox="0 -5 38 50" color="white"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxText;
