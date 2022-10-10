import React, { } from 'react'

const CardCourse = ({ SidebarCertificate, title, link, link_title, duration, certificate_text }) => {
    return (
        <div className="m-8 h-[30vh] w-[40vh] min-h-[4rem] min-w-[4rem] bg-white relative"
            style={{
                boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.3)"
            }}>
            <h5 className="p-3 text-base font-serif font-extralight">{title}</h5>
            <h4 className="font-light text-lg p-3 pt-0 font-serif   text-red-600 ">
                <a className="m-0 no-underline"
                    href={link}>
                    {link_title}
                </a>
            </h4>
            <h6 className="absolute bottom-[16%] text-xl p-3 font-light">{duration}</h6>
            <img
                className="absolute bottom-[5%] p-0 pl-4 h-[25px] w-auto"
                src={SidebarCertificate} width={"25px"} height={"25px"} alt="Certificate" />
            <h7 className="absolute bottom-0 ml-8 text-base p-3 font-light">{certificate_text}</h7>
        </div>
    )
}

export default CardCourse

