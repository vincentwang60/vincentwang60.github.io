import React from "react";
import pic1 from "../../images/pic1.jpg"
import '../../styles/bio.css'
import Constants from '../../constants'
import { IoLogoPython, IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoFirebase, IoLogoGithub, IoClose } from "react-icons/io5";
import { SiMongodb, SiCplusplus } from "react-icons/si";

const Bio = ({ mobile, setCurrent }) => {
    if (mobile){
        return (
            <div className="content-container mobile">
                <div className="content-titleContainer mobile">
                    <div className="content-text title mobile">{"BIO"}</div>
                    <div className="content-text mini">updated {Constants.updated}</div>
                </div>
                <div className="content-textContainer">
                    <div className="content-text heading">Background</div>
                    <div className="content-line"></div>
                    <div className="content-text body">
                        {"Hi, my name is Vincent Wang!\n"}
                        {"I'm a student at MIT majoring in Math and Computer Science and I love learning, trying new things, and building fun projects.\n\n"}
                        {"I have experience writing production-level code and am skilled in:\n"}
                    </div>
                    <div className="content-skillsContainer">
                        <div className="content-text skills">Python <IoLogoPython className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">JavaScript <IoLogoJavascript className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">React (Native) <IoLogoReact className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">HTML <IoLogoHtml5 className="content-icon" size={'2vw'}/></div>
                    </div>
                    <div className="content-skillsContainer">
                        <div className="content-text skills">Firebase <IoLogoFirebase className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">MongoDB <SiMongodb className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">C++ <SiCplusplus className="content-icon" size={'2vw'}/></div>
                        <div className="content-text skills">VCS <IoLogoGithub className="content-icon" size={'2vw'}/></div>
                    </div>
                    <div className="content-text body">
                        {"I'm expecting to graduate in December 2023.\n\n"}
                        {"I’m passionate about web and app development, education, algorithms, and mathematics."}
                    </div>
                </div>
                <div className="content-image-pic1-container">
                    <img className="content-image-pic1" src={pic1} alt="garden"></img>
                </div>
                <IoClose onClick={()=>{setCurrent(0);}} size={'2vw'} className="content-close" />
            </div>
        )
    }
    return (

        <div className="content-container c1">
            <div className="content-titleContainer">
                <div className="content-text title">{"B\nI\nO"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer">
                <div className="content-text heading">Background</div>
                <div className="content-line"></div>
                <div className="content-text body">
                    {"Hi, my name is Vincent Wang!\n"}
                    {"I'm a student at MIT majoring in Math and Computer Science and I love learning, trying new things, and building fun projects.\n\n"}
                    {"I have experience writing production-level code and am skilled in:\n"}
                </div>
                <div className="content-skillsContainer">
                    <div className="content-text skills">Python <IoLogoPython className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">JavaScript <IoLogoJavascript className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">React (Native) <IoLogoReact className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">HTML <IoLogoHtml5 className="content-icon" size={'2vw'}/></div>
                </div>
                <div className="content-skillsContainer">
                    <div className="content-text skills">Firebase <IoLogoFirebase className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">MongoDB <SiMongodb className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">C++ <SiCplusplus className="content-icon" size={'2vw'}/></div>
                    <div className="content-text skills">VCS <IoLogoGithub className="content-icon" size={'2vw'}/></div>
                </div>
                <div className="content-text body">
                    {"I'm expecting to graduate in December 2023.\n\n"}
                    {"I’m passionate about web and app development, education, algorithms, and mathematics."}
                </div>
            </div>
            <div className="content-image-pic1-container">
                <img className="content-image-pic1" src={pic1} alt="garden"></img>
            </div>
            <IoClose onClick={()=>{setCurrent(0);}} size={'2vw'} className="content-close" />
        </div>
    )
}

export default Bio;