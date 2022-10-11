import React from 'react'
// import styled from 'styled-components';
import {BreakoutBox, CourseStyle, CourseText, CourseHolder, LeftBox, RightBox, 
    WhatYoullLearn, LearnLists, LeftList, RightList, TopicsCovered, TechWeTeach, 
    FrameworkLogosStyle, StandardInfoBox, Certificate, TimeToComplete, TrainingLevel } from '../TrainingDetailStyle';

// images
import tfLogo from '../../img/tensorflow.svg'
import pytorchLogo from '../../img/pytorch-icon.svg'
import pythonLogo from '../../img/python-logo-inkscape.svg'
// import SidebarCalendar from '../../img/training_imgs/sidebar_calendar.png'
import SidebarCertificate from '../../img/training_imgs/certificate-icon.svg'
import SidebarClock from '../../img/training_imgs/clock.svg'
import SidebarLevel from '../../img/training_imgs/level.svg'


const DLPM = (props) => {
    return (
        <section>
            <CourseStyle>
                <CourseHolder>
                    <LeftBox>
                        <WhatYoullLearn>
                        <h2>What You&apos;ll Learn</h2>
                            <LearnLists>
                                <LeftList>
                                <ul>
                                    <li>  Understand how modern Machine Learning works</li>
                                    <li>  Evaluate data requirements for an AI project</li>
                                    <li>  What is currently possible and not in Computer Vision and Natural Language Processing</li>
                                </ul>
                                </LeftList>
                                <RightList>
                                <ul>
                                    <li> Strategies for cost effective deployment of ML Projects</li>
                                    <li> How to build and run a Machine Learning team.</li>
                                    <li> How to plan and manage AI Projects</li>
                                </ul>
                                </RightList>
                            </LearnLists>
                        </WhatYoullLearn>
                        <CourseText>
                        <h2>Course Overview</h2>
                        <p>With technology changing so quickly it is crucial for product managers to stay up-to-date and so understand how they can influence the creation and improvement of products they are working on.  As a more advanced version of Machine Learning (ML), Deep Learning (DL) is by far the fastest growing and most flexible technology influencing new products today, being used for more than 98% of all “AI” technologies in companies such as Google, Facebook and Amazon.</p>
                        <p>In this course we will look at the tools, techniques and types of models that are being used for a variety of products from a product manager’s point of view. These include models such as Convolutional Neural Networks, Recurrent Neural Networks and Transformers which have been used extensively inside a variety of companies and organizations for tasks ranging from financial prediction to voice recognition to text analysis.  We will also look at what is needed to put together a ML team and design a DL project from scratch.</p>
                        <p>Each day of this 3-day course covers a different type of challenge and the corresponding models and techniques that can be applied :</p>
                        <p>Day 1 covers not only the basics of how Deep Learning works and builds on the fundamentals of machine learning, but also focuses on techniques and strategies for building models in tabular and structured data problem domains.  </p>
                        <p>Day 2 covers how Deep Learning can be used for computer vision products.  Participants will learn the fundamentals of Convolutional Neural Networks (CNNs) and how they can be used for applications such as image classification and object detection.</p>
                        <p>Day 3 covers how Natural Language Processing (NLP) and Natural Language Understanding (NLU) can make use of Deep Learning to do tasks such as document classification and entity extraction.</p>
                        <p>Using case studies, participants will get a good sense of what techniques to use when; what data will be needed; and how to get and prepare the data in the most efficient way possible.</p>
                        <p>The current general consensus is that the combination of Deep Learning and domain expertise is what leads to state-of-the-art results.  The key here is that domain expertise is something the majority of product managers already have, and learning the skills and techniques of Machine Learning and Deep Learning will allow them to create not only better products, but whole new types of products and services.</p>
                        <p>The course is designed to give participants a practical hands-on experience.  Students will be taught from real-world code examples for learning, as well as in-class challenges that they will need to work through and complete during the class.  Our goal is to prepare students for applications, challenges and needs that they will face in the day-to-day world as a product manager charged with building products and managing ML teams.</p>

                        <p>Topics covered include:</p>
                       <TopicsCovered>
                            <ul>
                                <li>The fundamentals of Deep Learning</li>
                                <li>Multi Layer Perceptrons, Convolutional Neural Networks, Recurrent Neural Networks & Transformers</li>
                                <li>Strategies for collecting and annotating data in an organization</li>
                                <li>Running ML projects and how they are different to normal software engineering</li>
                                <li>Models and techniques for structured and tabular data</li>
                                <li>Models and techniques used in computer vision products</li>
                                <li>Models and techniques used in Natural Language Processing and text related products</li>
                                <li>Building ML teams - what and who you need</li>
                                <li>Structuring and managing ML projects</li>
                                <li>Dealing with the types of challenges that occur in building an ML related project</li>
                                <li>Designing AI products that can scale millions of users and petabytes of data</li>
                            </ul>
                        </TopicsCovered>
                        <br/>
                        <br/>
                        </CourseText>
                    </LeftBox>
                    <RightBox>
                        <BreakoutBox>
                            <h3>Duration</h3>
                            <p>{props.courseProps.duration}</p>
                            <h3>Pricing</h3>
                            <p>{props.courseProps.pricing}</p>
                            <h3>Prerequisites</h3>
                            <p>{props.courseProps.prerequisites}</p>
                        </BreakoutBox>
                        <TechWeTeach>
                            <h5>Technologies we teach with include:</h5>
                        </TechWeTeach>
                        <FrameworkLogosStyle>
                            <img className='tensorflow-img' src={tfLogo} alt="tensorflow"/>
                            <img className='pytorch-img' src={pytorchLogo} alt="pytorch"/>
                            <img className='python-img' src={pythonLogo} alt="python"/>
                        </FrameworkLogosStyle>
                        {/* <PreviousParticipants> */}
                            {/* <h5>Previous participants include employees from:</h5> */}
                        {/* </PreviousParticipants> */}
                        {/* <div className="participant-logos">
                            <img className='dbs-img' src={dbsLogo} alt="DBS Logo"/>
                        </div> */}
                        <StandardInfoBox>
                            <Certificate>
                                <div className="cert-img">
                                    <img src={SidebarCertificate} alt="Certificate"/>
                                </div>
                                <div className="cert-text">
                                    <h3>Certificate</h3>
                                    <p>Earn a certificate upon completion</p>
                                </div>
                            </Certificate>
                            <TrainingLevel>
                                <div className="training-level-img">
                                    <img src={SidebarLevel} alt=""/>
                                </div>
                                <div className="training-level-text">
                                    <h3>Training Level</h3>
                                    <p>Intermediate Level</p>
                                </div>
                            </TrainingLevel>
                            <TimeToComplete>
                                <div className="time-to-complete-img">
                                    <img src={SidebarClock} alt=""/>
                                </div>
                                <div className='time-to-complete-text'>
                                    <h3>Time to Complete</h3>
                                    <p>Approx. 21 hours to complete</p>
                                </div>
                            </TimeToComplete>
                        </StandardInfoBox>
                    </RightBox>
                </CourseHolder>
            </CourseStyle>
        </section>
    )
}

export default DLPM;

