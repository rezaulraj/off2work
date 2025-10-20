import React from "react";
import HeroPage from "./HeroPage";
import ServicesSection from "./ServicesSection";
import LogoGallery from "./LogoGallery";
import WorkerSection from "./WorkerSection";
import HiringProcess from "./HiringProcess";
import ContactSection from "./ContactSection";
import PartnerService from "./PartnerService";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroPage />
      <ServicesSection />
      <PartnerService />
      <LogoGallery />
      <WorkerSection />
      <HiringProcess />
      <ContactSection />
    </div>
  );
};

export default HomePage;
