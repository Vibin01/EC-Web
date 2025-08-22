"use client";
import { TransformSectionData } from "@/data/FeaturesPageData";
import Image from "next/image";

export default function TransformFeaturesSection() {
  return (
    <section className=" mx-auto px-6">
      <h2 className=" text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold text-center lg:mb-10 xl:mb-12 2xl:mb-14">
        {/* Heading */}
        Find Features That Transform
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {TransformSectionData.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col  p-6 rounded-[20px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0)_100%)]  hover:shadow-md transition duration-300"
          >
            <Image
              src={feature.image_url}
              alt={feature.image_alt}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
