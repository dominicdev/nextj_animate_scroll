import React from 'react' 

const BannerCallout = () => {
    return (
        <section>
            <div className="block h-[40vh] w-auto text-black">
                <div className="flex flex-col h-full bg-white items-center m-auto justify-center ">
                    <div className="flex flex-col items-center">
                        <h3 className="sm:text-[2rem] md:text-[2rem] lg:text-[3rem] font-light text-black font-serif">Cutting Edge Deep Learning Trainings</h3>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className=" font-light pt=[1rem] pr=[6rem] pb=[0rem] pl=[2rem] text-2xl font-serif ">Come and learn the techniques, strategies and frameworks that are driving the current state of the art advances in AI.</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerCallout 