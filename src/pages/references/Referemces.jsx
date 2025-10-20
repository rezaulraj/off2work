import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  File,
  HardHat,
  Leaf,
  Link,
  Quote,
  Ship,
  Trees,
  User,
  Users,
} from "lucide-react";
import LogoGallery from "../home/LogoGallery";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import ContactSection from "../home/ContactSection";

const References = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useTranslation();
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      id: 1,
      title: t("clienstory.stepsh1"),
      icon: <Users className="w-8 h-8" />,
      description: t("clienstory.stepsh1p"),
    },
    {
      id: 2,
      title: t("clienstory.stepsh2"),
      icon: <Clipboard className="w-8 h-8" />,
      description: t("clienstory.stepsh2p"),
    },
    {
      id: 3,
      title: t("clienstory.stepsh3"),
      icon: <File className="w-8 h-8" />,
      description: t("clienstory.stepsh3p"),
    },
  ];

  const industries = [
    {
      id: 1,
      title: t("clienstory.indussh1"),
      icon: <Leaf className="w-8 h-8" />,
      description: t("clienstory.indush1p"),
      color: "from-green-100 to-green-50",
      hoverColor: "hover:from-green-200 hover:to-green-100",
      link: "/areas-of-work/#agriculture",
    },
    {
      id: 2,
      title: t("clienstory.indussh2"),
      icon: <HardHat className="w-8 h-8" />,
      description: t("clienstory.indush2p"),
      color: "from-amber-100 to-amber-50",
      hoverColor: "hover:from-amber-200 hover:to-amber-100",
      link: "/areas-of-work/#construction",
    },
    {
      id: 3,
      title: t("clienstory.indussh3"),
      icon: <Trees className="w-8 h-8" />,
      description: t("clienstory.indush3p"),
      hoverColor: "hover:from-brown-200 hover:to-brown-100",
      link: "/areas-of-work/#wood",
    },
    {
      id: 4,
      title: t("clienstory.indussh4"),
      icon: <Ship className="w-8 h-8" />,
      description: t("clienstory.indush4p"),
      color: "from-blue-100 to-blue-50",
      hoverColor: "hover:from-blue-200 hover:to-blue-100",
      link: "/areas-of-work/#shipbuilding",
    },
  ];

  const testimonials = [
    {
      text: t("clienstory.testimonialt1"),
      name: t("clienstory.testimonialn1"),
      company: t("clienstory.testimonialc1"),
    },
    {
      text: t("clienstory.testimonialt2"),
      name: t("clienstory.testimonialn2"),
      company: t("clienstory.testimonialc2"),
    },
    {
      text: t("clienstory.testimonialt3"),
      name: t("clienstory.testimonialn3"),
      company: t("clienstory.testimonialc3"),
    },
    {
      text: t("clienstory.testimonialt4"),
      name: t("clienstory.testimonialn4"),
      company: t("clienstory.testimonialc4"),
    },
    {
      text: t("clienstory.testimonialt5"),
      name: t("clienstory.testimonialn5"),
      company: t("clienstory.testimonialc5"),
    },
    {
      text: t("clienstory.testimonialt6"),
      name: t("clienstory.testimonialn6"),
      company: t("clienstory.testimonialc6"),
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const IndustryCard = ({ industry }) => {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 h-full ${industry.hoverColor}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-90 transition-all duration-500`}
        ></div>

        <div className="relative z-10 p-8 h-full flex flex-col">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="mb-6 p-4 rounded-full bg-white w-16 h-16 flex items-center justify-center"
          >
            {industry.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {industry.title}
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">{industry.description}</p>
          <motion.div
            initial={{ width: 48 }}
            whileHover={{ width: 96 }}
            className="h-1 bg-[#222e3b] mb-6"
          ></motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium transition-all duration-300 hover:bg-[#222e3b] hover:text-white hover:border-[#222e3b]"
          >
            <a href={industry.link}>Learn more</a>
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-5 overflow-hidden">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
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
        <div className="text-start max-w-screen-md mx-auto h-[400px] bg-white/50 backdrop-blur-sm rounded-xl mt-8 p-4 relative z-20">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#023a51] font-bold my-4"
          >
            {t("clienstory.csht")}
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl text-[#652D90] font-bold my-4"
          >
            {t("clienstory.cshs")}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-foreground-muted"
          >
            {t("clienstory.cshp")}
          </motion.p>
        </div>
      </motion.div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {t("clienstory.cssubhf")}{" "}
              <span className="text-[#652D90]">{t("clienstory.cssubhh")}</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {t("clienstory.cssubp")}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#222e3b] to-[#4f5f70]"></div>
                <Quote className="absolute top-6 right-6 text-blue-100 text-6xl" />

                <div className="relative z-10">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <User />
                      </motion.span>
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-[#222e3b]">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronLeft className="text-[#222e3b]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronRight className="text-[#222e3b]" />
            </motion.button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#222e3b] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-center mt-16"
          >
            <a
              href={"/contact"}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#652D90] to-[#652D90]/80 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              {t("clienstory.contactus")}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl max-w-2xl mx-auto font-bold text-gray-900 sm:text-5xl">
              {t("clienstory.proceeshf")}
              <span className="text-[#652D90]">
                {" "}
                {t("clienstory.processhh")}
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 h-1 w-24 bg-[#023a51] mx-auto origin-left"
            ></motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
              className="flex lg:flex-col justify-center gap-4 mb-8 lg:mb-0"
            >
              {steps.map((step) => (
                <motion.button
                  key={step.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-[#3E4247] text-white transform scale-110 shadow-lg"
                      : "bg-white text-[#023a51] border-2 border-blue-200 hover:bg-blue-50"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {activeStep > step.id ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    step.icon
                  )}
                </motion.button>
              ))}
            </motion.div>

            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative h-[500px] md:h-64">
                <AnimatePresence mode="wait">
                  {steps.map(
                    (step) =>
                      activeStep === step.id && (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-6 bg-white rounded-xl shadow-md"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-[#3E4247] mb-4">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 flex-1">
                              {step.description}
                            </p>
                            <div className="flex justify-end mt-4">
                              <span className="text-[#3E4247] font-medium">
                                Step {step.id}/3
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`px-6 py-2 rounded-lg ${
                    activeStep === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-100 text-[#652D90] hover:bg-blue-200"
                  }`}
                >
                  {t("clienstory.preius")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                  disabled={activeStep === 3}
                  className={`px-6 py-2 rounded-lg ${
                    activeStep === 3
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#3E4247] text-white hover:bg-[#3E4247]"
                  }`}
                >
                  {t("clienstory.next")}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {t("clienstory.stafthf")}{" "}
              <span className="text-[#652D90]">{t("clienstory.stafthh")}</span>{" "}
              {t("clienstory.stafthl")}
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {t("clienstory.stafthp")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-center mt-16"
          >
            <a
              href={"/areas-of-work"}
              className="inline-block px-8 py-4 bg-[#652D90]/90 text-white text-lg font-semibold rounded-xl hover:bg-[#652D90] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {t("clienstory.explorei")}
            </a>
          </motion.div>
        </div>
      </div>

      <LogoGallery />
      <ContactSection />
    </div>
  );
};

export default References;
