import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "@/assets/Group.png";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky  bg-gradient-to-r from-[#174843] to-[#174843] border-b border-[#174843] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 shadow-sm border-b border-[#174843] navBg bg-gradient-to-r from-[#174843] to-[#174843] duration-300'}>
      <div className="max-w-[1620px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-5'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className="cursor-pointer">
              <img src={logo} alt="Logo" className="w-auto mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#f1f8179d]" /> : <IoMenu className="text-[#f1f8179d]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[75px] opacity-100 bg-[#14262b] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "home" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="aboutToken" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "aboutToken" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("aboutToken")}>About</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-115} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "tokenomics" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("tokenomics")}>tokenomics</Link>
              </li>

              <li>
                <Link to="buy" smooth={true} offset={-120} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "buy" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("buy")}>How to buy</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "roadmap" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <div className="block md:hidden">
                <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] uppercase text-[16px] font-normal rounded-[10px]">Buy Now</Button>
              </div>
            </ul>

            <div className="md:block hidden rounded-[10px]">
              <Button className="bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] uppercase text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 px-[50px] rounded-[10px] duration-300">CONNECT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default NavBar;
