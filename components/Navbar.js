
import React, { useState,useEffect } from "react"; 
import Link from "next/link";
import { useRouter } from "next/router"; 
import Image from "next/image";
import { motion } from "framer-motion";
const Navbar = () => {
  const router = useRouter(); 
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isLoadTabs, setLoadTabs] = useState(null);
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

  let filterTimeout

  const DidScroll = query => {
    clearTimeout(filterTimeout)
    if (query === "down") return setShow(false)
  
    filterTimeout = setTimeout(() => {
      console.log('====>', query)
      setShow(true)
      
    }, 500)
  }


  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        console.log("scroll down")
        setShow(false)
      } else { // if scroll up show the navbar
        console.log("scroll up")  
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    setLoadTabs(tabs)
  }, [])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={" min-h-8vh sticky top-0 z-50 -translate-y-full transition-transform delay-300 duration-500 ease-out"  + (show ? " translate-y-0" : " -translate-y-full ")}>
      <div className=" pt-8 flex items-center justify-between max-w-full px-5 py-3 mx-auto bg-black">
        {/* Left */}
        <h1
          onClick={(e) => {
            e.preventDefault()
            router.push("/");
          }}
          className="text-lg ml-8 font-semibold text-white cursor-pointer">
            <Image width={200} height={35} src={"/img/RedDragon_logo_260x39.png"} alt="Red Dragon Logo"/>
        </h1> 
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <ul className="flex flex-grow-1 flex-shrink-1 p-0 pr-20 gap-12" style={{flexBasis:"40remm"}}>
            {isLoadTabs && isLoadTabs.map((item,index) => (
              <li key={index} className="relative">
                <Link href= {item.path}>
                  <a className="text-2xl font-serif font-normal bg-transparent rounded-full text-slate-200 btn">
                    {item.name}
                  </a>
                </Link> 
                
                {router.pathname === item.path && <motion.div
                  className=" absolute bottom-[0px] left-0 right-0 h-[2px] bg-red-600 z-[1] "
                  transition={{ duration: 0.2 }}
                  initial={{ width: "0%" }}
                  animate={{ width: router.pathname === item.path ? "100%" : "0%" }}
                />}
              </li>
            ))}  
          </ul> 
 

        </div>
      </div>
    </div>
  );
};

export default Navbar;
