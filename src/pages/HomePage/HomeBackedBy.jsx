import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function HomeBackedBy() {
  return (
    <div className="backedByContainer">
      <div className="backedByWrapper">
        <div className="backedBy_title">
          <h1>We are backed by</h1>
        </div>
        <div className="backedBy_grid1">
            <StaticImage
              src="../../images/HomePage/TIE2.png"
              alt="TIE"
            />
            <StaticImage
              src="../../images/HomePage/Ktech.png"
              alt="TIE"
            />
            <StaticImage
              src="../../images/HomePage/start-up karnataka.png"
              alt="TIE"
            />
        </div>
      </div>
    </div>
  );
}

export default HomeBackedBy;
