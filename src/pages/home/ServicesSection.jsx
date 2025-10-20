import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-[#3E4247] uppercase mb-12"
      >
        {t("home.serviceh")}{" "}
        <span className="text-[#652D90]">{t("home.servicehh")}</span>
        {t("home.servicehl")}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 container mx-auto"
      >
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <FileText className="w-8 h-8 text-[#642D91]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                {t("home.subserviceh1")}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{t("home.subservicep1")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-[#623488]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                {t("home.subserviceh2")}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{t("home.subservicep2")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <ShieldCheck className="w-8 h-8 text-[#642D91]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                {t("home.subserviceh3")}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{t("home.subservicep3")}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-center mb-16">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/services/hires"
            className="bg-[#3E4247] hover:bg-[#652D90] text-white px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-300"
          >
            {t("home.subservicebtn")}
          </Link>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-lg p-8 text-center max-w-[600px] mx-auto"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-[#3E4247] mb-4">
          {t("home.serviceswth")}{" "}
          <span className="text-blue-600">{t("home.serviceswthh")} </span>{" "}
          {t("home.serviceswthl")}
        </h3>
        <p className="text-gray-600 text-lg mb-6">{t("home.serviceswtp")}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/services/trustedworkforce"
            className="bg-[#3E4247] hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-300"
          >
            {t("home.serviceswtbtn")}
          </Link>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default ServicesSection;
