import React from 'react'
import { imageData } from '../../constants/Index'
import { image1 } from '../../assets/Index'
import "./MidContainer.css"

const MidContainer = () => {
  return (
    <div className='lg:w-8/12 w-11/12 mx-auto'>
        <div className='images-container flex lg:mb-52 mb-10 '>

        {imageData?.map((item, index) => (
          <div key={item?.key} className='image-item w-1/3 ml-2 lg:ml-12'>
            <img src={item?.image} className='mid-container-images lg:mb-5 mb-2' alt={item?.description} />
            <p className='image-description lg:text-lg text-xs'>{item?.description}</p>
          </div>
        ))}

        </div>

        <div className='contribution-container mb-24 '>
            <h1 className='contribution-heading text-center mb-6'>Our Contribution</h1>
             <p className='contribution-description lg:text-lg text-xs'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
        </div>

        <div className='viewers-container flex lg:mb-72  mb-52'>
                 <div className='w-1/3'>
                    <h1 className='reach-count text-center mb-5 lg:text-7xl md:text-3xl  text-xl'>5M</h1>
                    <p className='reach-descrioption lg:text-xl text-xs'>Daily User Engagements </p>
                 </div>

                 <div className='w-1/3'>
                    <h1 className='reach-count  mb-5 text-center lg:text-7xl md:text-3xl  text-xl'>$500K</h1>
                    <p className='reach-descrioption lg:text-xl text-xs'>Revenue Surge for an Platform </p>
                 </div>

                 <div className='w-1/3'>
                    <h1 className='reach-count  mb-5 text-center  lg:text-7xl md:text-3xl  text-xl'>10X</h1>
                    <p className='reach-descrioption lg:text-xl text-xs '>ROAS on all our marketing campaigns</p>
                 </div>
        </div>



      
    </div>
  )
}

export default MidContainer
