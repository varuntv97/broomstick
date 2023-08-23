import React from "react";

function HomeUntoldStory() {
  return (
    <div className="untoldStory_container">
      <div className="untoldStory_wrapper">
        <div className="sectionHeading">
          <h1>The Untold Story</h1>
        </div>
        <div className="videoWrapper">
          <div className="video">
          <iframe
            src="https://www.youtube.com/watch?v=OjnzbhpY108"
            title="Official Video on YouTube"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUntoldStory;
