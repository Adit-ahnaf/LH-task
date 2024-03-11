import ArrowUp from "@/public/icons/arrow-up-right.svg";
import HeroLeft from "@/public/image/heroleft.png";
import HeroRight from "@/public/image/heroright.png";
import Image from "next/image";
export default function HomeHeroResponsive(){
    return (
        <div className=" scrn-900:hidden pt-[75px] sm:pt-[100px]">
        <div className=" before:top-[133px] before:right-[14px] before:h-[20%] before:w-[400px] sm:before:w-[727px] before:-z-[1]   before:absolute before:bg-[url('../public/image/curveres.png')] before:bg-no-repeat before:bg-cover"></div>
        <h1 className=" mb-[40px] leading-[0.9] text-right text-[50px] sm:text-[77px] text-primary font-bold">
          <span className=" before:-left-[36px] before:-top-[45px] before:bg-cover before:bg-no-repeat relative before:h-[60px] before:w-[60px] before:absolute before:bg-[url('../public/image/topline.png')]">
            React
          </span>
          <br /> Conference
        </h1>

        <p className=" text-center text-[#000000]">
          Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
          fermentum..id fermentum.In quis diam turpis quam id fermentum.
        </p>

        <button className=" m-auto mt-[50px] text-[#0A142F] bg-btn-primary py-[10px] px-[40px] rounded-[22px] gap-3 flex items-center">
          Buy Tickets
          <span>
            <Image
              alt="arrow-up"
              className="h-[13px] w-[13px]"
              src={ArrowUp}
            />
          </span>
        </button>

        <div className="relative">
          <div className=" before:-bottom-[3%] before:-right-[27px] before:absolute before:bg-[url('../public/image/Star.png')] before:w-[80px] before:h-[80px]  before:bg-no-repeat before:bg-cover"></div>
          <Image
            alt="hero-right"
            className="pt-[75px] w-full"
            src={HeroRight}
          />
        </div>
        <div className=" relative mt-[50px] sm:mt-[100px]">
          <div className=" before:-z-[1] before:h-full before:w-full before:-left-[81px] before:top-[21px] before:absolute before:bg-[url('../public/icons/blue.svg')]   before:bg-no-repeat before:bg-cover"></div>
          <div className=" before:h-[50px] before:left-[37%] before:top-[27%] before:right-0  before:w-[220px]  before:absolute before:bg-[url('../public/icons/dots.svg')]   before:bg-no-repeat before:bg-contain"></div>

          <div className="grid grid-cols-2">
            <Image alt="heroleft" src={HeroLeft} />
            <div></div>
          </div>
        </div>
      </div>
    )
}