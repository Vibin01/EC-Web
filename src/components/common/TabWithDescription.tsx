import React, { useState } from "react";

interface TabWithDescriptionProps {
  data: {
    title: string;
    tabs: {
      tab: string;
      activeImage: string;
      inactiveImage: string;
      heading: string;
      content: string;
      author: string;
    }[];
  };
}

export const TabWithDescription = ({ data }: TabWithDescriptionProps) => {
  const [activeTab, setActiveTab] = useState(data.tabs[0].tab);

  return (
    <section className="py-16 relative text-[#1B1C17]  ">
      <div className="  mx-auto text-center">
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold text-center mb-4 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
          {data.title}
        </h2>

        {/* Tabs */}
        <div className="bg-[#FFFFFF1A]  2xl:h-[450px] p-10 shadow-[0px_0px_10px_0px_#0668E11A] rounded-[40px]  flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* Active Tab */}
          {data.tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab.tab)}
              className={`flex flex-col items-center justify-center gap-2 px-6 py-4 lg:w-[210px] xl:w-[240px] 2xl:w-[260px]  shadow-[0px_0px_4px_0px_#0668E14D] lg:h-[100px] xl:h-[120px] 2xl:h-[140px] ${
                activeTab === tab.tab
                  ? "bg-[#0668E1] text-white font-bold"
                  : "text-black font-semibold"
              }  rounded-[20px] text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] cursor-pointer`}
            >
              {tab.tab}

              {activeTab === tab.tab ? (
                <img
                  src={tab.activeImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              ) : (
                <img
                  src={tab.inactiveImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              )}
            </div>
          ))}
          {activeTab && (
            <div className="w-full text-center mt-4">
              <p className="text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] italic font-extrabold my-6">
                {data.tabs.find((tab) => tab.tab === activeTab)?.heading}
              </p>
              <p className=" text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium my-6 2xl:h-[60px]">
                {data.tabs.find((tab) => tab.tab === activeTab)?.content}
              </p>
              <p className="text-[26px] xl:text-[28px] 2xl:text-[32px] text-[#1B1C17] italic font-extrabold">
                {data.tabs.find((tab) => tab.tab === activeTab)?.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
