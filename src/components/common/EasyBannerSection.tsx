import React from "react";

interface BannerSectionProps {
  data: {
    title: string;
    content: string;
  };
}

export const EasyBannerSection = ({ data }: BannerSectionProps) => {
  return (
    <>
      <div className="lg:w-full flex flex-col items-center justify-center bg-[#FFFFFF66] rounded-[40px] border-[2px] padding-[60px_40px_60px_40px] p-[5%]">
        <h1 className="lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold mb-10">
          {data.title}
          <span className=" pl-6 lg:space-x-3 xl:space-x-6  ">
            {["E", "A", "S", "Y", "!"].map((word, index) => (
              <span
                key={index}
                className="font-extrabold italic   lg:text-[30px] xl:text-[40px] 2xl:text-[50px] lg:px-3 xl:px-6 lg:py-1 xl:py-3 border rounded-[16px] border-white  shadow-[0px_0px_20px_0px_#FFFFFF,_0px_0px_10px_0px_#0668E126] text-[#0668E1] bg-[radial-gradient(54.17%_54.17%_at_50%_50%,rgba(255,255,255,0.06)0%,rgba(255,255,255,0.6)_100%)]"
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <p className="font-medium lg:text-[20px] xl:text-[24px]  text-center  mx-auto">
          {data.content}
        </p>
      </div>
    </>
  );
};
