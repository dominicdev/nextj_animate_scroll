import React from 'react'
// import styled from 'styled-components';
// import {BreakoutBox, CourseStyle, CourseText, CourseHolder, LeftBox, RightBox, 
//     WhatYoullLearn, LearnLists, LeftList, RightList, TopicsCovered, TechWeTeach, 
//     FrameworkLogosStyle, StandardInfoBox, Certificate, TimeToComplete, TrainingLevel } from '../TrainingDetailStyle';

// images
const tfLogo = '/img/tensorflow.svg'
const pytorchLogo = '/img/pytorch-icon.svg'
const pythonLogo = '/img/python-logo-inkscape.svg'
// import SidebarCalendar = '/img/training_imgs/sidebar_calendar.png'
const SidebarCertificate = '/img/training_imgs/certificate-icon.svg'
const SidebarClock = '/img/training_imgs/clock.svg'
const SidebarLevel = '/img/training_imgs/level.svg'


const AIP = (props) => {
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
                            <li className="font-light text-xl p-4 font-serif"> {"✓"} Converting and deploying models to TensorFlow Lite</li>
                            <li className="font-light text-xl p-4 font-serif"> {"✓"} How to train models with large datasets at scale</li>
                            <li className="font-light text-xl p-4 font-serif"> {"✓"} Deploying to the cloud with TFX and TensorFlow Serving</li>
                                </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to Distill models to get smaller and faster models</li>
                                     <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to build and run a Machine Learning team.</li>
                                     <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to plan, manage and debug Machine Learning Projects</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">While there are many tutorials out there teaching how to build and train basic neural networks, getting these models into production in real-world applications is a whole set of skills that goes beyond understanding Deep Learning. In this course, we cover both the Deep Learning aspects as well as engineering and DevOps skills required to take models and serve them at scale. This includes both serving models in the cloud, on mobile and on hardware devices. </p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">We will cover how to prepare models to make them both efficient as well as cost-effective for serving. This will include how to quantize and prune models in a way that retains as much accuracy of the model as possible while making the model 2-4x faster and smaller. Another critical engineering aspect of models in production is how to use frameworks like TFX for making efficient data pipelines that can be used in production to monitor everything from data quality to split testing models and examining their inference qualities on data at scale.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">This course will examine the popular frameworks for serving models on mobile devices and what needs to be done to prepare models for inference at the edge. This will include looking at distilling large models to make smaller versions that can be used on mobile and hardware devices, what types of models are best to use on mobile devices, how to secure your models and how to use a combination of local and cloud served models to deliver a high-quality user experience.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">As Machine Learning starts to be governed more by various agencies, the need to explain why your models created particular responses becomes more and more necessary. This course also covers some of the key tools and techniques used to make models more explainable and how you can use those in industry. </p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Finally we also cover industry best practices for model development and deployment in teams, how to iterate from model ideation through to monitoring in production.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Key topics covered include:</p>
                        <div>
                                <ul className=" list-disc text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Building microservices that can be used for prediction.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Breaking end to end products into various models to produce more effective pipelines.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">How to build and structure teams for AI project</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Customizing and editing your models to make them efficient for inference.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Quantizing and Pruning models to improve their performance in inference.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Distilling models to create new more efficient models.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Deploying models to the cloud using frameworks like TensorFlow serving.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Creating models for mobile using TF Lite.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">How to train big models on big datasets in a reasonable amount of time.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Skills and techniques for training large models and datasets with custom hardware and mixed precision.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Model Explainability: Interpreting models to make them less of a black box.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Building model visualizations for explainability.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Debugging and troubleshooting ML project as a whole</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Hyper Parameter tuning on models.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">How to iterate through model creation to arrive at an optimal solution.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Creating a methodology and best practices for team model creation.</li>
                                <li className="text-xl leading-6 px-0 pb-0 pt-2">Selecting and managing ML teams and projects.</li>
                            </ul>
                        </div>
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
                                        src={SidebarClock} alt="" />
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

export default AIP;

