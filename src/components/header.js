import React, {useState, useEffect, useMemo} from "react";
import '../styles/header.css'
import { IoMenuOutline } from "react-icons/io5";
import sig from '../images/sig.png'
import gsap from 'gsap'

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  const tl = useMemo(() => gsap.timeline({ paused: true , defaults: {duration: 0.25, ease: 'power4.out'}}), []);

  useEffect(()=>{
    tl.fromTo(
      ".header-menu-container",
      { clipPath: menuUp, visibility: "hidden" },
      { clipPath: menuDown, visibility: "visible" },
      0
    )
    .fromTo(
      ".header-text",
      { opacity: 0, x: "-10vw", stagger: 0.03 },
      { opacity: 1, x: "0vw", stagger: 0.03, duration: 0.2}
    );
  },[])

  useEffect(()=>{
    if(showMenu){
      tl.play()
    }
    else{
      tl.reverse()
    }
  }, [showMenu])

  if (props.mobile){
    return (
      <div>
        <div className="header-background mobile">
          <img className="header-img-mobile" src={sig}></img>
          <IoMenuOutline onClick={()=>{setShowMenu(!showMenu)}} className="header-menu mobile" size={'5vh'}/>
        </div>
        <div className="header-menu-container mobile">
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(500)}}className="header-text mobile">Home</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(1500)}}className="header-text mobile">Bio</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(2500)}}className="header-text mobile">Experience</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(3500)}}className="header-text mobile">Portfolio</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(4500)}}className="header-text mobile">Hobbies</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(5500)}}className="header-text mobile">Contact</div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="header-background">
        <img className="header-img" src={sig}></img>
        <IoMenuOutline onClick={()=>{setShowMenu(!showMenu)}} className="header-menu" size={'5vh'}/>
      </div>
      <div className="header-menu-container">
        <div className="header-background" style={{position: 'absolute'}}>
          <img className="header-img" src={sig}></img>
          <IoMenuOutline onClick={()=>{setShowMenu(!showMenu)}} className="header-menu" size={'5vh'}/>
        </div>
        <div style={{padding: '0.5vw', marginTop: '6vh'}}>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(500)}}className="header-text">Home</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(1500)}}className="header-text">Bio</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(2500)}}className="header-text">Experience</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(3500)}}className="header-text">Portfolio</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(4500)}}className="header-text">Hobbies</div>
          <div onClick={()=>{setShowMenu(!showMenu); props.setCurrent(5500)}}className="header-text">Contact</div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;