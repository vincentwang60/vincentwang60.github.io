import React from "react";
import '../styles/header.css'
import sig from '../images/sig.png'

const Header = (props) => {
  return (
    <div className="header-background">
      <div className="header-text">about</div>
      <img className="header-img" src={sig}></img>
      <div className="header-text">contact</div>
    </div>
    
  );
};

export default Header;