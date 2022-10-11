import React from 'react' 
import CardCourse from './CardCourse'
 
const CourseCardsUpComing = () => {
  

  const list_course = [ 
    {
      SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
      title: 'Deep Learning Upcoming Courses',
      link: '/training/adnvance-nlp-and-sequences',
      link_title: 'Advance NLP and Sequences',
      duration: "Date: Mar 18, 2022",
      certificate_text: 'Certificate Awarded'
    },
    {
      SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
      title: 'Deep Learning Upcoming Courses',
      link: "/training/ai-production",
      link_title: 'AI Production',
      duration: "Date: Mar 21, 2022",
      certificate_text: 'Certificate Awarded'
    },
    {
      SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
      title: "Deep Learning Upcoming Courses",
      link: "/training/deep-learning-for-graphs-module",
      link_title: "Deep Learning for Graphs Module",
      duration: "Date: Mar 23, 2022",
      certificate_text: "Certificate Awarded",
    }
  ]

  return (
    <section className="w-full text-black my-5 bg-white">
      <div className="flex flex-col min-h-[50vh] py-5 px-0">
        <div className="flex flex-col justify-end flex-1 items-center">
          <h2 className="text-3xl text-black font-serif font-light">Upcoming Public Courses</h2>
        </div>
        <div className="text-black  flex flex-justify items-center flex-wrap  justify-center w-full m-auto">
        {list_course && list_course.map((item, index) =>{
          return ( <CardCourse
          key={index}
          SidebarCertificate={item.SidebarCertificate}
          title={item.title}
          link={item.link}
          link_title={item.link_title}
          duration={item.duration}
          certificate_text={item.certificate_text} />);
        })} 
        </div> 
      </div>
    </section>
  )
}

export default CourseCardsUpComing
