import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, File, Handshake, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactSection from "../home/ContactSection";

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

// const cardHover = {
//   hover: {
//     y: -10,
//     boxShadow:
//       "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//   },
// };

const TrustedWorkForce = () => {
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
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      link: "/client-success-stories",
    },
  ];

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
    <div className="min-h-screen pt-5">
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
          className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl relative z-20"
        >
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-bold text-[#023a51] my-4"
          >
            {t("service.servicewfh")}
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-4xl md:text-5xl text-[#652D90] font-bold my-4"
          >
            {t("service.servicewfsh")}
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl text-gray-700"
          >
            {t("service.servicewfp")}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* When to Hire Section */}
      <div className="w-full bg-white container mx-auto my-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl max-w-2xl mx-auto leading-tight font-bold text-gray-900 sm:text-5xl mb-6"
        >
          {t("service.servicewfsubh")}
          <span className="text-[#652D90]">
            {" "}
            {t("service.servicewfsubhh")}{" "}
          </span>
          {t("service.servicewfsubhl")}
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
              title: t("service.servicewfsublh1"),
              description: t("service.servicewfsublp1"),
            },
            {
              title: t("service.servicewfsublh2"),
              description: t("service.servicewfsublp2"),
            },
            {
              title: t("service.servicewfsublh3"),
              description: t("service.servicewfsublp3"),
            },
            {
              title: t("service.servicewfsublh4"),
              description: t("service.servicewfsublp4"),
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
              <p className="text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        id="services-taiload"
        className="bg-gradient-to-b from-gray-100 to-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <h2
              id="flexable-worksolutaion"
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4"
            >
              {t("service.servicewfsubth")}{" "}
              <span className="text-[#652D90]">
                {t("service.servicewfsubtsh")}
              </span>{" "}
              {t("service.servicewfsubtl")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("service.servicewfsubtp")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {listData.map((list, indx) => (
              <motion.div
                key={indx}
                variants={itemVariants}
                whileHover="hover"
                // variants={cardHover}
                className="bg-white rounded-xl shadow-lg flex flex-col p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <h2 className="text-xl font-bold text-center text-gray-800 border-b-2 border-blue-100 pb-3 mb-4">
                  {list.listt}
                </h2>
                <ul className="space-y-4">
                  {list.lists.map((item, indx) => (
                    <motion.li
                      key={indx}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{item.list}</p>
                    </motion.li>
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
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              {t("service.expoloserwfhf")}{" "}
              <span className="text-[#652D90]">
                {t("service.expoloserwfhh")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("service.expoloserwfp")}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  // variants={cardHover}
                  className={`${service.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100`}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Link
                    to={service.link}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#652D90] font-medium hover:text-blue-700 transition-colors duration-300">
                      <span>{service.buttonText}</span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-2"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <Link
                to="/areas-of-work/#services-area"
                className="px-8 py-3 bg-gradient-to-r from-[#652D90] to-[#652D90]/90 text-white font-medium rounded-lg hover:from-[#5e248a] hover:to-[#5e248a]/90 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
              >
                <span>{t("service.serviceexplorebtn")}</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center space-x-4"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: item * 0.2,
                }}
                className={`w-3 h-3 rounded-full ${
                  item === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div> */}
        </div>
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default TrustedWorkForce;
