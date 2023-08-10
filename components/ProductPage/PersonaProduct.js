import React, { useState } from "react"; 
import Vimeo from "@u-wave/react-vimeo";  

const PersonaProduct = () => {


    const [Loading, isLoading] = useState(true);
    const [ifpaused, isifpaused] = useState(false);

    const FinishVideo = () => { };
    const PlayVideo = () => {
        console.log("play video");
        isLoading(false)
    };
    const PauseVideo = () => {
        console.log("pause video");
        isLoading(false)
        isifpaused(true)
    };

    return (
        <section className="w-full">
            <div className=" flex flex-row justify-center bg-white m-auto md:h-full xl:h-[60vh]">
                <div className="xl:w-[74%] md:w-full m-auto font-normal font-sans leading-normal mt-[20px]">
                    <div className=" flex flex-col md:flex-col lg:flex-row  items-center justify-center" >
                        <div className=" text-black p-12 gl:pl-0 xs:w-[80%] sm:w-[80%] md:w-[80%] gl:w-[40%] font-normal text-base font-sans leading-6">
                            <h1 className=" font-bold text-[2rem]">
                                Persona Labs
                            </h1>
                            <p className=" text-justify  text-base font-sans leading-5 p-4 pb-8 pl-0">
                                Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus!
                                Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus! Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendu Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus!Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus!
                            </p> 

                        </div>
                        <div className="  m-auto relative sm:mb-5 md:mb-5  xs:w-full sm:w-full md:w-full lg:w-[60%] pt-0 flex justify-center">
                            <Vimeo className="flex justify-center xs:w-[400px]  sm:w-[400px] md:w-full lg:w-full h-full m-auto"
                            
                                autoplay={false}
                                paused={false}
                                video={"674266822"}
                                showTitle={false}
                                onPlay={PlayVideo}
                                onEnd={FinishVideo}
                                onPause={PauseVideo}
                                controls={true}
                            // responsive={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonaProduct;
  
 