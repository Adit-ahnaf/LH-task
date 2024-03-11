import Catalog from "@/public/icons/catalog.svg";
import Circooles from "@/public/icons/circooles.svg";
import CircoolesYellow from "@/public/icons/circoolesyellow.svg";
import Gfore from "@/public/icons/gfore.svg";
import Layers from "@/public/icons/layers.svg";
import Quotient from "@/public/icons/quotient.svg";
import Sis from "@/public/icons/sis.svg";
import SisPurple from "@/public/icons/sispurple.svg";
import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="bg-[#F9FAFB] py-[34px] sm:py-[60px] ">
      <div className="max-w-[85%]  m-auto">
        <h1 className="text-[#0A142F] text-center font-bold text-[33px] sm:text-[50px] scrn-900:text-[55px] ">
          Our Sponsor
        </h1>
        <p className="text-center text-[14px] sm:text-[18px] text-[#667085] my-[30px]">
          🥇 Gold Sponsor
        </p>
        <div className="flex items-center justify-center flex-wrap gap-[50px]  mb-[50px]">
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Layers} />
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Sis} />
        </div>

        <p className="text-center text-[14px] sm:text-[18px] text-[#667085] mb-[30px] ">
          🥈Silver Sponsors
        </p>
        <div className="flex flex-wrap justify-center gap-[50px] mb-[50px]">
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Circooles} />
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Catalog} />
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Gfore} />
        </div>

        <p className="text-center text-[14px] sm:text-[18px] text-[#667085] mb-[30px]">
          🥉Bronze Sponsors
        </p>
        <div className="flex flex-wrap justify-center gap-[50px]">
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={SisPurple} />
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Quotient} />
          <Image alt="img" className="w-[150px] sm:w-[200px]" src={Layers} />
          <Image
            alt="img"
            className="w-[150px] sm:w-[200px]"
            src={CircoolesYellow}
          />
        </div>
      </div>
    </div>
  );
}
