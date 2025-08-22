import { FeaturesHeroSection } from "@/components/common/FeaturesHeroSection";
import Image from "next/image";
import React from "react";
import { featuresPageData } from "@/data/FeaturesPageData";
import TransformFeaturesSection from "./TransformFeatures";

export const FeaturesPage = () => {
  return (
    <>
      <section className="relative ">
        <div className="bg-[url('/background/candidate_bg-1.png')] bg-cover bg-center">
          <section className="relative flex bg-[#FFFFFF4D] lg:py-[9%] xl:py-[11%] 2xl:py-[13%] px-[7%] ">
            <div className="lg:w-[55%]">
              <FeaturesHeroSection data={featuresPageData} />
            </div>
            <div className="lg:w-[45%]">
              {/* <Image
                alt={HeroData.image_alt}
                src={HeroData.image}
                width={500}
                height={500}
              /> */}
            </div>
          </section>
          <section className="relative py-[5%] px-[7%] bg-transparent">
            <TransformFeaturesSection />
          </section>
        </div>
        <div className="bg-[url('/background/candidate_bg-2.png')] bg-cover bg-center">
          <section className="relative overflow-hidden- px-[7%]">
            {/* <BlockEasySteps data={BlockStepsSectionData} /> */}
          </section>
          <section className="relative bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
            {/* <TagSection data={TagSectionData} /> */}
          </section>
        </div>
        <div className="bg-[url('/background/candidate_bg-3.png')] bg-cover bg-center">
          <section className=" relative py-[5%] px-[7%] bg-[linear-gradient(180deg,_rgba(255,255,255,0.24)_0%,_rgba(255,255,255,0.36)_100%)] ">
            {/* <FAQSection data={FaqsData} /> */}
          </section>
        </div>
      </section>
    </>
  );
};
