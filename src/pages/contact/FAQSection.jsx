import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMinus, FaPlus } from "react-icons/fa6";
const FAQSection = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      question: t("faqs.faqh1"),
      answer: (
        <ul className="list-disc pl-5">
          <li>{t("faqs.faqh1l1")}</li>
          <li>{t("faqs.faqh1l2")}</li>
          <li>{t("faqs.faqh1l3")}</li>
          <li>{t("faqs.faqh1l4")}</li>
          <li>{t("faqs.faqh1l5")}</li>
        </ul>
      ),
    },
    {
      question: t("faqs.faqh2"),
      answer: <p>{t("faqs.faqh2l1")}</p>,
    },
    {
      question: t("faqs.faqh3"),
      answer: (
        <ul className="list-disc pl-5">
          <li>{t("faqs.faqh3l1")}</li>
          <li>{t("faqs.faqh3l2")}</li>
          <li>{t("faqs.faqh3l3")}</li>
          <li>{t("faqs.faqh3l4")}</li>
        </ul>
      ),
    },
    {
      question: t("faqs.faqh4"),
      answer: (
        <ul className="list-disc pl-5">
          <p>{t("faqs.faqh4l1")}</p>
          <li>{t("faqs.faqh4l2")}</li>
          <li>{t("faqs.faqh4l3")}</li>
          <li>{t("faqs.faqh4l4")}</li>
          <li>{t("faqs.faqh4l5")}</li>
          <li>{t("faqs.faqh4l6")}</li>
          <li>{t("faqs.faqh4l7")}</li>
        </ul>
      ),
    },
  ];

  return (
    <div id="faq" className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#3D4147]">
        {t("faqs.faqh")}
      </h2>

      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => toggleSection(index)}
            >
              <span className="mr-4 text-white text-xl w-6 text-center border rounded bg-[#3D4147] hover:bg-red-500">
                {openSection === index ? (
                  <FaMinus className="p-1" />
                ) : (
                  <FaPlus className="p-1" />
                )}
              </span>
              <h3
                className={`text-lg font-medium ${
                  openSection === index ? "" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
            </div>
            {openSection === index && (
              <div className="mt-3 text-gray-700 pl-10">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
