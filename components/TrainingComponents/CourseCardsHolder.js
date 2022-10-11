import React from "react"; 
// import SidebarCertificate from "../../img/training_imgs/certificate-icon.svg";
import CardCourse from "./CardCourse";
// const CourseTitle = styled.div`
//   background: #f0f0f0;
//   h3 {
//     font-size: 3rem;
//     color: black;
//     padding: 5rem 5rem 0rem 3rem;
//     text-align: center;
//     font-family: "Lato", sans-serif;
//     font-weight: 300;
//   }

//   @media only screen and (min-width: 320px) and (max-width: 479px) {
//         h3 { 
//           padding: 5rem 3rem 0rem 3rem;
//           font-size: 2rem;
//         }
//     }    


//     @media only screen and (min-width: 768px) and (max-width: 991px) {
//         h3 {
//           padding: 5rem 3rem 0rem 3rem;
//         }
//     }
// `;


// const CourseHolder = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   width: 95%;
//   min-height: 70vh;
//   /* background: lightsteelblue; */
//   background: #f0f0f0;
// `;
// SidebarCertificate,title,link,link_title,duration,certificate_text

const list_course = [ 
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: 'Deep Learning Developer Series',
    link: '/training/deep-learning-foundations',
    link_title: 'Foundations of Deep Learning',
    duration: "Duration: 3 days",
    certificate_text: 'Certificate Awarded'
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: 'Deep Learning Developer Series',
    link: '/training/advanced-computer-vision-deep-learning',
    link_title: 'Advanced Computer Vision with Deep Learning',
    duration: "Duration: 2 days",
    certificate_text: 'Certificate Awarded'
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning Developer Series",
    link: "/training/advanced-nlp-and-sequences",
    link_title: "Advanced NLP and Sequences",
    duration: "Duration: 3 days",
    certificate_text: "Certificate Awarded",
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning Developer Series",
    link: "/training/unsupervised-and-reinforcement-learning-course",
    link_title: "Unsupervised and Reinforcement Learning",
    duration: "Duration: 2 days",
    certificate_text: "Certificate Awarded"
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning Developer Series",
    link: "/training/ai-in-production",
    link_title: "AI in Production",
    duration: "Duration: 3 days",
    certificate_text: "Certificate Awarded",
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning Developer Series",
    link: "/training/deep-learning-for-audio",
    link_title: "Deep Learning for Audio",
    duration: "Duration: 2 days",
    certificate_text: "Certificate Awarded"
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning Developer Series",
    link: "/training/deep-learning-for-structured-time-series-data",
    link_title: "Deep Learning for Structured and Time Series Data",
    duration: "Duration: 2 days",
    certificate_text: "Certificate Awarded",
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning for Mangers Series",
    link: "/training/deep-learning-foundations-for-managers",
    link_title: "Deep Learning for Product Managers",
    duration: "Duration: 3 days",
    certificate_text: "Certificate Awarded",
  },
  {
    SidebarCertificate: "/img/training_imgs/certificate-icon.svg",
    title: "Deep Learning for Graphs",
    link: "/training/deep-learning-for-graphs",
    link_title: "AI for Graphs and Knowledge Base",
    duration: "Duration: 2 days",
    certificate_text: "Certificate Awarded",
  } 
]
const CourseCardsHolder = () => {
  return (
    <section className="w-full  text-black">
      <div className="bg-[#f0f0f0]">
        <h3 className="sm:pr-12 md:pr-12 sm:text-[2rem] text-[2rem] lg:text-5xl pt-20 pr-20 pb-0 pl-12 text-center font-serif font-light">AI & Deep Learning Courses</h3>
      </div>
      <div className="bg-[#f0f0f0] flex justify-center items-center min-h-[80vh] w-auto p-8">
        <div className="bg-[#f0f0f0] flex flex-justify items-center flex-wrap min-h-[70vh] justify-center w-full m-auto">
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
  );
};

export default CourseCardsHolder;




