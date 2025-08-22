import React from "react";
import { GradientButton } from "./Button/GradientButton";

interface HeroTextContainerSectionProps {
  data: {
    title: string;
    title_highlight: string;
    sub_title: string;
    sub_title_2: string;
    button_text: string;
    button_link: string;
    image?: string;
    image_alt?: string;
    content: string;
    content_highlight: string;
  };
}

export const HeroTextContainerSection = ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-7 2xl:gap-8 ">
        <h1 className="lg:leading-4 xl:leading-8 text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
          {data.title}
          <span className="font-bold text-[#0668E1]">
            {data.title_highlight}
          </span>
        </h1>
        <h2 className="lg:leading-12 xl:leading-22 text-[32px] md:text-[38px] lg:text-[56px]- xl:text-[58px] 2xl:text-[72px] font-bold">
          <span>{data.sub_title} </span>{" "}
          <span className="md:block ">{data.sub_title_2}</span>
        </h2>
        <p className="font-medium text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
          <span className="font-bold">{data.content_highlight} </span>
          {data.content}
        </p>
        <GradientButton text={data.button_text} link={data.button_link} />
      </div>
    </>
  );
};
