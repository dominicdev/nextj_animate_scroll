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
 
const DLFoundationDev = (props) => {
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
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"}   Building Dense, CNN and RNNs Neural Networks in TensorFlow</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"}   How to build models with the TensorFlow Sequential and Functional APIs</li>
                                        <li className="font-light text-xl p-4 font-serif"> {"✓"}   The theory behind Convolutional and Recurrent Neural Networks</li>
                                    </ul>
                                </div>
                                <div className="flex -ml-20" >
                                    <ul className="list-inside py-4 px-8  list-none">
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"} How to use ImageNet models for Transfer Learning</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"}  Building models with Embeddings for NLP</li>
                                        <li className="font-light text-xl py-4 px-8 font-serif"> {"✓"}  Building models for Tabular Data using Pandas and TensorFlow</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-normal text-3xl px-0 pb-0 pt-8 font-serif">Course Overview</h2>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">This three day workshop is designed to introduce participants to the skills needed to start their journey as a Deep Learning Developer. It goes through the overall concepts and techniques for building a variety of Deep Learning models for tabular data, image data, audio data and text data.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The 3 days are split based on the type of neural network architectures, their related tasks and use cases.</p>
                            <h3 className="font-normal text-2xl px-0 pb-0 pt-6 font-serif text-[#373a3c]">Day 1: Fully Connected Networks and Tabular data</h3>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The first day covers both basics of Machine Learning and Deep Learning and prepares students to build basic fully connected networks, understand the mathematics behind these networks and how techniques like backpropagation, dense layers and cross entropy losses work.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">These techniques will then be applied across multiple networks in TensorFlow for various prediction tasks before focusing on building models for Tabular data using these fully connected networks</p>
                            <h3 className="font-normal text-2xl px-0 pb-0 pt-6 font-serif text-[#373a3c]">Day 2: Vision and Convolutional Neural Networks</h3>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The second day covers CNNs and their corresponding layers, components and how to use them for a number of tasks. These include classification from scratch with CNNs, using pre trained CNN Imagenet models for Transfer Learning classification and treating audio as images for simple audio classification. </p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">We also cover the basics of Object Detection, using a pre-trained TensorFlow Object Detection model.</p>
                            <h3 className="font-normal text-2xl px-0 pb-0 pt-6 font-serif text-[#373a3c]">Day 3: Text and Sequences</h3>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The third day covers both the theory and applications of recurrent neural networks, LSTMs and embeddings for tasks such as text classification and text generation.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">We also look at using a framework that implements a pretrained modern transformer such as BERT and some basic real world uses of it.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Each day will also have in-class challenges.  These will sometimes involve fixing code with (deliberate) bugs in it, or creating a model from scratch given the data with some preprocessing code.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">The In-class Challenges for the Foundations of Deep Learning are as follows:</p>
                            <ul className="font-normal text-xl pr-0 pb-0 pt-2 pl-2 no-underline list-none">
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 1:	MLP Model on Vectors</li>
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 2:  ImageNette (Reduced ImageNet Data) 3 channel CNN model from scratch </li>
                                <li className=" font-serif text-[#808080] font-normal text-xl pr-0 pb-0 pt-2 pl-2">Day 3:	IMDB Movie Sentiment with LSTMs</li>
                            </ul>

                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">At the end of the classroom training, participants will work on their models and projects. Additional learning materials and assessments will be available online, with one-on-one sessions for you to ask questions on your project. This is especially useful for understanding how to apply these skills for your unique applications.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">Overall the curriculum will cover many of the fundamentals needed in Deep Learning projects, as well as models such as Fully Connected Neural Networks, Convolutional Neural Networks and Recurrent Neural Networks. Real-world examples will be used to identify the best techniques to tackle various data science problems at hand.</p>
                            <p className="font-light pr-0 pb-0 pt-4 pl-4 text-justify text-[#808080] font-serif">In this course, participants will learn:</p>
                            <div>
                                <ul className=" list-disc text-[#808080] text-2xl leading-6 mx-4 mb-0 mt-4 px-0 pb-0 pt-2">
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">The basic concepts of Neural Networks and an introduction to the mathematics of Deep Learning</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">An introduction to the Keras API and how it works as a higher level of abstraction for TensorFlow</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">To build and use TensorFlow native models</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">To build various types of Deep Learning models</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">To build models for Computer Vision tasks and challenges</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">To build models for Natural Language Processing tasks</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Use a premade model for Object Detection</li>
                                    <li className="text-xl leading-6 px-0 pb-0 pt-2">Use BERT for Sentiment Analysis</li>
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

export default DLFoundationDev;

