import React from 'react'

// import Assests
import video from '../../assests/video.mp4';
import takeoff from '../../assests/takeoff2.png'
export const Home = () => {
  return (
      <div className='home flex container'>

        <div className="mainText ">
          <h1>Create Ever-lasting Memories With Us</h1>
        </div>

        <div className="homeImages flex">
          <div className='videoDiv'>
            <video src={video} autoPlay muted loop className='Video'></video>
          </div>  
          <img src={takeoff} alt="takeoff" className='Train'/>
        </div>
        
      </div>
    
  )
}
