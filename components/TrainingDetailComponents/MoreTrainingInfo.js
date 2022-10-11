import React from 'react' 

//images
const CompScreen = '/img/training_imgs/course_funding_enroll.png'

const MoreTrainingInfo = () => {
    return (
        <section>
            <div className='min-h-[50vh] px-[10%] bg-white flex flex-row flex-nowrap items-start justify-center'>
                <div style={{flexBasis:"30%"}} className="w-[10%] flex flex-col justify-start flex-grow flex-shrink py-0 px-8">
                    <div className="flex flex-row justify-center">
                        <img className="h-auto px-0 pb-0 pt-12 w-[10%]" src={CompScreen} alt="Comp Screen"/>
                    </div>
                    <h4 className="text-2xl px-0 pb-2 pt-4 text-center text-black font-bold">Request More Info</h4>
                    <p className='text-base px-0 pb-2 pt-4 text-justify'>Sign up to receive additional information about this course. Find out what other learners are doing with the skills they gamed, and evaluate if this course is the right fit for you.</p>
                </div>
                <div style={{flexBasis:"30%"}} className=' flex flex-col content-center justify-start flex-grow flex-shrink py-0 px-8'>
                    <div className="flex flex-row justify-center">
                        <img className="h-auto px-0 pb-0 pt-12 w-[10%]" src={CompScreen} alt="Comp Screen"/>
                    </div>
                    <h4 className="text-2xl px-0 pb-2 pt-4 text-center text-black font-bold">Frequently Asked Questions</h4>
                    <p className='text-base px-0 pb-2 pt-4 text-justify'>Do I have to log in at a set time? How does the 360-degree assessment work? At this point, you probably have a few questions, and we’ve got answers.</p>
                </div>
                <div  style={{flexBasis:"30%"}} className='flex flex-col content-center justify-start flex-grow flex-shrink py-0 px-8'>
                    <div className="flex flex-row justify-center">
                        <img className="h-auto px-0 pb-0 pt-12 w-[10%]" src={CompScreen} alt="Comp Screen"/>
                    </div>
                    <h4 className="text-2xl px-0 pb-2 pt-4 text-center text-black font-bold">Funding Eligibility</h4>
                    <p className='text-base px-0 pb-2 pt-4 text-justify'>Our easy online application is free, and no special documentation is required. All applicants must be at least 18 years of age, proficient in Englisn, and committed to learning and engaging with felow participants throughout the course. We confirm enrollment eligibility within one week of your application.</p>
                </div>
            </div>
        </section>
    )
}

export default MoreTrainingInfo; 