import Head from 'next/head'
import Section_com from '../components/section_com';
import PaperState from '../components/PaperState';
import PaperStateRight from '../components/PaperStateRight';
import Navbar from '../components/NavBar';
import HeroBox from '../components/HeroBox';
import AboutUs from '../components/AboutUs';
import UseML from '../components/UseML';
import AIForEveryone from '../components/AIForEveryone';
export default function Home() {


  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Stable Diffusion</title>
        <meta name="description" content="Generated by Stable Diffusion " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='text-white w-full flex flex-col justify-center items-center' >
        <HeroBox/>
        <AboutUs/>
        <UseML/>
        <AIForEveryone/>
        {/* <PaperState />
        <PaperStateRight /> */}
        
        <Section_com number={1} color={"bg-red-400"} />
        <Section_com number={2} color={"bg-green-400"} />
        <Section_com number={3} color={"bg-yellow-400"} />
        <Section_com number={4} color={"bg-pink-400"} />
      </main>

    </div>

  )
}
