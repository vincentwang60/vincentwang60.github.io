import React, { useState, useEffect } from "react";
import '../styles/main.css'
import Gear from '../components/gear'
import Watch from "./clockface.js"
import Hand from "../images/hand.svg"
import gsap from "gsap";

function getWindowDimensions() {
  const { innerWidth: newWidth, innerHeight: newHeight } = window;
  return { x: newWidth, y: newHeight };
}
function getAngle(mouse, window) {
  let obj = { x: mouse.x - window.x / 2, y: window.y - mouse.y }
  let angle = 90 - Math.atan2(obj.y, obj.x) * 180 / Math.PI
  return angle;
}

function clickEvent(num){
  console.log(num)
}

const Main = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0)
  const [hover, setHover] = useState(0)

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setMouseCoords({ x: event.clientX, y: event.clientY, });
    };
    const handleResize = () => { setWindowDimensions(getWindowDimensions()); }
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, [])

  useEffect(() => {
    setAngle(getAngle(mouseCoords, windowDimensions))
  }, [mouseCoords, windowDimensions])

  useEffect(() => {
    gsap.to(".main-watch-hand", { duration: 2, rotation: angle, ease: "SteppedEase.config(2)", transformOrigin: '50% 76%' });
    if (angle > -70 && angle < -54) { setHover(1) }
    else if (angle > -42 && angle < -18) { setHover(2) }
    else if (angle > -8 && angle < 8) { setHover(3) }
    else if (angle > 18 && angle < 42) { setHover(4) }
    else if (angle > 54 && angle < 70) { setHover(5) }
    else { setHover(0) }
  }, [angle])

  return (
    <div className="main-background">
      <div className="main-background secondary">
        <div className="main-watchContainer">
          <div className="main-gearContainer">
            <Gear angle={angle} />
          </div>
          <img className="main-watch-hand" src={Hand} alt="Watch face" />
          <div className="main-watch">
            <Watch hover={hover} clickEvent={clickEvent}/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Main;