import React, { useState, useEffect } from "react";
import '../styles/main.css'
import Gear from '../components/gear'

function getWindowDimensions() {
  const { innerWidth: newWidth, innerHeight: newHeight } = window;
  return { x: newWidth, y: newHeight };
}
function getAngle(mouse, window){
  let obj = {x:mouse.x-window.x/2,y:window.y-mouse.y}
  let angle = 90-Math.atan2(obj.y, obj.x) * 180 / Math.PI
  return angle;
}
const Main = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0)

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

  useEffect(()=>{
    setAngle(getAngle(mouseCoords,windowDimensions))
  },[mouseCoords,windowDimensions])

  return (
    <div className="main-background">
      <div className="main-background secondary">
        <div className="main-gearContainer">
          <Gear angle={angle} />
        </div>
      </div>
    </div>

  );
};

export default Main;