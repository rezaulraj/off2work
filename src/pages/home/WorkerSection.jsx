import React from "react";
import {
  CheckCircle2,
  Video,
  Mic,
  Users,
  CalendarCheck,
  Clock,
  UserCheck,
  Briefcase,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "./staggerContainer";
import { useTranslation } from "react-i18next";

const WorkerSection = () => {
  const { t } = useTranslation();
  const features = [
    t("home.partnerl1"),
    t("home.partnerl2"),
    t("home.partnerl3"),
  ];

  const floatingBubbles = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    opacity: [0, 0.2 + Math.random() * 0.3, 0],
  }));

  const interviewFeatures = [
    {
      icon: <Video className="w-8 h-8 " />,
      title: t("home.liveFeature1"),
      description: t("home.liveFeatured1"),
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: t("home.liveFeature2"),
      description: t("home.liveFeatured2"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("home.liveFeature3"),
      description: t("home.liveFeatured3"),
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: t("home.liveFeature4"),
      description: t("home.liveFeatured4"),
    },
  ];

  const seasonalFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-[#652D90]" />,
      title: t("home.seasonalFeature1"),
      description: t("home.seasonalFeatureDesc1"),
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#652D90]" />,
      title: t("home.seasonalFeature2"),
      description: t("home.seasonalFeatureDesc2"),
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#652D90]" />,
      title: t("home.seasonalFeature3"),
      description: t("home.seasonalFeatureDesc3"),
    },
    {
      icon: <Clock className="w-6 h-6 text-[#652D90]" />,
      title: t("home.seasonalFeature4"),
      description: t("home.seasonalFeatureDesc4"),
    },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Seasonal Workers Section - Redesigned */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#f0f8ff] to-[#e6f2ff]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#023a51]/5 clip-path-polygon-[0_0,_100%_0,_100%_100%,_30%_100%]"></div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  duration: 8 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                },
              }}
              className="absolute rounded-full bg-[#023a51]/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block bg-[#652D90]/10 px-4 py-2 rounded-full">
              <p className="text-[#652D90] font-bold uppercase tracking-wider text-sm">
                {t("home.seasonalSubtitle")}
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#652D90] leading-tight">
              {t("home.seasonalwh")}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t("home.seasonalwp")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {seasonalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#652D90]/10 p-3 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#652D90] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const section = document.querySelector("#get-in-touch");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-[#652D90] hover:bg-[#5e248a] text-white px-8 py-4 rounded-lg font-medium tracking-wide shadow-lg transition-all duration-300 cursor-pointer flex items-center space-x-2"
            >
              <span>{t("home.seasonalwbtn")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-[#023a51]/10 rounded-3xl overflow-hidden transform rotate-1">
              <img
                src="/images/Off2work/seasonal-workers-from-our-network.jpeg"
                alt="Seasonal Workers Network"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#023a51]/10 rounded-3xl overflow-hidden transform -rotate-1 scale-95">
              <img
                src="/images/Off2work/seasonal-workers-from-our-network.jpeg"
                alt="Seasonal Workers Network"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/Off2work/seasonal-workers-from-our-network.jpeg"
                alt="Seasonal Workers Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023a51]/70 to-transparent flex items-end p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl max-w-md">
                  <h3 className="text-2xl font-bold text-[#023a51] mb-2">
                    {t("home.seasonalNetworkTitle")}
                  </h3>
                  <p className="text-gray-700">
                    {t("home.seasonalNetworkDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative z-20 py-16 px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-20 left-20 w-40 h-40 bg-[#023a51]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 md:mt-0"
          >
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.75 }}
                transition={{ duration: 0.8 }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-teal-900/5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"
              ></motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src="/images/Off2work/your-partner-in-boosting-productivity-and-growth.jpg"
                alt="Productivity Partner"
                className="relative rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-[1.03] w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-start mt-12 md:mt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-[#652D90]"
            >
              {t("home.partnerh")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray-700 bg-gray-100/50 rounded-md p-4 leading-relaxed"
            >
              {t("home.partnerp")}
            </motion.p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="text-[#652D90] w-7 h-7 flex-shrink-0 mt-1 group-hover:text-[#035b7a] transition-colors" />
                  </motion.div>
                  <p className="text-gray-700 text-base group-hover:text-gray-900 transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 py-24 px-6 md:px-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Off2work/live-interview-service.jpg"
            alt="Live Interview Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3E3F48]/90 to-[#023a51]/90"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 max-w-screen-xl mx-auto text-center"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t("home.liveInterh")}
          </motion.h2>

          <motion.p
            variants={textVariant(0.4)}
            className="mb-12 text-lg leading-relaxed max-w-3xl mx-auto opacity-90"
          >
            {t("home.liveInterp")}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {interviewFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={zoomIn(0.6, 1)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f8f9fa",
              color: "#023a51",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#652D90] hover:bg-gray-100 px-8 py-3 uppercase rounded-full font-bold tracking-wide shadow-md transition-all text-xl duration-300 cursor-pointer"
            onClick={() => {
              const section = document.querySelector("#get-in-touch");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("home.getint")}
          </motion.button>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-30 z-0"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="absolute top-1/4 right-20 w-6 h-6 bg-white rounded-full opacity-20 z-0"
        />
      </section>
    </div>
  );
};

export default WorkerSection;
