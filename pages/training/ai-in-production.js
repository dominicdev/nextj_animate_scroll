import React from "react";
import { useState } from "react"; 
import Head from "next/head";
// componenets
import TheBar from "../../components/TrainingDetailComponents/TheBar";
import TrainingDetailBanner from "../../components/TrainingDetailComponents/TrainingDetailBanner";
import AIP from "../../components/TrainingDetailComponents/AIP";
import WhyStudyAI from "../../components/TrainingDetailComponents/WhyStudyAI";
import MoreInfo from "../../components/TrainingDetailComponents/MoreTrainingInfo";
import Footer from "../../components/Footer"; 
import Navbar from "../../components/NavBar";
const AIinProduction = () => {
  const [usrlProps, setUsrlProps] = useState({
    title: "AI in Production: Deploying to the real world",
    mainDescription:
      "This three day workshop is designed to give participants the skills need to take Deep Learning in the Real World. Whether that be deploying to the cloud, at the edge on mobile or in the browser, we look at the strategies, frameworks and model changes need to get the best performance for various types of models.",
    duration: "3 days live + 7 hours online",
    pricing: "$2400 per pax",
    prerequisites: "A solid understanding of Deep Learning and TensorFlow",
  });
  return (
    <div>
      <Head>
        <title>
          Red Dragon AI - AI & Machine Learning in Production Training Singapore
        </title>
        <meta
          name="description"
          content="Looking to train your team in AI and Deep Learning for your organization? Find out how to do it properly."
        />
      </Head>
      <Navbar/>
      <TrainingDetailBanner courseProps={usrlProps} />
      {/* <TheBar /> */}
      <AIP courseProps={usrlProps} />
      <WhyStudyAI />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default AIinProduction;
