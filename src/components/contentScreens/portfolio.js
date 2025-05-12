import React from "react";
import '../../styles/portfolio.css'
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'
import video from "../../images/demo.mp4"
import video2 from "../../images/demo2.mp4"
import video3 from "../../images/demo3.mp4"

const Portfolio = ({ mobile, setCurrent }) => {
    if (mobile) {
        return (
            <div className="content-container mobile">
                <div className="content-titleContainer mobile">
                    <div style={{ fontSize: "6vh" }} className="content-text title mobile">{"PORTFOLIO"}</div>
                    <div style={{fontSize: "13px"}} className="content-text mini">updated {Constants.updated}</div>
                </div>
                <div className="portfolio-main mobile">
                    <div className="content-textContainer mobile">
                        <div className = 'content-text heading mobile'>
                            <a target="_blank" href="https://github.com/vincentwang60/Click" className="content-text heading mobile">
                                {"Click App\n"}
                            </a>
                            <IoClose onClick={() => { setCurrent(0); }} size={'2.5vh'} className="content-close mobile" />
                        </div>
                        
                        <div className="content-line mobile"></div>
                        <div className="content-text body2 mobile">
                            {"I worked with a couple friends to develop an app for creating and sharing business cards. As the only developer, I built the app using React Native, AWS Cognito, and DynamoDB. From this project I gained a great deal of experience in full-stack app development. I learned how to use Figma designs and perform CRUD operations with my database.\n"}
                        </div>
                        <a target="_blank" href="https://github.com/vincentwang60/polyphony" className="content-text heading mobile">
                            {"PolyPhony\n"}
                        </a>
                        <div className="content-line"></div>
                        <div className="content-text body2 mobile">
                            {"In the month of January 2022 I enrolled in a month-long web development class at MIT. I had under 2 weeks to create a full website from scratch with React and MongoDB.\n"}
                            {"The project I chose was a song-creator that allowed users to create and save piano songs up to 30 seconds long.\n"}
                        </div>
                        <a target="_blank" href="https://github.com/vincentwang60/A-star-sliding-puzzle-solver" className="content-text heading mobile">
                            {"Sliding Puzzle Solver\n"}
                        </a>
                        <div className="content-line"></div>
                        <div className="content-text body2 mobile">
                            {"As a challenge to myself I created an app using PyGame that solved sliding puzzles. It creates a viable sliding puzzle and solves it using A* pathfinding on a graph of puzzle states."}
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
    return (
        <div className="content-container c1">
            <div className="content-titleContainer">
                <div style={{ fontSize: "6vh", lineHeight: "6vh" }} className="content-text title">{"P\nO\nR\nT\nF\nO\nL\nI\nO"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="portfolio-main">
                <div className="content-textContainer portfolio">
                    <div className="content-text subject">
                        {"Click App\n"}
                    </div>
                    <div className="content-line"></div>
                    <div className="content-text body2">
                        {"I worked with a couple friends to develop an app for creating and sharing business cards. As the only developer, I built the app using React Native, AWS Cognito, and DynamoDB. From this project I gained a great deal of experience in full-stack app development. I learned how to use Figma designs and perform CRUD operations with my database.\n"}
                    </div>
                    <div className="content-text subject">
                        {"PolyPhony\n"}
                    </div>
                    <div className="content-line"></div>
                    <div className="content-text body2">
                        {"In the month of January 2022 I enrolled in a month-long web development class at MIT. I had under 2 weeks to create a full website from scratch with React and MongoDB.\n"}
                        {"The project I chose was a song-creator that allowed users to create and save piano songs up to 30 seconds long.\n"}
                    </div>
                    <div className="content-text subject">
                        {"Sliding Puzzle Solver\n"}
                    </div>
                    <div className="content-line"></div>
                    <div className="content-text body2">
                        {"As a challenge to myself I created an app using PyGame that solved sliding puzzles. It creates a viable sliding puzzle and solves it using A* pathfinding on a graph of puzzle states."}
                    </div>
                </div>
                <div className="content-gallery">
                    <div className='content-video-container v1'>
                        <video width="100%" height="80%" controls autoPlay muted loop>
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="content-text caption">
                            {"Click App demo"}
                            <div>
                                <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/Click">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='content-video-container v2'>
                        <video width="100%" height="80%" controls autoPlay muted loop>
                            <source src={video3} type="video/mp4" />
                        </video>
                        <div className="content-text caption">
                            {"Sliding puzzle solver"}
                            <div>
                                <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/A-star-sliding-puzzle-solver">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='content-video-container v3'>
                        <video className='content-video2' width="80%" height="80%" controls muted autoPlay loop>
                            <source src={video2} type="video/mp4" />
                        </video>
                        <div className="content-text caption">{"PolyPhony demo"}
                            <div>
                            <a target="_blank" className="content-text caption" href="https://github.com/vincentwang60/polyphony">Github</a>
                            <a target="_blank" className="content-text caption" href="https://poly-phony.herokuapp.com/">Link to Website</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <IoClose onClick={() => { setCurrent(0); }} size={'2vw'} className="content-close" />
        </div>
    )
}


export default Portfolio;