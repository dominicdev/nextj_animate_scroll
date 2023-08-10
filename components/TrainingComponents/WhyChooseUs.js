import React from 'react'
// import WisdomIcon from '../../img/training_imgs/wisdom-1-img.png';
// import NetworkIcon from '../../img/training_imgs/network-1-img.png';
// import DLIcon from '../../img/training_imgs/deep-learning-1-img.png';
// import EnterpriseIcon from '../../img/training_imgs/computer-1-img.png'
import Image from 'next/image'
import Whychoose_item from './whychoose_item'
const WhyChooseUs = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col min-h-[50vh] py-8 px-0">
                <div className="text-center">
                    <h2 className="text-3xl text-black font-serif font-extralight">Why Choose Red Dragon AI</h2>
                </div>
                <div className="text-black flex my-8 md:mx-12 lg:mx-12 xs:flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-evenly flex-wrap text-center gap-3">
                    <Whychoose_item/>
                    <Whychoose_item/>
                    <Whychoose_item/>
                    <Whychoose_item/>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs

