import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import Tabs from "@/components/tabs"
import Accordion from "@/components/accordion";
import NFTlist from "@/components/NFTlist";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Roadmap from "@/components/roadmap";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <>
    <Head>
        <title>YOTON MEMBERSHIP CLUB</title>
    </Head>
    <div className="bg-black">
      <Header />
      <div className="flex flex-col">
        <main className="mx-auto max-w-7xl w-full px-4 sm:px-0 pt-5">
          <div className="border-b border-t border-white pt-7 pb-7">
            <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
              <Image width="1280px" height="140px" src="/images/Yoton.svg" alt="Yoton"/>
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl mt-6">
            <div className="device-layout-component">
              <span style={{boxSizing: 'border-box', display:'block', overflow:'hidden', width:'initial', height:'initial', background:'none', opacity: 1, border:'0px', margin:'0px', padding:'0px', position:'relative'}}>
                <div className="bg-main"></div>
                <noscript></noscript>
              </span>
            </div>
          </div>
        </main>
        <section id="welcome" className="mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:my-24 lg:my-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center">
            <div className="sm:text-left lg:col-span-1">
              <h2 className="flex flex-col w-full text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2">
                <span className="text-default font-sf text-5xl leading-3 title">YMC - YOTON MEMBERSHIP CLUB</span>
              </h2>
              <div className="font-normal mt-10 font-sf text-white">
                <div className="bcm text-base sm:text-[28px] leading-[160%]">
                  <p>Монголын <strong>анхны блокчэйн </strong> дээр суурилсан платформ хөгжүүлэх хамтрал.</p>
                </div>
                <div className="bcm text-bc-A1A text-xl sm:text-[20px] mt-8 leading-8">
                  <p>Зөвхөн 99 партнертай бөгөөд, партнерын эрх бүр нь саналын эрх бүхий онцгой NFT-ээр баталгаажина</p>
                </div>
              </div>
            </div>
            <div className="sm:max-w-lg my-8 sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-1 lg:flex lg:items-start lg:justify-end">
              <div className="flex-shrink-0 px-16 sm:px-0 sm:w-10/12">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                initialSlide={2}
                className="mySwiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Link href={'/1'}>
                    <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
                      <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,paddingTop:'99.80879541108987%'}}></span>
                      <img alt="20210920_100200_2_e99055f17c.webp" src="https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=3840&amp,q=75 3840w"/>
                      <noscript>
                        <img alt="20210920_100200_2_e99055f17c.webp" sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=3840&amp,q=75 3840w" src="https://api.yoton.club/storage/nfts/thumbs/1kghq0vfep6goqatntfgk.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} loading="lazy" />
                      </noscript>
                    </span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/1'}>
                    <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
                      <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,paddingTop:'99.80879541108987%'}}></span>
                      <img alt="20210920_100200_2_e99055f17c.webp" src="https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=3840&amp,q=75 3840w"/>
                      <noscript>
                        <img alt="20210920_100200_2_e99055f17c.webp" sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=3840&amp,q=75 3840w" src="https://api.yoton.club/storage/nfts/thumbs/4frfbtdgbc8iiapomuhbk.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} loading="lazy" />
                      </noscript>
                    </span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/1'}>
                    <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
                      <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,paddingTop:'99.80879541108987%'}}></span>
                      <img alt="20210920_100200_2_e99055f17c.webp" src="https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=3840&amp,q=75 3840w"/>
                      <noscript>
                        <img alt="20210920_100200_2_e99055f17c.webp" sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=3840&amp,q=75 3840w" src="https://api.yoton.club/storage/nfts/thumbs/5wjo5713ceyj8tps5nhta.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} loading="lazy" />
                      </noscript>
                    </span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/1'}>
                    <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
                      <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,paddingTop:'99.80879541108987%'}}></span>
                      <img alt="20210920_100200_2_e99055f17c.webp" src="https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=3840&amp,q=75 3840w"/>
                      <noscript>
                        <img alt="20210920_100200_2_e99055f17c.webp" sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=3840&amp,q=75 3840w" src="https://api.yoton.club/storage/nfts/thumbs/6joklzdx0lgc2yvmmyd7r.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} loading="lazy" />
                      </noscript>
                    </span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/1'}>
                    <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,position:'relative'}}>
                      <span style={{boxSizing:'border-box',display:'block',width:'initial',height:'initial',background:'none',opacity:1,border:0,margin:0,padding:0,paddingTop:'99.80879541108987%'}}></span>
                      <img alt="20210920_100200_2_e99055f17c.webp" src="https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=3840&amp,q=75 3840w"/>
                      <noscript>
                        <img alt="20210920_100200_2_e99055f17c.webp" sizes="100vw" srcSet="https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=640&amp,q=75 640w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=750&amp,q=75 750w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=828&amp,q=75 828w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1080&amp,q=75 1080w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1200&amp,q=75 1200w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=1920&amp,q=75 1920w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=2048&amp,q=75 2048w, https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=3840&amp,q=75 3840w" src="https://api.yoton.club/storage/nfts/thumbs/9zx2emifa9xp1ahakk24p.jpeg?w=3840&amp,q=75" decoding="async" data-nimg="responsive" style={{position:'absolute',top:0,left:0,bottom:0,right:0,boxSizing:'border-box',padding:0,border:'none',margin:'auto',display:'block',width:0,height:0,minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',objectFit:'contain'}} loading="lazy" />
                      </noscript>
                    </span>
                  </Link>
                </SwiperSlide>
              </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section id="" className="bg-collection bg-cover bg-center pb-10">
            <Tabs />
        </section>

        <section id="" className="max-w-7xl w-full sm:mt-8 mx-auto px-4 py-8 sm:pt-20 sm:pb-12">
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div>
              <h4 className="basis-1/2 text-center sm:text-left flex-shrink-0 text-6xl font-bold font-bebas sm:text-[60px] uppercase shadow-title text-white">Яагаад YMC PARTNER болох ёстой?</h4>
              <div className="flex space-x-3 sm:space-x-8 mt-12">
                <div className="group">
                    <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer">
                      <Link rel="noreferrer" href="https://opensea.io/collection/">
                        <a target="_blank" className="relative text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest btn-bg-gradient text-white" >view on opensea</a>
                      </Link>
                    </div>
                </div>
                <div className="group">
                    <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer text-white">
                      <Link rel="noreferrer" href="https://discord.gg/" >
                        <a target="_blank" className="relative text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest bg-black" >join our discord</a>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          <div className="basis-1/2 items-center sm:items-start text-sm mt-4 sm:mt-auto sm:text-lg text-gray">
                <div className="bcm-white font-monset text-bc-A1A text-sm text-center sm:text-left sm:text-lg sm:leading-8 shadow-title">
                  <p><strong>1.</strong> Партнер бүр YMC DAO засаглалын нэг саналын эрхтэй.</p>
                  <p><strong>2.</strong> Ховор хэрэглээтэй, ховор, онцгой, цор ганц 99 NFT-ийн нэгийг эзэмших.</p>
                  <p><strong>3.</strong> Өөрийн онцлогт тохирсон Профайл (PFP) төрлийн онцгой NFT эзэмших.</p>
                  <p><strong>4.</strong> NFT-ээ зарах, шилжүүлэх, staking хийх, ирээдүйд airdrop авах, whitelist-д орох эрх.</p>
                  <p><strong>5.</strong> YMC-ээс зохион байгуулах сургалт, уулзалт цуглаануудад оролцох эрхтэй.</p>
                  <p><strong>6.</strong> Yoton платформоос олох ашгаас хүртэнэ.</p>
                </div>
            </div>
          </div>

        </section>

        <section id="nft" className="overflow-hidden">
          <div className="max-w-sm sm:max-w-7xl mx-auto py-12 text-center sm:px-0 lg:py-24">
            <h2 className="text-center sm:text-left text-6xl font-bebas sm:text-[110px] leading-[100px] uppercase text-white font-bold">YMC 99 NFT</h2>
            <NFTlist />
          </div>
        </section>

        <section id="roadmap" className="bg-roadmap bg-cover">
          <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 text-center">
            <h2 className="text-center sm:text-left text-6xl font-bebas sm:text-[110px] leading-[100px] uppercase text-white font-bold">Roadmaps</h2>
            <div className="relative sm:mt-6 sm:pt-8 pb-20 overflow-y-hidden">
              <div className="flex flex-col  mt-10 text-white">
                <Roadmap cal="Jun 2022" name="Анхдагч 33 Партнер" desc="Урьдчилсан борлуулалт: Эхний 33 NFT-ийг бусдаас түрүүлж орох хүсэлтэй партнеруудад 50% хямдралтай борлуулна."/>
                <Roadmap cal="Sep 2022" name="Партнер элсэлт" desc="Үлдсэн 66 партнер эрхийн NFT-ийг үндсэн үнээр нь борлуулж YMC partner бүртгэл дуусна."/>
                <Roadmap cal="Sep 2022" name="YMC өөрөө DAO болно" desc="YMC нь өөрөө DAO бүтцэнд хөрвөнө. Мөн өөрийн гэсэн  $YMC засаглалын токен гаргаж, шийдвэр гаргалтад ашиглана. Партнерууд токеноо airdrop-оор үнэгүй авна."/>
                <Roadmap cal="Oct 2022" name="YMC гишүүнчлэл элсэлт" desc="Партнерууд хамтран 999 гишүүн элсүүлэх бөгөөд, гишүүн тус бүрт зориулан нийт 999 NFT collection гаргана."/>
                <Roadmap cal="Nov 2022" name="Дотоодын 5 DAO үүсгэх" desc="Дотоодын зах зээлд сонирхолтой, ашигтай, нийгэмд өгөөжтэй, төслүүдийг хэлэлцэж сонгон шалгаруулж, өөрсдийн Yoton платформоор дамжуулан гаргаж ирнэ."/>
                <Roadmap cal="Jan 2023" name="Олон улсын 5 DAO үүсгэх" desc="Хамтдаа хэлэлцэж судалж, Монголоос олон улсад гарах боломжтой 5 төслийг санал хураалтаар сонгож, өөрсдийн Yoton платформ дээр ажилуулж олон улсад гарахад нь технологийн болон коммьюнити дэмжлэг үзүүлнэ."/>
                <Roadmap cal="Jan 2023" name="Партнер DAO үүсгэх" desc="Партнерууд өөрсдийн төслийг платформоо ашиглаж DAO үүсгэн хөгжүүлэх боломж нь нээлттэй болно."/>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-10 sm:max-w-7xl px-4 sm:px-0 sm:mt-24 lg:my-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start sm:gap-4">
            <h2 className="tracking-wide font-bold mb-4 space-y-1 sm:space-y-2">
              <p className="text-default font-bebas text-[90px] sm:text-[78px] leading-[90%] sm:leading-[100px]">ПАРТНЕР</p>
              <div className="flex">
                <p className="text-primary font-bebas text-[90px] sm:text-[78px] leading-[90%] sm:leading-[100px]">давуу эрхүүд</p>
                <div className="relative w-36 h-36 sm:w-60 sm:h-60 -mt-7 sm:-mt-12 -ml-6 sm:-ml-10">
                  <span>
                    <Image width="150px" height="150px" src='/images/hero_866d00b59a_copy.png'/>
                  </span>
                </div>
              </div>
              <p className="text-white">
                <strong>99 ширхэг NFT эзэмшигч нар өөрөөр хэлбэл YMC Партнерууд нь YMC хамтралын засаглал буюу томоохон шийдвэрүүдэд саналын эрхтэйгээр оролцох бөгөөд дараах эрхийг эдэлнэ</strong>
              </p>
            </h2>
            <dl className="text-left sm:col-span-2 sm:pl-14 sm:max-w-3xl sm:mx-auto grid grid-cols-1 sm:gap-y-8 sm:gap-x-24">
              <div className="flex flex-col">
                <dt className="order-1 mt-2 text-xs sm:text-base sm:leading-[170%] font-monset font-bold uppercase text-white">YMC хамтралын засаглалд оролцох, хамтын шийдвэр гаргалцах</dt>
                <dd className="order-3 text-sm font-monset font-normal text-bc-C7C">*<span>санаа хэлэлцүүлэх, шинэ санал оруулах эрхтэй</span> </dd>
                <dd className="order-3 text-sm font-monset font-normal text-bc-C7C">*<span>партнерийн гаргасан саналыг дэмжих эсвэл татгалзах эрхтэй</span> </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-1 mt-2 text-xs sm:text-base sm:leading-[170%] font-monset font-bold uppercase text-white">YMC DAO төслүүдээс тодорхой ашиг хүртэх боломжтой</dt>
                <dd className="order-3 text-sm font-monset font-normal text-bc-C7C">*Member NFT борлуулалт</dd>
                <dd className="order-3 text-sm font-monset font-normal text-bc-C7C">*DAO төслүүдийн гүйлгээний шимтгэл</dd>
                <dd className="order-3 text-sm font-monset font-normal text-bc-C7C">*Токен борлуулалт</dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-1 mt-2 text-xs sm:text-base sm:leading-[170%] font-monset font-bold uppercase text-white">Ирээдүйн бүх NFT болон Токен airdrop-д оролцох</dt>
              </div>
              <div className="flex flex-col">
                <dt className="order-1 mt-2 text-xs sm:text-base sm:leading-[170%] font-monset font-bold uppercase text-white">Партнеруудад зориулсан VIP арга хэмжээнд оролцох</dt>
              </div>
            </dl>
          </div>
        </section>

        <section id="team" className="overflow-hidden">
          <div className="max-w-sm sm:max-w-7xl mx-auto py-12 px-4 text-center sm:px-0 lg:py-24 text-white">
            <h2 className="text-center sm:text-left text-6xl font-bebas sm:text-[110px] leading-[100px] uppercase text-white font-bold">TEAM</h2>
            <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                slidesPerGroup={1}
                breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    900: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    1200: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    }
                  }
                }
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"

              >
                <SwiperSlide>
                  <Team src="/images/1kghq0vfep6goqatntfgk.jpeg" name="Bayarsaikhan Volodya" title="Core Team - Founder" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Team src="/images/4frfbtdgbc8iiapomuhbk.jpeg" name="Bayasgalan Khashbat" title="Core Team - CTO" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Team src="/images/3nn1jyx137b7er1g99pat.jpeg" name="Gerelchuluun" title="Advisors" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Team src="/images/1kghq0vfep6goqatntfgk.jpeg" name="Bayarsaikhan Volodya" title="Core Team - Founder" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Team src="/images/4frfbtdgbc8iiapomuhbk.jpeg" name="Bayasgalan Khashbat" title="Core Team - CTO" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
                </SwiperSlide>
              </Swiper>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl w-full px-4 sm:px-0">
          <h2 className="text-center sm:text-left text-6xl font-bebas sm:text-[110px] leading-[100px] uppercase text-white font-bold">FAQ</h2>
          <div className="grid sm:grid-cols-2 gap-x-20 mt-6 text-white">
              <Accordion title="Партнер болохын тулд яах ёстой бэ?" content="Та хамгийн багадаа 1 Partner NFT эзэмшсэн байх ёстой. Нийтдээ ердөө 99 ширхэг л Партнер NFT гарна. " />
              <Accordion title="Партнер болон Гишүүн хоёрын ялгаа юу вэ?" content="* Хамтралын цаашид хийх ажил, төлөвлөгөөний санал гаргах буюу ирээдүйг шийдэх мөн санал өгөх эрхтэй. Гишүүн зөвхөн санал өгөх эрхтэй. </br>* Партнер DAO платформын ашгаас хүртэнэ, гишүүн хүртэхгүй </br>* Партнер онцгой NFT-тэй, гишүүн алгоритмаар үүссэн NFT-тэй." />
              <Accordion title="YMC NFT-ээ зарж эсвэл бусдад шилжүүлж болох уу? " content="Мэдээж болно. YMC NFT нь Polygon блокчэйн дээр суурилсан учраас та хүссэн маркетплэйс дээр зарах, бусдад шилжүүлэх эрхтэй. Энэ NFT нь таны өмч. Харин NFT-тэй хамт таны YMC партнер боломжууд давхар шилжихийг анхаараарай!" />
              <Accordion title="Yoton Platform буюу DAO гэж юу бэ?" content="Decentralized Autonomous Organization буюу Блокчэйн дээр суурилсан, хамтын засаглалтай, шинэ цагийн нээлттэй шударга байгууллагын бүтэц юм." />
              <Accordion title="DAО ямар асуудлыг шийдвэрлэдэг вэ?" content="* Уламжлалт бүтэцтэй байгууллагуудад тулгараад байгаа үндсэн асуудлууд болох дарга захирлаас хамааралтай пирамид хэлбэрт засаглал, шударга бус өмчлөл буюу ажилтан ажиллавч байгууллагыг эзэмшигчдийн өмч өсөхөөс ажилтаны орлого хэвээр байх явдал зэрэг асуудлуудыг шийднэ. </br> Нийгмийн, сайн дурын хамтралуудын хувьд санхүүжилт босгох, орлого зарлага ил тод байх, шийдвэр тухайн хамтрал бүлгэмийн гишүүдийн саналаар шийдэгдэх зэрэг томоохон асуудлуудыг шийднэ." />
              <Accordion title="Ямар ямар модулууд хөгжүүлэх вэ?" content="YMC хамгийн анхны бөгөөд цорын ганц бүтээгдэхүүн нь DAO платформ байна. Уг DAO платформ дээр бусад төслүүдийн үйл ажиллагаа явагдагдах ба 4 гол бүрэлдэхүүнтэй байна. </br> <ul><li>i. Launch буюу нээлт</li><li>ii. Үйл ажиллагааны хэсэг</li><li>iii. Засаглалын хэсэг</li><li>iv. Хөрөнгийн удирдлагын хэсэг</li><ul>" />
              <Accordion title="PFP NFT гэж юу вэ?" content="Та өөрийн NFT-г сошиал медиа профайл зургаа болгож өөрийн эзэмшиж буйг батлах боломжтой. " />
          </div>
        </section>

        <section id="joinus" className="bg-bottom bg-no-repeat pb-9 pt-20 sm:pb-0 mt-8 overflow-hidden ">
          <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-0 pt-12 sm:pt-22">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center sm:h-[228px] rounded-lg p-4 px-4">
              <h2 className="text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2">
                <p className="text-default font-bebas text-6xl sm:text-[80px] leading-[54px] sm:leading-[72px]">Join the</p>
                <p className="text-primary font-bebas text-6xl sm:text-[80px] leading-[54px] sm:leading-[72px]">YMC CLUB</p>
              </h2>
              <div className="my-auto btn-border-white rounded-md mr-0 p-0.5 cursor-pointer">
                <Link rel="noreferrer" href="https://discord.gg/">
                  <a target="_blank" className="relative text-xs flex items-center justify-center px-10 py-3 sm:px-14 sm:py-4 uppercase font-bold rounded-md tracking-widest bg-black text-white">LETS START</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
  </div>
  </>
  )
}
