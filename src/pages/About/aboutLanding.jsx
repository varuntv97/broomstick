import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReactPlayer from "react-player";

export default function AboutLanding() {
  return (
    <div className="about_landing_section">
      <div className="about_landing_container">
        <p className="about_landing_container__text">About Broomstick</p>
        <h3 className="about_landing_container__title">
          Leading the charge in Indian R&D,
          <br /> Crafting true Indian products with pride.
        </h3>
        <div className="about_landing_image">
          <StaticImage
            src="../../images/about/image-24.png"
            alt=""
          ></StaticImage>
        </div>
        <h3 className="about_landing_container__title-2">Our Calling</h3>
        <p className="about_landing_container__text-2">
          The West has Vacuum cleaners for their carpeted floors but Us, Why are
          we still using Centuries old tech – Time we need an upgrade! This is
          what motivated us to develop a device which would help an everyday
          citizen of our country do the everyday job of cleaning their home.
        </p>
        <center style={{ margin: "2em" }}>
          <ReactPlayer url="https://youtu.be/sNfuho7CXRY" />
        </center>
      </div>
    </div>
  );
}
