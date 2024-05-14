import bannerBg from "@/assets/Final wireframe ui design.png";
import bannerimgShap from "@/assets/Group 1171275220.png";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import Container from '../Container/Container';
import { Button } from "@/components/ui/button";

const Banner = () => {


  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('0x4444c12f49c474b24b090d7322025b4b9961baed').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };


  return (
    <div className="mb-[50px] md:mb-[70px] xl:mb-[80px] 2xl:mb-[116px]">
      <img src={bannerBg} alt="Image" className="md:h-[500px] lg:h-[550px] xl:h-auto 2xl:h-screen w-full hidden md:block" id="home" />

      <div className="mt-24 md:-mt-[430px] lg:-mt-[465px] xl:-mt-[600px] 2xl:-mt-[810px]">
        <Container>
          <div className="flex justify-center items-center">

            {/* banner text section  */}
            <div className="w-[50%]">
              <p className="text-[#FFF4E7] font-gagalin xl:text-[90px] lg:leading-[90px] lg:tracking-[2.7px]">Welcome to</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 xl:text-[140px] lg:leading-[150px] lg:tracking-[3.8px]">snax coin</p>
              <p className="text-[#CED9D7] font-gagalin lg:text-[28px] lg:leading-[44.8px] lg:tracking-[1.12px]">the crypto sensation inspired by the tale of <br /> a savvy pup!"</p>


              {/* Copied text */}
              <div className='flex justify-center md:justify-start mt-10'>
                <div className="flex justify-center items-center text-[18px] border-[1px] border-[#2da091] bg-gradient-to-l to-[#288B7D] from-[#497953] p-3 rounded-md">
                  <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                  <button onClick={() => { setCopied(!copied); copyLink() }}>
                    {
                      copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" /> :
                        <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#fff]" />
                    }
                  </button>
                </div>
              </div>



              <Button className="mt-[50px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] uppercase text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 px-[50px] rounded-[10px] duration-300">CONNECT</Button>



            </div>


            {/* banner time section  */}
            <div className="w-[50%] ml-[150px]">
              <img className="w-[65%]" src={bannerimgShap} alt="image" />

            </div>


          </div>

        </Container>
      </div>
    </div>
  );
};

export default Banner;
