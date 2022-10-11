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


const DLA = (props) => {
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
                                    <li>  Understanding the fundamentals of audio as a data source</li>
                                    <li>  Building pipelines to pre-process audio for Neural Network</li>
                                    <li>  How to build various types of Audio Classification models</li>
                                </ul>
                                </LeftList>
                                <RightList>
                                <ul>
                                    <li> Using relevant audio libraries like Librosa</li>
                                    <li> How ASR models work and use different losses compared to other models</li>
                                    <li> Understanding some of the models use in Alexa and Google Home</li>
                                </ul>
                                </RightList>
                            </LearnLists>
                        </WhatYoullLearn>
                        <CourseText>
                        <h2>Course Overview</h2>
                        <p>The use of Deep Learning to build audio models has lagged their use in the image and text until domains.  Now though, Deep Learning is being used in a variety of different types of audio models and applications.  From applications as varied as Automatic Speech Recognition (ASR) and speaker diarization through to Audio manipulation models for tasks like noise reduction and signal processing, Deep Learning is finding its way into all areas of digital audio whether that be classification of the audio through to creation of new audio.</p>
                        <p>In this course we look at the different types of audio models, data pipelines and techniques.  Audio files often require conversion and there are a variety of ways you can manipulate audio as data - from models using convolutions after converting audio into spectra through to techniques that can be applied at the level of raw waveforms to generate new audio.  The course covers a variety of types of audio manipulations to achieve common tasks that people want to do with audio.</p>
                        <p>Overall, this course is designed to give the participants a practical hands-on approach.  Students will be taught from and given real world code examples for learning, as well as in-class challenges in which they will need to work through and complete in the class.  The goal is to prepare students for applications, challenges and needs that they will face in the day-to-day world as a data scientist dealing with audio challenges and tasks.</p>
                        <p>Topics covered include:</p>
                       <TopicsCovered>
                            <ul>
                                <li>Audio classification</li>
                                <li>Detecting voices</li>
                                <li>Audio pipelines</li>
                                <li>Processing audio with spectagrams </li>
                                <li>Multi label audio problems</li>
                                <li>Wavenets for audio and speech generation</li>
                                <li>Intro to Automatic Speech Recognition (ASR)</li>
                                <li>Noise reduction</li>
                                <li>How wake word models work on mobile and custom hardware</li>
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

export default DLA;

