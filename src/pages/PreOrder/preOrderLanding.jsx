import { StaticImage } from "gatsby-plugin-image";
import React from "react";
export default function PreOrderLanding(){
    return(
        <div className="preorder_landing_section">
            <div className="preorder_landing_container">
                <h3>Join the Revolution.</h3>
                <div className="preorder_landing_container__hero">
                    <div className="preorder_landing_container__hero__img">
                        <StaticImage src="../../images/global/broom.png" alt=""></StaticImage>
                    </div>
                    <div className="preorder_landing_container__hero__text">
                        <h3>PRE - ORDER<br /> at just<br /> Rs <b>99/-</b></h3>
                    </div>
                </div>
                <div className="preorder_landing_container__info">
                    <p>By pre-ordering a broomstick you will:</p>
                    <ul>
                        <li>Be the first ones to receive a broomstick</li>
                        <li>Be a part of the revolution</li>
                        <li>A numbered version available only for the first few orders</li>
                    </ul>
                </div>
                <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center', marginTop:'2em'}}>
                    <div className="preorder_landing_container__box">
                        <h3>The Way You Clean <br /> Is About To Change Forever</h3>
                        <div className="preorder_landing_container__box__img">
                            <StaticImage src="../../images/about/cuming-soon.png" alt=""></StaticImage>
                        </div>
                    </div>
                    <div className="random_image">
                        <StaticImage src="../../images/about/stove.png"></StaticImage>
                    </div>
                </div>
                <center style={{'margin-top':'4em'}}>
                    <h3>Spotless Space, Serene Soul<br /> Act Now and Reap the Benefits!</h3>
                </center>
            </div>
        </div>
    )
}