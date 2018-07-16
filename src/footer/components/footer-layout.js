import React from 'react';

function FooterLayout(props){
  return (
    <footer className="footer">
      {props.children}
    </footer>
  )
}

export default FooterLayout;
