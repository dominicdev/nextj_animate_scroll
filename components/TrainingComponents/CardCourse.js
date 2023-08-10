import React, { } from 'react'
import { useRouter } from 'next/router'
const CardCourse = ({ SidebarCertificate, title, link, link_title, duration, certificate_text }) => {
    const effect_Trans = "transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300"

    const router = useRouter()
    return (
        <div
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                router.push(link)
            }}
            className={effect_Trans + " p-5 cursor-pointer m-8  xs:w-[60vh]  md:w-[40vh]  h-[30vh]  min-w-[4rem] bg-white relative rounded-xl justify-between flex flex-col"}
            style={{
                boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.3)"
            }}>
            <h5 className=" text-base font-serif font-extralight">{title}</h5>
            <h4 className="font-light text-lg   font-serif  pt-4 text-red-600 ">
                <a className="m-0 no-underline"
                    href={link}>
                    {link_title}
                </a>
            </h4>
            <h6 className="text-xl   font-light">{duration}</h6>
            <div className='flex flex-row items-end gap-3'>
                <img
                    className="p-0 h-[25px] w-auto"
                    src={SidebarCertificate} width={"25px"} height={"25px"} alt="Certificate" />
                <h7 className="  text-base   font-light">{certificate_text}</h7>

            </div>
        </div>
    )
}

export default CardCourse

