import React, { useState } from "react";
import { faqList } from "./Helper";
import { FaqArrowIcon } from "./Icon";

const Faqs = () => {
  // State to track the active accordion index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to toggle accordion based on index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="bg-[#F1F4FA]  relative py-20 z-[10]" id="faqs-list">
        <div className="container max-w-[1140px] mx-auto relative z-10">
          {/* FAQ Section Title */}
          <h2 className="font-bold text-xl md:text-2xl text-[#1b2541] mt-3 text-center">
            Rummy App FAQs
          </h2>
          <p className="text-black text-lg font-normal text-center mt-3">
            Listed below are the frequently asked questions on Rummy App.
          </p>

          <div className="w-full mt-10">
            {/* FAQ Items */}
            {faqList.map((item, index) => (
              <div
                key={index}
                className="faq-wrapper text-[#222B45] bg-white shadow rounded-2xl transition ease-in-out duration-300 my-3 py-4 bg-transparent mb-0 cursor-pointer px-4"
                onClick={() => toggleAccordion(index)}
              >
                {/* FAQ Item Header */}
                <div className="flex justify-between items-center">
                  <h3
                    className={`${
                      activeIndex === index ? "common-text-gradient" : ""
                    } ff_poppins flex items-start md:items-center transition ease-in-out duration-300 justify-between text-[15px] sm:text-[17px] xl:text-[24px] text-[#222B45] font-semibold cursor-pointer `}
                  >
                    {item.title}
                  </h3>
                  {/* FAQ Item Arrow Icon */}
                  <span
                    className={` transform transition-all ease-in-out duration-300 ${
                      activeIndex === index ? "rotate-180 transform " : " "
                    }`}
                  >
                    <FaqArrowIcon />
                  </span>
                </div>
                {/* FAQ Item Description */}
                <div
                  className={`overflow-hidden transition-height transition-all ease-in-out duration-200 ${
                    activeIndex === index ? "h-[40px] overflow-auto" : "h-0"
                  }`}
                >
                  <p className="text-base font-normal text-black/90 pt-1 xs:pr-5 xl:pr-20">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
