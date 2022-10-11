import React from 'react'
// import { useState } from 'react';
// import styled from 'styled-components'
//images
const CallOutPic = '/img/training_imgs/callout-image-picture.png'


const TrainingDetailBanner = (props) => {
    return (
        <section>
            <div className="flex flex-wrap flex-row min-h-[70vh] w-auto bg-[#1C1A17]">
                <div className="bg-[#1C1A17] min-w-[3rem] flex flex-col flex-nowrap justify-evenly flex-[55] h-auto">
                    <div className="flex flex-col justify-end flex-1 py-0 px-8">
                        <h1 className="text-white pt-4 pr-12 pb-0 pl-8 text-4xl font-serif font-normal">{props.courseProps.title}</h1>
                    </div>
                    <div className="flex flex-col justify-start flex-nowrap flex-[2] pt-4 pr-8 pb-0 pl-[5rem]">
                        <h5 className="text-white pt-4 pr-12 pb-0 pl-8 text-2xl font-serif font-light">{props.courseProps.mainDescription}</h5>
                    </div>
                </div>
                <div className="flex flex-[45]" style={{
                    background: `url(${CallOutPic})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    clipPath: 'polygon(16% 0, 100% 0, 100% 100%, 0% 100%)'
                }}>
                    {/* <h2>Hi there?</h2> */}
                </div>
            </div>
        </section>
    )
}

export default TrainingDetailBanner

// const BannerContainer = styled.div`
//     display: flex;
//     flex-flow: row wrap;
//     min-height: 70vh;
//     width: auto;
//     background:#1C1A17;
// `

// const LeftBox = styled.div`
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: space-evenly;
    
//     /* width: 65%; */
//     flex: 55;
//     height: auto;
//     background: #1C1A17;
//     min-width: 3rem;
//     /* clip-path: polygon(0 0, 100% 0%, 93% 100%, 0% 100%); */

// `
// const LeftBoxTitle = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     flex: 1;
//     /* background: lightcoral; */
//     padding: 0rem 1rem 0rem 3rem;
//     h1 {
//         color: white;
//         padding: 1rem 3rem 0rem 2rem;
//         font-size: 2.5rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//     }

// `

// const LeftBoxMainText=styled.div`
//     display: flex;
//     flex-flow: column nowrap;
//     flex: 2 ;
//     justify-content: flex-start;
//     /* background: lightgreen; */
//     padding: 1rem 2rem 0rem 5rem;

//     h5 {
//         color: white;
//         /* padding: 1rem 6rem 0rem 2rem; */
//         font-size: 1.5rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 300;
//     }

//     @media (max-width: 768px) {

//     }
//     @media (max-width: 414px) {
//         h5 {
//         color: white;
//         /* padding: 1rem 6rem 0rem 2rem; */
//         font-size: 1.2rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 300;
//         }
//     }
// `

// const RightBox = styled.div`
    // display: flex;
    // flex: 45;
    // background: url(${CallOutPic});
	// /* background: linear-gradient(rgba(255,0,0,0.3), transparent),url(${CallOutPic}); */
	// background-repeat: no-repeat;
	// background-size: cover;
	// background-position: right center;
    // width: auto;
    // clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%);
    
    // /* height: 100%; */
    // /* width: auto; */
    // @media (max-width: 768px) {

    // }
    // @media (max-width: 414px) {
    //     display:none;
    // }
// `
