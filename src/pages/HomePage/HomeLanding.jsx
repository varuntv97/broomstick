import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

export default function HomeLanding() {
  const scale = {
    transform: "scale(1.5)",
  };

  return (
    <div className="home_landing_section">
      <div className="home_landing_container">
        <div className="home_landing_image">
          <StaticImage
            src="../../images/HomePage/broomstick_landing.png"
            alt="background image"
            className="large"
          ></StaticImage>
          <StaticImage
            src="../../images/HomePage/broomstick_landing.png"
            alt="background image"
            className="medium"
          ></StaticImage>
          <StaticImage
            src="../../images/HomePage/broomstick_landing.png"
            alt="background image"
            className="small"
          ></StaticImage>
        </div>
        <div className="home_landing_content">
          <div className="home_landing_content__left">
            <h2>
              TWO cleaning jobs,
              <br /> at ONCE
            </h2>
          </div>
          <div className="home_landing_content__right">
            <button
              style={scale}
              className={"button_light"}
              onClick={() => {
                navigate("/404");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="home_landing_sub_content">
          <h4>
            By combining a mop and a broom, we made a device to clean the way it
            was meant to be <br/> <strong>Fast, Effective, Convenient and Easy</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}
