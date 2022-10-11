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


const DLTS = (props) => {
    return (
        <section>
            <CourseStyle>
                <CourseHolder>
                    <LeftBox>
                        <WhatYoullLearn>
                        <h2>What You'll Learn</h2>
                            <LearnLists>
                                <LeftList>
                                <ul>
                                    <li>  Understanding what makes forecasting different than other tasks</li>
                                    <li>  How to build models for Univariate and Multivariate data</li>
                                    <li>  Different stragies of pre-processing data for forecasting problems</li>
                                </ul>
                                </LeftList>
                                <RightList>
                                <ul>
                                    <li> Using ConvLSTMs for Multivariate feature extraction</li>
                                    <li> Understanding Fast Fourier Analysis</li>
                                    <li> Strategies from creating fast inference Structured Data models</li>
                                </ul>
                                </RightList>
                            </LearnLists>
                        </WhatYoullLearn>
                        <CourseText>
                        <h2>Course Overview</h2>
                        <p>It is well known that Deep Learning has achieved state of the art results in images and text.  What is often overlooked is how much Deep Learning is also being used to achieve results in tabular and structured data, which constitutes the majority of data found in organizations.  Everything from spreadsheets to log file outputs can be and are being used as data to be analysed by Deep Learning models.</p>
                        <p>In this module we will look at the techniques and types of models that are being used for structured and tabular data.  These include models such as Wide & Deep networks which have been used extensively inside Google for a variety of tasks.  We will also look at the extensive ways that embeddings can be used for categorical data in structured problems and the multiple ways these can be handled in code.</p>
                        <p>This module also covers time-series predictions and how you can use techniques from the text-based models to make predictions on sequences.  This opens up the range of applications to include financial time-series, continuous IoT readings, machinery failure prediction, website optimisation, and trip planning.</p>
                        <p>The course is designed to give the participants a practical hands-on experience.  Students will be taught from and given real world code examples for learning, as well as in-class challenges that they will need to work through and complete during the class.  The goal is to prepare students for applications, challenges and needs that they will face in the day-to-day world as a data scientist dealing with structured, tabular and time series data.</p>

                        <p>Topics covered include:</p>
                       <TopicsCovered>
                            <ul>
                                <li>Deep and Wide networks</li>
                                <li>Preprocessing pipelines for tabular models</li>
                                <li>Incorporating embeddings in tabular models</li>
                                <li>Embedding categorical information for tabular and time series models</li>
                                <li>Anomaly detection in data</li>
                                <li>Time Series for univariate and multivariate data</li>
                                <li>Smoothing in time series to obtain better forecasting</li>
                                <li>Data preprocessing for SQL and structured pipelines</li>
                                <li>Time Series with the Prophet library</li>
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

export default DLTS;

