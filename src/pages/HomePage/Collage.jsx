import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FaAngleRight } from "react-icons/fa6";

function Collage() {

  return (
    <div className="collage_container">
      <center className="collage_image__large">
        <StaticImage
          src="../../images/HomePage/Collage.png"
          alt="Collage"
        ></StaticImage>
      </center>
      <center className="collage_image__small">
        <StaticImage
          src="../../images/HomePage/teamBroomstick.png"
          alt="Collage"
        ></StaticImage>
      </center>
      <center className="button_wrapper">
        <button
          className={"button_light button"}
          onClick={() => {
            navigate("/about");
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Learn more about the team
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              <FaAngleRight
                style={{
                  scale: "1.5",
                  marginLeft: "10px",
                }}
              />
            </span>
          </p>
        </button>
      </center>
    </div>
  );
}

export default Collage;
