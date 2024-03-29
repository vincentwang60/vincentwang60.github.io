import React from "react";
import Face from "../../images/face.png"
import '../../styles/home.css'

const Home = ({mobile}) => {
    if (mobile){
        return (
            <div className="content-container home">
                <div className="content-imageContainer">
                    <img src={Face} className="content-image" alt="Face"></img>
                </div>
                <div className="home-textContainer">
                    <div class="content-text mobileHeader1">Hey, I'm</div>
                    <div class="content-text mobileHeader2">Vincent Wang</div>
                    <div class="content-text mobileHeader1">I like to code (and other things)</div>
                </div>
            </div>
        )
    }
    return (
        <div className="content-container home">
            <div className="content-imageContainer">
                <img src={Face} className="content-image" alt="Face"></img>
            </div>
            <div>
                <div class="content-text header1">Hey, I'm</div>
                <div class="content-text header2">Vincent Wang</div>
                <div class="content-text header1">I like to code (and other things)</div>
            </div>
        </div>
    )
}

export default Home;