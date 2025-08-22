import React from "react";
import { GradientButton } from "./Button/GradientButton";

interface TagSectionProps {
  data: {
    title: string;
    sub_title: string;
    button_text: string;
    button_link: string;
  };
}

export const TagSection = ({ data }: TagSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[48px]">
        {data.title}
      </h1>
      <h2 className="mb-3 font-bold lg:text-[22px] xl:text-[28px] 2xl:text-[32px]">
        {data.sub_title}
      </h2>
      <GradientButton text={data.button_text} link={data.button_link} />
    </div>
  );
};
