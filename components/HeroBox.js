import React from 'react';  
const HeroBox = () => {
    return (
        <section>
            <div className="block overflow-hidden w-screen h-[100vh] bg-[url('/img/home_page_imgs/homepage_hero.png')] bg-cover bg-no-repeat bg-center">
                <div className='flex flex-col justify-around items-start min-h-[40vh] pt-[3rem] pr-0 pb-0 pl-[5rem]'>
                    <div className="flex flex-col justify-start">
                        <h1 className=' flex-1 text-white font-normal text-6xl font-sans leading-6'>Machine Intelligence Solutions</h1>
                    </div>
                    <div className="flex mt-12">
                        <h3 className="flex-1 text-white font-normal text-4xl font-sans leading-2">We Build the AI for AI Companies,<br></br> one line of code at a time.</h3>
                    </div>
                    <div className='flex-1 mt-[3rem] mr-[0rem] mb-[0rem] ml-[2rem]'>
                        <button className='bg-[#de0800] text-xl rounded-xl touch-manipulation border border-[#de0800] py-4 px-12 hover:animate-pulse'>Contact Us </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBox;




// const HeroBtn = styled.div`
//     flex: 1;
//     margin: 3rem 0rem 0rem 2rem;
//     button{
//         /* margin: 0rem 0.1rem; */
//         /* padding: 0.5rem 0.5rem; */
//         background-color: #de0800;
//         font-size: 1.2rem;
//         font-weight: 400;
//         border-radius: 10px;
//         touch-action: manipulation;
//         border: 1px solid #de0800;
//         a{
//             text-decoration: none;
//             color:white;
//         }
//     }
//     button:hover{
//         background-color: #ff1b12
//     }
//     @media only screen and (min-width: 320px) and (max-width: 479px) {
//         width: 100%;
//         text-align: center;
//         margin: 3rem 0rem 3rem 0rem;
//     } 
//     /* TABLETS PORTRAIT */
//     @media only screen and (min-width: 768px) and (max-width: 959px) {
//         width: 100%;
//         text-align: center;
//         margin: 3rem 0rem 3rem 0rem;
//     }
// `

