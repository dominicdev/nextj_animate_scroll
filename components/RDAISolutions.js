import React from 'react'
import { InView } from 'react-intersection-observer'
const RDAISolutions = () => {
    return (
        <section>
            <div className="bg-[#282727] flex min-h-[55vh] flex-row justify-start items-center">
                <InView>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={"-translate-x-full transition-transform delay-300 duration-500 ease-out flex w-[35%] m-auto flex-1 " + (inView ? "translate-x-0" : "-translate-x-full")}>
                            <div className="flex flex-col justify-center items-center ">
                                <h3 className='text-white text-center text-4xl pt-[2rem] pr-0 pb-[0.5rem] pl-0 font-sans font-light'>Red Dragon AI NLU <br></br> the Natural Language Understanding Platform</h3>
                                <p className='w-[70%] text-center text-white text-xl pr-0 pb-[0.5rem] pl-0 font-serif'>Red Dragon AI uses multiple technologies to deliver ML architectures that accelerate your Natural Language Understanding and Processing tasks, in the cloud, on device and hybrid systems. Learn more in our solution guide.</p>

                                <div className=" flex flex-row justify-center mt-6">
                                    <button className="bg-[#de0800] text-xl font-normal rounded-xl touch-manipulation bottom-1 hover:bg-[#ff1b12]  py-4 px-12 hover:animate-pulse">Training now</button>
                                </div>
                            </div>
                        </div>)}
                </InView>

                <InView>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={"w-full transition-transform delay-300 duration-500 ease-out flex flex-col justify-center flex-1 items-center " + (inView ? "translate-x-0" : "translate-x-[90%]")}>
                            <img className={"transition-opacity delay-300 duration-500 ease-out w-[65%] h-auto " + (inView ? " opacity-100" : " opacity-0")} src={"/img/home_page_imgs/bottom_call_discovery_img.png"} alt="Training Neurons" />
                        </div>)}
                </InView>
            </div>
        </section>
    )
}

export default RDAISolutions

