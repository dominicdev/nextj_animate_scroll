import React from 'react' 
const AIForEveryone = () => {
    return (
        <section>
            <div className="bg-white flex min-h-[55vh] flex-row justify-start items-center">
                <div className="flex flex-col justify-center w-[70%] m-auto  ">
                    <h3 className="text-black text-center text-5xl pt-[2rem] pr-0 pb-[0.5rem] pl-0 font-sans font-light">AI For Everyone</h3>
                    <h5 className="text-black text-center text-2xl pt-[2rem] pr-0 pb-[0.5rem] pl-0 font-sans  ">Get your team trained by Red Dragon AI, courses now available.</h5>
                    <div className="flex flex-row justify-center mt-6">
                        <button className="bg-[#de0800] text-xl font-normal rounded-xl touch-manipulation border border-[#de0800] hover:bg-[#ff1b12] py-2 px-5 hover:animate-pulse">Training Now</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-1 animate-pulse">
                    <img className="w-[65%] h-auto" src={"/img/home_page_imgs/developer_dl_series_img.png"} alt="Training Neurons" />
                </div>
            </div>
        </section>
    )
}

export default AIForEveryone
 
 