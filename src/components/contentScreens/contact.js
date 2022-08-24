import React from "react";
import '../../styles/contact.css'
import { IoLogoGithub, IoClose, IoLogoLinkedin, IoMail } from "react-icons/io5";
import Constants from '../../constants'

const Contact = ({ setCurrent }) => {
    return (

        <div className="content-container c1">
            <div className="content-titleContainer">
            <div style={{fontSize: "7vh", lineHeight: "7vh"}} className="content-text title">{"C\nO\nN\nT\nA\nC\nT"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer contact">
                <div className="content-text heading">Contact Information</div>
                <div className="content-line"></div>
                <div className="content-text body">
                    {"I'm currently looking for interesting and challenging software interships and other opportunities!\n"}
                    {"You can reach me via email at"}<a className="content-text link"><IoMail className="content-social" size={'1.5vw'}/>vkwang@mit.edu</a>
                    {"\nCheck out some more of my work at my github:"}
                    <a target="_blank" href="https://www.github.com/vincentwang60" className="content-text socials"><IoLogoGithub className="content-social" size={'1.5vw'}/>github.com/vincentwang60</a>
                    {"\nSee what I'm up to or reach out via LinkedIn:"}
                    <a target="_blank" href="https://www.linkedin.com/in/vkwang" className="content-text socials"><IoLogoLinkedin className="content-social" size={'1.5vw'}/>linkedin.com/in/vkwang</a>
                </div>
            </div>
            <IoClose onClick={() => { setCurrent(0); }} size={'2vw'} className="content-close" />
        </div>
    )
}

export default Contact;