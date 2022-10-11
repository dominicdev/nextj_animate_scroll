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
// const SidebarCalendar = '/img/training_imgs/sidebar_calendar.png'
const SidebarCertificate = '/img/training_imgs/certificate-icon.svg'
const SidebarClock = '/img/training_imgs/clock.svg'
const SidebarLevel = '/img/training_imgs/level.svg'


const USRL = (props) => {
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
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Building networks such as Resnets & Inception Networks</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Building GANs from scratch</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"} Understanding various types of AutoEncoders</li>
                                    </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Solving Atari games with Deep Q Networks</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to use Latent Spaces for generation</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} Understanding from AlphaGo through MuZero</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">This 4th module in the series looks at some of the latest developments in Deep Learning research, it will cover what is cutting edge and what currently looks most promising and interesting for the advancements in Machine Learning and AI.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">One issue with many of the current techniques used in Machine Learning is the requirement for lots of labeled data, which is both costly and time consuming to create. Unsupervised and Self-Supervised Learning looks at how you can take raw unlabeled data and extract useful learnings from that data. There are currently a number of promising techniques used to do this that include Autoregressive models, Representational Learning and Cycle Consistency. We will examine examples of each of these and more to give the student an understanding of how they work as techniques, and inspire how they could be used or improved upon.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">We look at a variety of techniques such as Generative Adversarial Networks and how they are being used to produce realistic and lifelike examples, such as generated pictures of faces. Other types of techniques we will examine are Autoregressive models such as Wavenet, PixelRNN and GPT3 and  how they create self labeling systems and Variational Auto-Encoders and the concepts of latent representations and extracting representational learnings from data.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">We will also look at the field of Reinforcement Learning which has born breakthroughs such as DeepMind’s AlphaGo, Alpha Star and OpenAI’s DOTA models. We will look at how participants can examine problems as a game, which can be learnt to be played by a set of algorithms and how those algorithms can often achieve results better than the world’s best human players. </p>
                            <p className="font-semibold text-xl pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Key techniques covered:</p>
                            <div>
                                <ul className="pl-8 list-disc  text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Unsupervised Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Representational Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Auto Regressive Self Supervised Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Reinforcement Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Contrastive Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Generative Adversarial techniques</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Cycle Consistency</li>
                                </ul>
                            </div>
                            <p className="font-semibold text-xl pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Some of the models we will look at include:</p>
                            <div>
                                <ul className="pl-8 list-disc text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Generative Adversarial Networks</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">StyleGANv2</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">BigGAN, InfoGAN, DCGAN, CycleGAN</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Auto encoders, VAEs (CVAE, BetaVAE)</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Q Learning, DQN, DDQN, </li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Actor Critic Models, PPO</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Multi Agent RL Systems</li>
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

export default USRL;

