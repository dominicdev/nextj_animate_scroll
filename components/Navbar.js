
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
 
  
  useEffect(() => {
    setLoadTabs(tabs)
  }, [])


 

  return (
    <div className={" min-h-8vh "}>
      <div className=" py-6 px-5  flex items-center justify-between max-w-full  mx-auto bg-black">
        {/* Left */}
        <h1
          onClick={(e) => {
            e.preventDefault()
            router.push("/");
          }}
          className="text-lg ml-8 font-semibold text-white cursor-pointer">
            <Image width={200} height={50} src={"/img/RedDragon_logo_260x39.png"} alt="Red Dragon Logo"/>
        </h1> 
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <ul className="flex flex-grow-1 flex-shrink-1 p-0 pr-20 gap-12" style={{flexBasis:"40remm"}}>
            {isLoadTabs && isLoadTabs.map((item,index) => (
              <li key={index} className="relative">
                <Link href= {item.path}>
                  <a className="text-[1.4rem] font-serif font-normal bg-transparent rounded-full text-slate-200 btn">
                    {item.name}
                  </a>
                </Link> 
                
                {router.pathname === item.path && <motion.div
                  className=" absolute bottom-[-20%] left-0 right-0 h-[0.3rem] bg-red-600 z-[1] "
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
