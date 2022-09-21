import React from 'react'
import { InView } from 'react-intersection-observer'
const AboutUs = () => {
    return (
        <section>
            <InView>
                {({ inView, ref, entry }) => (
                    <div className={"w-screen  pt-[3rem] pr-[0rem] pb-[0rem] pl-[2rem] min-h-[60vh] bg-white" }>
                        <div ref={ref} className={"w-[80%] m-auto  transition-opacity delay-700 duration-1000 ease-out flex flex-col items-center  "+ (inView ? " opacity-100" : " opacity-0")}>

                            <div className='flex flex-1'>
                                <h2 className=' text-center text-red-600 font-bold text-5xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>About Us</h2>
                            </div>
                            <div className='flex flex-1'>
                                <p className='w-full text-center text-gray-600 text-xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>We are a Singapore-based Machine Learning company. We specialize in<br></br>building innovative Artificial Intelligence solutions, with a focus on Computer<br></br>Vision and Natural Language Processing.</p>
                            </div>
                            <div className='flex flex-1'>
                                <h2 className=' text-center text-red-600 font-bold text-5xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>Why AI?</h2>
                            </div>
                            <div className='flex flex-1'>
                                <p className='w-full text-center text-gray-600 text-xl pt-[1rem] pr-[0rem] pb-[0.5rem] pl-[0rem] font-sans'>Current AI technology is not fully “intelligent” yet. But it allows to do things that were not possible before, or to complete tasks with a fraction of the effort. This is opening the door to some amazing opportunities.</p>
                            </div>
                        </div>
                    </div>
                )}
            </InView>
        </section>
    )
}

export default AboutUs
