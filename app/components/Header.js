import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/icons/React.svg';
import Menu from '../../public/icons/hamburger.svg';

export default function  Header({handleSideBar}) {
    return (
        <>
           {/* <div className=" before:-z-[1] before:h-[600px] before:w-full  before:absolute before:bg-[url('../public/image/Backgroundelements.png')] before:bg-no-repeat before:bg-cover "></div> */}
          <div className=" max-w-[90%] scrn-900:max-w-[70%] m-auto ">
            <div className="flex items-center justify-between gap-5 p-5">
              <Link href="/">
                <Image alt="img" src={Logo} />
              </Link>
              <div className="hidden scrn-900:block">
                <Link className="text-[#0A142F] mr-7 " href="">
                  About Us
                </Link>
                <Link className="text-[#0A142F] mr-7" href="">
                  What We do
                </Link>
                <Link className="text-[#0A142F] mr-7" href="">
                  Our work
                </Link>
                <Link className="text-[#0A142F] mr-7" href="">
                  Blog
                </Link>
                <Link className="text-[#0A142F] mr-7" href="">
                  Say hi
                </Link>
              </div>

              <Image className="block scrn-900:hidden cursor-pointer" onClick={handleSideBar} alt="img" src={Menu} />
              <div className="hidden scrn-900:block"></div>
            </div>
          </div>
        </>
    )
}