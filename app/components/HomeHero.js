import ArrowUp from "@/public/icons/arrow-up-right.svg";
import HeroLeft from "@/public/image/heroleft.png";
import HeroRight from "@/public/image/heroright.png";
import Image from "next/image";
import HomeHeroResponsive from "./HomeHeroResponsive";
export default function HomeHero() {
  return (
    <>
      <div className=" before:-top-3 before:-z-[1] before:h-[170vh] before:w-full  before:absolute before:bg-[url('../public/image/Backgroundelements.png')] before:bg-no-repeat before:bg-cover "></div>
      <div className=" max-w-[85%]  m-auto">
        <div className=" hidden scrn-900:grid relative  grid-cols-[1fr_1fr] gap-[45px] pt-[112px] before:-right-[30px] before:lg:right-[57px]  before:top-[85px]  before:-z-[1] before:h-[100%] before:w-[69%] before:absolute before:bg-[url('../public/image/Curve.png')] before:bg-no-repeat before:bg-cover ">
          <div>
            <h1 className="mb-[40px] leading-[0.9] text-right text-[90px] lg:text-[64px] scrn-1600:text-[126px] text-primary font-bold">
              <span className=" before:-left-[36px] before:-top-[30px] before:bg-cover before:bg-no-repeat relative before:h-[60px] before:w-[60px] before:absolute before:bg-[url('../public/image/topline.png')]">
                React
              </span>
              <br /> Conference
            </h1>

            <div className="grid grid-cols-2  gap-[50px]">
              <div className="relative before:-right-[72px] before:-bottom-[72px] before:h-[155px] before:w-[160px] before:-z-[1] before:bg-cover before:absolute before:bg-no-repeat before:bg-[url('../public/icons/roundball.svg')] ">
                <Image src={HeroLeft} alt="hero-left" />
              </div>
              <div>
                <p className="text-[#000000]">
                  Lorem uis diam turpis quam id fermentum.In quis diam turpis
                  quam id fermentum..id fermentum.In quis diam turpis quam id
                  fermentum.
                </p>
                <button className=" mt-[50px] text-[#0A142F] bg-btn-primary py-[10px] px-[40px] rounded-[22px] gap-3 flex items-center">
                  Buy Tickets{" "}
                  <span>
                    <Image
                      className="h-[13px] w-[13px]"
                      alt="arrow-up"
                      src={ArrowUp}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className=" before:-bottom-[3%] before:-left-[6%] before:absolute before:bg-[url('../public/image/Star.png')] before:w-[80px] before:h-[80px]  before:bg-no-repeat before:bg-cover"></div>
            <Image alt="hero-right" className="pt-[118px]" src={HeroRight} />
          </div>
        </div>

        <HomeHeroResponsive />
      </div>
    </>
  );
}
