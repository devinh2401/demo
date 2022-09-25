import React from 'react'
import slide2 from "../image/slide-image2.jpg";

function Slidebaner() {
  return (
    <div className='slide-banner' style={{position:"relative", width:"1900px"}}>
          <div className='slide-banner_content'>
            {/* <img className='' src={slide} style={{width:"1900px", height:"558px"}}></img> */}
            <img className='' src={slide2} style={{width:"1900px", height:"558px"}}></img>
            {/* <img className='' src={slide3} style={{width:"1900px", height:"558px"}}></img> */}
          </div>
        </div>    
  )
}

export default Slidebaner