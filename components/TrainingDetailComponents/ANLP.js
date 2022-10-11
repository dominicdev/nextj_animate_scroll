import React from 'react'
// import styled from 'styled-components';
 
// images
const tfLogo = '/img/tensorflow.svg'
const pytorchLogo = '/img/pytorch-icon.svg'
const pythonLogo = '/img/python-logo-inkscape.svg'
// import SidebarCalendar = '/img/training_imgs/sidebar_calendar.png'
const SidebarCertificate = '/img/training_imgs/certificate-icon.svg'
const SidebarClock = '/img/training_imgs/clock.svg'
const SidebarLevel = '/img/training_imgs/level.svg'


const ANLP = (props) => {
    return (
        <section>
        <div>
        <div className="flex flex-row flex-wrap justify-start m-auto w-[90%]">
            <div className="flex-shrink order-1 pb-8 flex-grow-[5]" style={{ flexBasis: "40rem" }}>
                <div>
                <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">What You&apos;ll Learn</h2>
                <div className="flex justify-evenly">
                <div className="flex" >
                    <ul className="list-inside py-4 px-8 list-none">
                        <li className="font-light text-xl p-4 font-serif"> {"✓"}  How build text classifiers with LSTMs, CNNs & Transformers</li>
                        <li className="font-light text-xl p-4 font-serif"> {"✓"}  Dealing with multilabeled text classification</li>
                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Building NER and POS tagging models</li>
                                </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to build a Transformer from scratch</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to use and understand models such as BERT</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to develop a Conversational Agent system</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this course, we go beyond the basic skills and dive deeper into some of the latest techniques for using Deep Learning for Natural Language Processing (NLP) and Natural Language Understanding (NLU) applications.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Since text classification is a general workhorse for NLP tasks, over the course we will build custom models for tasks such as sentiment analysis, spam detection, and classifying document subject matter.  </p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">A more specific requirement of NLP systems is to reliably detect entities and classifying individual words according to their parts of speech.  We will look at how Named Entity Recognition (NER) works and how Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTMs) are used for tasks like this and many others in NLP.  We will also show how these methods can be customized to look for more company-related entities in text that are often required in business, such as finding product names, components and mentions of job roles.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">To provide a foundation for these methods, we explore the Deep Learning technique of using word, character and document vector embeddings.  We will cover well-known models such as Word2Vec and GLoVE, how they are created, their unique properties and how you can use them to improve the accuracy of Natural Language in terms of understanding problems and applications.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Building chatbots is another useful NLP skill and we will examine how combining text classification and slot filling can be used to create custom chatbots with better accuracy than off the shelf systems.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">While our course starts with techniques using RNNs/LSTMs and Attention, we allocate equal time to covering recent developments in using transfer learning for text-related problems and language modeling with Transformer models.  These models have led to some of the recent state-of-the-art results for text classification problems like sentiment analysis and many more.  This section will cover papers from ULMFIT, OpenAI’s most recent Transformer models (GPT2 and GPT3); Google’s BERT, T5 and Reformer models; and the fundamentals of how Transformer architectures work and how they can be applied to many common techniques with code examples.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In terms of additional NLP applications, we also cover Neural Machine Translation, and you will learn the recent developments and models that use these techniques and various types of attention mechanisms that dramatically increased the quality of translation systems.  We then extend this topic by looking at the challenges of Multilingual NLP, as well as models for text similarity and sentence embeddings.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">This course is designed to give the participants a practical hands on approach.  Students will be taught from and given real world code examples for learning, as well as in-class challenges in which they will need to work through and complete during the class.  The goal is to prepare students for applications, challenges and needs that they will face in the day to day world as a data scientist dealing with Natural Language Processing.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Each day will also have in-class challenges.  These will sometimes involve fixing code with (deliberate) bugs in it, or creating a model from scratch given the data with some preprocessing code.</p>
                        
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The In-class Challenges  for the Advanced NLP are as follows:</p>
                        <ul className="font-normal text-xl pr-0 pb-0 pt-2 pl-2 no-underline list-none">
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 1 : Toxic words LSTM/CNN/Embeddings for multiclass classification</li>
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 2 : Transformer Sentiment Analysis - Fixing some common code errors</li>
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 3 : Full Transformer/BERT variant Implementation Challenge</li>
                        </ul>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">As with all the other Deep Learning Developer modules, participants will have the opportunity to build multiple models themselves.  These include a main project which gives them the ability to take these new skills and apply them to their field of work or interest.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this course, participants will learn:</p>
                        <div>
                                <ul className=" list-disc text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Text Classification Models and to build a text classifier</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">To build a Named Entity Recogniser (NER) system</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">About Sequence to Sequence models</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">To build NLP models from scratch</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">To build a Chatbot ML system</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">To build a language model</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Document embeddings</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Text similarity models and pipelines</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Longformer & Reformer - Transformers for large texts and contexts</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Multilingual NLP systems</li>
                            </ul>
                        </div>
                        <p>Taught with over 30 notebooks of code examples that students can use for their own projects.</p>
                        <br/>
                        <br/>
                        </div>
                    </div>
                    <div style={{ flexBasis: "20rem" }}
                        className="min-h-[10vh] max-w-[40vw] flex-grow flex-shrink order-2 m-8">
                        <div className="border-black border-solid border-2 p-8" style={{ borderRadius: "48px" }}>
                            <h3 className="px-0 pb-0 pt-4 text-red-600 font-semibold text-[1.3em]">Duration</h3>
                            <p className="text-[#808080] font-normal leading-6 px-0 pb-0 pt-2 text-justify">{props.courseProps.duration}</p>
                            <h3 className="px-0 pb-0 pt-4 text-red-600 font-semibold text-[1.3em]">Pricing</h3>
                            <p className="text-[#808080] font-normal leading-6 px-0 pb-0 pt-2 text-justify">{props.courseProps.pricing}</p>
                            <h3 className="px-0 pb-0 pt-4 text-red-600 font-semibold text-[1.3em]">Prerequisites</h3>
                            <p className="text-[#808080] font-normal leading-6 px-0 pb-0 pt-2 text-justify">{props.courseProps.prerequisites}</p>
                        </div>
                        <div className='mr-0 mb-0 ml-2 mt-6'>
                            <h5 className='text-base font-semibold'>Technologies we teach with include:</h5>
                        </div>
                        <div className="flex justify-start ml-0 mr-4 mb-4 mt-8 w-auto h-[10vh]">
                            <img className='h-full m-0 w-auto' src={tfLogo} alt="tensorflow"/>
                            <img className='h-full ml-2 w-auto' src={pytorchLogo} alt="pytorch"/>
                            <img className='h-full ml-2 w-auto' src={pythonLogo} alt="python"/>
                        </div>
                        {/* <PreviousParticipants> */}
                            {/* <h5>Previous participants include employees from:</h5> */}
                        {/* </PreviousParticipants> */}
                        {/* <div className="participant-logos">
                            <img className='dbs-img' src={dbsLogo} alt="DBS Logo"/>
                        </div> */}
                        <div className=" h-[50vh] flex flex-col justify-start font-normal text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-4 text-justify">
                            <div className="flex flex-row items-center justify-evenly font-light h-[10vh] leading-6 mx-4 mb-0 mt-4 p-0 text-left w-auto">
                                <div className="flex-grow h-8 w-auto">
                                    <img
                                        style={{ filter: "invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%)" }}
                                        className="h-8 w-auto"
                                        src={SidebarCertificate} alt="Certificate"/>
                                </div>
                                <div
                                    style={{ flex: "4" }}
                                    className="font-light leading-6 p-0 text-left ">
                                    <h3 className='text-red-600 text-2xl px-0 pb-2 pt-4'>Certificate</h3>
                                    <p className='text-[#808080] font-light leading-6 p-0 text-left'>Earn a certificate upon completion</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly font-light h-[10vh] leading-6 mx-4 mb-0 mt-4 p-0 text-left w-auto">
                                <div className="flex-grow h-8 w-auto">
                                    <img
                                        className="h-8 w-auto"
                                        style={{
                                            filter: "invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%)"
                                        }}
                                        src={SidebarLevel} alt=""/>
                                </div>
                                <div
                                    style={{ flex: "4" }}
                                    className="font-light leading-6 p-0 text-left">
                                    <h3 className='text-red-600 text-2xl px-0 pb-2 pt-4'>Training Level</h3>
                                    <p className="text-[#808080] font-light leading-6 p-0 text-left" >Intermediate Level</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-evenly font-light h-[10vh] leading-6 mx-4 mb-0 mt-4 p-0 text-left w-auto">
                                <div className="flex-grow h-8 w-auto">
                                    <img
                                        className="h-8 w-auto"
                                        style={{
                                            filter: "invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%)"
                                        }}
                                        src={SidebarClock} alt=""/>
                                </div>
                                <div className='font-light leading-6 p-0 text-left ' style={{ flex: "4" }}>
                                    <h3 className='text-red-600 text-2xl px-0 pb-2 pt-4'>Time to Complete</h3>
                                    <p className="text-[#808080] font-light leading-6 p-0 text-left">Approx. 28 hours to complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ANLP;


// const BreakoutBox = styled.div`
    
//     padding: 2rem 2rem;
//     border: 2px solid black;
//     border-radius: 3rem;
//     h3 {
//         color: red;
//         font-weight: bold;
//         padding: 1rem 0rem 0rem 0rem;
//         font-family: 'Lato', sans-serif;
//         /* font-weight: 400; */
//     }

//     p {
//         color: gray;
//         padding: 1rem 0rem 0rem 0rem;
//         line-height: 1.5rem;
//         text-align: justify;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//     }
//     h1 {
//         padding: 2rem 0rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//     }

// `

// const CourseStyle = styled.div`
//     /* background: lightseagreen; */
//     /* width: 90%; */
//     /* margin: auto; */
    
//     .day-challenges{
//         padding: 1rem 0rem 0rem 2rem;
//         text-decoration: none;
//         list-style: none;
//         font-weight: 600;
//         li {
//             color: gray;
//             font-size: 1.2rem;
//             padding: 0.5rem 0rem 0rem 0.5rem;
//             font-family: 'Lato', sans-serif;
//             font-weight: 400;
            
//         }
//     }
// `
// const CourseText=styled.div`
//     /* background: lightpink; */
//     p {
//         color: gray;
//         padding: 1rem 0rem 0rem 1rem;
//         /* line-height: 1.5rem; */
//         text-align: justify;
//         font-family: 'Lato', sans-serif;
//         font-weight: 300;
//     }
//     h1 {
//         padding: 2rem 0rem;
//     }
//     h3 {
//         font-size: 1.5rem;
//         color: #373a3c;
//         padding: 1.5rem 0rem 0rem 0rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//     }
//     h2 {
//         font-size: 2rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//         padding: 2rem 0rem 0rem 0rem;
//     }

//     @media (max-width: 768px) {

//     }

//     @media (max-width: 414px) {
//         p {
//             color: black;
//             padding: 1rem 1rem 0rem 1rem;
//             line-height: 1.5rem;
//             text-align: justify;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }
//         h1 {
//             padding: 2rem 0rem;
//         }
//         h3 {
//             font-size: 1.5rem;
//             color: #373a3c;
//             padding: 1.5rem 1rem 0rem 1rem;
//             font-family: 'Lato', sans-serif;
//             font-weight: 400;
//         }
//         h2 {
//             font-size: 2rem;
//             font-family: 'Lato', sans-serif;
//             font-weight: 400;
//             padding: 2rem 0rem 0rem 0rem;
//         }
//     }
// `



// const CourseHolder=styled.div`
//     width: 90%;
//     margin: auto;
//     /* border: 3px solid red; */
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     flex-wrap: wrap;
//     /* align-items: normal; */
// `

// const LeftBox=styled.div`
//     /* background: green; */
//     /* min-height: 20vh; */
//     flex: 5 1 40rem;
//     order: 1;
// `

// const RightBox=styled.div`
//     /* background: lightgreen; */
//     margin: 2rem;
//     min-height: 10vh;
//     max-width: 40vw;
//     /* max-height: 70vh; */

//     flex: 1 1 20rem;
//     order: 2;
//     @media (max-width: 768px) {
//         max-width: 80vw;
//     }

//     @media (max-width: 411px) {
//         max-width: 80vw;
//     }
    
// `

// const WhatYoullLearn=styled.div`
//     h2 {
//         font-size: 2rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//         padding: 2rem 0rem 0rem 0rem;
//     }
// `
// const LearnLists=styled.div`
//     display: flex;
//     justify-content: space-evenly;

// `


// const LeftList=styled.div`
//     display: flex;
//     ul {
//         padding: 1rem 2rem;
//         list-style: none;
//         list-style-position: inside;
//     }

//     ul li {
//         padding: 1rem 1rem;
//         font-size: 1.2rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 300;
//     }

//     ul li:before {
//     content: '✓';
//     }
// `

// const RightList=styled.div`
//     display: flex;
//     margin-left: -5rem;
//     ul {
//         padding: 1rem 2rem;
//         list-style: none;
//         list-style-position: inside;
//     }

//     ul li {
//         padding: 1rem 2rem;
//         font-size: 1.2rem;
//         font-family: 'Lato', sans-serif;
//         font-weight: 300;
//     }

//     ul li:before {
//     content: '✓';
//     }
// `


// const TopicsCovered=styled.div`
//     ul {
//         padding: 1rem 0rem 0rem 3rem;
//         margin: 1rem 1rem 0rem 1rem;
//         li {
//             color: gray;
//             font-size: 1.5rem;
//             line-height: 1.6rem;
//             padding: 0.5rem 0rem 0rem 0rem;
//         }
//     }
// `

// // const PreviousParticipants=styled.div`

// //     margin: 1.5rem 0rem 0rem 0.5rem;
// //     h5{
// //         font-size: 1rem;
// //     }
// // `

// const TechWeTeach= styled.div`
//     margin: 1.5rem 0rem 0rem 0.5rem;
//     h5{
//         font-size: 1rem;
//     }
//     @media (max-width: 768px) {

//     }

//     @media (max-width: 414px) {
//         margin: 1rem 0rem 1rem 0rem;
//     }
// `

// const FrameworkLogosStyle = styled.div`
//     /* background: lightgoldenrodyellow; */
//     margin: 2rem 1rem 1rem 0rem;
//     display: flex;
//     justify-content: flex-start;
//     height: 10vh;
//     width: auto;
//     .tensorflow-img{
//         margin: 0rem 0rem;
//         width: auto;
//         height: 100%;
//         /* background: lightcoral; */
//     }
//     .pytorch-img{
//         /* background: lightcyan; */
//         width: auto;
//         height: 100%;
//         margin-left: 0.5rem;
//     }
//     .python-img{
//         margin-left: 0.5rem;
//         width: auto;
//         height: 100%;
//     }

//     @media (max-width: 768px) {
//         /* background: lightsalmon; */
//         margin: 0rem 0rem 0rem 0rem;
//         display: flex;
//         justify-content: flex-start;
//         height: 10vh;
//         width: 650px;
//         .tensorflow-img{
//             margin: 0rem 3rem;
//             /* background: lightcoral; */
//             width: auto;
//             height: 50%;
//         }
//         .pytorch-img{
//             /* background: lightcyan; */
//             width: auto;
//             height: 50%;
//             /* margin-left: -1.5rem; */
//         }
//         .python-img{
//             margin-left: 0.5rem;
//             width: auto;
//             height: 50%;
//         }

//     }

//     @media (max-width: 414px) {
//         display: flex;
//         justify-content: flex-start;
//         height: 10vh;
//         width: 100%;
//         margin: 0rem 0rem 0rem 0rem;
//         .tensorflow-img{
//             margin: 0rem 0rem;
//             /* background: lightcoral; */
//             width: auto;
//             height: 50%;
//         }
//         .pytorch-img{
//             /* background: lightcyan; */
//             width: auto;
//             height: 50%;
//             /* margin-left: -1.5rem; */
//         }
//         .python-img{
//             margin-left: 0.5rem;
//             width: auto;
//             height: 50%;
//         }
//     }

// `

// const StandardInfoBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     height: 50vh;
//     margin: 1rem 1rem 0rem 1rem;
//     /* background: lightsteelblue; */
//     h3 {
//         color: red;
//         font-weight: bold;
//         font-size: 1.5rem;
//         padding: 1rem 0rem 0.5rem 0rem;
//         font-family: 'Lato', sans-serif;
//         /* font-weight: 400; */
//     }

//     p {
//         color: gray;
//         padding: 1rem 0rem 0rem 0rem;
//         line-height: 1.5rem;
//         text-align: justify;
//         font-family: 'Lato', sans-serif;
//         font-weight: 400;
//     }

//     @media (max-width: 768px) {
//         /* background: lightseagreen; */
//         height: 50vh;
//         margin: 1rem 1rem 0rem 1rem;
//         width: 600px;
//         p {
//             color: gray;
//             padding: 1rem 0rem 0rem 0rem;
//             line-height: 2.0rem;
//             text-align: justify;
//             font-family: 'Lato', sans-serif;
//             font-weight: 400;
//         }
//     }

//     @media (max-width: 414px) {
//         height: 50vh;
//         margin: 0rem 0rem 0rem 0rem;
//         width: auto;

//     }
// `

// const Certificate = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     height: 10vh;
//     margin: 1rem 1rem 0rem 1rem;
//     /* background: lightsalmon; */
//     align-items: center;

//     img {
//         height: 40px;
//         width: auto;
//     }

//     .cert-img {
//         flex: 1;
//         height: 30px;
//         width: auto;
//         img{
//             height: 30px;
//             width: auto;
//             filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
//         }
//     }

//     .cert-text{
//         flex: 4;
//         /* height: 30px; */
//         /* width: auto; */
//         /* background:lightcyan; */
//         /* margin: -3rem; */
//         h3 {
            
//         }
//         p {
//             color: gray;
//             padding: 0rem 0rem 0rem 0rem;
//             line-height: 1.5rem;
//             text-align: left;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }
//     }

//     @media (max-width: 768px) {

//     }

//     @media (max-width: 414px) {
//         p {
//             color: gray;
//             padding: 0rem 1rem 0rem 0rem;
//             line-height: 1rem;
//             text-align: left;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }
//     }
// `

// const TimeToComplete = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     height: 10vh;
//     margin: 1rem 1rem 0rem 1rem;
//     /* background: lightskyblue; */
//     align-items: flex-start;

//     img {
        
//     }
//     .time-to-complete-img {
//         flex: 1;
//         height: 30px;
//         width: auto;
//         img{
//             height: 30px;
//             width: auto;
//             filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
//         }
//     }

//     .time-to-complete-text {
//         flex: 4;
//         /* height: 30px; */
//         /* width: auto; */
//         /* margin: -3rem; */
//         h3 {
            
//         }
//         p {
//             color: gray;
//             padding: 0rem 0rem 0rem 0rem;
//             line-height: 1.5rem;
//             text-align: left;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }

//     }
//     @media (max-width: 768px) {

//     }

//     @media (max-width: 414px) {
//         margin: 0rem;
//     }
// `

// const TrainingLevel = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     height: 10vh;
//     margin: 1rem 1rem 0rem 1rem;
//     /* background: lightseagreen; */
//     align-items: center;

//     /* img {
//         height: 40px;
//         width: auto;
//     } */

//     .training-level-img {
//         flex: 1;
//         height: 30px;
//         width: auto;
//         img{
//             height: 30px;
//             width: auto;
//             filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
//         }
//     }

//     .training-level-text{
//         flex: 4;
//         /* height: 30px; */
//         /* width: auto; */
//         /* margin: -3rem; */
//         h3 {
            
//         }
//         p {
//             color: gray;
//             padding: 0rem 0rem 0rem 0rem;
//             line-height: 1.5rem;
//             text-align: left;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }
//     }
//     @media (max-width: 768px) {
//         .training-level-text{
//             flex: 4;
//             /* margin: -3rem; */
//         }
//     }

//     @media (max-width: 414px) {
//         .training-level-text{
//             flex: 4;
//             margin: 0rem;
//             /* margin: -3rem; */
//         }
//         p {
//             color: gray;
//             padding: 0rem 0rem 0rem 0rem;
//             line-height: 1rem;
//             text-align: left;
//             font-family: 'Lato', sans-serif;
//             font-weight: 300;
//         }
//     }
// `