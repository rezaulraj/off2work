import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, File, Handshake, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactSection from "../home/ContactSection";

const Hires = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const listData = [
    {
      listt: t("service.servicetaiblh1"),

      lists: [
        {
          list: t("service.servicetaiblh1l1"),
        },
        {
          list: t("service.servicetaiblh1l2"),
        },
        {
          list: t("service.servicetaiblh1l3"),
        },
        {
          list: t("service.servicetaiblh1l4"),
        },
      ],
    },
    {
      listt: t("service.servicetaiblh2"),
      lists: [
        {
          list: t("service.servicetaiblh2l1"),
        },
        {
          list: t("service.servicetaiblh2l2"),
        },
        {
          list: t("service.servicetaiblh2l3"),
        },
        {
          list: t("service.servicetaiblh2l4"),
        },
      ],
    },
    {
      listt: t("service.servicetaiblh3"),
      lists: [
        {
          list: t("service.servicetaiblh3l1"),
        },
        {
          list: t("service.servicetaiblh3l2"),
        },
        {
          list: t("service.servicetaiblh3l3"),
        },
        {
          list: t("service.servicetaiblh3l4"),
        },
      ],
    },
  ];
  const services = [
    {
      title: t("service.serviceexplorelh1"),
      description: t("service.serviceexplorelp1"),
      icon: <Users className="w-8 h-8 text-blue-600" />,
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      link: "#flexable-worksolutaion",
    },
    {
      title: t("service.serviceexplorelh2"),
      description: t("service.serviceexplorelp2"),
      icon: <File className="w-8 h-8 text-green-600" />,
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-green-50 to-green-100",
      link: "#flexable-worksolutaion",
    },
    {
      title: t("service.serviceexplorelh3"),
      description: t("service.serviceexplorelp3"),
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      link: "/client-success-stories",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: "url('/images/Off2work/1x/asset2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[500px] w-full flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gray-700/10 z-0"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4 relative bg-white/50 backdrop-blur-sm rounded-xl z-20"
        >
          <p className="text-xl font-bold text-[#023a51] my-4">
            {t("service.servicehireh")}
          </p>
          <p className="text-4xl md:text-5xl text-[#652D90] font-bold my-4">
            {t("service.servicehirehs")}
          </p>
          <p className="text-xl text-gray-700">{t("service.servicehirep")}</p>
        </motion.div>
      </motion.div>

      {/* When to Hire Section */}
      <div className="w-full bg-white container mx-auto my-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold max-w-4xl mx-auto text-gray-900 sm:text-5xl mb-6 p-4 text-center"
        >
          {t("service.servicehirsubhf")}
          <span className="text-[#652D90]">{t("service.servicehirsubhh")}</span>
          {t("service.servicehirsubhl")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-[#023a51] to-[#3E4048] p-8 rounded-2xl shadow-xl"
        >
          {[
            {
              title: t("service.servicehirsubhlh1"),
              description: t("service.servicehirsubhlp1"),
            },
            {
              title: t("service.servicehirsubhlh2"),
              description: t("service.servicehirsubhlp2"),
            },
            {
              title: t("service.servicehirsubhlh3"),
              description: t("service.servicehirsubhlp3"),
            },
            {
              title: t("service.servicehirsubhlh4"),
              description: t("service.servicehirsubhlp4"),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="space-y-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <span className="flex items-center text-white gap-3 font-semibold text-xl">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                <h3>{item.title}</h3>
              </span>
              <p className="text-lg text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div id="service-tailored" className="bg-gray-200 py-10">
        <div className="container mx-auto p-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto my-6"
          >
            <h2
              id="flexable-worksolutaion"
              className="text-4xl font-bold text-center text-gray-900 sm:text-5xl mb-6"
            >
              {t("service.servicetaibh")}
              <span className="text-[#652D90]">
                {t("service.servicetaibhh")}{" "}
              </span>
              {t("service.servicetaibl")}
            </h2>
            <p className="text-lg text-center text-gray-600">
              {t("service.servicetaibp")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2"
          >
            {listData.map((list, indx) => (
              <motion.div
                key={indx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-md flex flex-col items-center justify-center hover:shadow-xl shadow-gray-300 transition-all duration-300 cursor-pointer space-y-4 px-3 py-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-center border-b-2 border-blue-200 pb-2">
                  {list.listt}
                </h2>
                <ul className="space-y-3">
                  {list.lists.map((item, indx) => (
                    <li key={indx} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 hover:text-blue-800 transition-colors">
                        {item.list}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              {t("service.serviceexploreh")}{" "}
              <span className="text-[#652D90]">
                {t("service.serviceexplorehh")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("service.serviceexplorep")}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`${service.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative border border-gray-100`}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Link
                    to={service.link}
                    className="relative z-10 cursor-pointer"
                  >
                    <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-[#652D90] font-medium group-hover:text-blue-700 transition-colors duration-300">
                      {service.buttonText}
                      <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Link
                to="/areas-of-work/#services-area"
                className="px-8 py-3 inline-block bg-[#652D90] text-white font-medium rounded-lg hover:bg-[#561686] transition-colors duration-300 mx-auto"
              >
                <span className="flex items-center justify-center">
                  {t("service.serviceexplorebtn")}
                  <ArrowRight className="ml-2" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Hires;
