import React, { useState } from "react";
import { Clock, Send, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./staggerContainer";
import { useTranslation } from "react-i18next";
import contactImage from "../../assets/contactimage.jpg";

const ContactSection = () => {
  const [workerCount, setWorkerCount] = useState(1);
  const { t } = useTranslation();

  return (
    <section
      id="get-in-touch"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(62, 64, 72, 0.9), rgba(62, 64, 72, 0.9)), url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#652D90]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#1498D4]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F5AD59]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.h2
              variants={textVariant(0.1)}
              className="text-3xl font-bold text-[#652D90] mb-6"
            >
              {t("contact.homelocationh")}
            </motion.h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#3E4048] mb-4">
                  {t("contact.officel")}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Romania Office HQ",
                      address:
                        "Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4, Ap. 71, Judet Prahova",
                    },
                    {
                      title: "Croatia Office",
                      address:
                        "Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia",
                    },
                    {
                      title: "New Zealand",
                      address:
                        "Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037",
                    },
                    {
                      title: "Australia",
                      address:
                        "Level 25, 108 St Georges Terrace, Perth WA 6000",
                    },
                    {
                      title: "North Macedonia",
                      address:
                        "'Novoproektirana' bb, 1000, Vladimir Komarov 11a, Skopje 1000, North Macedonia",
                    },
                  ].map((location, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="p-4 rounded-lg bg-gray-50/80 border border-gray-100 backdrop-blur-sm"
                    >
                      <p className="text-lg font-semibold text-[#3E4048] flex items-center gap-3">
                        <span className="text-[#1498D4]">
                          <MapPin />
                        </span>
                        {location.title}
                      </p>
                      <p className="text-gray-600 mt-1">{location.address}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gray-50/80 border border-gray-100 backdrop-blur-sm"
                >
                  <h4 className="font-semibold text-lg text-[#3E4048] mb-3">
                    Contact Info:
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@off2.work"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#652D90] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#1498D4]" />
                      info@off2.work
                    </a>
                    <a
                      href="mailto:contact@off2.work"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#652D90] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#1498D4]" />
                      contact@off2.work
                    </a>
                    <a
                      href="tel:+385917831699"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#652D90] transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#1498D4]" />
                      +385 91 7831 699
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gray-50/80 border border-gray-100 backdrop-blur-sm"
                >
                  <h4 className="font-semibold text-lg text-[#3E4048] mb-3">
                    Working Hours
                  </h4>
                  <div className="flex items-center gap-4 text-gray-700">
                    <Clock className="w-5 h-5 text-[#1498D4]" />
                    <div>
                      <p>Monday - Friday</p>
                      <p>8:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="bg-gradient-to-br md:flex flex-col items-center justify-center from-[#652D90]/90 to-[#3E4048]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white border border-white/10"
          >
            <div className="mb-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-2"
              >
                {t("contact.contactget")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-200"
              >
                {t("contact.hometouch")}
              </motion.p>
            </div>

            <motion.form
              action="https://formsubmit.co/d2fafb7ddeae73c2f45e67a4d9e54b71"
              method="POST"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://off2.work/thank-you"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-gray-200">
                    {t("contact.name")} *
                  </label>
                  <input
                    id="fullName"
                    name="name"
                    placeholder={t("contact.name")}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#F5AD59] focus:border-[#F5AD59] outline-none transition-all placeholder-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mobile" className="block text-gray-200">
                    {t("contact.phone")} *
                  </label>
                  <input
                    id="mobile"
                    name="phone"
                    placeholder="091 234 5678*"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#F5AD59] focus:border-[#F5AD59] outline-none transition-all placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-200">
                    {t("contact.email")}*
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="ime@mail.com*"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#F5AD59] focus:border-[#F5AD59] outline-none transition-all placeholder-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-gray-200">
                    {t("contact.conpany")} *
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder={t("contact.conpany")}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#F5AD59] focus:border-[#F5AD59] outline-none transition-all placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-200">
                  {t("contact.employee")} *
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="150"
                    value={workerCount}
                    name="employees"
                    onChange={(e) => setWorkerCount(e.target.value)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F5AD59]"
                  />
                  <span className="text-white font-medium w-12 text-center">
                    {workerCount}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-200">
                  {t("contact.textare")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.textare")}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#F5AD59] focus:border-[#F5AD59] outline-none transition-all placeholder-gray-300"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 15px rgba(245, 173, 89, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#F5AD59] to-[#F5AD59]/90 hover:from-[#e69d4f] hover:to-[#e69d4f]/90 text-[#3E4048] py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" /> {t("contact.contactbtn")}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
