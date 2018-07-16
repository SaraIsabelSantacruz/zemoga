import React from 'react';

function Icon (props){
  const{
    color,
    sizeW,
    sizeH,
    viewBox
  } = props;
  return(
    <svg viewBox={viewBox}
         height={sizeH}
         width={sizeW}
         fill={color}
    >
      {props.children}
    </svg>
  )
}

export default Icon;
