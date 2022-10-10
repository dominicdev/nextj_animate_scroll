import React from 'react'; 
// import CallOutPic from '../../img/training_imgs/callout-image-picture50-small.png'
// import HeroProducts from "../../img/hero4-no-blacka.png"
import Image from 'next/image';
const HeroBoxProduct = () => {
    return (
        <section className='w-full'>
            <div className="flex h-[50vh] w-full bg-black "> 
                <div className="w-full h-full min-w-[3rem] bg-black " >
                     <img 
                     className='w-full h-full object-cover'
                     
                     src={'/img/hero4-no-blacka.png'}
                      alt="Deep Learning Training"/>  
                </div> 
            </div>
        </section>
    )
}

export default HeroBoxProduct
 