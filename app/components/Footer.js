import Image from "next/image";
import LogoWhite from "../../public/icons/Reactwhite.svg";
import Dribble from "../../public/icons/dribble.svg";
import Facebook from "../../public/icons/fb.svg";
import LinkdIn from "../../public/icons/linkdin.svg";
import Twitter from "../../public/icons/twitter.svg";
export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col py-[50px] gap-5 items-center">
        <Image alt="ftimg" className="w-[100px] pb-[30px]" src={LogoWhite} />
        <div className="flex items-center gap-4">
          <Image alt="ftimg" className="w-[18px]" src={Twitter} />
          <Image alt="ftimg" className="w-[18px]" src={LinkdIn} />
          <Image alt="ftimg" className="w-[18px]" src={Facebook} />
          <Image alt="ftimg" className="w-[18px]" src={Dribble} />
        </div>
        <p className="text-white">© 2023 Lemonhive. All rights reserved.</p>
      </div>
    </div>
  );
}
