import React from "react";
import '../styles/header.css'
import sig from '../images/sig.png'

const Header = (props) => {
  return (
    <div>
      <div className="header-background">
        <img className="header-img" src={sig}></img>
        <div onClick={()=>{props.setCurrent(500)}}className="header-text">Home</div>
        <div onClick={()=>{props.setCurrent(1500)}}className="header-text">Bio</div>
        <div onClick={()=>{props.setCurrent(2500)}}className="header-text">Experience</div>
        <div onClick={()=>{props.setCurrent(3500)}}className="header-text">Portfolio</div>
        <div onClick={()=>{props.setCurrent(4500)}}className="header-text">Hobbies</div>
        <div onClick={()=>{props.setCurrent(5500)}}className="header-text">Contact</div>
      </div>
    </div>
    
  );
};

export default Header;