"use client";

import Image from "next/image";
import { EasyBannerSection } from "./EasyBannerSection";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BlockEasyStepsProps {
  data: {
    title: string;
    steps: {
      title: string;
      icon?: string;
      button_text?: string;
      button_link?: string;
      letter: string;
      description: string;
    }[];
    easyBannerData: {
      title: string;
      content: string;
    };
  };
}

export default function BlockEasySteps({ data }: BlockEasyStepsProps) {
  const pathname = usePathname();

  return (
    <section className="w-full  xl:px-[6%] 2xl:px-[8%] mx-auto py-12 ">
      <h2 className=" text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold text-center mb-4 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
        {data.title}{" "}
      </h2>
      <div className="flex flex-col gap-6 pt-10 ">
        {data.steps.map((step, index) => (
          <div key={index} className=" flex  w-full">
            <div className="w-3/12 flex flex-col items-center">
              <h3 className="font-bold lg:text-[22px] xl:text-[26px] 2xl:text-[32px] mb-10">
                {step.title}
              </h3>
              {data.steps[index].icon ? (
                <div className="lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-6 flex items-center justify-center rounded-[30px] bg-[#FFFFFF33]  shadow-[_2px_4px_8px_2px_#00000026,_-2px_-2px_0px_2px_#FFFFFF33,_0px_0px_10px_0px_#0668E126]">
                  <Image
                    src={step.icon || ""}
                    alt="Icon"
                    width={1280}
                    height={1280}
                    className="object-contain w-auto h-auto min-w-[40px] min-h-[40px] 2xl:min-w-[60px] 2xl:min-h-[60px] "
                  />
                </div>
              ) : (
                <Link
                  href={step.button_link || ""}
                  className="lg:py-3 lg:px-6 xl:py-5 xl:px-10 text-white rounded-[40px] cursor-pointer bg-[linear-gradient(90deg,_#0668E1_0%,_#004CAA_100%)] border-[2px]  border-[#59A3FF] lg:text-[18px] xl:text-[20px] font-semibold "
                >
                  Learn More
                </Link>
              )}
            </div>

            <div className="w-2/12 relative flex flex-col gap-4 items-center ">
              <div className="w-[60px] h-[60px] rounded-[16px] opacity-[60%] border border-white text-[#0668E11A] flex items-center justify-center font-bold text-[26px] z-10 shadow-[0px_0px_20px_0px_#FFFFFF,_0px_0px_10px_0px_#0668E126] bg-[radial-gradient(54.17%_54.17%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.6)_100%)]">
                {step.letter}
              </div>
              {![
                "empower-teams",
                "explore-trends",
                "engage-talent",
                "exceed-targets",
              ].some((path) => pathname.includes(path)) &&
                index !== data.steps.length - 1 && (
                  <Image
                    src="/easy-line.png"
                    alt="Vertical Line"
                    width={2}
                    height={100}
                    className=" lg:w-[12px] xl:w-[20px] h-full "
                  />
                )}
            </div>

            <div className="w-7/12 pb-12  ml-10 ">
              <p className="lg:text-[18px] xl:text-[22px] font-medium max-w-[90%]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-[8%] ">
        <EasyBannerSection data={data.easyBannerData} />
      </div>
    </section>
  );
}
