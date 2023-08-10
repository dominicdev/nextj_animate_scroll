import React from 'react' 

const BannerCallout = () => {
    return (
        <section>
            <div className="block h-[40vh] w-auto text-black">
                <div className="flex flex-col h-full bg-white items-center m-auto justify-center">
                    <div className="flex flex-col items-center">
                        <h3 className="xs:text-[2rem] text-center mt-8 sm:text-[2rem] md:text-[2rem] lg:text-[3rem] font-light text-black font-serif">Cutting Edge Deep Learning Trainings</h3>
                    </div>
                    <div className="flex flex-col justify-center  mb-4">
                        <h5 className=" font-light pt=[1rem] pb=[0rem] xs:text-base text-2xl font-serif xs:px-12 sm:px-12 text-justify">Come and learn the techniques, strategies and frameworks that are driving the current state of the art advances in AI.</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerCallout 