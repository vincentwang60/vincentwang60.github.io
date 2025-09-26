import React, {useState, useEffect} from "react";
import '../../styles/contact.css'
import { IoLogoGithub, IoClose, IoLogoLinkedin, IoMail, IoCopy } from "react-icons/io5";
import Constants from '../../constants'
import { ResponsiveTitle, ResponsiveHeading, ResponsiveBody, getResponsiveClass, getResponsiveSize, getContainerClass } from '../../utils/textUtils'

const Contact = ({ mobile, setCurrent }) => {
    const [fade, setFade] = useState(0)
    
    useEffect(()=>{
        if (fade > 0){
            setTimeout(()=>{
                setFade(fade-0.04)
            },100)
        }
    },[fade])

    const containerClass = getContainerClass("content-container", mobile);
    const titleContainerClass = getContainerClass("content-titleContainer", mobile);
    const textContainerClass = mobile ? "content-textContainer contact mobile" : "content-textContainer contact";
    const closeSize = getResponsiveSize('2.5vh', '2vw', mobile);
    const closeClass = getResponsiveClass("content-close", mobile);
    const iconSize = getResponsiveSize('3vh', '1.5vw', mobile);
    const titleStyle = {fontSize: "7vh", lineHeight: "7vh"};

    return (
        <div className={containerClass}>
            <div className={titleContainerClass}>
                <ResponsiveTitle text="CONTACT" mobile={mobile} style={titleStyle} />
                <div className={getResponsiveClass("content-text mini", mobile)}>
                    updated {Constants.updated}
                </div>
            </div>
            <div className={textContainerClass}>
                <div className={getResponsiveClass("content-text heading", mobile)}>
                    Contact Information
                    {mobile && <IoClose onClick={() => { setCurrent(0); }} size={closeSize} className={closeClass} />}
                </div>
                <div className={getResponsiveClass("content-line", mobile)}></div>
                <div className={getResponsiveClass("content-text body", mobile)}>
                    {"I'm currently looking for interesting and challenging software experiences and other opportunities!\n"}
                    {"Download my resume here: "}<a className="content-text link" href="/vincent_wang_resume2025.pdf" download>Download Resume</a>
                    {"\nYou can reach me via email at"}<a onClick={() => {navigator.clipboard.writeText('vkwang@mit.edu'); setFade(1)}} className="content-text link"><IoMail className="content-social" size={iconSize}/>vkwang@mit.edu</a>
                    <a style={{opacity: fade}}><IoCopy className="content-social" size={iconSize}/>copied to clipboard</a>
                    {"\nCheck out some more of my work at my github:"}
                    <a target="_blank" href="https://www.github.com/vincentwang60" className="content-text socials"><IoLogoGithub className="content-social" size={iconSize}/>github.com/vincentwang60</a>
                    {"\nSee what I'm up to or reach out via LinkedIn:"}
                    <a target="_blank" href="https://www.linkedin.com/in/vkwang" className="content-text socials"><IoLogoLinkedin className="content-social" size={iconSize}/>linkedin.com/in/vkwang</a>
                </div>
            </div>
            {!mobile && <IoClose onClick={() => { setCurrent(0); }} size={closeSize} className={closeClass} />}
        </div>
    )
}

export default Contact;