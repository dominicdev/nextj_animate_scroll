import Head from 'next/head'
// import PaperState from '../components/Main/PaperState';
// import PaperStateRight from '../components/Main/PaperStateRight';
import Navbar from '../components/Navbar';
import ResearchPapers from '../components/ResearchPapers';
import CopyrightNotic from '../components/CopyrightNotic';
import Footer_new from '../components/footer_new';
export default function Research() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Red Dragon AI - AI & Machine Learning Training Singapore</title>
        <meta name="description" content="Looking to introduce AI and machine learning to your organization? Find out how to do it properly." />
      </Head>
      <Navbar />
      <main className='text-white w-full flex flex-col justify-center items-center' >
        {/* <HeroBox/>
        <AboutUs/>
        <UseML/>
        <AIForEveryone/>
        <RDAISolutions/> */}
        <ResearchPapers />
        <Footer_new />
        {/* <Section_com number={1} color={"bg-red-400"} /> */}
        {/* <Section_com number={1} color={"bg-red-400"} />
        <Section_com number={2} color={"bg-green-400"} />
        <Section_com number={3} color={"bg-yellow-400"} />
        <Section_com number={4} color={"bg-pink-400"} /> */}
      </main>

    </div>

  )
}
