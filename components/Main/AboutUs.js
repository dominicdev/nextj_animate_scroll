import React from 'react'
import { InView } from 'react-intersection-observer'
const AboutUs = () => {
    return (
        <section>
            <div className={"w-screen pt-[3rem] pr-[0rem] pb-[0rem] pl-[2rem] min-h-[60vh] bg-white "}>
                <InView>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={"transition-opacity delay-700 duration-1000 ease-out  w-[80%] m-auto flex flex-col items-center " + (inView ? " opacity-100" : " opacity-0")}>
                            <InView>
                                {({ inView, ref, entry }) => (
                                    <div ref={ref} className={"-translate-x-full transition-transform delay-300 duration-500 flex flex-col items-center " + (inView ? " translate-x-0" : " -translate-x-full ")}>
                                        <div className='flex flex-1'>
                                            <h2 className=' text-center text-red-600 font-bold text-5xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>About Us</h2>
                                        </div>
                                        <div className='flex flex-1'>
                                            <p className='w-full text-center text-gray-600 text-xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>We are a Singapore-based AI & Machine Learning company. We specialize in<br></br>building innovative Artificial Intelligence solutions, with a focus on<br></br>using Large Language models combined with other tools.</p>
                                        </div>
                                    </div>)}
                            </InView>
                            <InView>
                                {({ inView, ref, entry }) => (
                                    <div ref={ref} className={"translate-x-100 transition-transform delay-300 duration-500 flex flex-col items-center " + (inView ? " translate-x-0" : " translate-x-full ")}>
                                        <div className='flex flex-1'>
                                            <h2 className=' text-center text-red-600 font-bold text-5xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>Why AI?</h2>
                                        </div>
                                        <div className='flex flex-1'>
                                            <p className='w-full text-center text-gray-600 text-xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>Today&apos;s AI is an uncharted revolution, not just intelligent. It enables feats once thought impossible, completing them with unprecedented efficiency. We&apos;re unlocking doors to extraordinary possibilities.</p>
                                        </div>
                                    </div>)}
                            </InView>
                        </div>)}
                </InView>
            </div>
        </section>
    )
}

export default AboutUs
