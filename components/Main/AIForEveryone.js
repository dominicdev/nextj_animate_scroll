import React from 'react' 
const AIForEveryone = () => {
    return (
        <section className='w-full'>
            <div className="bg-white flex min-h-[55vh]  xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:justify-center sm:justify-center md:justify-start lg:justify-start items-center w-full">
                <div className="flex flex-col justify-center w-[70%] m-auto  ">
                    <h3 className="text-black text-center text-5xl pt-[2rem] pr-0 pb-[0.5rem] pl-0 font-sans font-light">AI For The Curious</h3>
                    <h5 className="text-black text-center text-2xl pt-[2rem] pr-0 pb-[0.5rem] pl-0 font-sans  ">Learn from the real world practitioners at Red Dragon AI, with courses now live.</h5>
                    <div className="flex flex-row justify-center mt-6">
                        <button className="bg-[#de0800] text-xl font-normal rounded-xl touch-manipulation border border-[#de0800] hover:bg-[#ff1b12] py-2 px-5 hover:animate-pulse">Training Now</button>
                    </div>
                </div>
                <div className="flex  justify-center flex-1 mx-auto animate-pulse xs:my-4 sm:my-4">
                    <img className="w-[65%] h-auto" src={"/img/home_page_imgs/developer_dl_series_img.png"} alt="Training Neurons" />
                </div>
            </div>
        </section>
    )
}

export default AIForEveryone
 
 