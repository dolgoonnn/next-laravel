import { useState } from "react";
import Image from 'next/image'

export default function Roadmap(props) {
  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center roadmap py-[10px]">
        <div className="relative w-14 sm:w-32">
            <div className="absolute inset-0 flex w-full h-full items-center ml-2 font-monset text-xl sm:text-[23px] text-white section-roadmap__item-number" ><p className="heading-blue">{props.cal}</p></div>
        </div>
        <div className="text-left col-start-3 col-end-13 space-y-1 sm:space-y-3 section-roadmap__item-content">
            <p className="text-xs sm:text-[28px] font-monset font-bold">{props.name}</p>
            <p className="text-[11px] sm:text-[19px] font-monset sm:leading-[170%] opacity-70">{props.desc}</p>
        </div>
    </div>
  );
}
