import React from "react";
import pic2 from "../../images/pic2.png"
import pic4 from "../../images/pic4.jpg"
import '../../styles/experience.css'
import Constants from '../../constants'
import { IoClose } from "react-icons/io5";

const Experience = ({ mobile, setCurrent }) => {
    if  (mobile){
        return (
        <div className="content-container mobile">
            <div className="content-titleContainer mobile">
                <div style={{fontSize: "12vw"}} className="content-text title mobile">{"EXPERIENCE"}</div>
                <div style={{fontSize: "13px"}} className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer mobile">
                <div className="content-text heading mobile">
                    {"Work\n"}
                    <IoClose onClick={()=>{setCurrent(0);}} size={'2.5vh'} className="content-close mobile" />
                </div>
                <div className="content-line mobile"></div>
                <div className="experience-top-container">
                    <div className="content-text body3 mobile">
                    {"As a backend Software Engineer Intern at Arcesium, I designed tools for secure financial data migration and built Kubernetes jobs to handle large-scale state replication. My work improved reporting speed and accuracy to tackle complex accounting challenges.\n\n"}
                    {"As a Full-Stack Web Developer Intern at MassMutual, I developed a secure and seamless authentication portal. I managed databases, developed new front-end pages, and faced incoming security threats.\n\n"}
                    {"As a research assistant at MIT I've conducted research at the MIT Media Lab and Space Systems Laboratory. I collected and analyzed data, created models, developed prototypes, and designed education games.\n\n"}
                    </div>
                    <div className="experience-image-container mobile">
                        <img className="content-image-pic2 mobile" src={pic2} alt="mitcsc"></img>
                        <img className="content-image-pic2 mobile" src={pic4} alt="solo"></img>
                    </div>
                </div>
                
                <div className="content-text heading mobile">
                    {"Activities\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body3 mobile">
                    {"As president of the MIT Chinese Students Club, I promote Asian American advocacy, celebrate Chinese culture, and organize events for both MIT and the greater Boston area.\n\n"}
                    {"I'm also on the MIT Varsity Squash team, having played for over 12 years.\n\n"}

                </div>
            </div>
        </div>
        )
    }
    return (

        <div className="content-container c1">
            <div className="content-titleContainer">
                <div style={{fontSize: "5.5vh", lineHeight: "5.5vh"}} className="content-text title">{"E\nX\nP\nE\nR\nI\nE\nN\nC\nE"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer">
                <div className="content-text subject">
                    {"Work\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body3">
                    {"As a backend Software Engineer Intern at Arcesium, I designed tools for secure financial data migration and built Kubernetes jobs to handle large-scale state replication. My work improved reporting speed and accuracy to tackle complex accounting challenges.\n\n"}
                    {"As a Full-Stack Web Developer Intern at MassMutual, I developed a secure and seamless authentication portal. I managed databases, developed new front-end pages, and faced incoming security threats.\n\n"}
                    {"I've learned to work effectively both independently and with a team while communicating effectively."}
                </div>
                <div className="content-text subject">
                    {"Activities\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body3">
                    {"As president of the MIT Chinese Students Club, I promote Asian American advocacy, celebrate Chinese culture, and organize events for both MIT and the greater Boston area.\n\n"}
                    {"I'm also on the MIT Varsity Squash team, having played for over 12 years.\n\n"}

                </div>
            </div>
            <div className="experience-image-container">
                <img className="content-image-pic2" src={pic2} alt="mitcsc"></img>
                <img className="content-image-pic2" src={pic4} alt="solo"></img>
            </div>
            <IoClose onClick={()=>{setCurrent(0);}} size={'2vw'} className="content-close" />
        </div>
    )
}

export default Experience;