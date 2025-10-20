import { Send } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import FAQSection from "./FAQSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [workerCount, setWorkerCount] = useState(1);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="min-h-screen pt-5 overflow-x-hidden">
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
          className="max-w-screen-md mx-auto min-h-[400px] space-y-4 mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.p
            className="text-xl font-bold text-[#023a51] my-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            {t("contact.contacth")}
          </motion.p>
          <motion.p
            className="text-4xl md:text-5xl text-[#652D90] font-bold my-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t("contact.contactsubh")}
          </motion.p>
          <motion.p
            className="text-xl text-foreground-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t("contact.contactp")}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-white rounded-xl py-10 px-6 md:px-12 space-y-3 max-w-[700px] mx-auto shadow-2xl -mt-16 relative z-20"
      >
        <motion.div className="pb-4" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center text-[#3D4147]">
            {t("contact.contactget")}
          </h2>
        </motion.div>

        <motion.form
          action="https://formsubmit.co/d2fafb7ddeae73c2f45e67a4d9e54b71"
          method="POST"
          className="space-y-6"
          variants={containerVariants}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://off2.work/thank-you"
          />
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-gray-600 font-medium">
                {t("contact.name")} *
              </label>
              <input
                id="fullName"
                name="name"
                placeholder={t("contact.name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mobile" className="text-gray-600 font-medium">
                {t("contact.phone")} *
              </label>
              <input
                id="mobile"
                name="phone"
                placeholder="091 234 5678*"
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-600 font-medium">
                {t("contact.email")} *
              </label>
              <input
                id="email"
                name="email"
                placeholder="me@mail.com*"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-gray-600 font-medium">
                {t("contact.conpany")} *
              </label>
              <input
                id="company"
                name="company"
                placeholder={t("contact.conpany")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <label className="text-gray-600 font-medium">
              {t("contact.employee")} *
            </label>
            <div className="flex items-center space-x-4">
              <span className="inline-block border px-4 py-2 border-gray-300 rounded-lg bg-gray-50 font-medium min-w-[60px] text-center">
                {workerCount}
              </span>
              <input
                type="range"
                min="1"
                max="150"
                name="employees"
                value={workerCount}
                onChange={(e) => setWorkerCount(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <label htmlFor="message" className="text-gray-600 font-medium">
              {t("contact.sendae")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="I need help with..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#652D90] to-[#652D90]/90 hover:from-[#5e248a] hover:to-[#5e248a]/90 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <Send className="mr-2 h-5 w-5" /> {t("contact.contactbtn")}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <ContactInfo />
      </motion.div>

      <motion.div
        id="faqs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="mt-16"
      >
        <FAQSection />
      </motion.div>
    </div>
  );
};

export default Contact;
