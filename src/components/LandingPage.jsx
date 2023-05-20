import React from "react";
import "../assets/css/Landing.css";

const LandingPage = () => {
  return (
    <div className="videoContainer">
      <div className="landingDiv">
        <div className="introVid">
          <video
            id="teslaVideo"
            autoPlay
            muted
            loop
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4"
          ></video>
          <div className="overlay">
            <div className="overlayText">
              <h1>Experience Tesla</h1>
              <p>Schedule a Demo Drive Today</p>
            </div>
            <div className="overlayButton">
              <button className="button-59">Demo Drive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
