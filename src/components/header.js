import React, {useState} from "react";
import '../styles/header.css'
import { IoMenuOutline } from "react-icons/io5";
import sig from '../images/sig.png'

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  if (props.mobile){
    let menu;
    if (showMenu){
      menu = 
      <div className="header-menu-container">
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(500)}}className="header-text">Home</div>
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(1500)}}className="header-text">Bio</div>
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(2500)}}className="header-text">Experience</div>
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(3500)}}className="header-text">Portfolio</div>
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(4500)}}className="header-text">Hobbies</div>
        <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(5500)}}className="header-text">Contact</div>
      </div>
    }
    return (
      <div>
        <div className="header-background mobile">
          <img className="header-img-mobile" src={sig}></img>
          <IoMenuOutline onClick={()=>{setShowMenu(!showMenu)}} className="header-menu" size={'5vh'}/>
        </div>
        {menu}
      </div>
    )
  }
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