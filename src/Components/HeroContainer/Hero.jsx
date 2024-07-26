import React from 'react'
import { heroImage, Ximage } from '../../assets/Index'
import "./Hero.css"

const Hero = () => {
  return (
    <div className=''>
      <div className='header mb-12 pt-12 '>
        <img className='ml-auto mr-10 lg:w-7 lg:h-7 md:w-4 md:h-4 sm:w-3 sm:h-3' src={Ximage}/>      
      </div>   

      <div className='w-10/12 mx-auto '>
         <div className='heading-container  mx-auto'>
            <h1 className='heading-text lg:text-5xl md:text-2xl text-xl mb-5 lg:mb-12'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
         </div>
         <img className=' lg:mb-12 mb-3' src={heroImage}/>
          <div className='w-11/12 mx-auto '>
            <h1 className='hero-image-description w-full mb-14 lg:text-xl text-xs' >Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</h1>
          </div>
          <div className='w-10/12  flex mx-auto justify-center items-center lg:mb-48 mb-10 md:w-10/12'>
              <button className='visit-button w-1/2'>Visit Website</button>
          </div>

      </div>
    </div>
  )
}

export default Hero
