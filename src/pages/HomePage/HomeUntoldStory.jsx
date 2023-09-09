import React from "react";
import ReactPlayer from "react-player";

function HomeUntoldStory() {
  return (
    <div className="untoldStory_container">
      <div className="untoldStory_wrapper">
        <div className="sectionHeading">
          <h1>The Untold Story</h1>
        </div>
        <div className="videoWrapper">
        <center className="video" style={{ margin: "2em" }}>
          <ReactPlayer url="https://youtu.be/Nw_-6mIdbyg" />
        </center>
        </div>
      </div>
    </div>
  );
}

export default HomeUntoldStory;
