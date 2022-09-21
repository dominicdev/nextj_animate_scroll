import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
const Section_com = ({number,color}) => {
    const { ref, inView } = useInView({
        threshold: 0
    });
    useEffect(() => {
      console.log(number,inView)
    }, [inView])
    
    return (
        <section className={' p-3 flex flex-col items-center justify-center min-w-full min-h-screen ' + color   }>
            <h1 ref={ref}  className={" transition-opacity delay-700 duration-1000 ease-out  text-3xl font-bold underline " + (inView?" opacity-100":" opacity-0")}>
                Hello world! {number} {inView?"good":""}
            </h1>
        </section>
    )
}

export default Section_com