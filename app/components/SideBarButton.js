"use client";
import DropDwn from "@/public/icons/dropdown.svg";
import Image from "next/image";
export default function SideBarButton({ name, handleSideMenu }) {
  const capitalizeWord = () => {
    const word = name;
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  };
  return (
    <>
      <button
        onClick={handleSideMenu}
        className=" focus:bg-btn-primary w-full mb-[5px] hover:bg-btn-primary flex items-center gap-5 border p-[10px] rounded-[10px] border-[#D9D9D980]"
      >
        <div className="bg-[#FFFCF6] p-[14px] scrn-900:p-[20px]">
          <Image alt="img" src={DropDwn}  />
        </div>
        <p className="text-[#0A142F] font-bold text-[18px] ">
          {capitalizeWord()}
        </p>
      </button>
    </>
  );
}
