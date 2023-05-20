import React from "react";
import "../assets/css/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <div className="imgDiv">
          <div className="gallery-overlay">
            <h1>Model 3</h1>
            <p>
              <a href="">Lease from $1/mo</a>
            </p>
          </div>
          <img
            className="gallery-image"
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD"
            alt="Model-3"
          />
        </div>
        <div className="overlayButtons">
          <button>Order Now</button>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
