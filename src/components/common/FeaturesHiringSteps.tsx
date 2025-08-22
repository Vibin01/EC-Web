import Image from "next/image";
import React from "react";
import { FeaturesSteps } from "@/data/FeaturesPageData";

export const FeaturesHiringSteps = () => {
  return (
    <>
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">
          {FeaturesSteps.heading}
        </h2>

        {/* First Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Steps 1-4 */}
          <div className="space-y-8">
            {FeaturesSteps.steps.slice(0, 4).map((step, idx) => (
              <div key={step.id} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {String(step.id).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src={FeaturesSteps.image_url_1}
              alt={FeaturesSteps.image_alt_1}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src={FeaturesSteps.image_url_2}
              alt={FeaturesSteps.image_alt_2}
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Steps 5-8 */}
          <div className="space-y-8 order-1 lg:order-2">
            {FeaturesSteps.steps.slice(4, 8).map((step, idx) => (
              <div key={step.id} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {String(step.id).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
