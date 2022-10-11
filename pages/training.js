import Head from 'next/head'
import Navbar from '../components/Navbar';
import CallOutPicture from '../components/TrainingComponents/CallOutPicture';
import BannerCallout from '../components/TrainingComponents/BannerCallout';
import CourseCardsHolder from '../components/TrainingComponents/CourseCardsHolder';
import SignUpTraining from '../components/TrainingComponents/SignUpTraining';
import CourseCardsUpComing from '../components/TrainingComponents/CourseCardsUpComing';
import CorporateBanner from '../components/TrainingComponents/CorporateBanner';
import WhyChooseUs from '../components/TrainingComponents/WhyChooseUs';
import CopyrightNotic from '../components/CopyrightNotic';
import Footer_new from '../components/footer_new';
export default function Training() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Red Dragon AI - AI & Machine Learning Training Singapore</title>
        <meta name="description" content="Looking to introduce AI and machine learning to your organization? Find out how to do it properly." />
      </Head>
      <Navbar />
      <main className='text-white w-full flex flex-col justify-center items-center' >
        <CallOutPicture />
        <BannerCallout />
        <CourseCardsHolder />
        <SignUpTraining />
        <CourseCardsUpComing />
        <CorporateBanner />
        <WhyChooseUs />
      </main>
      <Footer_new />
    </div>

  )
}
