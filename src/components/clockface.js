import React, { useEffect } from "react";
import "../styles/clockface.css";
import gsap from "gsap";

function Icon({ hover, setCurrent }) {
  useEffect(() => {
    switch (hover) {
      case 0:
        gsap.to(".clockface-i", { duration: 0.5, transformOrigin: 'center', scale: 1, fill: "#D2D2C6" });
        gsap.to(".clockface-ii", { duration: 0.5, transformOrigin: 'center', scale: 1, fill: "#D2D2C6" });
        gsap.to(".clockface-iii", { duration: 0.5, transformOrigin: 'center', scale: 1, fill: "#D2D2C6" });
        gsap.to(".clockface-iv", { duration: 0.5, transformOrigin: 'center', scale: 1, fill: "#D2D2C6" });
        gsap.to(".clockface-v", { duration: 0.5, transformOrigin: 'center', scale: 1, fill: "#D2D2C6" });
        break;
      case 1: gsap.to(".clockface-i", { duration: 0.5, transformOrigin: 'center', scale: 1.06, fill: "#FFC599" }); break;
      case 2: gsap.to(".clockface-ii", { duration: 0.5, transformOrigin: 'center', scale: 1.06, fill: "#FFC599" }); break;
      case 3: gsap.to(".clockface-iii", { duration: 0.5, transformOrigin: 'center', scale: 1.06, fill: "#FFC599" }); break;
      case 4: gsap.to(".clockface-iv", { duration: 0.5, transformOrigin: 'center', scale: 1.06, fill: "#FFC599" }); break;
      case 5: gsap.to(".clockface-v", { duration: 0.5, transformOrigin: 'center', scale: 1.06, fill: "#FFC599" }); break;
    }
  }, [hover])
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
      >
        <defs>
          <style bxFonts="EB Garamond">
            @import
            url(https://fonts.googleapis.com/css2?family=EB+Garamond%3Aital%2Cwght%400%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800&amp;display=swap);
          </style>
        </defs>
        <g
          fill="#D8D8D8"
          stroke="#D2D2C6"
          transform="matrix(.98016 0 0 .98016 5.557 -252.228)"
        >
          <path d="M35.42 491.632L52.141 492.827"></path>
          <path d="M39.003 469.11L55.383 472.522"></path>
          <path d="M44.634 447.099L59.99 452.047"></path>
          <path d="M52.312 425.638L67.668 432.634"></path>
          <path
            d="M73.013 391.536L89.734 392.731"
            transform="rotate(29.561 81.373 392.133)"
          ></path>
          <path
            d="M86.716 373.485L103.096 376.897"
            transform="rotate(29.561 94.906 375.191)"
          ></path>
          <path
            d="M102.161 356.765L117.517 361.713"
            transform="rotate(29.561 109.839 359.239)"
          ></path>
          <path
            d="M118.922 341.752L134.278 348.748"
            transform="rotate(29.561 126.6 345.25)"
          ></path>
          <path
            d="M156.032 323.151L172.753 324.346"
            transform="rotate(59.553 164.393 323.749)"
          ></path>
          <path
            d="M176.392 314.133L192.772 317.545"
            transform="rotate(59.553 184.582 315.839)"
          ></path>
          <path
            d="M197.812 307.014L213.168 311.962"
            transform="rotate(59.553 205.49 309.488)"
          ></path>
          <path
            d="M219.321 302.252L234.677 309.248"
            transform="rotate(59.553 227 305.75)"
          ></path>
          <path
            d="M261.374 304.837L278.095 306.032"
            transform="rotate(89.114 269.735 305.435)"
          ></path>
          <path
            d="M283.008 306.809L299.388 310.221"
            transform="rotate(89.114 291.198 308.515)"
          ></path>
          <path
            d="M304.84 310.831L320.196 315.779"
            transform="rotate(89.114 312.518 313.305)"
          ></path>
          <path
            d="M325.393 317.168L340.749 324.164"
            transform="rotate(89.114 333.071 320.666)"
          ></path>
          <path
            d="M360.403 341.495L377.124 342.69"
            transform="rotate(120 368.764 342.093)"
          ></path>
          <path
            d="M377.412 354.049L393.792 357.461"
            transform="rotate(120 385.602 355.755)"
          ></path>
          <path
            d="M393.761 368.335L409.117 373.283"
            transform="rotate(120 401.44 370.809)"
          ></path>
          <path
            d="M407.621 384.179L422.977 391.175"
            transform="rotate(120 415.3 387.677)"
          ></path>
          <path
            d="M428.292 424.1L445.013 425.295"
            transform="rotate(149.561 436.652 424.698)"
          ></path>
          <path
            d="M436.369 443.182L452.749 446.594"
            transform="rotate(149.561 444.559 444.888)"
          ></path>
          <path
            d="M443.229 463.322L458.585 468.27"
            transform="rotate(149.561 450.907 465.796)"
          ></path>
          <path
            d="M446.964 483.808L462.32 490.804"
            transform="rotate(149.561 454.642 487.306)"
          ></path>
        </g>
        <ellipse
          cx="250.596"
          cy="250.596"
          fill="rgba(255, 0, 0, 0)"
          stroke="#D2D2C6"
          strokeWidth="6"
          paintOrder="stroke markers"
          rx="247"
          ry="247"
        ></ellipse>
        <ellipse
          cx="250.596"
          cy="250.596"
          fill="rgba(216, 216, 216, 0)"
          stroke="#D2D2C6"
          strokeWidth="3"
          rx="187.211"
          ry="187.211"
        ></ellipse>
        
        <g
          fill="#D2D2C6"
          stroke="#D2D2C6"
          fontFamily="EB Garamond"
          fontWeight="500"
        >
          <text
            style={{ lineHeight: 48.5007, whiteSpace: "pre" }}
            fontSize="31.26"
            paintOrder="stroke"
            transform="matrix(.98016 0 0 .98016 5.557 -252.228) matrix(.45761 -.88915 1.10567 .56905 -422.295 324.534)"
            className="clockface-i"
          >
            <tspan x="143.246" y="388.641" onClick={()=>{setCurrent(500)}}>
              I
            </tspan>
          </text>
          <text
            style={{ whiteSpace: "pre" }}
            fontSize="29.672"
            transform="matrix(.98016 0 0 .98016 5.557 -252.228) matrix(.6135 -.3865 .65696 1.04282 -201.35 -6.917)"
            className="clockface-ii"
          >
            <tspan x="143.246" y="388.641"  onClick={()=>{setCurrent(1500)}}>
              II
            </tspan>
          </text>
          <text
            style={{ lineHeight: 39.5388, whiteSpace: "pre" }}
            fontSize="25.484"
            transform="matrix(.98016 0 0 .98016 5.557 -252.228) matrix(.79053 0 0 1.29493 124.157 -193.153)"
            className="clockface-iii"
          >
            <tspan x="143.246" y="388.641"  onClick={()=>{setCurrent(2500)}}>
              III
            </tspan>
          </text>
          <text
            style={{ lineHeight: 41.4903, whiteSpace: "pre" }}
            fontSize="25.931"
            transform="matrix(.98016 0 0 .98016 5.557 -252.228) matrix(.70628 .36467 -.62951 1.21922 484.013 -194.318)"
            className="clockface-iv"
          >
            <tspan x="143.246" y="388.641"  onClick={()=>{setCurrent(3500)}}>
              IV
            </tspan>
          </text>
          <text
            style={{ whiteSpace: "pre" }}
            fontSize="32.736"
            transform="matrix(.98016 0 0 .98016 5.557 -252.228) matrix(.44074 .77387 -1.13423 .64598 793.117 39.39)"
            className="clockface-v"
          >
            <tspan x="143.246" y="388.641"  onClick={()=>{setCurrent(4500)}}>
              V
            </tspan>
          </text>
        </g>
        <text
          style={{ whiteSpace: "pre" }}
          x="34.59"
          y="393.916"
          fill="#E4E4DD"
          fontFamily="EB Garamond"
          fontSize="17.6"
          fontWeight="500"
          letterSpacing="0.5"
          transform="rotate(-62.8 -158.177 261.58)"
          className="clockface-i"
          onClick={() => { setCurrent(1500) }}
        >
          bio
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="34.59"
          y="393.916"
          fill="#E4E4DD"
          fontFamily="EB Garamond"
          fontSize="17.6"
          fontWeight="500"
          letterSpacing="0.5"
          transform="rotate(-32.2 -480.86 116.893)"
          className="clockface-ii"
          onClick={() => { setCurrent(2500) }}
        >
          experience
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="215.277"
          y="26.263"
          fill="#E4E4DD"
          fontFamily="EB Garamond"
          fontSize="17.6"
          fontWeight="500"
          letterSpacing="0.5"
          className="clockface-iii"
          onClick={() => { setCurrent(3500) }}
        >
          portfolio
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="326.998"
          y="289.254"
          fill="#E4E4DD"
          fontFamily="EB Garamond"
          fontSize="17.6"
          fontWeight="500"
          letterSpacing="0.5"
          transform="rotate(27.3 842.916 183.896)"
          className="clockface-iv"
          onClick={() => { setCurrent(4500) }}
        >
          hobbies
        </text>
        <text
          style={{ whiteSpace: "pre" }}
          x="326.998"
          y="289.254"
          fill="#E4E4DD"
          fontFamily="EB Garamond"
          fontSize="17.6"
          fontWeight="500"
          letterSpacing="0.5"
          transform="rotate(60.305 532.606 289.657)"
          className="clockface-v"
          onClick={() => { setCurrent(5500) }}
        >
          contact
        </text>
      </svg>
    </>
  );
}

export default Icon;
