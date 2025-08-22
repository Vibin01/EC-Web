import BlockEasySteps from "@/components/common/BlockEasySteps";
import FAQSection from "@/components/common/FAQSection";
import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import TabsSection from "@/components/common/TabsSection";
import { TagSection } from "@/components/common/TagSection";
import Image from "next/image";
import React from "react";
import {
  HeroData,
  TabsSectionData,
  BlockStepsSectionData,
  TagSectionData,
  FaqsData,
} from "@/data/EmployerPageData";
import UpdownScrollButton from "@/components/common/Button/UpdownScrollButton";

export const EmployerPage = () => {
  return (
    <>
      <section className="relative ">
        <div className="bg-[url('/background/employer-dynamic-1.png')] bg-cover bg-center">
          <section className="relative flex bg-[#FFFFFF4D] lg:py-[9%] xl:py-[11%] 2xl:py-[13%] px-[7%] ">
            <div className="lg:w-[70%] xl:w-[74%]">
              <HeroTextContainerSection data={HeroData} />
            </div>
            <div className="lg:w-[30%] xl:w-[26%]">
              <Image
                alt={HeroData.image_alt}
                src={HeroData.image}
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="relative py-[5%] px-[7%] bg-transparent">
            <TabsSection data={TabsSectionData} />
          </section>
        </div>
        <div className="bg-[url('/background/employer-dynamic-2.png')] bg-cover bg-center">
          <section className="relative overflow-hidden- px-[7%]">
            <BlockEasySteps data={BlockStepsSectionData} />
          </section>
          <section className="relative bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
            <TagSection data={TagSectionData} />
          </section>
        </div>
        <div className="bg-[url('/background/employer-dynamic-3.png')] bg-cover bg-center">
          <section className=" relative py-[5%] px-[7%] bg-[linear-gradient(180deg,_rgba(255,255,255,0.24)_0%,_rgba(255,255,255,0.36)_100%)] ">
            <FAQSection data={FaqsData} />
          </section>
        </div>
        <UpdownScrollButton />
      </section>
    </>
  );
};
