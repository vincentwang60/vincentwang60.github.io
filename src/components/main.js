import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import '../styles/main.css'
import Gear from '../components/gear'
import Watch from "./clockface.js"
import Header from "../components/header"
import Content from "./content.js"
import Hand from "../images/hand.svg"
import gsap from "gsap";



const Main = (props) => {
  // -------------------- STATES -------------------- \\
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0)
  const [hover, setHover] = useState(0)
  const [loading, setLoading] = useState(true)

  // -------------------- FUNCTIONS -------------------- \\
  function handleScroll(scrollAmount) {
    if (scrollAmount > 0) {
      if (props.current < 6000) { props.setCurrent(props.current + scrollAmount) }
      else { props.setCurrent(6000) }
    }
    else {
      if (props.current > 0) { props.setCurrent(props.current + scrollAmount) }
      else { props.setCurrent(0) }
    }
  }

  function getAngle(mouse, window) {
    let newY = window.y
    if (props.current >= 1000) {
      newY = window.y + 5 / 100 * (document.documentElement.clientHeight)
    }
    let obj = { x: mouse.x - window.x / 2, y: newY - mouse.y }
    let angle = 90 - Math.atan2(obj.y, obj.x) * 180 / Math.PI
    return angle;
  }

  function getWindowDimensions() {
    const { innerWidth: newWidth, innerHeight: newHeight } = window;
    return { x: newWidth, y: newHeight };
  }

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  // -------------------- EFFECTS -------------------- \\
  useEffect(() => {
    const handleWindowMouseMove = event => {
      setMouseCoords({ x: event.clientX, y: event.clientY, });
    };
    const handleResize = () => { console.log(getWindowDimensions()); setWindowDimensions(getWindowDimensions()); }
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('resize', handleResize);
    demoAsyncCall().then(setLoading(false))
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, [])

  useEffect(() => {
    setAngle(getAngle(mouseCoords, windowDimensions))
  }, [mouseCoords, windowDimensions])

  useEffect(() => {
    gsap.to(".main-watch-hand", { duration: 1, rotation: angle, ease: "elastic.out(0.5,0.2)", transformOrigin: '50% 76%' });
    if (angle > -70 && angle < -54) { setHover(1) }
    else if (angle > -42 && angle < -18) { setHover(2) }
    else if (angle > -8 && angle < 8) { setHover(3) }
    else if (angle > 18 && angle < 42) { setHover(4) }
    else if (angle > 54 && angle < 70) { setHover(5) }
    else { setHover(0) }
  }, [angle])

  useEffect(() => {
    if (props.current >= 1000) {
      // shrinking gear
      gsap.to(".main-gearContainer", { duration: 1, scale: 0.5, transform: "translateY(5vh)", transformOrigin: 'center', ease: "expo.out" });
      gsap.to(".main-watch", { duration: 1, scale: 0.5, transform: "translateY(5vh)", transformOrigin: 'center', ease: "expo.out" });
      gsap.to(".main-watch-hand", { duration: 1, scale: 0.5, rotation: angle, transform: "translateY(5vh)", transformOrigin: '50% 76%', ease: "expo.out" });
    }
    else {
      // expanding gear
      gsap.to(".main-gearContainer", { duration: 1, scale: 1, y: 0, ease: "expo.out" });
      gsap.to(".main-watch", { duration: 1, scale: 1, y: 0, ease: "expo.out" });
      gsap.to(".main-watch-hand", { duration: 1, scale: 1, y: 0, rotation: angle, transformOrigin: '50% 76%', ease: "expo.out" });
    }
    setAngle((props.current-3500)*180/6000)
  }, [props.current, windowDimensions])

  // -------------------- RENDER -------------------- \\
  if(loading){
    return (
      <div className="main-background">
        loading
      </div>
    )
  }
  if(windowDimensions.x < 800){
    return (
      <div className="main-background">
        <div onWheel={(e) => { handleScroll(-e.nativeEvent.wheelDelta) }} className="main-background secondary">
        <Header mobile = {true} setCurrent = {props.setCurrent} />
          <Content mobile = {true} current={props.current} setCurrent={props.setCurrent} windowDimensions={windowDimensions} />
        </div>
      </div>
    )
  }
  return (
    <div className="main-background">
      <div onWheel={(e) => { handleScroll(-e.nativeEvent.wheelDelta) }} className="main-background secondary">
      <Header mobile = {false} setCurrent = {props.setCurrent} />
        <Content mobile = {false} current={props.current} setCurrent={props.setCurrent} windowDimensions={windowDimensions} />
        <div className="main-watchContainer">
          <div className="main-gearContainer">
            <Gear angle={angle} />
          </div>
          <img className="main-watch-hand" src={Hand} alt="Watch face" />
          <div className="main-watch">
            <Watch setCurrent={props.setCurrent} hover={hover} angle={angle}/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Main;