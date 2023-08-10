import React, {  } from 'react'
const footer_new = () => {
    const effect_Trans = "transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300"
  
    return (
        <footer className="relative bg-[#1C1A17] pt-8 pb-6 w-full">
            <div className="container mx-auto px-12">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-white">Let&apos;s keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex items-center">
                            <button className={effect_Trans + " flex bg-red-100 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"} type="button">
                                <svg className="w-8 h-8 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>    
                            </button>
                            <button className={effect_Trans + " flex bg-red-100 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"} type="button">
                            <svg className="w-8 h-8 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </button>
                            <button className={effect_Trans +  " flex bg-red-100 text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"} type="button">
                            <svg className="w-8 h-8 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                            </button> 
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-red-600 font-semibold py-1">
                            Copyright © <span id="get-current-year">2017-2023 © All Rights Reserved </span><a href="https://www.creative-tim.com/product/notus-js" className="text-red-600 hover:text-gray-800" target="_blank" rel="noreferrer"> RDAI
                            </a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer_new