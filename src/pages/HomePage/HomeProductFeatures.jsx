import { StaticImage } from "gatsby-plugin-image";
import React from "react";
export default function HomeProductFeatures(){
    return(
        <div className="home_product_features_section">
            <div className="home_product_features_container">
            <div className="prod_feature" id="item-0">
                <div className="horizontal_line" id="hr_1"></div>
                <h3 className="prod_feature_title">Smart</h3>
                <p className="prod_feature_text">World’s first speed sensing technology. Understands your cleaning pace and adjusts for the optimum water supply</p>
            </div>
            <div className="broom_image" id="item-1">
                <StaticImage src="../../images/HomePage/broomstick_vertical4.png" alt=""></StaticImage>
            </div>
            <div className="prod_feature" id="item-2">
                <div className="horizontal_line" id="hr_2"></div>
                <h3 className="prod_feature_title">Sleek</h3>
                <p className="prod_feature_text">With our moisture adding technology and optimized hardware we made a sleek, slim device built to last</p>
            </div>
            <div className="prod_feature" id="item-3">
                <div className="horizontal_line" id="hr_3"></div>
                <h3 className="prod_feature_title">Swift</h3>
                <p className="prod_feature_text">Unique U-Joint <br/>+<br/>Aptly positioned center of gravity <br/>=<br/>exceptional maneuverability and comprehensive floor cleaning</p>
            </div>

            </div>
            <div className="home_product_features_container__sm">
                <div className="prod_feature__sm" id="item-0">
                    <h3 className="prod_feature_title__sm">Smart</h3>
                    <p className="prod_feature_text__sm">World’s first speed sensing technology. Understands your cleaning pace and adjusts for the optimum water supply</p>
                </div>
                <div className="prod_feature__img__sm" id="item-1">
                    <StaticImage src="../../images/HomePage/1.png" alt=""></StaticImage>
                </div>
                <div className="prod_feature__img__sm" id="item-2">
                    <StaticImage src="../../images/HomePage/2.png" alt=""></StaticImage>
                </div>
                <div className="prod_feature__sm" id="item-3">
                    <h3 className="prod_feature_title__sm">Sleek</h3>
                    <p className="prod_feature_text__sm">With our moisture adding technology and optimized hardware we made a sleek, slim device built to last</p>
                </div>
                <div className="prod_feature__sm" id="item-4">
                    <h3 className="prod_feature_title__sm">Swift</h3>
                    <p className="prod_feature_text__sm">Unique U-Joint <br/>+<br/>Aptly positioned center of gravity <br/>=<br/>exceptional maneuverability and comprehensive floor cleaning</p>
                </div>
                <div className="prod_feature__img__sm" id="item-5">
                    <StaticImage src="../../images/HomePage/3.png" alt=""></StaticImage>
                </div>
            </div>
        </div>
    )
}