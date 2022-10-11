import React from 'react'
import { useState } from 'react';
import Head from 'next/head';
// Components
import TheBar from '../../components/TrainingDetailComponents/TheBar';
import TrainingDetailBanner from '../../components/TrainingDetailComponents/TrainingDetailBanner';
import DLFoundationsDev from '../../components/TrainingDetailComponents/DLFoundationsDev';
import WhyStudyAI from '../../components/TrainingDetailComponents/WhyStudyAI'
import MoreInfo from '../../components/TrainingDetailComponents/MoreTrainingInfo'
import Footer from '../../components/Footer';
import CopyrightNotic from '../../components/CopyrightNotic';
import Navbar from '../../components/NavBar';
const DeepLearningFoundations = () => {
    const [dlfProps, setDlfProps] = useState({
        title: "Deep Learning Foundations",
        mainDescription: "This three day workshop is designed to introduce participants to the skills needed to start their journey as a Deep Learning Developer. It goes through the overall concepts and techniques for building a variety of Deep Learning models for tabular data, image data, audio data and text data.",
        duration: "3 days live + 7 hours online",
        pricing: "$1500 per pax",
        prerequisites: "A solid ability to code in any language"
    })
    return (
        <div>
            <Head>
                <title>Red Dragon AI - Machine Learning & Deep Learning Training Singapore</title>
                <meta name="description" content="Looking to train your team in Deep Learning and machine learning for your organization? Find out how to do it properly." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <TrainingDetailBanner courseProps={dlfProps}/>
            <TheBar />
            <DLFoundationsDev courseProps={dlfProps} />
            <WhyStudyAI />
            <MoreInfo />
            <Footer />
            <CopyrightNotic/>
        </div>
    )
}

export default DeepLearningFoundations
 
            
            // <Footer />