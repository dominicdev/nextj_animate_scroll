import React from 'react' 
const CorporateBanner = () => {
    return (
        <section className='w-full'>
            <div className='h-[40vh] w-auto block'>
                <div className="flex flex-col items-center justify-center h-full bg-[#1C1A17]">
                    <div className="felx flex-col justify-center   items-center">
                        <h3 className="text-center text-3xl text-white font-serif font-extralight">Arrange a Training for your AI Team</h3>
                    </div>
                    <div className="m-0 flex flex-col justify-start text-center">
                        <h5 className="text-abse pt-4 pr-24 pb-0 pl-8   text-white font-extralight">Come and learn the techniques, strategies and frameworks that are driving the current state of the art advances in AI.</h5>
                    </div>
                    <div className='flex flex-col justify-start m-0 mt-3 items-center'>
                        <button 
                        style={{border:"1px solid #de0800"}}
                        className="py-2 px-5 touch-manipulation rounded-2xl font-semibold text-base my-0 mx-1 bg-[#de0800]">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CorporateBanner  
 