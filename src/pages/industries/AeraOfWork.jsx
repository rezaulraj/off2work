import React, { useEffect } from "react";
import ServicesSection from "../home/ServicesSection";
import LogoGallery from "../home/LogoGallery";
import ContactSection from "../home/ContactSection";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceItem = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
    >
      <ChevronRight className="mr-2 text-red-700" />
      <span className="font-medium">{service}</span>
    </motion.div>
  );
};

const ImageCard = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full md:w-2/3 h-[300px] md:h-auto relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </motion.div>
  );
};

const TextCard = ({ title, description, services }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full md:w-2/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <h2 className="text-3xl font-bold text-[#652D90] mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const AeraOfWork = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const services = [
    t("areaofwork.aofservice1l1"),
    t("areaofwork.aofservice1l2"),
    t("areaofwork.aofservice1l3"),
  ];
  const services2 = [
    t("areaofwork.aofservice2l1"),
    t("areaofwork.aofservice2l2"),
    t("areaofwork.aofservice2l3"),
  ];
  const services3 = [
    t("areaofwork.aofservice3l1"),
    t("areaofwork.aofservice3l2"),
    t("areaofwork.aofservice3l3"),
  ];
  const services4 = [
    t("areaofwork.aofservice4l1"),
    t("areaofwork.aofservice4l2"),
    t("areaofwork.aofservice4l3"),
  ];
  const services5 = [
    t("areaofwork.aofservice5l1"),
    t("areaofwork.aofservice5l2"),
    t("areaofwork.aofservice5l3"),
  ];
  const services6 = [
    t("areaofwork.aofservice6l1"),
    t("areaofwork.aofservice6l2"),
    t("areaofwork.aofservice6l3"),
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
    <div className="min-h-screen pt-5 overflow-hidden bg-gray-50">
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
        <div className="text-start max-w-screen-md mx-auto h-[400px] bg-white/50 backdrop-blur-sm rounded-xl mt-8 p-4 relative z-20">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-[#023a51] my-4"
          >
            {t("areaofwork.aowht")}
          </motion.p>
          <motion.h1
            id="services-area"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl text-[#652D90] font-bold my-4"
          >
            {t("areaofwork.aowhs")}
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-foreground-muted"
          >
            {t("areaofwork.aowhp")}
          </motion.p>
        </div>
      </motion.div>

      <div
        id="agriculture"
        className="container mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-2 md:mt-20 -mb-10"
      >
        <TextCard
          title={t("areaofwork.agricultureh")}
          description={t("areaofwork.agriculturep")}
          services={services}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/agriculture.jpg"
          alt="Agriculture"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      <div
        id="wood"
        className="container mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30"
      >
        <ImageCard
          src="/images/Off2work/Area-of-Work/wood-industry.jpg"
          alt="Apples in wooden box"
        />
        <TextCard
          title={t("areaofwork.woodh")}
          description={t("areaofwork.woodp")}
          services={services2}
        />
      </div>

      <div
        id="construction"
        className="container mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-30 -mb-10"
      >
        <TextCard
          title={t("areaofwork.contractionh")}
          description={t("areaofwork.contractionp")}
          services={services3}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/construction-and-industry.jpg"
          alt="construction-and-industry"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      <div
        id="shipbuilding"
        className="container mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30"
      >
        <ImageCard
          src="/images/Off2work/Area-of-Work/shipbuilding.jpeg"
          alt="shipbuilding"
        />
        <TextCard
          title={t("areaofwork.shipbuildingh")}
          description={t("areaofwork.shipbuildingp")}
          services={services4}
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-8 md:mt-30 -mb-10">
        <TextCard
          title={t("areaofwork.tourismh")}
          description={t("areaofwork.tourismp")}
          services={services5}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/tourism-and-hospitality.jpg"
          alt="tourism-and-hospitality"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      <div className="container mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30">
        <ImageCard
          src="/images/Off2work/Area-of-Work/Production.jpg"
          alt="Production"
        />
        <TextCard
          title={t("areaofwork.productionh")}
          description={t("areaofwork.productionp")}
          services={services6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#3E3F49] h-[100px] text-center text-white flex items-center justify-center"
      >
        {t("areaofwork.tuastc")}
      </motion.div>
      <LogoGallery />
      <ServicesSection />

      <ContactSection />
    </div>
  );
};

export default AeraOfWork;
