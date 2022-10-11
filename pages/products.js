import Head from 'next/head'
import Navbar from '../components/Navbar';
import HeroBoxProduct from '../components/ProductPage/HeroBoxProduct';
import PersonaProduct from '../components/ProductPage/PersonaProduct';
import AudioProduct from '../components/ProductPage/AudioProduct';
import ChatBotProduct from '../components/ProductPage/ChatBotProduct';
import CopyrightNotic from '../components/CopyrightNotic';
export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Red Dragon AI - AI & Machine Learning Training Singapore</title>
        <meta name="description" content="Looking to introduce AI and machine learning to your organization? Find out how to do it properly." />
      </Head>
      <Navbar />
      <main className='text-white w-full flex flex-col justify-center items-center' >
        <HeroBoxProduct />
        <PersonaProduct />
        <AudioProduct />
        <ChatBotProduct />
      </main>
      <CopyrightNotic />
    </div>

  )
}
