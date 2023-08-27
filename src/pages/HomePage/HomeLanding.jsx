import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FaAmazon } from "react-icons/fa6";

export default function HomeLanding() {
  const scale = {
    transform: "scale(1.5)",
  };

  const iconStyle = {
    marginLeft: "0.75em",
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    color: 'black',
    padding: '0.5em',
  };

  const flexDisplay = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: '14px'
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
            src="../../images/HomePage/broomstick_mobile_vertical.png"
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
              className={"button_light button"}
              onClick={() => {
                navigate("/404");
              }}
            >
              Pre-Order
            </button>
          </div>
        </div>
        <div className="home_landing_sub_content">
          <h4>
            By combining a mop and a broom, we made a device to clean the way it
            was meant to be <br />{" "}
            <strong>Fast, Effective, Convenient and Easy</strong>
          </h4>
          <button
            className={"button_dark button"}
            onClick={() => {
              navigate("/404");
            }}
          >
            <span style={flexDisplay}>
              Pre-Order
              {/* <span style={iconStyle}><FaAmazon /></span> */}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
