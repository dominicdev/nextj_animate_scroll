import React from "react";
import { useState } from "react";
import Head from "next/head";
// Components
import TheBar from "../../components/TrainingDetailComponents/TheBar";
import TrainingDetailBanner from "../../components/TrainingDetailComponents/TrainingDetailBanner";
import DLTS from "../../components/TrainingDetailComponents/DLTS";
import WhyStudyAI from "../../components/TrainingDetailComponents/WhyStudyAI";
import MoreInfo from "../../components/TrainingDetailComponents/MoreTrainingInfo";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
const DLTimeSeries = () => {
  const [usrlProps, setUsrlProps] = useState({
    title: "Deep Learning for Structured and Time Series Data",
    mainDescription:
      "This two day workshop is designed to give participants the skills need to take Deep Learning in the Real World. Whether that be deploying to the cloud, at the edge on mobile or in the browser, we look at the strategies, frameworks and model changes need to get the best performance for various types of models.",
    duration: "2 days live + 7 hours online",
    pricing: "$1600 per pax",
    prerequisites: "A solid understanding of Deep Learning and TensorFlow",
  });
  return (
    <div>
      <Head>
        <title>
          Red Dragon AI - TimeSeries & Forecasting with Deep Learning Training
          Singapore
        </title>
        <meta
          name="description"
          content="Looking to train your team in AI and machine learning for forecasting? Find out how to do it properly."
        />
      </Head>
      <Navbar/>
      <TrainingDetailBanner courseProps={usrlProps} />
      {/* <TheBar /> */}
      <DLTS courseProps={usrlProps} />
      <WhyStudyAI />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default DLTimeSeries;
