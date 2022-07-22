import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";

export default function NFT(props) {
  return (
    <li className="text-left sm:text-center w-full xl:text-left">
        <div className="space-y-3 xl:space-y-4">
            <div className="relative team w-full">
                {props.src &&(
                    <Image className="rounded-[20px] overflow-hidden" alt={props.src} src={props.src} width="413" height="413"></Image>
                )}
            </div>
            <div className="justify-between">
                <div className="font-medium text-lg sm:leading-6 sm:space-y-1">
                    <h3 className="text-white uppercase text-xs sm:text-xl font-bold">{props.name}</h3>
                    <p className="text-[10px] sm:text-lg font-bold text-primary">{props.price}</p>
                    <p className="text-white text-[9px] sm:text-base font-semibold pb-1">{props.status}</p>
                    <div className="group">
                        <div className="grow-0 justify-center btn-border-white rounded-md mr-0 p-0.5 cursor-pointer text-white">
                            <Link target="_blank" href="/2">
                                <a className="relative text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest bg-black">Худалдаж авах</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  );
}
