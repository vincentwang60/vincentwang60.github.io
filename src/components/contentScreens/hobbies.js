import React from "react";
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'
import '../../styles/hobbies.css'
import food1 from "../../images/food1.jpg"
import food2 from "../../images/food2.jpg"
import food3 from "../../images/food3.jpg"
import hobbies1 from "../../images/hobbies1.jpeg"
import hobbies2 from "../../images/hobbies2.mp4"
import { ResponsiveTitle, ResponsiveHeading, ResponsiveBody, getResponsiveClass, getResponsiveSize, getContainerClass } from '../../utils/textUtils'

const Hobbies = ({ mobile, setCurrent }) => {
    const containerClass = getContainerClass("content-container", mobile);
    const titleContainerClass = getContainerClass("content-titleContainer", mobile);
    const textContainerClass = getContainerClass("content-textContainer", mobile);
    const closeSize = getResponsiveSize('2.5vh', '2vw', mobile);
    const closeClass = getResponsiveClass("content-close", mobile);
    const titleStyle = { fontSize: "8vh", lineHeight: "7vh" };

    const hobbies = [
        {
            title: "Cooking\n",
            description: "Cooking for myself over the pandemic sparked a strong passion for cooking, and I love experimenting with new recipes and ingredients in the kitchen. Some of my favorites include handmade pasta, black bean udon noodles, and shepherds pie."
        },
        {
            title: "Reading\n",
            description: "I'm an avid reader and I can easily lose an afternoon buried in an intriguing book. Although I enjoy a wide range of genres, there is a special place in my heart for science fiction and historical fiction. I'm always asking for recommendations and my reading list is constantly expanding."
        },
        {
            title: "Bouldering\n",
            description: "Over the last couple of years I have developed a passion for indoor bouldering. I love the feeling of finally completing a bouldering 'problem' after improving in incremental amounts for weeks. I find that bouldering is an awesome way to stay in shape and challenge myself."
        }
    ];

    const renderHobby = (hobby) => (
        <>
            <ResponsiveHeading text={hobby.title} mobile={mobile} />
            <div className={getResponsiveClass("content-line", mobile)}></div>
            <ResponsiveBody text={hobby.description} variant="body2" mobile={mobile} />
        </>
    );

    return (
        <div className={containerClass}>
            <div className={titleContainerClass}>
                <ResponsiveTitle text="HOBBIES" mobile={mobile} style={titleStyle} />
                <div className={getResponsiveClass("content-text mini", mobile)}>
                    updated {Constants.updated}
                </div>
            </div>
            <div className={textContainerClass}>
                {hobbies.map((hobby, index) => (
                    <div key={index}>
                        {renderHobby(hobby)}
                    </div>
                ))}
            </div>
            
            <div className={getResponsiveClass("hobbies-gallery", mobile)}>
                <div className="content-image-pic-container1">
                    <img className="content-image-food v1" src={food1} alt='Chicken Eggplant Rollatini' />
                    <img className="content-image-food v2" src={food2} alt='Beef Puff Pastry Empanada' />
                    <img className="content-image-food v3" src={food3} alt='Black Bean Noodles' />
                </div>
                <div className="content-image-pic-container2">
                    <img className="content-image-reading" src={hobbies1} alt='Chicken Eggplant Rollatini' />
                    <video className='content-video' controls muted autoPlay loop>
                        <source src={hobbies2} type="video/mp4" />
                    </video>
                </div>
            </div>
            
            {!mobile && <IoClose onClick={() => { setCurrent(0); }} size={closeSize} className={closeClass} />}
        </div>
    )
}

export default Hobbies;