import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./staggerContainer";
import { useTranslation } from "react-i18next";
const HeroPage = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setVideoSrc("/Th-consulting-video.mp4");
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {videoSrc && (
            <>
              <source src={videoSrc} type="video/mp4" />
              <source src="/Th-consulting-video.webm" type="video/webm" />
            </>
          )}
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.5 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0"
      >
        <img
          src="/hero-bg-removebg-preview.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#023a51] via-[#023a51]/70 to-[#023a51]/30 z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#023a51]/80 to-[#023a51]/10 z-20"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={loaded ? "show" : "hidden"}
        className="relative z-30 text-start text-white px-4 sm:px-8  max-w-[1200px] mx-auto"
      >
        <div className="max-w-[800px]">
          <motion.div variants={textVariant(0.2)}>
            <motion.h1
              className="text-4xl sm:text-4xl md:text-5xl py-4 font-bold leading-tight"
              whileHover={{ scale: 1.01 }}
            >
              {t("home.herohead")}
              <span className="text-blue-300">{t("home.heroheadhi")}</span>{" "}
              {t("home.heroheadhl")}
            </motion.h1>
          </motion.div>

          <motion.div variants={textVariant(0.4)}>
            <motion.p
              className="mt-6 text-md md:text-xl font-medium text-gray-100 max-w-[700px]"
              whileHover={{ scale: 1.01 }}
            >
              {t("home.herop")}
            </motion.p>
          </motion.div>

          <motion.div variants={textVariant(0.6)} className="mt-10">
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-4 bg-gradient-to-r from-[#023a51] to-[#642D91] hover:from-[#642D91] hover:to-[#023a51] uppercase font-semibold text-white rounded-lg text-sm md:text-lg shadow-lg"
            >
              {t("home.herobtn")}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroPage;
