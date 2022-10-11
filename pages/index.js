import Head from 'next/head' 
import Navbar from '../components/Navbar';
import HeroBox from '../components/Main/HeroBox';
import AboutUs from '../components/Main/AboutUs';
import UseML from '../components/Main/UseML';
import AIForEveryone from '../components/Main/AIForEveryone';
import RDAISolutions from '../components/Main/RDAISolutions';
export default function Home() {


  return (
    <div className="min-h-screen bg-black">
      <Head>
      <title>Red Dragon AI - AI & Machine Learning Training Singapore</title>
      <meta name="description" content="Looking to introduce AI and machine learning to your organization? Find out how to do it properly." />
  </Head>
      <Navbar/>
      <main className='text-white w-full flex flex-col justify-center items-center' >
        <HeroBox/>
        <AboutUs/>
        <UseML/>
        <AIForEveryone/>
        <RDAISolutions/> 
      </main>

    </div>

  )
}
