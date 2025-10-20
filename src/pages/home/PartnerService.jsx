import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaHandshake,
  FaUserCheck,
  FaGlobeAmericas,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PartnerService = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto font-bold text-gray-900 mb-6">
          {t("home.partnerh1")}
          <span className="text-[#652D90]">{t("home.partnerh2")}</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t("home.partnerhp")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("home.partnerwh1")}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{t("home.partnerwp1")}</p>
          <p className="text-lg text-gray-600 mb-8">{t("home.partnerwp2")}</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-8 h-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Diverse professional team"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-[#652D90] mb-12">
          {t("home.partnerforce")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandshake className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh1"),
              description: t("home.partnerserp1"),
            },
            {
              icon: <FaUserCheck className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh2"),
              description: t("home.partnerserp2"),
            },
            {
              icon: <FaGlobeAmericas className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh3"),
              description: t("home.partnerserp3"),
            },
            {
              icon: <FaShieldAlt className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh4"),
              description: t("home.partnerserp4"),
            },
            {
              icon: <FaChartLine className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh5"),
              description: t("home.partnerserp5"),
            },
            {
              icon: <FaHandshake className="w-8 h-8 text-[#652D90]" />,
              title: t("home.partnerserh6"),
              description: t("home.partnerserp6"),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 rounded-xl p-2 text-center">
        <h2 className="text-3xl font-bold text-[#652D90] mb-6">
          {t("home.partnerchoh")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              stat: "85%",
              description: t("home.partnerchop1"),
            },
            {
              stat: "95%",
              description: t("home.partnerchop2"),
            },
            {
              stat: "100%",
              description: t("home.partnerchop3"),
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-2xl">
              <p className="text-4xl font-bold text-[#652D90] mb-2">
                {item.stat}
              </p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        <Link
          to="/services/trustedworkforce"
          className="bg-[#3E4247]/90 hover:bg-[#652D90] text-white px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-300"
        >
          {t("home.serviceswtbtn")}
        </Link>
      </div>
    </div>
  );
};

export default PartnerService;
