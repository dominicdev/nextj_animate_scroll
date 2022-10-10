import React, { useState } from "react"; 
import Image from "next/image";
const ChatBotProduct = () => {


    return (
        <section className="w-full h-full">
            <div className="w-[70%] pt-12 m-auto font-normal text-base font-sans sm:h-full md:h-full lg:h-[60vh]">
                <div className="m-auto leading-6 gap-3 flex sm:flex-col md:flex-col lg:flex-row  items-center justify-center">
                    <div className="text-black  sm:px-0 md:px-0 lg:p-8 lg:pl-0 sm:w-full md:w-full lg:w-[50%]">
                        <h1 className="font-bold text-[2rem] mb-5">
                            Chatbot Interface
                        </h1> 
                        <p className="font-normal text-[1rem] leading-5 text-justify ">
                            Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus! Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus! Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendu Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus!Lorem ipsum dolor sit amet. Sed fugit explicabo ad enim dolore est amet repellendus!
                        </p>
                        {/* <MoreInfoDiv>
                            <Link rel="preload" to="/personal-labs-product">More info..</Link>
                        </MoreInfoDiv> */}

                    </div> 
                    <div className="sm:mb-5 md:mb-5 sm:w-full md:w-full lg:w-[70%] relative md:m-auto sm:m-auto md:mt-4 sm:mt-4  ">
                        <img   className="w-full h-full" src={"/img/chatbot.png"} alt="Chatbot Icon" />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default ChatBotProduct;  

 