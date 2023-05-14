import React from 'react'
import '../assets/css/Landing.css'

const LandingPage = () => {
  return (
    <>
        <div className='landingDiv'>
            <div className='introVid'>
                <video autoPlay muted  loop src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" ></video>
            </div>
        </div>
    </>
  )
}

export default LandingPage