
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { FaArrowCircleRight } from 'react-icons/fa';

const FirstTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
        <div className="sm:text-left row-start-1 sm:row-start-auto lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2 pt-10 sm:pt-20">
            <p className="text-default font-bebas text-[50px] sm:text-[60px] leading-none text-center sm:text-left uppercase">IHC Club гэж юу бэ?</p>
            </h2>
            <div className="font-normal mt-10 font-gordita text-center sm:text-left">
                <div className="bcm-white font-gordita text-bc-A1A text-[17px] leading-8">
                    <p>
                        Бид технологи, бизнес, хөрөнгө оруулалтын салбарын түүчээлэгч <strong>99 залуусын хамтаар IHC Club-ийг үүсгэж байна.</strong> Энэхүү хамтрал нь Вэб 3.0 буюу Шинэ интернэтийн бидэнд олгож буй боломжийг ашиглан "IHC DAO” платформыг хөгжүүлж, хамтран өмчилж ажилуулах юм.
                        <br/>
                        <br/>
                        <strong>IHC нь анхлан үүсгэн байгуулагч 99 партнер-тай байх бөгөөд тус бүрдээ нэг NFT-ээр баталгаажих юм.</strong> Уг NFT  болон бидний хөгжүүлэх платформ нь Ethereum суурьтай Polygon блокчэйн дээр хөгжүүлэгдэнэ.
                    </p>
                </div>
            </div>
            <div className="flex w-full justify-center sm:justify-start space-x-8 mt-8">
                <div className="group">
                    <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer ">
                        <Link rel="noreferrer" href="https://opensea.io/collection/">
                            <a target="_blank" className="relative text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 group-hover:bg-white uppercase font-semibold rounded-md tracking-widest bg-pgreen text-white hover:text-black" >view on opensea
                            <span className='ml-3'>
                            <FaArrowCircleRight/>
                            </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm:text-left row-start-2 mt-8 sm:row-start-auto lg:col-span-1">
            <div className="lg:col-span-2 lg:row-span-2 lg:self-start lg:items-center">
                <div className="flex flex-row gap-4">

                    <div className="relative w-full">
                        <div id="headlessui-tabs-panel-34" role="tabpanel" aria-labelledby="headlessui-tabs-tab-33" tabIndex={0}>
                            <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                            <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '100% 0px 0px'}}></span>
                            <img alt="gif.gif" sizes="100vw" srcSet="/images/?w=640&amp,q=75 640w, /images/exz.gif?w=750&amp,q=75 750w, /images/exz.gif?w=828&amp,q=75 828w, /images/exz.gif?w=1080&amp,q=75 1080w, /images/exz.gif?w=1200&amp,q=75 1200w, /images/exz.gif?w=1920&amp,q=75 1920w, /images/exz.gif?w=2048&amp,q=75 2048w, /images/exz.gif?w=3840&amp,q=75 3840w" src="/images/exz.gif?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain'}}/>
                            <noscript></noscript>
                            </span>
                        </div>
                    </div>
                    <div className="hidden w-4/12 sm:block">
                        <div className="grid grid-row-3 gap-y-2" role="tablist" aria-orientation="horizontal">
                            <button className="relative h-full bg-white flex items-center justify-center text-sm font-medium uppercase text-gray cursor-pointer hover:bg-black focus:outline-none focus:ring-0" id="headlessui-tabs-tab-33" role="tab" type="button" aria-selected="true" tabIndex={0} aria-controls="headlessui-tabs-panel-34">
                            <span className="sr-only">gif.gif</span>
                            <span className="relative w-full">
                                <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                                    <Image alt="gif.gif" sizes="100vw" width="152px" height="152px" src="/images/exz.gif" decoding="async" data-nimg="responsive" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                                </span>
                            </span>
                            <span className="bg-opacity-50 absolute inset-0 pointer-events-none" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default FirstTab;