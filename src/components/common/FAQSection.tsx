"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  data: {
    title: string;
    faqData: {
      category: string;
      faqs: {
        question: string;
        answer: string;
      }[];
    }[];
  };
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openCategory, setOpenCategory] = useState<string | null>("Recruiter");

  return (
    <section className="w-full md:px-[4%] lg:px-[6%] xl:px-[8%] 2xl:px-[10%] mx-auto py-12 ">
      <h1 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[48px] font-bold text-center mb-8">
        {data.title}
      </h1>

      <div className="space-y-7">
        {data.faqData.map((cat) => (
          <div
            key={cat.category}
            className="border-b-[2px] border-[#1B1C17] pb-6"
          >
            <button
              className="cursor-pointer flex justify-between items-center w-full font-bold  lg:text-[24px] xl:text-[28px] 2xl:text-[32px] "
              onClick={() =>
                setOpenCategory(
                  openCategory === cat.category ? null : cat.category
                )
              }
            >
              {cat.category}
              <motion.span
                animate={{ rotate: openCategory === cat.category ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowUp />
              </motion.span>
            </button>

            {/* Expand Category FAQs */}
            <AnimatePresence>
              {openCategory === cat.category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4 space-y-4"
                >
                  {cat.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`${
                        i !== cat.faqs.length - 1 ? "border-b-[2px]" : ""
                      } border-[#EEEEEE] pb-4`}
                    >
                      <h2
                        className="w-full text-left font-medium mb-2 lg:text-[18px] xl:text-[22px] 2xl:text-[24px]"
                        // onClick={() =>
                        //   setOpenQuestion(
                        //     openQuestion === faq.question ? null : faq.question
                        //   )
                        // }
                      >
                        {faq.question}
                      </h2>

                      {/* <AnimatePresence>
                        {openQuestion === faq.question && ( */}
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 lg:text-[16px] xl:text-[20px]"
                      >
                        {faq.answer}
                      </motion.p>
                      {/* )} */}
                      {/* </AnimatePresence> */}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
