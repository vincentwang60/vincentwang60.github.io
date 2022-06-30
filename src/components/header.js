import React from "react";
import '../styles/header.css'
import sig from '../images/sig.png'

const Header = (props) => {
  return (
    <>
      <img src={sig}></img>
      <div className="background">Vincent Wang</div>
    </>
    
  );
};

export default Header;