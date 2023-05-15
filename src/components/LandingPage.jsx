import React from 'react'
import '../assets/css/Landing.css'

const LandingPage = () => {
  return (
    <div className='videoContainer'>
        <div className='landingDiv'>
            <div className='introVid'>
                <video id='teslaVideo' autoPlay muted  loop src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" ></video>
                <div className="overlay">
                    <div className="overlayText">
                        <h1>Model S</h1>
                        <h4>Order Online for <span>Touchless Delivery</span></h4>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage