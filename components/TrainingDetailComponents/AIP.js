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


const AIP = (props) => {
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
                                    <li>  Converting and deploying models to TensorFlow Lite</li>
                                    <li>  How to train models with large datasets at scale</li>
                                    <li>  Deploying to the cloud with TFX and TensorFlow Serving</li>
                                </ul>
                                </LeftList>
                                <RightList>
                                <ul>
                                    <li> How to Distill models to get smaller and faster models</li>
                                    <li> How to build and run a Machine Learning team.</li>
                                    <li> How to plan, manage and debug Machine Learning Projects</li>
                                </ul>
                                </RightList>
                            </LearnLists>
                        </WhatYoullLearn>
                        <CourseText>
                        <h2>Course Overview</h2>
                        <p>While there are many tutorials out there teaching how to build and train basic neural networks, getting these models into production in real-world applications is a whole set of skills that goes beyond understanding Deep Learning. In this course, we cover both the Deep Learning aspects as well as engineering and DevOps skills required to take models and serve them at scale. This includes both serving models in the cloud, on mobile and on hardware devices. </p>
                        <p>We will cover how to prepare models to make them both efficient as well as cost-effective for serving. This will include how to quantize and prune models in a way that retains as much accuracy of the model as possible while making the model 2-4x faster and smaller. Another critical engineering aspect of models in production is how to use frameworks like TFX for making efficient data pipelines that can be used in production to monitor everything from data quality to split testing models and examining their inference qualities on data at scale.</p>
                        <p>This course will examine the popular frameworks for serving models on mobile devices and what needs to be done to prepare models for inference at the edge. This will include looking at distilling large models to make smaller versions that can be used on mobile and hardware devices, what types of models are best to use on mobile devices, how to secure your models and how to use a combination of local and cloud served models to deliver a high-quality user experience.</p>
                        <p>As Machine Learning starts to be governed more by various agencies, the need to explain why your models created particular responses becomes more and more necessary. This course also covers some of the key tools and techniques used to make models more explainable and how you can use those in industry. </p>
                        <p>Finally we also cover industry best practices for model development and deployment in teams, how to iterate from model ideation through to monitoring in production.</p>
                        <p>Key topics covered include:</p>
                        <TopicsCovered>
                            <ul>
                                <li>Building microservices that can be used for prediction.</li>
                                <li>Breaking end to end products into various models to produce more effective pipelines.</li>
                                <li>How to build and structure teams for AI project</li>
                                <li>Customizing and editing your models to make them efficient for inference.</li>
                                <li>Quantizing and Pruning models to improve their performance in inference.</li>
                                <li>Distilling models to create new more efficient models.</li>
                                <li>Deploying models to the cloud using frameworks like TensorFlow serving.</li>
                                <li>Creating models for mobile using TF Lite.</li>
                                <li>How to train big models on big datasets in a reasonable amount of time.</li>
                                <li>Skills and techniques for training large models and datasets with custom hardware and mixed precision.</li>
                                <li>Model Explainability: Interpreting models to make them less of a black box.</li>
                                <li>Building model visualizations for explainability.</li>
                                <li>Debugging and troubleshooting ML project as a whole</li>
                                <li>Hyper Parameter tuning on models.</li>
                                <li>How to iterate through model creation to arrive at an optimal solution.</li>
                                <li>Creating a methodology and best practices for team model creation.</li>
                                <li>Selecting and managing ML teams and projects.</li>
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
                                    <p>Approx. 28 hours to complete</p>
                                </div>
                            </TimeToComplete>
                        </StandardInfoBox>
                    </RightBox>
                </CourseHolder>
            </CourseStyle>
        </section>
    )
}

export default AIP;

