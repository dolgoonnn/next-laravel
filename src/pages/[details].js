import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import Tabs from "../components/tabs";
import Link from 'next/link';
import NFT from "../components/nft";
import Footer from "../components/footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { EffectCards, Pagination, Navigation } from "swiper";
import Header from '../components/header';

export default function Details() {
  return (
    <div className="bg-pbackground">
      <Header/>
      <section id="collection" className="bg-collection bg-cover bg-center pb-10">
        <div className="flex flex-col mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:my-24 lg:my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:text-left row-start-2 mt-8 sm:row-start-auto lg:col-span-1">
                <div className="lg:col-span-2 lg:row-span-2 lg:self-start lg:items-center">
                <div className="flex flex-row gap-4">
                      <div className="hidden w-4/12 sm:block">

                        </div>
                        <div className="relative w-full">
                        <div id="headlessui-tabs-panel-30" role="tabpanel" aria-labelledby="headlessui-tabs-tab-27" tabIndex="0">
                            <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                                <Image alt="gif.gif" sizes="100vw" width="152px" height="152px" src="/images/2ebryf2lhw5i4nvdnk87a.jpeg"></Image>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:text-left row-start-1 sm:row-start-auto lg:col-span-1">
                <h2 className="text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2 pt-10">
                <p className="text-default font-bebas text-[50px] sm:text-[60px] leading-none text-center sm:text-left uppercase">Yoton Mafia</p>
                </h2>
                <div className="font-normal mt-10 font-gordita text-center sm:text-left">
                    <div className="bcm-white font-gordita text-bc-A1A text-[17px] leading-8">
                        <p>
                            <strong>Уламжлалт бизнесийн хэлбэр, хөрөнгө оруулалт, өмчлөл, засаглал, цалин урамшууллын тогтолцоо</strong> нь орчин цагийн залуусын үзэл баримтлал, итгэл үнэмшил, ажил амьдралын хэв маягтай зохицохгүй байгаа бөгөөд орвонгоороо өөрчлөгдөх цаг нь ирж байна.
                            <br/>
                            <br/>
                        </p>
                    </div>
                </div>
                <div>
                  <p className="text-[10px] sm:text-base font-bold text-primary">2,990,000 ₮</p>
                </div>
                <div className="flex w-full justify-center sm:justify-start space-x-8 mt-8">
                  <div className="group">
                    <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer">
                      <Link target="_blank" href="/2">
                        <a className="relative btn-bg-gradient text-xs flex items-center justify-center px-10 py-4 uppercase font-semibold rounded-md tracking-widest text-white" >Худалдаж авах</a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nft" className="overflow-hidden">
        <div className="max-w-sm sm:max-w-7xl mx-auto py-12 px-4 text-center sm:px-0 lg:py-24">
          <h2 className="text-center text-6xl font-bold font-bebas sm:text-[110px] leading-[100px] uppercase shadow-title text-white">YMC 99 NFT list</h2>
          <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl mt-8 overflow-x-scroll">
            <NFT href="1" src='/images/1kghq0vfep6goqatntfgk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/2ebryf2lhw5i4nvdnk87a.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/3nn1jyx137b7er1g99pat.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/4frfbtdgbc8iiapomuhbk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/5wjo5713ceyj8tps5nhta.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/1kghq0vfep6goqatntfgk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/2ebryf2lhw5i4nvdnk87a.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/3nn1jyx137b7er1g99pat.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/4frfbtdgbc8iiapomuhbk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/5wjo5713ceyj8tps5nhta.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/1kghq0vfep6goqatntfgk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/2ebryf2lhw5i4nvdnk87a.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/3nn1jyx137b7er1g99pat.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
            <NFT href="1" src='/images/4frfbtdgbc8iiapomuhbk.jpeg' name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
          </ul>
        </div>
      </section>
    <Footer/>
  </div>
  )
}
