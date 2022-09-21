import React, { useEffect,useState } from 'react'
import { useInView, InView } from 'react-intersection-observer';
// import textGraphPoster1 from "./img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png";
// import textGraphPoster2 from "./img/2019-08-01_EMNLP-2019-workshop_WNGT_Paraphrasing_with_Large_LMs_cover_final2.png";
// import textGraphPoster3 from "./img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png";
// import textGraphPoster4 from "./img/2018-10-26_NIPS-2018-workshop_MLPCD2-Mobile_Poster_v11.png";
// import textGraphPoster5 from "./img/2018-11-01_NIPS-2018-workshop_ViGIL-SceneGraphTransforming_Poster_v16.png";
// import textGraphPoster6 from "./img/2018-10-08_NIPS-2018-workshop_MLOSS_Poster_v18.png";
// import textGraphPoster7 from "./img/2018-10-20_NIPS-2018-workshop_CDNNRIA-Compression_Poster_v11.png";
// import textGraphPoster8 from "./img/2017-12-08_NIPS-2017-ViGIL-Poster_v12.png";

const PaperStateRight = ({ number, color }) => {  
    return (
        <>
        <div className="flex flex-row-reverse justify-center flex-wrap items-center m-auto w-full">
            <InView>
                {({ inView, ref, entry }) => (
                    <div ref={ref} className={" flex-[3 0 16rem] min-w-[4rem] p-4 pb-8  transition-transform delay-300 duration-500 ease-out " + (inView ? "translate-x-0" : "translate-x-[100%]")}>
                        <img className=" max-w-full h-auto align-middle border-none" src={"/img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png"} alt="Shared Task: Language Model Assisted Explanation Generation - poster" />
                    </div>
                )}
            </InView>

            <InView>
                {({ inView, ref, entry }) => (
                    // <div ref={ref} className={"transition-opacity delay-700 duration-1000 ease-out p-4 pb-8   " + (inView?" opacity-100":" opacity-0")}>
                    //     <img className=" max-w-full h-auto align-middle border-none" src={"/img/2019-08-01_EMNLP-2019-workshop_TextGraphs_v07_with-logo.png"} alt="Shared Task: Language Model Assisted Explanation Generation - poster" />
                    // </div>

                    <div  ref={ref} className={"transition-opacity delay-700 duration-1000 ease-out flex-[7 0 30rem] max-w-[60%] p-4 pr-8 " + (inView?" opacity-100":" opacity-0")}>
                        <div  >
                            <div className=" inline h-[2px] w-[30px] text-red-700 ">
                                <span>EMNLP-IJCNLP 2019 : WNGT workshop</span>
                            </div>

                        </div>
                        <div className=" text-[#000] text-2xl font-serif">

                            <span>Shared Task: Language Model Assisted Explanation Generation</span>
                        </div>
                        <div className="text-black text-sm leading-4 pt-[1rem] pr-[1rem] pb-[2rem] pl-[0rem]">
                            The TextGraphs-13 Shared Task on Explanation Regeneration asked participants to develop methods to reconstruct gold explanations for elementary science questions. Red Dragon AI&apos;s entries used the language of the questions and explanation text directly, rather than a constructing a separate graph-like representation. Our leaderboard submission placed us 3rd in the competition, but we present here three methods of increasing sophistication, each of which scored successively higher on the test set after the competition close.
                        </div>
                        <div className="flex justify-start ">
                            <button className='rounded p-2 m-[0.5rem] bg-[#de0800] text-sm touch-manipulation border-[1px solid #de0800]'><a href={"/"}>Read Paper</a></button>
                            <button className='rounded p-2 m-[0.5rem] bg-[#de0800] text-sm touch-manipulation border-[1px solid #de0800]'><a href={"/"}>Open in Colab</a></button>
                            <button className='rounded p-2 m-[0.5rem] bg-[#de0800] text-sm touch-manipulation border-[1px solid #de0800]'><a href={"/"}>View on Arxiv</a></button>
                        </div>
                    </div>
                )}
            </InView>



        </div>
        </>
    )
}

export default PaperStateRight