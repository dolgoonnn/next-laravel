import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";

var NumberFormat = require('react-number-format').default

const NFTdetailsoon = ({ ndata }) => {

  return (
    <li className="text-left sm:text-center w-full xl:text-left">
        <div className="space-y-3 xl:space-y-4">
            <div className="relative team w-full">
                <img className="rounded-[20px] overflow-hidden" src="/images/yoton_soon.png" alt="NFT picture"/>
            </div>
            <div className="justify-between">
                <div className="font-medium text-lg sm:leading-6 sm:space-y-1">
                    <h3 className="text-white uppercase text-xs sm:text-xl font-bold">Coming soon</h3>
                    <p className="text-[10px] sm:text-lg font-bold text-primary">
                    <NumberFormat
                        value="6.000.000"
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={(value, props) => (
                                <>6.000.000 ₮</>
                        )}
                    />
                    </p>
                    <p className="text-white text-[9px] sm:text-base font-semibold pb-1">

                    </p>
                    <div className="group">
                        <div className="grow-0 justify-center btn-border-white rounded-md mr-0 p-0.5 cursor-pointer text-white">
                            <a className="relative text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest bg-black">
                            Coming soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default NFTdetailsoon