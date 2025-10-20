import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ImageShowCase = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const accentBarVariants = {
    hidden: { height: 0 },
    visible: {
      height: "130px",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="bg-[#3E3F48] relative z-10 h-[650px] pt-15 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-[1250px] mx-auto relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 h-full">
        <motion.div
          className="relative w-[80%] md:w-[500px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl z-20"
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
            hover: {
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            },
          }}
          whileHover="hover"
        >
          <img
            src="/images/Off2work/About/01.jpg"
            alt="Professional workforce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            {/* <motion.h3
              className="text-white text-2xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t("aboutus.bild")}
            </motion.h3> */}
          </div>
        </motion.div>

        <motion.div
          className="relative w-32 h-32 md:w-72 md:h-72 rounded-xl overflow-hidden md:absolute md:bottom-16 md:left-10 shadow-2xl"
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            src="/images/Off2work/About/02.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium text-sm">{t("aboutus.team")}</span>
          </div> */}
        </motion.div>
        <motion.div
          className="relative w-32 h-32 md:w-72 md:h-72 rounded-xl overflow-hidden md:absolute md:top-16 md:right-10 shadow-2xl"
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            src="/images/Off2work/About/03.jpg"
            alt="Global network"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium text-sm"> {t("aboutus.gobal")}</span>
          </div> */}
        </motion.div>
      </div>

      <motion.div
        className="bg-[#652D90] w-full h-[130px] bottom-0 absolute -z-10"
        variants={accentBarVariants}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-px bg-white/20"
              style={{
                left: `${(i + 1) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ImageShowCase;
