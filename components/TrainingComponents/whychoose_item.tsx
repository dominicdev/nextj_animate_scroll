import React from 'react'
import Image from 'next/image'
const Whychoose_item = () => {
    return (
        <div
            style={{ flexBasic: "20%" }}
            className="xs:w-[80%]   sm:w-[80%] md:w-[20%] lg:w-[20%] p-6 m-5 flex-1 my-0 mx-2 flex flex-col justify-start bg-[#f0f0f0] items-center">
            <Image
                className="w-[20%] h-auto"
                width={70}
                height={70}
                src={"/img/training_imgs/wisdom-1-img.png"} alt="Wisdom" />
            <h3
                className="py-2 px-0  text-2xl font-serif font-extralight text-center"
            >Real World Experience</h3>
            <h5 className="text-base text-black font-serif font-extralight">Having developed hundreds of Deep Learning Models for a variety of use case, we know what works in the real world.</h5>
        </div>
    )
}

export default Whychoose_item