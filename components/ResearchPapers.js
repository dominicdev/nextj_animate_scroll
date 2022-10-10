import React from 'react';
// import styled from 'styled-components';
// images
const textGraphPoster1 = "/img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png";
const textGraphPoster2 = "/img/2019-08-01_EMNLP-2019-workshop_WNGT_Paraphrasing_with_Large_LMs_cover_final2.png";
const textGraphPoster3 = "/img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png";
import { PaperState } from '../lib/paperDetails';

const ResearchPapers = () => {
    const papers = PaperState();

    const paper_holder = " flex flex-wrap items-center "
    const contentPaper = " text-[#555] w-[74%] m-auto font-normal text-base font-sans leading-6 "
    const left_paper = " flex-row justify-start "
    const image_box = "min-w-[4rem] p-[1rem] pb-[2rem]"
    const img_class = "m-w-full h-auto align-middle border-none "
    const text_box = " max-w-full p-[1rem] pr-[2rem] "
    const conference_title_span = "text-[0.7rem] font-sans leading-6 text-[#555] "
    const conference_title_line = " inline h-[2px] w-[30px] text-red-600 "
    const paper_title = "text-[#000] font-semibold text-base font-sans leanding-4 "
    const paper_description = "text-sm leading-4 p-1 pb-2 pr-0 text-justify"
    const paper_buttons = " flex justify-start "
    const buttons_style = " text-white my-0 mx-[0.1rem] p-[0.5rem] bg-[#de0800] text-sm font-normal rounded-xl "
    const right_paper = " flex-row-reverse justify-start "

    return (
        <div className={contentPaper}>
            <div className={paper_holder + left_paper}>
                <div className={image_box} style={{ flex: "3 0 16rem" }}>
                    <img
                        className={img_class}
                        src={papers[0].mainImg}
                        alt="Shared Task: Language Model Assisted Explanation Generation - poster" />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>EMNLP-IJCNLP 2019 : WNGT workshop</span>
                    </div>
                    <div className={paper_title}>
                        <span>Shared Task: Language Model Assisted Explanation Generation</span>
                    </div>
                    <div className={paper_description}>
                        The TextGraphs-13 Shared Task on Explanation Regeneration asked participants to develop methods to reconstruct gold explanations for elementary science questions. Red Dragon AI&apos;s entries used the language of the questions and explanation text directly, rather than a constructing a separate graph-like representation. Our leaderboard submission placed us 3rd in the competition, but we present here three methods of increasing sophistication, each of which scored successively higher on the test set after the competition close.
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[0].paper_url} target="_blank" rel="noreferrer">Read Paper</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[0].colab_url} target="_blank" rel="noreferrer">Open in Colab</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[0].arxiv_url} target="_blank" rel="noreferrer">View on Arxiv</a></button>
                    </div>
                </div>
            </div>

            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={textGraphPoster2} 
                        alt=" Explanation Generation - poster" />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>EMNLP-IJCNLP 2019 : WNGT workshop</span>
                    </div>
                    <div className={paper_title}>
                        <span>Paraphrasing with Large Language Models</span>
                    </div>
                    <div className={paper_description}>
                        Recently, large language models such as GPT-2 have shown themselves to be extremely adept at text generation and have also been able to achieve high-quality results in many downstream NLP tasks such as text classification, sentiment analysis and question answering with the aid of fine-tuning. We present a useful technique for using a large language model to perform the task of paraphrasing on a variety of texts and subjects. Our approach is demonstrated to be capable of generating paraphrases not only at a sentence level but also for longer spans of text such as paragraphs without needing to break the text into smaller chunks.
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[1].paper_url}>Read Paper</a></button>
                        {/* <button className={buttons_style} style={{border:"1px solid #de0800"}}><a href={papers[1].colab_url}>Open in Colab</a></button> */}
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[1].arxiv_url}>View on Arxiv</a></button>
                    </div>
                </div>
            </div>

            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={textGraphPoster3} alt="Unsupervised Natural Question Answering with a Small Model - poster" />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>EMNLP-IJCNLP 2019 : FEVER workshop</span>
                    </div>
                    <div className={paper_title}>
                        <span>Unsupervised Natural Question Answering with a Small Model</span>
                    </div>
                    <div className={paper_description}>
                        The recent (2019-02) demonstration of the power of huge language models such as GPT-2 to memorise the answers to factoid questions raises questions about the extent to which knowledge is being embedded directly within these large models. This short paper describes an architecture through which much smaller models can also answer such questions - by making use of &apos;raw&apos; external knowledge. The contribution of this work is that the methods presented here rely on unsupervised learning techniques, complementing the unsupervised training of the Language Model. The goal of this line of research is to be able to add knowledge explicitly, without extensive training.
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[2].paper_url}>Read Paper</a></button>
                        {/* <button className={buttons_style} style={{border:"1px solid #de0800"}}><a href={papers[2].colab_url}>Open in Colab</a></button> */}
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[2].arxiv_url}>View on Arxiv</a></button>
                    </div>
                </div>
            </div>
            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={papers[3].mainImg} alt={papers[3].imgAltTag} />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>{papers[3].conference}</span>
                    </div>
                    <div className={paper_title}>
                        <span>{papers[3].title}</span>
                    </div>
                    <div className={paper_description}>
                        {papers[3].description}
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[3].paper_url}>Read Paper</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[3].colab_url}>Open in Colab</a></button>
                        {/* <button className={buttons_style} style={{border:"1px solid #de0800"}}><a href={papers[3].arxiv_url}>View on Arxiv</a></button> */}
                    </div>
                </div>
            </div>

            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={papers[4].mainImg} alt={papers[4].imgAltTag} />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>{papers[4].conference}</span>
                    </div>
                    <div className={paper_title}>
                        <span>{papers[4].title}</span>
                    </div>
                    <div className={paper_description}>
                        {papers[4].description}
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[4].paper_url}>Read Paper</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[4].colab_url}>Read Code</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[4].arxiv_url}>View on Arxiv</a></button>
                    </div>
                </div>
            </div>
            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={papers[5].mainImg} alt={papers[5].imgAltTag} />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>{papers[5].conference}</span>
                    </div>
                    <div className={paper_title}>
                        <span>{papers[5].title}</span>
                    </div>
                    <div className={paper_description}>
                        {papers[5].description}
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[5].paper_url}>Read Paper</a></button>
                        {/* <button className={buttons_style} style={{border:"1px solid #de0800"}}><a href={papers[5].colab_url}>Open in Colab</a></button> */}
                        {/* <button className={buttons_style} style={{border:"1px solid #de0800"}}><a href={papers[5].arxiv_url}>View on Arxiv</a></button> */}
                    </div>
                </div>
            </div>
            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={papers[6].mainImg} alt={papers[6].imgAltTag} />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>{papers[6].conference}</span>
                    </div>
                    <div className={paper_title}>
                        <span>{papers[6].title}</span>
                    </div>
                    <div className={paper_description}>
                        {papers[6].description}
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[6].paper_url}>Read Paper</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[6].colab_url}>Open in Colab</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[6].arxiv_url}>View on Arxiv</a></button>
                    </div>
                </div>
            </div>
            <div className={paper_holder + right_paper}>
                <div className={image_box}>
                    <img
                        className={img_class}
                        src={papers[7].mainImg} alt={papers[7].imgAltTag} />
                </div>
                <div className={text_box} style={{ flex: "7 0 30rem" }}>
                    <div >
                        <div className={conference_title_line}></div>
                        <span className={conference_title_span}>{papers[7].conference}</span>
                    </div>
                    <div className={paper_title}>
                        <span>{papers[7].title}</span>
                    </div>
                    <div className={paper_description}>
                        {papers[7].description}
                    </div>
                    <div className={paper_buttons}>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[7].paper_url}>Read Paper</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[7].colab_url}>Code on Github</a></button>
                        <button className={buttons_style} style={{ border: "1px solid #de0800" }}><a href={papers[7].arxiv_url}>View on Arxiv</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ResearchPapers;