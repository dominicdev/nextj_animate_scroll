
import React, { useState,useEffect,useRef } from "react"; 
import Link from "next/link";
import { useRouter } from "next/router"; 
import Image from "next/image";
import { motion } from "framer-motion";



const Navbar = () => {
  const router = useRouter(); 
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const effect_Trans = "transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300"
  const [isLoadTabs, setLoadTabs] = useState(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);



  
  let tabs = [
    {
      path: "/products" ,
      name: "Products"
    } , {
      path: "/research",
      name: "Research"
    } , {
      path: "/training",
      name: "Training"
    }  
  ]
 
  
  useEffect(() => {
    setLoadTabs(tabs)
  }, [])
 
//  console.log(router)

  return (
    <div className={" min-h-8vh "}>
      <div className=" py-6 px-5  flex items-center justify-between max-w-full  mx-auto bg-black">
        {/* Left */}
        <h1
          onClick={(e) => {
            e.preventDefault()
            router.push("/");
          }}
          className="text-lg ml-8 font-semibold text-white cursor-pointer  ">
            <Image className=" object-contain" width={200} height={50} src={"/img/RedDragon_logo_260x39.png"} alt="Red Dragon Logo"/>
        </h1> 
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <ul className=" xs:hidden md:flex flex-grow-1 flex-shrink-1 p-0 pr-20 gap-12" style={{flexBasis:"40remm"}}>
            <li className={"relative "+effect_Trans}>
              <Link href= "/products">
                <a className="text-[1.25rem]  font-serif font-normal bg-transparent rounded-full text-slate-200 btn">
                  Products
                </a>
              </Link>  
              {router.pathname === "/products" && <motion.div
                className=" absolute bottom-[-20%] left-0 right-0 h-[0.3rem] bg-red-600 z-[1] "
                transition={{ duration: 0.2 }}
                initial={{ width: "0%" }}
                animate={{ width: router.pathname === "/products" ? "100%" : "0%" }}
              />}
            </li>   
            <li className={"relative "+effect_Trans}>
              <Link href= "/research">
                <a className={"text-[1.25rem] font-serif font-normal bg-transparent rounded-full text-slate-200 btn " }>
                Research
                </a>
              </Link>  
              {router.pathname === "/research" && <motion.div
                className=" absolute bottom-[-20%] left-0 right-0 h-[0.3rem] bg-red-600 z-[1] "
                transition={{ duration: 0.2 }}
                initial={{ width: "0%" }}
                animate={{ width: router.pathname === "/research" ? "100%" : "0%" }}
              />}
            </li> 
            <li className={"relative "+effect_Trans}>
              <Link href= "/training">
                <a className="text-[1.25rem] font-serif font-normal bg-transparent rounded-full text-slate-200 btn">
                Training
                </a>
              </Link>  
              <motion.div
                className=" absolute bottom-[-20%] left-0 right-0 h-[0.3rem] bg-red-600 z-[1] "
                transition={{ duration: 0.2 }}
                initial={{ width: "0%" }}
                animate={{ width: (
                  router.pathname === "/training" || 
                  router.pathname === "/training/deep-learning-foundations" ||
                  router.pathname === "/training/advanced-computer-vision-deep-learning" ||
                  router.pathname === "/training/advanced-nlp-and-sequences"||
                  router.pathname === "/training/unsupervised-and-reinforcement-learning-course" ||
                  router.pathname === "/training/ai-in-production" ||
                  router.pathname === "/training/deep-learning-for-audio" ||
                  router.pathname === "/training/deep-learning-for-structured-time-series-data"||
                  router.pathname === "/training/deep-learning-foundations-for-managers"||
                  router.pathname === "/training/deep-learning-for-graphs"
                ) ? "100%" : "0%" }}
              />
            </li>
          </ul> 
          <div className="sm:block md:hidden  items-center justify-end space-x-4 relative">
            <button
            onClick={(e)=>{ 
              setShow(!show)
            }}
            className="text-white self-center mr-12"  >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div ref={wrapperRef} className={" p-5 absolute bg-gray-100 shadow-xl right-0 top-[50px] rounded-xl " + (show?"block":"hidden")}>
            <ul className="flex flex-col gap-3">
              <li  onClick={(e)=>{
                setShow(false)
                router.push('/products')
              }} className="cursor-pointer px-3 list-none"> 
                Products 
              </li>
              <li onClick={(e)=>{
                setShow(false)
                router.push('/research')
              }} className="cursor-pointer px-3 list-none"> 
                Research 
              </li>
              <li  onClick={(e)=>{
                setShow(false)
                router.push('/training')
              }} className="cursor-pointer px-3 list-none"> 
                  Training 
              </li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

   // {isLoadTabs && isLoadTabs.map((item,index) => (
            //   <li key={index} className="relative">
            //     <Link href= {item.path}>
            //       <a className="text-[1.25rem] font-serif font-normal bg-transparent rounded-full text-slate-200 btn">
            //         {item.name}
            //       </a>
            //     </Link>  
            //     {router.pathname === item.path && <motion.div
            //       className=" absolute bottom-[-20%] left-0 right-0 h-[0.3rem] bg-red-600 z-[1] "
            //       transition={{ duration: 0.2 }}
            //       initial={{ width: "0%" }}
            //       animate={{ width: router.pathname === item.path ? "100%" : "0%" }}
            //     />}
            //   </li>
            // ))}  