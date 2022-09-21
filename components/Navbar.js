
import { useState,useEffect } from "react"; 
import Link from "next/link";
import { useRouter } from "next/router"; 
const Navbar = () => {
  const router = useRouter(); 
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isLoadTabs, setLoadTabs] = useState(null);
  let tabs = [
    {
      path: "/" ,
      name: "Home"
    }, {
      path: "/",
      name: "Training"
    } , {
      path: "/",
      name: "Profile"
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
    <div className={"sticky top-0 z-50 -translate-y-full transition-transform delay-300 duration-500 ease-out"  + (show ? " translate-y-0" : " -translate-y-full ")}>
      <div className=" flex items-center justify-between max-w-full px-5 py-3 mx-auto bg-black">
        {/* Left */}
        <h1
          onClick={(e) => {
            e.preventDefault()
            router.push("/");
          }}
          className="text-lg font-semibold text-white cursor-pointer">
          RDAI
        </h1> 
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <ul className="flex gap-5">
            {isLoadTabs && isLoadTabs.map((item,index) => (
              <li key={index} className="relative">
                <Link href= {item.path}>
                  <a className="text-base font-semibold bg-transparent rounded-full text-slate-200 btn">
                    {item.name}
                  </a>
                </Link> 
              </li>
            ))}  
          </ul> 
 

        </div>
      </div>
    </div>
  );
};

export default Navbar;
