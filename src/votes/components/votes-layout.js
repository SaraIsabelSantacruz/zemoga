import React from 'react';
import '../votes-style.scss'

const VotesLayout = (props) => (
  <div className="votes-layout" style={props.style}>
    {props.children}
  </div>
)

export default VotesLayout;
