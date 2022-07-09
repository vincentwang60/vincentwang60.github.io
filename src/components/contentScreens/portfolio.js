import React from "react";
import pic1 from "../../images/pic1.jpg"
import '../../styles/content.css'
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'

const Portfolio = ({ setCurrent }) => {
    return (

        <div className="content-container c1">
            <div className="content-titleContainer">
                <div style={{fontSize: "6vh", lineHeight: "6vh"}} className="content-text title">{"P\nO\nR\nT\nF\nO\nL\nI\nO"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer">
                <div className="content-text heading">Background</div>
                <div className="content-line"></div>
                <div className="content-text body">
                    {"Hi, my name is Vincent Wang!\n"}
                </div>
            </div>
            <div className="content-image-pic1-container">
                <img className="content-image-pic1" src={pic1} alt="garden"></img>
            </div>
            <IoClose onClick={()=>{setCurrent(0);}} size={'2vw'} className="content-close" />
        </div>
    )
}

export default Portfolio;