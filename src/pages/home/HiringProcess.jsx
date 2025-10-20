import React from "react";
import { useTranslation } from "react-i18next";

const HiringProcess = () => {
  const { t } = useTranslation();
  const steps = [
    {
      id: 1,
      title: t("home.hiringplh1"),
      description: t("home.hiringplp1"),
      image: "/images/Off2work/talent-recruitment.jpg",
    },
    {
      id: 2,
      title: t("home.hiringplh2"),
      description: t("home.hiringplp2"),
      image: "/images/Off2work/work-permits.jpg",
    },
    {
      id: 3,
      title: t("home.hiringplh3"),
      description: t("home.hiringplp3"),
      image: "/images/Off2work/employment-and-adaptation.jpg",
    },
  ];
  return (
    <section className="container mx-auto py-16 px-2 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#3E4247] mb-12 max-w-2xl mx-auto">
        {t("home.hiringph")}
        <span className="text-[#652D90]">{t("home.hiringphh")}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:translate-y-2 transition-transform duration-500 cursor-pointer"
          >
            <div className="relative">
              <img
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#652D90] my-3">
              {step.title}
            </h3>
            <div className="border border-gray-400 mt-4"></div>

            <p className="text-gray-900 font-medium mt-2 text-base text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiringProcess;
