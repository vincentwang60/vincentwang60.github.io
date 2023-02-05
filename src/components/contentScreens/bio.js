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
                    <div style={{fontSize: "13px"}} className="content-text mini">updated {Constants.updated}</div>
                </div>
                <div className="content-textContainer mobile">
                    <div className="content-text heading mobile">
                        Background 
                        <IoClose onClick={()=>{setCurrent(0);}} size={'2.5vh'} className="content-close mobile" /></div>
                    <div className="content-line mobile"></div>
                    <div className="bio-topContainer">
                        <div className="content-text body mobile">
                            {"Hi, my name is Vincent Wang!\n"}
                            {"I'm a student at MIT majoring in Math and Computer Science and I love learning, trying new things, and building fun projects.\n\n"}
                            {"I have experience writing production-level code and am skilled in:\n"}
                        </div>                        
                        <div className="bio-pic-container mobile">
                            <img className="bio-pic" src={pic1} alt="garden"></img>
                        </div>
                    </div>
                    <div className="content-skillsContainer">
                        <div className="content-text skills mobile">Python <IoLogoPython size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">JavaScript <IoLogoJavascript size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">React (Native) <IoLogoReact size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">HTML <IoLogoHtml5 size={'3vh'} className="bio-icon"/></div>
                    </div>
                    <div className="content-skillsContainer">
                        <div className="content-text skills mobile">Firebase <IoLogoFirebase size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">MongoDB <SiMongodb size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">C++ <SiCplusplus size={'3vh'} className="bio-icon"/></div>
                        <div className="content-text skills mobile">VCS <IoLogoGithub size={'3vh'} className="bio-icon"/></div>
                    </div>
                    <div className="content-text body mobile">
                        {"I'm expecting to graduate in December 2023.\n\n"}
                        {"I’m passionate about web and app development, education, algorithms, and mathematics."}
                    </div>
                </div>
            </div>
        )
    }
    return (

        <div className="content-container">
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
                    <div className="content-text skills">Python <IoLogoPython className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">JavaScript <IoLogoJavascript className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">React (Native) <IoLogoReact className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">HTML <IoLogoHtml5 className="bio-icon" size={'2vw'}/></div>
                </div>
                <div className="content-skillsContainer">
                    <div className="content-text skills">Firebase <IoLogoFirebase className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">MongoDB <SiMongodb className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">C++ <SiCplusplus className="bio-icon" size={'2vw'}/></div>
                    <div className="content-text skills">VCS <IoLogoGithub className="bio-icon" size={'2vw'}/></div>
                </div>
                <div className="content-text body">
                    {"I'm expecting to graduate in December 2023.\n\n"}
                    {"I’m passionate about web and app development, education, algorithms, and mathematics."}
                </div>
            </div>
            <div className="bio-pic-container">
                <img className="bio-pic" src={pic1} alt="garden"></img>
            </div>
            <IoClose onClick={()=>{setCurrent(0);}} size={'2vw'} className="content-close" />
        </div>
    )
}

export default Bio;