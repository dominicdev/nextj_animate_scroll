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


const DLTS = (props) => {
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
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Understanding what makes forecasting different than other tasks</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} How to build models for Univariate and Multivariate data</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Different stragies of pre-processing data for forecasting problems</li>
                                    </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Using ConvLSTMs for Multivariate feature extraction</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Understanding Fast Fourier Analysis</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Strategies from creating fast inference Structured Data models</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">It is well known that Deep Learning has achieved state of the art results in images and text.  What is often overlooked is how much Deep Learning is also being used to achieve results in tabular and structured data, which constitutes the majority of data found in organizations.  Everything from spreadsheets to log file outputs can be and are being used as data to be analysed by Deep Learning models.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this module we will look at the techniques and types of models that are being used for structured and tabular data.  These include models such as Wide & Deep networks which have been used extensively inside Google for a variety of tasks.  We will also look at the extensive ways that embeddings can be used for categorical data in structured problems and the multiple ways these can be handled in code.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">This module also covers time-series predictions and how you can use techniques from the text-based models to make predictions on sequences.  This opens up the range of applications to include financial time-series, continuous IoT readings, machinery failure prediction, website optimisation, and trip planning.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The course is designed to give the participants a practical hands-on experience.  Students will be taught from and given real world code examples for learning, as well as in-class challenges that they will need to work through and complete during the class.  The goal is to prepare students for applications, challenges and needs that they will face in the day-to-day world as a data scientist dealing with structured, tabular and time series data.</p>

                            <p className="text-2xl font-base pr-0 pb-0 pt-4 pl-4 text-justify text-black font-serif">Topics covered include:</p>
                            <div>
                                <ul className=" list-disc text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2 pl-8">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Deep and Wide networks</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Preprocessing pipelines for tabular models</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Incorporating embeddings in tabular models</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Embedding categorical information for tabular and time series models</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Anomaly detection in data</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Time Series for univariate and multivariate data</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Smoothing in time series to obtain better forecasting</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Data preprocessing for SQL and structured pipelines</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Time Series with the Prophet library</li>
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
        </section>
    )
}

export default DLTS;

