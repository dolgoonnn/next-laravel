import { useState } from "react";
import Image from 'next/image'

export default function Footer(props) {
  return (
    <footer className="flex flex-col max-w-7xl w-full mx-auto py-12 divide-y-2 divide-solid divide-white divide-opacity-20">

        <section id="joinus" className="bg-bottom bg-no-repeat pb-32 sm:pb-0 mt-8 overflow-hidden">
          <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-0">
            {/* <div className="absolute bg-joinus1 bg-no-repeat bg-contain w-[350px] h-[229px] sm:w-[614px] sm:h-[337px] -right-10 top-20 sm:right-56 sm:bottom-0"></div> */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center sm:h-[228px]">
                <div className="basis-5/12 flex flex-col items-start space-y-2 pt-4 text-center sm:text-right text-white">
                    <div className="text-white mx-auto sm:mx-0 font-gordita font-normal text-[10px] sm:text-[13px] sm:mb-4">Smart Contract Address:</div>
                    <div className="text-bc-808 mx-auto sm:mx-0 font-gordita font-normal text-[10px] sm:text-[13px]">Party: 0x5DF340b5D1618c543aC81837dA1C2d2B17b3B5d8
                    </div>
                    <div className="text-bc-808 mx-auto sm:mx-0 font-gordita font-normal text-[10px] sm:text-[13px]">Golden Guest: 0x3Ad65a44afA56FfFCFDa455964fb872ecD10d30D
                    </div>
                    <div className="text-bc-808 mx-auto sm:mx-0 font-gordita font-normal text-[10px] sm:text-[13px]">Cyborg: 0x04fB03a5BAc8eAC522891E8dCb003694d75827B3
                    </div>
                </div>
                <div className="my-auto rounded-md mr-0 p-0.5 cursor-pointer">
                    <Image className="" width="250px" height="250px" src='/images/hero_866d00b59a_copy.png'/>
                </div>
            </div>
          </div>
        </section>
        <div className="pt-3">
        <div className="flex flex-col-reverse mx-auto items-center sm:flex-row">
            <div className="basis-5/12 flex flex-col items-start justify-center text-xs sm:text-[13px] font-gordita font-normal text-primary">Copyright © 2022 IHC. All Rights Reserved</div>
            <nav className="basis-2/12 flex flex-wrap justify-center" aria-label="Footer">
            </nav>
            <div className="basis-5/12 flex flex-col items-end justify-center">
                <div className="text-white font-gordita font-normal text-xs sm:text-[13px] text-right">contact@ihc.club</div>
            </div>
        </div>

        </div>
    </footer>
  );
}
