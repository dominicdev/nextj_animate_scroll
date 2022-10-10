import React from 'react';

const CallOutPicture = () => {
    return (
        <section className="w-full">
            <div className="flex sm:item-center md:item-center sm:flex-nowrap md:flex-nowrap sm:flex-col md:flex-col md:h-full lg:flex-row lg:h-[70vh] w-auto bg-[#F0F0F0]">
                <div className="lg:w-[65%] lg:h-auto sm:h-[300px] md:h-[300px] sm:w-full md:w-full "
                    style={{
                        background: "linear-gradient(rgba(255,0,0,0.3), transparent)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        clipPath: "polygon(0 0, 100% 0%, 93% 100%, 0% 100%)",
                    }}
                >
                     <img  
                     className="w-full h-full object-center"
                     src={"/img/training_imgs/callout-image-picture50-small.png"} alt="Deep Learning Training"
                     />  
                </div>
                <div className="bg-[#F0F0F0] text-black lg:w-1/2 sm:w-full md:w-full">
                    <div className="font-serif pt-[8rem] pr-[2rem] pb-[4rem] pl-[1rem]">
                        <h2 className="sm:text-[2rem] md:text-[2rem] lg:text-4xl sm:p-0 md:p-0 lg:pt-[0rem] lg:pr-[0rem] lg:pb-[0rem] lg:pl-[2rem]">Red Dragon AI</h2>
                        <h2 className="sm:text-[2rem] md:text-[2rem] lg:text-4xl sm:p-0 md:p-0 lg:pt-[0rem] lg:pr-[0rem] lg:pb-[0rem] lg:pl-[2rem]">Deep Learning Trainings</h2>
                        <h3 className="text-left p-8 sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] font-bold">Discover the path to creating AI for your company</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CallOutPicture;
 
 