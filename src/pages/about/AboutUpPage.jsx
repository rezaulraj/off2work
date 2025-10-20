import React, { useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import LogoGallery from "../home/LogoGallery";
import ImageShowCase from "./ImageShowCase";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const AboutUpPage = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen pt-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] flex items-center justify-center overflow-hidden p-4"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Off2work/1x/asset2.png')",
            transform: "translateZ(0)",
          }}
        />

        <div className="absolute inset-0 bg-gray-700/10 z-0"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-screen-md mx-auto min-h-[400px] space-y-4 mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl relative z-20"
        >
          <motion.p
            className="text-xl font-bold text-[#023a51] my-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            {t("aboutus.abouth")}
          </motion.p>
          <motion.p
            className="text-4xl md:text-5xl text-[#652D90] font-bold my-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t("aboutus.aboutsh")}
          </motion.p>
          <motion.p
            className="text-xl text-foreground-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t("aboutus.aboutp")}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <ImageShowCase />
      </motion.div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-left text-gray-800 uppercase mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutus.absubh")}
          </motion.h2>

          <motion.div
            className="max-w-screen-md mx-auto space-y-6 rounded-md p-6 bg-white"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg font-medium text-gray-700"
              variants={itemVariants}
            >
              {t("aboutus.absubp1")}
            </motion.p>

            <motion.p
              className="text-lg font-medium text-gray-700"
              variants={itemVariants}
            >
              {t("aboutus.absubp2")}
            </motion.p>

            <motion.div
              className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-8 h-8 text-[#673190] flex-shrink-0 mt-1" />
              <p className="text-lg font-medium text-gray-700">
                {t("aboutus.absubp3")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50 py-16">
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutus.mv")}
          </motion.h2>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661328290790-048ece4f2fec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full rounded-2xl"
            />
            <motion.div
              variants={itemVariants}
              className="glassmorphism-card p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("aboutus.misstionh")}
              </h2>
              <p className="text-gray-700 mb-6">{t("aboutus.missionp1")}</p>
              <div className="space-y-4">
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.missionp2")}</p>
                </motion.div>
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.missionp3")}</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glassmorphism-card p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("aboutus.visstionh")}
              </h2>
              <p className="text-gray-700 mb-6">{t("aboutus.vissionp1")}</p>
              <div className="space-y-4">
                {[t("aboutus.vissionp2"), t("aboutus.vissionp3")].map(
                  (item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661322664763-8ca8887aa96e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <LogoGallery />
      </motion.div>

      {/* Our Offices Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-br from-[#652D90] to-[#023a51]"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutus.our_offices")}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                country: "Romania Office HQ",
                address:
                  "Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4, Ap. 71, Judet Prahova",
                phone: "",
              },
              {
                country: "New Zealand",
                address:
                  "Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037",
                phone: "",
              },
              {
                country: "Australia",
                address: "Level 25, 108 St Georges Terrace, Perth WA 6000",
                phone: "",
              },
              {
                country: "Croatia",
                address: "Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia",
                phone: "+385 91 7831 699",
              },
              {
                country: "North Macedonia",
                address:
                  "'Novoproektirana' bb, 1000, Vladimir Komarov 11a, Skopje 1000, North Macedonia",
                phone: "",
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/20"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {office.country}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">
                      {office.address}
                    </p>
                    {office.phone && (
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-white/20 rounded-full">
                          <FaPhoneAlt className="text-white text-sm" />
                        </div>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-white/80 hover:text-white text-sm transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846321.160561981!2d15.7532153!3d45.3266353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476539839995b4cd%3A0x5e8e1a7a295dfb38!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUpPage;
