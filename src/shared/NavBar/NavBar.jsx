import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "@/assets/catwif_logo.png";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  // Determine which section is currently in view based on scroll position
  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPosition = window.scrollY;

      const homeSection = document.getElementById("home");
      const aboutTokenSection = document.getElementById("aboutToken");
      const tokenomicsSection = document.getElementById("tokenomics");
      const buySection = document.getElementById("buy");
      const roadmapSection = document.getElementById("roadmap");

      if (
        homeSection.offsetTop <= scrollPosition &&
        homeSection.offsetTop + homeSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("home");
      } else if (
        aboutTokenSection.offsetTop <= scrollPosition &&
        aboutTokenSection.offsetTop + aboutTokenSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("aboutToken");
      } else if (
        tokenomicsSection.offsetTop <= scrollPosition &&
        tokenomicsSection.offsetTop + tokenomicsSection.offsetHeight >
        scrollPosition
      ) {
        setActiveLink("tokenomics");
      } else if (
        buySection.offsetTop <= scrollPosition &&
        buySection.offsetTop + buySection.offsetHeight > scrollPosition
      ) {
        setActiveLink("buy");
      } else if (
        roadmapSection.offsetTop <= scrollPosition &&
        roadmapSection.offsetTop + roadmapSection.offsetHeight > scrollPosition
      ) {
        setActiveLink("roadmap");
      }
    };

    window.addEventListener("scroll", changeActiveLink);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeActiveLink);
    };
  }, []);


  // Change color of navbar based on scroll position
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? 'sticky top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-5'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className="cursor-pointer flex items-center">
              <img src={logo} alt="Logo" className="w-[50px] mr-3 ml-5 md:ml-0" />
              <p className="text-[24px] textStroke">Cat</p>
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#DF355F]" /> : <IoMenu className="text-[#DF355F]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[75px] opacity-100 bg-[#e1b9b4] z-10' : 'top-[-490px]'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`2xl:text-[18px] font-inter ml-5 md:ml-4 uppercase cursor-pointer ${activeLink === "home" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={0} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer ${activeLink === "tokenomics" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "roadmap" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <li>
                <Link to="partners" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "partners" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("partners")}>Partners</Link>
              </li>

              <li>
                <Link to="whitepaper" smooth={true} offset={10} duration={600} className={`2xl:text-[18px] font-inter duration-300 uppercase cursor-pointer  ${activeLink === "whitepaper" ? 'text-[#DF355F]' : 'text-[#3E3E3E] hover:text-[#DF355F] duration-200'}`} onClick={() => setActiveLink("whitepaper")}>Whitepaper</Link>
              </li>

              <div className="block md:hidden">
                <Link to="home" smooth={true} offset={-30} duration={600}>
                  <Button className="bg-[#DF355F] uppercase text-[16px] font-inter font-normal">Join catwifhat</Button>
                </Link>
              </div>
            </ul>

            <div className="md:block hidden">
              <Link to="home" smooth={true} offset={-30} duration={600}>
                <Button className="bg-[#DF355F] uppercase text-[16px] font-inter font-normal navButton">Join catwifhat</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
