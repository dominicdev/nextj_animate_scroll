import React from 'react';
import Link from 'next/link';
const footer = () => {
    return (
        <section>
            <div className="bg-[#1C1A17] h-[35vh] flex flex-col justify-evenly">
                <div style={{ flexFlow: "row wrap", flexGrow: "7" }} className='bg-[#1C1A17] flex justify-around'>
                    <div style={{ flexBasis: "20%", flexflow: "column nowrap" }} className='relative flex px-4 py-8'>
                        <h4 className='font-normal text-xl text-white'>About RDAI</h4>
                        <div className=' absolute bottom-0 top-14  h-px mx-0 mb-0 mt-1 bg-red-600 w-[70%]' />
                    </div>
                    <div style={{ flexBasis: "20%", flexflow: " column nowrap" }} className='relative flex px-4 py-8'>
                        <h4 className='font-normal text-xl text-white'>Coming Soon</h4>
                        <div className=' absolute bottom-0 top-14  h-px mx-0 mb-0 mt-1 bg-red-600 w-[70%]' />
                    </div>
                    <div style={{ flexBasis: "20%", flexflow: " column nowrap" }} className='relative flex flex-col px-4 py-8'>
                        <h4 className='font-normal text-xl text-white'>Links</h4>
                        <div className=' absolute bottom-0 top-14  h-px mx-0 mb-0 mt-1 bg-red-600 w-[70%]' />
                        <ul className='p-4 text-white'>
                            <li className='p-2 text-white'><Link className='font-light text-white ' href="/training">Corporate Trainings</Link></li>
                            <li className='p-2 text-white'><Link className='font-light text-white ' href="/training">Public Trainings</Link></li>
                        </ul>
                    </div>
                    <div style={{ flexBasis: "20%", flexflow: " column nowrap" }} className='relative flex px-4 py-8'>
                        <h4 className='font-normal text-xl text-white'>Social</h4>
                        <div className=' absolute bottom-0 top-14 h-px mx-0 mb-0 mt-1 bg-red-600 w-[70%]' />
                    </div>
                </div>
                <div className='bg-black flex-grow py-4 px-12'>
                    <h4 className='font-light text-base text-white'>2017-2021© All Rights Reserved</h4>
                </div>
            </div>
        </section>
    )
}

export default footer;
