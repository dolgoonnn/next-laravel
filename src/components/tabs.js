import React, { useState } from "react";
import FirstTab from "./allTabs/first";
import SecondTab from "./allTabs/second";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
  return (
    <div className="flex flex-col mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:my-24 lg:my-12">
        <div className="grid sm:grid-cols-2 items-center gap-x-8">
            <div className="lg:col-span-1 lg:col-start-1">
                <div className="w-full mx-auto mt-6">
                <div className="border-b border-bc-A5A">
                    <nav className="-mb-0.5 flex" aria-label="Tabs">
                        <div className={'border-bc-B25 cursor-pointer w-1/2 py-4 text-center font-bold text-[25px] sm:text-3xl font-bebas sm:font-gordita uppercase text-white ' + (activeTab === "tab1" ? "text-bc-B25  border-b-4 " : "")} onClick={handleTab1} aria-current="page">YMC Club гэж юу бэ?</div>
                        <div className={'border-bc-B25 text-white hover:text-bc-B25 hover:border-bc-B25 border-b cursor-pointer w-1/2 py-4 text-center font-bold text-[25px] sm:text-3xl font-bebas sm:font-gordita uppercase ' + (activeTab === "tab2" ? "text-bc-B25 border-b-4" : "")} onClick={handleTab2}>YMC Алсын хараа</div>
                    </nav>
                </div>
                </div>
            </div>
        </div>
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
    </div>
  );
};
export default Tabs;