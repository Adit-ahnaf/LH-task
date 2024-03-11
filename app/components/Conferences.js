import Marker from "@/public/icons/Marker.svg";
import Strom from "@/public/icons/storm.svg";
import Image from "next/image";
import Link from "next/link";
import useData from "../hook/useData";

export default function Conferences() {
    const [data] = useData();
  return (
    <div className="max-w-[90%] xl:max-w-[70%] m-auto mt-[50px] sm:mt-[80px] lg:mt-[150px] mb-[30px] sm:mb-[80px]">
      <h1 className="text-[#0A142F] text-[33px] sm:text-[50px] text-center font-bold mb-[16px] sm:mb-[30px]">
        Conferences
      </h1>
      <div className="hidden sm:block">
        {data?.map((item, index) => (
            


          <div key={index} className=" group flex items-center gap-[25px]">
            <Link
              href={`/conference/${item.id}`}
              className={` ${
                index % 2 === 0 ? "order-1" : "order-3"
              } w-[50%] transition-all delay-75 ease-in hover:shadow-lg cursor-pointer group rounded-[10px] shadow-md overflow-hidden`}
            >
              <div className="transition-all delay-75 ease-in  h-[5px] w-full bg-[#CDCDCD] group-hover:bg-btn-primary "></div>
              <div className="flex items-center gap-3 p-[30px]">
                <Image src={Marker} alt="image" />
                <div>
                  <h2 className="text-[#111D5E]">{item.name}</h2>
                  <p className="text-[#617187]">{item.description}</p>
                </div>
              </div>
            </Link>

            <div
              className={` ${
                index % 2 === 0 ? "order-2" : "order-2"
              } flex flex-col items-center justify-center`}
            >
              <div className=" group-hover:bg-[#FFF9EB] group-hover:border-btn-primary  p-[20px] rounded-full bg-[#F9FAFB] border border-[#CDCDCD]">
                <Image className="" alt="strom" src={Strom} />
              </div>
              <div className="w-[3px] h-[108px] group-hover:bg-btn-primary bg-[#CDCDCD]"></div>
            </div>
            <div
              className={` ${
                index % 2 === 0 ? "order-3 text-left " : "order-1 text-right "
              } w-[50%]`}
            >
              <p className="text-[#617187] ">02 September, 2023</p>
            </div>
          </div>
        ))}
      </div>

      {/* responsive */}
      {data?.map((item, index) => (
        <div key={index} className=" group  flex sm:hidden items-center gap-3">
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className=" p-[10px] rounded-full group-hover:bg-[#FFF9EB] group-hover:border-btn-primary bg-[#F9FAFB] border border-[#CDCDCD]">
                <Image alt="strom" src={Strom} />
              </div>
              <div className="w-[3px] h-[108px] group-hover:bg-btn-primary  bg-[#CDCDCD]"></div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-[#617187] mb-[10px] ">02 September, 2023</p>
            <Link href={`/conference/${item.id}`}>
              <div className=" mb-[30px] transition-all delay-75 ease-in hover:shadow-lg cursor-pointer group rounded-[10px] shadow-md overflow-hidden">
                <div className="transition-all delay-75 ease-in  h-[5px] w-full bg-[#CDCDCD] group-hover:bg-btn-primary "></div>
                <div className="flex items-center gap-3 p-[18px]">
                  <Image alt="marker" src={Marker} />
                  <div>
                    <h2 className="text-[#111D5E]">{item.name}</h2>
                    <p className="text-[#617187] text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
