import React from "react";
import { useState } from "react";
import Head from 'next/head';
// components
import TheBar from "../../components/TrainingDetailComponents/TheBar";
import TrainingDetailBanner from "../../components/TrainingDetailComponents/TrainingDetailBanner";
import ACV from "../../components/TrainingDetailComponents/ACV";
import WhyStudyAI from "../../components/TrainingDetailComponents/WhyStudyAI";
import MoreInfo from "../../components/TrainingDetailComponents/MoreTrainingInfo";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
const AdvancedComputerVision = () => {
  const [acvProps, setAcvProps] = useState({
    title: "Advanced Computer Vision with Deep Learning",
    mainDescription:
      "This two day workshop is designed to give participants the skills needed to build cutting edge Computer Vision models with Deep Learning.",
    duration: "3 days live + 7 hours online",
    pricing: "$2400 per pax",
    prerequisites: "A solid understanding of Deep Learning and TensorFlow",
  });
  return (
    <div>
      <Head>
        <title>
          Red Dragon AI - Deep Learning for Computer Vision Training Singapore
        </title>
        <meta
          name="description"
          content="Looking to train your team in AI, Deep Learning & Computer Vision for your organization? Find out how to do it properly."
        />
      </Head>
      <Navbar/>
      <TrainingDetailBanner courseProps={acvProps} />
      <TheBar />
      <ACV courseProps={acvProps} />
      <WhyStudyAI />
      <MoreInfo />
  
      <Footer />
    </div>
  );
};

export default AdvancedComputerVision;
// 
// <WhyStudyAI />
// <MoreInfo />