import React from "react";
import pic1 from "../../images/pic1.jpg"
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'
import '../../styles/hobbies.css'
import {food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14} from '../../images/hobbies/index'

const Hobbies = ({ setCurrent }) => {
    return (
        <div className="content-container c1">
            <div className="content-titleContainer">
                <div style={{ fontSize: "8vh", lineHeight: "7vh" }} className="content-text title">{"H\nO\nB\nB\nI\nE\nS"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer">
                <div className="content-text subject">
                    {"Cooking\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"uh"}
                </div>
                <div className="content-text subject">
                    {"Reading\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"hm"}
                </div>
                <div className="content-text subject">
                    {"Bouldering\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"hm"}
                </div>
            </div>
            <div className="content-image-pic1-container">
            </div>
            <IoClose onClick={() => { setCurrent(0); }} size={'2vw'} className="content-close" />
        </div >
    )
}

export default Hobbies;