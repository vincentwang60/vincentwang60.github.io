import React from "react";
import Face from "../../images/face.png"
import '../../styles/home.css'

const Home = () => {
    return (
        <div className="content-container c0">
            <div className="content-imageContainer">
                <div className="circle"></div>
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