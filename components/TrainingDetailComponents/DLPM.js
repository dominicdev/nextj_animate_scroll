import React from 'react'
// import styled from 'styled-components';
// import {
//     BreakoutBox, CourseStyle, CourseText, CourseHolder, LeftBox, RightBox,
//     WhatYoullLearn, LearnLists, LeftList, RightList, TopicsCovered, TechWeTeach,
//     FrameworkLogosStyle, StandardInfoBox, Certificate, TimeToComplete, TrainingLevel
// } from '../TrainingDetailStyle';

// images
const tfLogo = '/img/tensorflow.svg'
const pytorchLogo = '/img/pytorch-icon.svg'
const pythonLogo = '/img/python-logo-inkscape.svg'
// import SidebarCalendar = '/img/training_imgs/sidebar_calendar.png'
const SidebarCertificate = '/img/training_imgs/certificate-icon.svg'
const SidebarClock = '/img/training_imgs/clock.svg'
const SidebarLevel = '/img/training_imgs/level.svg'


const DLPM = (props) => {
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
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Understand how modern Machine Learning works</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Evaluate data requirements for an AI project</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} What is currently possible and not in Computer Vision and Natural Language Processing</li>
                                    </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Strategies for cost effective deployment of ML Projects</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to build and run a Machine Learning team.</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to plan and manage AI Projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">With technology changing so quickly it is crucial for product managers to stay up-to-date and so understand how they can influence the creation and improvement of products they are working on.  As a more advanced version of Machine Learning (ML), Deep Learning (DL) is by far the fastest growing and most flexible technology influencing new products today, being used for more than 98% of all “AI” technologies in companies such as Google, Facebook and Amazon.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this course we will look at the tools, techniques and types of models that are being used for a variety of products from a product manager’s point of view. These include models such as Convolutional Neural Networks, Recurrent Neural Networks and Transformers which have been used extensively inside a variety of companies and organizations for tasks ranging from financial prediction to voice recognition to text analysis.  We will also look at what is needed to put together a ML team and design a DL project from scratch.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Each day of this 3-day course covers a different type of challenge and the corresponding models and techniques that can be applied :</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Day 1 covers not only the basics of how Deep Learning works and builds on the fundamentals of machine learning, but also focuses on techniques and strategies for building models in tabular and structured data problem domains.  </p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Day 2 covers how Deep Learning can be used for computer vision products.  Participants will learn the fundamentals of Convolutional Neural Networks (CNNs) and how they can be used for applications such as image classification and object detection.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Day 3 covers how Natural Language Processing (NLP) and Natural Language Understanding (NLU) can make use of Deep Learning to do tasks such as document classification and entity extraction.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Using case studies, participants will get a good sense of what techniques to use when; what data will be needed; and how to get and prepare the data in the most efficient way possible.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The current general consensus is that the combination of Deep Learning and domain expertise is what leads to state-of-the-art results.  The key here is that domain expertise is something the majority of product managers already have, and learning the skills and techniques of Machine Learning and Deep Learning will allow them to create not only better products, but whole new types of products and services.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The course is designed to give participants a practical hands-on experience.  Students will be taught from real-world code examples for learning, as well as in-class challenges that they will need to work through and complete during the class.  Our goal is to prepare students for applications, challenges and needs that they will face in the day-to-day world as a product manager charged with building products and managing ML teams.</p>

                            <p className="font-semibold text-xl pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Topics covered include:</p>
                            <div>
                                <ul className=" list-disc text-[#808080] text-2xl leading-6 mx-4 pl-8 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">The fundamentals of Deep Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Multi Layer Perceptrons, Convolutional Neural Networks, Recurrent Neural Networks & Transformers</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Strategies for collecting and annotating data in an organization</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Running ML projects and how they are different to normal software engineering</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Models and techniques for structured and tabular data</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Models and techniques used in computer vision products</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Models and techniques used in Natural Language Processing and text related products</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Building ML teams - what and who you need</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Structuring and managing ML projects</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Dealing with the types of challenges that occur in building an ML related project</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Designing AI products that can scale millions of users and petabytes of data</li>
                                </ul>
                            </div>
                            <br />
                            <br />
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
                            <img className='h-full m-0 w-auto' src={tfLogo} alt="tensorflow" />
                            <img className='h-full ml-2 w-auto' src={pytorchLogo} alt="pytorch" />
                            <img className='h-full ml-2 w-auto' src={pythonLogo} alt="python" />
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
                                        src={SidebarCertificate}
                                        alt="Certificate" />
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
                                        src={SidebarLevel} alt="" />
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
                                        src={SidebarClock} alt="" />
                                </div>
                                <div className='font-light leading-6 p-0 text-left ' style={{ flex: "4" }}>
                                    <h3 className='text-red-600 text-2xl px-0 pb-2 pt-4'>Time to Complete</h3>
                                    <p className="text-[#808080] font-light leading-6 p-0 text-left">Approx. 21 hours to complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DLPM;

