import React from 'react'
import { InView } from 'react-intersection-observer'
const UseML = () => {
    return (
        <section>
            <div className={"bg-[#282727] flex w-screen min-h-[60vh] flex-col justify-center items-center overflow-hidden"}>
                <InView>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={"my-6  transition-opacity delay-700 duration-1000 ease-out flex flex-col justify-center w-[70%] m-auto" + (inView ? " opacity-100" : " opacity-0")}>
                            <h3 className="text-white text-center text-4xl font-sans ">Seeking to Pioneer an AI Revolution?</h3>
                            <h5 className="text-white text-center text-4xl font-sans font-light pt-[1rem] pr-0 pb-[5rem] pl-0">Reach out, and let&apos;s sculpt your visionary project.</h5>
                            <div className=" flex flex-row justify-center my-6">
                                <button className={"transition-opacit transition-transform delay-300 duration-500 ease-out flex bg-[#de0800] text-xl font-normal rounded-xl touch-manipulation bottom-1 hover:bg-[#ff1b12]  py-4 px-12 hover:animate-pulse " + (inView ? " translate-y-0 opacity-100" : " translate-y-20 opacity-0")}>Contact Us</button>
                            </div>
                        </div>
                    )}
                </InView>
            </div>
        </section>
    )
}

export default UseML

