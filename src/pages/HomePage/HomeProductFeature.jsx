import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function HomeProductFeature() {
  return (
    <div className="feature_container">
      <div className="feature_wrapper">
        <div className="content_left">
            <div className="content_left__item1">
                <center>
                    <h1>
                        SMART
                    </h1>
                    <span>
                    World's first speed sensing technology. <br/> <strong>Understands your cleaning pace</strong> and adjusts <br/> for the optimum water supply
                    </span>
                </center>
            </div>
            <div className="content_left__item2">
            <center>
                    <h1>
                        SLEEK
                    </h1>
                    <span>
                    With our moisture adding technology <br/> and optimized hardware <br/> we made a sleek, slim device <br/> built to last
                    </span>
                </center>
            </div>
            <div className="content_left__item3">
            <center>
                    <h1>
                        SWIFT
                    </h1>
                    <span>
                    Unique U-Joint plus <br/> + <br/> positioned center of gravity <br/>  = <br/> exceptional maneuverability and <br/> comprehensive floor cleaning
                    </span>
                </center>
            </div>
        </div>
        <div className="content_right">
          <div className="image_wrapper">
            <StaticImage
              src="../../images/HomePage/broomstick_vertical4.png"
              alt="Product Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductFeature;
