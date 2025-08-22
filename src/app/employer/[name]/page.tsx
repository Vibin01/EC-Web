"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import { TagSection } from "@/components/common/TagSection";
import { hiring_excellence_data } from "@/data/EmployerHiringExcellenceData";
import { TabWithDescription } from "@/components/common/TabWithDescription";
import BlockEasySteps from "@/components/common/BlockEasySteps";

const allowedPages = [
  "empower-teams",
  "explore-trends",
  "engage-talent",
  "exceed-targets",
];

export default function DynamicPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params);

  if (!allowedPages.includes(name)) {
    notFound();
  }
  const {
    BlockStepsSectionData,
    HeroData,
    TagSectionData,
    TabWithDescriptionSectionData,
  } = hiring_excellence_data.filter((item) => item.name === name)[0];

  return (
    <section className="relative ">
      <div className="bg-[url('/background/candidate_bg-1.png')] bg-cover bg-center">
        <section className="relative flex bg-[#FFFFFF4D] lg:py-[9%] xl:py-[11%] 2xl:py-[13%] px-[7%] ">
          <div className="lg:w-[90%] ">
            <HeroTextContainerSection data={HeroData} />
          </div>
          <div className="lg:w-[10%] "></div>
        </section>
        <section className="relative py-[5%] px-[7%] bg-transparent">
          <TabWithDescription data={TabWithDescriptionSectionData} />
        </section>
      </div>
      <div className="bg-[url('/background/candidate_bg-2.png')] bg-cover bg-center">
        <section className="relative overflow-hidden- px-[7%]">
          <BlockEasySteps data={BlockStepsSectionData} />
        </section>
        <section className="relative bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
          <TagSection data={TagSectionData} />
        </section>
      </div>
    </section>
  );
}
