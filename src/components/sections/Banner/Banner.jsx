import bannerBg from "@/assets/Final wireframe ui design.png";
import Container from '../Container/Container';
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="mb-[50px] md:mb-[70px] xl:mb-[80px] 2xl:mb-[116px]">
      <img src={bannerBg} alt="Image" className="md:h-[500px] lg:h-[550px] xl:h-auto 2xl:h-screen w-full hidden md:block" id="home" />

      <div className="mt-24 md:-mt-[430px] lg:-mt-[465px] xl:-mt-[600px] 2xl:-mt-[810px]">
        <Container>
          <div>

            {/* banner text section  */}
            <div>
              <p className="text-[#FFF4E7] font-gagalin xl:text-[90px] lg:leading-[90px] lg:tracking-[2.7px]">Welcome to</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 xl:text-[140px] lg:leading-[150px] lg:tracking-[4.2px]">snax coin</p>
            </div>

          </div>

        </Container>
      </div>
    </div>
  );
};

export default Banner;
