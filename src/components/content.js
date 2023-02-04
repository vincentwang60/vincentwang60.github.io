import React, { useEffect } from "react";
import '../styles/content.css'
import Face from "../images/face.png"
import gsap from "gsap";
import Home from "./contentScreens/home"
import Bio from "./contentScreens/bio"
import Experience from "./contentScreens/experience"
import Portfolio from "./contentScreens/portfolio"
import Hobbies from "./contentScreens/hobbies"
import Contact from "./contentScreens/contact"

const Content = ({ mobile, current, setCurrent, windowDimensions }) => {
  useEffect(() => {
    let width = document.documentElement.clientWidth
    if (current < 1000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: 0 });
    }
    if (current >= 1000 && current < 2000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: -width });
    }
    if (current >= 2000 && current < 3000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: -2 * width });
    }
    if (current >= 3000 && current < 4000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: -3 * width });
    }
    if (current >= 4000 && current < 5000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: -4 * width });
    }
    if (current >= 5000 && current <= 6000) {
      gsap.to(".content-wholeContainer", { ease: "power4.out", duration: 2, x: -5 * width });
    }
  }, [current, windowDimensions])
  return (
    <div className="content-wholeContainer">
      <Home mobile={mobile}/>
      <Bio mobile={mobile} setCurrent={setCurrent} />
      <Experience mobile={mobile} setCurrent={setCurrent} />
      <Portfolio mobile={mobile} setCurrent={setCurrent} />
      <Hobbies mobile={mobile} setCurrent={setCurrent} />
      <Contact mobile={mobile} setCurrent={setCurrent} />
    </div>
  )
}

export default Content;