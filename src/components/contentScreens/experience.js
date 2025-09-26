import React from "react";
import pic2 from "../../images/pic2.png"
import pic4 from "../../images/pic4.jpg"
import '../../styles/experience.css'
import Constants from '../../constants'
import { IoClose } from "react-icons/io5";
import { ResponsiveTitle, ResponsiveHeading, ResponsiveBody, getResponsiveClass, getResponsiveSize, getContainerClass } from '../../utils/textUtils'

const Experience = ({ mobile, setCurrent }) => {
    const containerClass = getContainerClass("content-container", mobile);
    const titleContainerClass = getContainerClass("content-titleContainer", mobile);
    const textContainerClass = getContainerClass("content-textContainer", mobile);
    const closeSize = getResponsiveSize('2.5vh', '2vw', mobile);
    const closeClass = getResponsiveClass("content-close", mobile);
    const miniStyle = mobile ? {fontSize: "13px"} : {};
    const titleStyle = mobile ? {fontSize: "12vw"} : {fontSize: "5.5vh", lineHeight: "5.5vh"};

    const workText = mobile 
        ? "As a backend Software Engineer Intern at Arcesium, I designed tools for secure financial data migration and built Kubernetes jobs to handle large-scale state replication. My work improved reporting speed and accuracy to tackle complex accounting challenges.\n\nAs a Full-Stack Web Developer Intern at MassMutual, I developed a secure and seamless authentication portal. I managed databases, developed new front-end pages, and faced incoming security threats.\n\nAs a research assistant at MIT I've conducted research at the MIT Media Lab and Space Systems Laboratory. I collected and analyzed data, created models, developed prototypes, and designed education games.\n\n"
        : "As a backend Software Engineer Intern at Arcesium, I designed tools for secure financial data migration and built Kubernetes jobs to handle large-scale state replication. My work improved reporting speed and accuracy to tackle complex accounting challenges.\n\nAs a Full-Stack Web Developer Intern at MassMutual, I developed a secure and seamless authentication portal. I managed databases, developed new front-end pages, and faced incoming security threats.\n\nI've learned to work effectively both independently and with a team while communicating effectively.";

    const activitiesText = "As president of the MIT Chinese Students Club, I promote Asian American advocacy, celebrate Chinese culture, and organize events for both MIT and the greater Boston area.\n\nI'm also on the MIT Varsity Squash team, having played for over 12 years.\n\n";

    return (
        <div className={containerClass}>
            <div className={titleContainerClass}>
                <ResponsiveTitle text="EXPERIENCE" mobile={mobile} style={titleStyle} />
                <div className={getResponsiveClass("content-text mini", mobile)} style={miniStyle}>
                    updated {Constants.updated}
                </div>
            </div>
            <div className={textContainerClass}>
                <div className={getResponsiveClass("content-text heading", mobile)}>
                    {"Work\n"}
                    <IoClose onClick={()=>{setCurrent(0);}} size={closeSize} className={closeClass} />
                </div>
                <div className={getResponsiveClass("content-line", mobile)}></div>
                
                {mobile ? (
                    <div className="experience-top-container">
                        <ResponsiveBody text={workText} variant="body3" mobile={mobile} />
                        <div className="experience-image-container mobile">
                            <img className="content-image-pic2 mobile" src={pic2} alt="mitcsc"></img>
                            <img className="content-image-pic2 mobile" src={pic4} alt="solo"></img>
                        </div>
                    </div>
                ) : (
                    <ResponsiveBody text={workText} variant="body3" mobile={mobile} />
                )}
                
                <ResponsiveHeading text="Activities\n" mobile={mobile} />
                <div className={getResponsiveClass("content-line", mobile)}></div>
                <ResponsiveBody text={activitiesText} variant="body3" mobile={mobile} />
            </div>
            
            {!mobile && (
                <div className="experience-image-container">
                    <img className="content-image-pic2" src={pic2} alt="mitcsc"></img>
                    <img className="content-image-pic2" src={pic4} alt="solo"></img>
                </div>
            )}
            
            {!mobile && <IoClose onClick={()=>{setCurrent(0);}} size={closeSize} className={closeClass} />}
        </div>
    )
}

export default Experience;