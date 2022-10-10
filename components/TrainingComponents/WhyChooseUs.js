import React from 'react'
// import WisdomIcon from '../../img/training_imgs/wisdom-1-img.png';
// import NetworkIcon from '../../img/training_imgs/network-1-img.png';
// import DLIcon from '../../img/training_imgs/deep-learning-1-img.png';
// import EnterpriseIcon from '../../img/training_imgs/computer-1-img.png'
import Image from 'next/image'
const WhyChooseUs = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col min-h-[50vh] py-8 px-0">
                <div className="text-center">
                    <h2 className="text-3xl text-black font-serif font-extralight">Why Choose Red Dragon AI</h2>
                </div>
                <div className="text-black my-8 mx-12 flex flex-row justify-evenly flex-wrap text-center ">
                    <div
                        style={{ flexBasic: "20%" }}
                        className="w-[20%] p-6 m-5 flex-1 my-0 mx-2 flex flex-col justify-start bg-[#f0f0f0] items-center">
                        <Image
                            className="w-[20%] h-auto"
                            width={"70px"}
                            height={"70px"}
                            src={"/img/training_imgs/wisdom-1-img.png"} alt="Wisdom" />
                        <h3
                            className="py-2 px-0  text-2xl font-serif font-extralight text-center"
                        >Real World Experience</h3>
                        <h5 className="text-base text-black font-serif font-extralight">Having developed hundreds of Deep Learning Models for a variety of use case, we know what works in the real world.</h5>
                    </div>
                    <div
                        style={{ flexBasic: "20%" }}
                        className="w-[20%] p-6 m-5 flex-1 my-0 mx-2 flex flex-col justify-start bg-[#f0f0f0] items-center">
                        <Image
                            className="w-[20%] h-auto"
                            width={"70px"} height={"70px"}
                            src={"/img/training_imgs/network-1-img.png"} alt="Wisdom" />
                        <h3
                            className="py-2 px-0  text-2xl font-serif font-extralight text-center"
                        >Industry Experts</h3>
                        <h5 className="text-base text-black font-serif font-extralight">Learn from Google Developer Experts to learn not only the fundamentals but the best practices as well. </h5>
                    </div>
                    <div
                        style={{ flexBasic: "20%" }}
                        className="w-[20%] p-6 m-5 flex-1 my-0 mx-2 flex flex-col justify-start bg-[#f0f0f0] items-center">
                        <Image
                            className="w-[20%] h-auto"
                            width={"70px"}
                            height={"70px"}
                            src={"/img/training_imgs/deep-learning-1-img.png"} alt="Wisdom" />
                        <h3
                            className="py-2 px-0  text-2xl font-serif font-extralight text-center"
                        >Cutting Edge Examples</h3>
                        <h5 className="text-base text-black font-serif font-extralight">Learn the latest models, often days after they are published and how to implement them for your use case.</h5>
                    </div>
                    <div
                        style={{ flexBasic: "20%" }}
                        className="w-[20%] p-6 m-5 flex-1 my-0 mx-2 flex flex-col justify-start bg-[#f0f0f0] items-center">
                        <Image
                            className="w-[20%] h-auto"
                            width={"70px"}
                            height={"70px"}
                            src={"/img/training_imgs/computer-1-img.png"} alt="Wisdom" />
                        <h3
                            className="py-2 px-0  text-2xl font-serif font-extralight text-center"
                        >From Research to Production</h3>
                        <h5 className="text-base text-black font-serif font-extralight">Learn to go beyond toy examples and implement best practice models trained on full size datasets and then deploy them to production.</h5>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs

