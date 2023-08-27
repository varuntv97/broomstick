import { StaticImage } from "gatsby-plugin-image";
import React from "react";
export default function AboutOurBackers(){
    return(
        <div className="about_our_backers_section">
            <h3>Our Backers</h3>
            <div className="about_our_backers_container">
                <div className="logo_box" id="item-0">
                    <StaticImage src="../../images/about/tie.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-1">
                    <StaticImage src="../../images/about/ktech.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-2">
                    <StaticImage src="../../images/about/suk.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-3">
                    <StaticImage src="../../images/about/bolstart.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-4">
                    <StaticImage src="../../images/about/nie.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-5">
                    <StaticImage src="../../images/about/mathworks.png" alt=""></StaticImage>
                </div>
                <div className="logo_box" id="item-6">
                    <StaticImage src="../../images/about/sfal.png" alt=""></StaticImage>
                </div>
            </div>
            <h4>Be a part of broomstick’s journey!</h4>
            <center>
                <button> <p>Pre-order Now!</p></button>
            </center>
        </div>
    )
}