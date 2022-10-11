import React from "react";
import { useState } from "react";
import Head from "next/head";
// components
import TheBar from "../../components/TrainingDetailComponents/TheBar";
import TrainingDetailBanner from "../../components/TrainingDetailComponents/TrainingDetailBanner";
import USRL from "../../components/TrainingDetailComponents/USRL";
import WhyStudyAI from "../../components/TrainingDetailComponents/WhyStudyAI";
import MoreInfo from "../../components/TrainingDetailComponents/MoreTrainingInfo";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
const UnsupervisedCourse = () => {
  const [usrlProps, setUsrlProps] = useState({
    title: "Unsupervised, Self Supervised and Reinforcement Learning",
    mainDescription:
      "This two day workshop is designed to give participants an understanding of the the current cutting edge methods, models and techniques used in Unsupervised, Self Supervised and Reinforcement Learning. This includes looking at AutoEncoders, General Adversarial Networks and a variety of Reinforcement Learning techniques.",
    duration: "2 days live + 7 hours online",
    pricing: "$1600 per pax",
    prerequisites: "A solid understanding of Deep Learning and TensorFlow",
  });
  return (
    <div>
      <Head>
        <title>
          Red Dragon AI - Deep Learning & Unsupervised Learning Training
          Singapore
        </title>
        <meta
          name="description"
          content="Looking to train your team in Reinforcement Learning and Unsupervised Learning for your organization? Find out how to do it properly."
        />
      </Head>
      <Navbar/>
      <TrainingDetailBanner courseProps={usrlProps} />
      <TheBar />
      <USRL courseProps={usrlProps} />
      <WhyStudyAI />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default UnsupervisedCourse;
