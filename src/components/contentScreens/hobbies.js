import React from "react";
import pic1 from "../../images/pic1.jpg"
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'
import '../../styles/hobbies.css'
import food1 from "../../images/food1.jpg"
import food2 from "../../images/food2.jpg"
import food3 from "../../images/food3.jpg"
import hobbies1 from "../../images/hobbies1.jpeg"
import hobbies2 from "../../images/hobbies2.mp4"

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
                    {"Cooking for myself over the pandemic sparked a strong passion for cooking, and I love experimenting with new recipes and ingredients in the kitchen."}
                    {"Some of my favorites include handmade pasta, black bean udon noodles, and shepherds pie."}
                </div>
                <div className="content-text subject">
                    {"Reading\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"I'm an avid reader and I can easily lose an afternoon buried in an intriguing book. Although I enjoy a wide range of genres, "}
                    {"there is a special place in my heart for science fiction and historical fiction. I'm always asking for recommendations and "}
                    {"my reading list is constantly expanding."}
                </div>
                <div className="content-text subject">
                    {"Bouldering\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"Over the last couple of years I have developed a passion for indoor bouldering. I love the euphoric feeling of finally completing a "}
                    {"bouldering 'problem' after improving in incremental amounts for weeks. I find that bouldering is an awesome way to stay in shape and challenge myself."}
                </div>
            </div>
            <div className="content-gallery-container">
                <div className="content-image-pic-container1">
                    <img className="content-image-food v1" src={food1} alt='Chicken Eggplant Rollatini' />
                    <img className="content-image-food v2" src={food2} alt='Beef Puff Pastry Empanada' />
                    <img className="content-image-food v3" src={food3} alt='Black Bean Noodles' />
                </div>
                <div className="content-image-pic-container2">
                    <img className="content-image-reading" src={hobbies1} alt='Chicken Eggplant Rollatini' />
                    <video className='content-video' controls muted autoPlay loop>
                        <source src={hobbies2} type="video/mp4" />
                    </video>
                </div>
            </div>
            <IoClose onClick={() => { setCurrent(0); }} size={'2vw'} className="content-close" />
        </div >
    )
}

export default Hobbies;