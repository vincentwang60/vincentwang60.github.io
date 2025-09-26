import React from "react";
import pic1 from "../../images/pic1.jpg"
import '../../styles/bio.css'
import Constants from '../../constants'
import { IoLogoPython, IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoGithub, IoClose } from "react-icons/io5";
import { SiKubernetes } from 'react-icons/si';
import { FaAws, FaLinux } from "react-icons/fa";
import { ResponsiveTitle, ResponsiveHeading, ResponsiveBody, getResponsiveClass, getResponsiveSize, getContainerClass } from '../../utils/textUtils'

const Bio = ({ mobile, setCurrent }) => {
    const containerClass = getContainerClass("content-container", mobile);
    const titleContainerClass = getContainerClass("content-titleContainer", mobile);
    const textContainerClass = getContainerClass("content-textContainer", mobile);
    const closeSize = getResponsiveSize('2.5vh', '2vw', mobile);
    const closeClass = getResponsiveClass("content-close", mobile);
    const iconSize = getResponsiveSize('3vh', '2vw', mobile);
    const miniStyle = mobile ? {fontSize: "13px"} : {};

    const skills = [
        { name: "Python", icon: IoLogoPython },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "React (Native)", icon: IoLogoReact },
        { name: "HTML", icon: IoLogoHtml5 },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        { name: "Linux", icon: FaLinux },
        { name: "VCS", icon: IoLogoGithub }
    ];

    const renderSkills = () => (
        <>
            <div className="content-skillsContainer">
                {skills.slice(0, 4).map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div key={index} className={getResponsiveClass("content-text skills", mobile)}>
                            {skill.name} <IconComponent size={iconSize} className="bio-icon"/>
                        </div>
                    );
                })}
            </div>
            <div className="content-skillsContainer">
                {skills.slice(4).map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div key={index} className={getResponsiveClass("content-text skills", mobile)}>
                            {skill.name} <IconComponent size={iconSize} className="bio-icon"/>
                        </div>
                    );
                })}
            </div>
        </>
    );

    return (
        <div className={containerClass}>
            <div className={titleContainerClass}>
                <ResponsiveTitle text="BIO" mobile={mobile} />
                <div className={getResponsiveClass("content-text mini", mobile)} style={miniStyle}>
                    updated {Constants.updated}
                </div>
            </div>
            <div className={textContainerClass}>
                <div className={getResponsiveClass("content-text heading", mobile)}>
                    Background 
                    <IoClose onClick={()=>{setCurrent(0);}} size={closeSize} className={closeClass} />
                </div>
                <div className={getResponsiveClass("content-line", mobile)}></div>
                
                {mobile ? (
                    <div className="bio-topContainer">
                        <ResponsiveBody 
                            text={"I'm a senior at MIT majoring in Math and Computer Science.\nI love learning, trying new things, and building fun projects.\n\nI have experience writing production-level code and am skilled in:\n"} 
                            mobile={mobile} 
                        />                        
                        <div className="bio-pic-container mobile">
                            <img className="bio-pic" src={pic1} alt="garden"></img>
                        </div>
                    </div>
                ) : (
                    <ResponsiveBody 
                        text={"I'm a senior at MIT majoring in Math and Computer Science.\nI love learning, trying new things, and building fun projects.\n\nI have experience writing production-level code and am skilled in:\n"} 
                        mobile={mobile} 
                    />
                )}
                
                {renderSkills()}
                
                <ResponsiveBody 
                    text={"I'm expecting to graduate in December 2025.\n\nI'm passionate about mathematics, algorithms, and full-stack software development."} 
                    mobile={mobile} 
                />
            </div>
            
            {!mobile && (
                <div className="bio-pic-container">
                    <img className="bio-pic" src={pic1} alt="garden"></img>
                </div>
            )}
            
            {!mobile && <IoClose onClick={()=>{setCurrent(0);}} size={closeSize} className={closeClass} />}
        </div>
    )
}

export default Bio;