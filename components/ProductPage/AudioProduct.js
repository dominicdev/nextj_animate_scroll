import React from 'react'  
const AudioProduct = () => {
    return (
        <section className="w-full">
            <div className="flex flex-row justify-center bg-[#282727] m-auto sm:h-full md:h-full lg:h-[60vh]">
                <div className="w-[70%] leading-6 flex sm:mt-20 md:mt-20 xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center font-normal font-sans"> 
                    <div className="flex items-center lg:w-1/2  md:w-[80%] xs:w-[50%] sm:w-[80%] ">
                        <img className="w-full h-auto align-middle border-none" src={'/img/waves2.jpeg'} alt="waveform image" />
                    </div> 
                    <div className="font-normal text-base sm:p-8 md:p-8 lg:p-12 lg:w-1/2 md:[80%]">
                        <h1 className="font-bold text-[2rem]">
                            Audio
                        </h1>
                        
                        <p className="text-base font-sans p-4 pb-8 pl-0 text-justify text-white">
                            Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus! Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendu Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est  
                        </p> 

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioProduct
 