import React from 'react'
import "./BottomContainer.css"

const BottomContainer = () => {
  return (
    <div>
        <div className='lg:w-9/12 w-full  mb-20 mx-auto'>
           <h1 className='bottom-container-heading lg:text-5xl md:text-2xl text-xl text-center mb-3'>Interested in delving deeper into the project?</h1>
          <div className='w-11/12 mx-auto '>
             <p className='bottom-description lg:text-3xl text-center  text-xs'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
          </div>
        </div>
        <div className='button-container flex mx-auto  md:w-6/12 w-10/12 mb-72'>
          <button className='bottom-button w-1/2 mr-9'>Ring us on Skype</button>
          <button className='bottom-button w-1/2'>Contact Us</button>
        </div>

      
    </div>
  )
}

export default BottomContainer
