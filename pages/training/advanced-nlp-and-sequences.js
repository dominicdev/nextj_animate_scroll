import React from "react";
import { useState } from "react"; 
import Head from "next/head";
// componenets
import TheBar from "../../components/TrainingDetailComponents/TheBar";
import TrainingDetailBanner from "../../components/TrainingDetailComponents/TrainingDetailBanner";
import ANLP from "../../components/TrainingDetailComponents/ANLP";
import WhyStudyAI from "../../components/TrainingDetailComponents/WhyStudyAI";
import MoreInfo from "../../components/TrainingDetailComponents/MoreTrainingInfo";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"; 
const AdvancedNLP = () => {
  const [anlpProps, setAnlpProps] = useState({
    title: "Advanced NLP and Sequences",
    mainDescription:
      "This three day workshop is designed to introduce participants to the skills needed to start their journey as a Deep Learning Developer. It goes through the overall concepts and techniques for building a variety of Deep Learning models for tabular data, image data, audio data and text data.",
    duration: "3 days live + 7 hours online",
    pricing: "$2400 per pax",
    prerequisites: "A solid ability to code in any language",
  });
  return (
    <div>
      <Head>
        <title>Red Dragon AI - NLP & Deep Learning Training Singapore</title>
        <meta
          name="description"
          content="Looking to train your team in Natural Language Processing and deep learning for your organization? Find out how to do it properly."
        />
      </Head>
      <Navbar/>
      <TrainingDetailBanner courseProps={anlpProps} />
      <TheBar />
      <ANLP courseProps={anlpProps} />
      <WhyStudyAI />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default AdvancedNLP;
