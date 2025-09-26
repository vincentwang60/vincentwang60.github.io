import React from "react";
import '../../styles/portfolio.css'
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'
import video from "../../images/demo.mp4"
import video2 from "../../images/demo2.mp4"
import video3 from "../../images/demo3.mp4"
import { ResponsiveTitle, ResponsiveHeading, ResponsiveBody, getResponsiveClass, getResponsiveSize, getContainerClass } from '../../utils/textUtils'

const Portfolio = ({ mobile, setCurrent }) => {
    const containerClass = getContainerClass("content-container", mobile);
    const titleContainerClass = getContainerClass("content-titleContainer", mobile);
    const mainClass = getContainerClass("portfolio-main", mobile);
    const textContainerClass = mobile ? "content-textContainer mobile" : "content-textContainer portfolio";
    const closeSize = getResponsiveSize('2.5vh', '2vw', mobile);
    const closeClass = getResponsiveClass("content-close", mobile);
    const miniStyle = mobile ? {fontSize: "13px"} : {};

    const renderProject = (title, description, githubUrl) => (
        <>
            {githubUrl ? (
                <a target="_blank" href={githubUrl} className={getResponsiveClass("content-text heading", mobile)}>
                    {title}
                </a>
            ) : (
                <ResponsiveHeading text={title} mobile={mobile} />
            )}
            <div className={getResponsiveClass("content-line", mobile)}></div>
            <ResponsiveBody text={description} variant="body2" mobile={mobile} />
        </>
    );

    return (
        <div className={containerClass}>
            <div className={titleContainerClass}>
                <ResponsiveTitle text="PORTFOLIO" mobile={mobile} />
                <div className={getResponsiveClass("content-text mini", mobile)} style={miniStyle}>
                    updated {Constants.updated}
                </div>
            </div>
            <div className={mainClass}>
                <div className={textContainerClass}>
                    <ResponsiveBody text=" " variant="body2" mobile={mobile} />
                    {renderProject(
                        "Visualizer\n",
                        "In the summer of 2025, to have some fun with shaders, I created a music visualizer for Android. The app displays a visualization of the music from the device's audio input as soap-like bubbles, with size depending on the frequency.\n",
                        "https://github.com/vincentwang60/visualizer"
                    )}
                    {renderProject(
                        "Click App\n",
                        "I worked with a couple friends to develop an app for creating and sharing business cards. As the only developer, I built the app using React Native, AWS Cognito, and DynamoDB. From this project I gained a great deal of experience in full-stack app development.\n",
                        "https://github.com/vincentwang60/Click"
                    )}

                    {renderProject(
                        "PolyPhony\n",
                        "In the month of January 2022 I enrolled in a month-long web development class at MIT. I had under 2 weeks to create a full website from scratch with React and MongoDB.\nThe project I chose was a song-creator that allowed users to create and save piano songs up to 30 seconds long.\n",
                        "https://github.com/vincentwang60/polyphony"
                    )}
                </div>
                
                {!mobile && (
                    <div className="content-gallery">
                        <div className='content-video-container v1'>
                            <video width="100%" height="80%" controls autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                            </video>
                                <div>
                                    <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/Visualizer">Visualizer Github</a>
                                </div>
                        </div>
                        <div className='content-video-container v2'>
                            <video width="100%" height="80%" controls autoPlay muted loop>
                                <source src={video2} type="video/mp4" />
                            </video>
                            <div className="content-text caption">
                                <div>
                                    <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/Click">Click Github</a>
                                </div>
                            </div>
                        </div>
                        <div className='content-video-container v3'>
                            <video className='content-video2' width="80%" height="80%" controls muted autoPlay loop>
                                <source src={video3} type="video/mp4" />
                            </video>
                            <div className="content-text caption">{"PolyPhony demo"}
                                <div>
                                <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/polyphony">Polyphony Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {!mobile && <IoClose onClick={() => { setCurrent(0); }} size={closeSize} className={closeClass} />}
        </div>
    )
}


export default Portfolio;