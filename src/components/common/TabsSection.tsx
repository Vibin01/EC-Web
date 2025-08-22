"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

interface TabsSectionData {
  data: {
    title: string;
    tabData: {
      id: string;
      title: string;
      author: string;
      highlight: string;
      description: string;
      footer: string;
      icon: string;
    }[];
  };
}

export default function TabsSection({ data }: TabsSectionData) {
  return (
    <section className="w-full flex flex-col items-center justify-center xl:px-[6%] 2xl:px-[7%] ">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold text-center mb-4 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
        {data.title}
      </h2>

      {/* Tabs */}
      <Tabs defaultValue={data.tabData[0].id} className="w-full">
        <TabsList className="grid grid-cols-4 w-full border-b-2 border-[#3A92FF] rounded-none h-auto">
          {data?.tabData?.map((items) => (
            <TabsTrigger
              key={items.id}
              value={items.id}
              className="pb-4 cursor-pointer font-bold lg:text-[16px] xl:text-[20px] data-[state=active]:border-b-[10px]  data-[state=active]:border-[#3A92FF] text-center"
            >
              <span className="text-[#0668E1]">{items.title}</span>
              <span className="block font-semibold">{items.author}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {data.tabData.map((items) => (
          <TabsContent key={items.id} value={items.id}>
            <div className="mt-8 rounded-[40px] bg-[#FFFFFF66] border-[2px] border-white ">
              <div className="flex flex-col items-center text-center space-y-6 px-[3%] py-8">
                {/* Center Icon */}
                <div className="w-[120px] h-[120px]  flex items-center justify-center ">
                  <Image
                    src={items.icon}
                    alt="Icon"
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>

                {/* Highlight */}
                <p className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] text-[#0668E1] italic font-extrabold">
                  {items.highlight}
                </p>

                {/* Description */}
                <p className=" mt-2 text-center font-medium  lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
                  {items.description}
                </p>

                {/* Footer */}
                <p className="mt-3 font-extrabold italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                  {items.footer}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
