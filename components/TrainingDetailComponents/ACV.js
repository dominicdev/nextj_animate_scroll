import React from 'react'
// import styled from 'styled-components';
// import {div, div, div, div, div, div, 
//     div, div, div, div, div, div, 
//     FrameworkLogosStyle, StandardInfoBox, Certificate, TimeToComplete, TrainingLevel } from '../TrainingDetailStyle';

// images
const tfLogo = '/img/tensorflow.svg'
const pytorchLogo = '/img/pytorch-icon.svg'
const pythonLogo = '/img/python-logo-inkscape.svg'
// import SidebarCalendar from '/img/training_imgs/sidebar_calendar.png'
const SidebarCertificate = '/img/training_imgs/certificate-icon.svg'
const SidebarClock = '/img/training_imgs/clock.svg'
const SidebarLevel = '/img/training_imgs/level.svg'


const ACV = (props) => {
    return (
        <section>
        <div>
        <div className="flex flex-row flex-wrap justify-start m-auto w-[90%]">
            <div className="flex-shrink order-1 pb-8 flex-grow-[5]" style={{ flexBasis: "40rem" }}>
                <div>
                        <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">What You&apos;ll Learn</h2>
                        <div className="flex justify-evenly">
                                <div className="flex">
                                <ul className="list-inside py-4 px-8 list-none">
                                    <li className="font-light text-xl p-4 font-serif"> {"✓"}  Building networks such as Resnets & Inception Networks</li>
                                    <li className="font-light text-xl p-4 font-serif"> {"✓"}  how to buil Segmentation models with UNets</li>
                                    <li className="font-light text-xl p-4 font-serif"> {"✓"}  How facial recognition models and their networks work</li>
                                </ul>
                                </div>
                                <div className="flex -ml-20" >
                                <ul className="list-inside py-4 px-8  list-none">
                                    <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How Object Detection Networks work</li>
                                    <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Doing Image translation with Pix2Pix Networks</li>
                                    <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Using Advanced Image Augmentation strategies</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In the second course in the series, we go beyond the basic skills learned in the JumpStart course such as Convolutional Neural Networks. This will also expand participant’s ability to build modern image networks using a variety of architectures and for applications beyond simple classification.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">To understand the current state-of-the-art technologies, we will review the history of ImageNet winning models and focus on the Inception and Residual models.  We will also look at some of the cutting-edge models such as NASNet and EfficientNet, show how they are different and how the field has gone beyond hand-engineered models. </p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">One key skill that participants will acquire is the ability to use these modern architectures as feature extractors and then applying them to create applications like image search and similarity comparisons.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this module, participants will also discover how to do such tasks as object detection and learn how models (like YOLO) are able to go beyond just classifying images to detecting where multiple objects are in an image.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">They will also learn about image segmentation and classifying at the pixel level. This will involve using architectures like U-Nets and DenseNets and learning how they are used in a variety of image segmentation tasks from perception for self-driving cars to medical image analysis.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Building on the tools taught in the first module, we go beyond just using TensorFlow and Keras, to introduce PyTorch and TorchVision, which are often being used for research in computer vision and cutting-edge architectures.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">As with all the modules, participants will have the opportunity to build multiple models themselves. Most importantly, as part of their main project, they will be challenged to use their newly learned skills in an application that relates to your field of work or interest.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Beyond giving developers an understanding of what can be done in cutting-edge computer vision and how it is done, the goal of the workshop is to arm them with deep learning computer vision skills so that you can apply it in their own area of work or projects.</p>
                        <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this course, participants will learn:</p>
                        <div>
                            <ul className='text-[#808080] mx-4 mb-0 mt-4 pr-0 pb-0 pt-4 pl-12  list-disc'>
                                <li className='text-xl leading-6 px-0 pb-0 pt-2'>Learn about advanced classification and objection detection</li>
                                <li className='text-xl leading-6 px-0 pb-0 pt-2'>Introduction into PyTorch and TorchVision</li>
                                <li className='text-xl leading-6 px-0 pb-0 pt-2'>Acquire skills to create applications like image search and similarity comparisons</li>
                                <li className='text-xl leading-6 px-0 pb-0 pt-2'>To build various types of Deep Learning Computer Vision models</li>
                                <li className='text-xl leading-6 px-0 pb-0 pt-2'>Learn about image segmentation and classifying at the pixel level with architectures like U-Nets and DenseNets and how they are used in a variety of image segmentation tasks</li>
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
                                        src={SidebarCertificate} 
                                        alt="Certificate"/>
                                </div>
                                <div
                                style={{ flex: "4" }}
                                className="font-light leading-6 p-0 text-left ">
                                <h3 className='text-red-600 text-2xl px-0 pb-2 pt-4'>Certificate</h3>
                                    <p>Earn a certificate upon completion</p>
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
                                    <p>Intermediate Level</p>
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

export default ACV;

