import React from 'react'
// import styled from 'styled-components';

const TheBar = () => {
    return (
        <section>
            <div className="flex bg-[#d3d3d3] h-[10vh] p-0 pl-[10%]">
                <ul className="text-xl flex flex-row justify-start list-none items-center no-underline ">
                    <li className='py-8 px-4'><a className=' font-serif font-normal text-black no-underline cursor-pointer' href="#course-details">Course Details</a></li>
                    <li className='py-8 px-4'><a className=' font-serif font-normal text-black no-underline cursor-pointer' href="#course-content">Content</a></li>
                    <li className='py-8 px-4'><a className=' font-serif font-normal text-black no-underline cursor-pointer' href="#duration">Course Duration</a></li>
                </ul>
            </div>
            
        </section>
    )
}

export default TheBar

// const TheTopBar = styled.div`
//     display: flex;
//     background: lightgray;
//     height: 10vh;
//     padding: 0rem 0rem 0rem 10%;
//     ul {
//         display: flex;
//         flex-direction: row;
//         justify-content: flex-start;
//         list-style: none;
//         align-items: center;
//         text-decoration: none
        

//     }
//     li {
//         padding: 2rem 1rem;
//         a{
//             color: black;
//             text-decoration: none;
//             cursor: pointer;
//             font-family: 'Lato', sans-serif;
//             font-weight: 400;
//         }
        
        
//     }
// `