import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function HomeProductFeature2() {
  return (
    <div className="productFeature_container">
      <div className="productFeature_wrapper">
        <div className="productFeature_left">
          <div className="productFeature_left__image">
            <StaticImage
              src="../../images/HomePage/productFeature2.png"
              alt="background image"
              style={{height: '950px', width: '550px'}}
            ></StaticImage>
          </div>
        </div>
        <div className="productFeature_right">
            <div className="productFeature_right__title"> 
                <h1>This is not their vacuum cleaner <br/> This is our broomstick</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductFeature2;
