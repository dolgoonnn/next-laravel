import React, { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import NFTdetail from '@/components/NFTdetail'
import NFTdetailsoon from '@/components/NFTdetailsoon'
import ListMainTab from './allTabs/listMain'
var NumberFormat = require('react-number-format').default


const NFTlist = () => {
    const [nfts, setNfts] = useState([])

    // useEffect(() => {
    //     axios.get('/api/getNfts').then(response => {
    //         setNfts(response.data)
    //     })
    // }, [])

    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
    };
      const handleTab2 = () => {
        setActiveTab("tab2");
    };

    const yoton_soon = '/images/yoton_soon.png';

    return (
        <div className="flex flex-col mt-10 mx-auto max-w-7xl sm:px-0 sm:my-24 lg:my-12">
            <div className="grid sm:grid-cols-2 items-center gap-x-8">
                <div className="lg:col-span-1 lg:col-start-1">
                    <div className="w-full mx-auto mt-6">
                    <div className="border-b border-bc-A5A">
                        <nav className="-mb-0.5 flex" aria-label="Tabs">
                            <div className={'border-bc-B25 cursor-pointer w-1/2 py-4 text-center font-bold text-[25px] sm:text-3xl font-bebas sm:font-gordita uppercase text-white ' + (activeTab === "tab1" ? "text-bc-B25  border-b-4 " : "")} onClick={handleTab1} aria-current="page">Early Partners - 33 NFTs</div>
                            <div className={'border-bc-B25 text-white hover:text-bc-B25 hover:border-bc-B25 border-b cursor-pointer w-1/2 py-4 text-center font-bold text-[25px] sm:text-3xl font-bebas sm:font-gordita uppercase ' + (activeTab === "tab2" ? "text-bc-B25 border-b-4" : "")} onClick={handleTab2}>General Partners - 66 NFTS</div>
                        </nav>
                    </div>
                    </div>
                </div>
            </div>

            {activeTab === "tab1" ? (
                <>
                <br />
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert">Бид 9 сард үндсэн партнер гишүүнчлэлээ нээх бөгөөд одоогоор урьдчисан
                борлуулалтаар зөвхөн эхний 33 NFT-г гаргаж байна. Түрүүлж орж NFT-ээ
                тал үнээр нь эзэмш!</div>
                    <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl mt-8 overflow-x-scroll">
                    </ul>
                    <ListMainTab/>
                </>
            ) : (
                <>
                <br />
                <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                Үлдсэн 66 NFT 9 сард нээгдэнэ. Нэг бүрийн үнэ 6.000.000₮ байх болно.
                </div>
                <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl mt-8 overflow-x-scroll">
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                    <NFTdetailsoon />
                </ul>
                </>
            )}
        </div>

    )
}

export default NFTlist
