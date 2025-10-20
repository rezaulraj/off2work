import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/logos/l1.png", alt: "Image" },
  { src: "/images/logos/l2.png", alt: "Image" },
  { src: "/images/logos/l3.png", alt: "Image" },
  { src: "/images/logos/l4.png", alt: "Image" },
  { src: "/images/logos/l5.png", alt: "Image" },
  { src: "/images/logos/l6.png", alt: "Image" },
  { src: "/images/logos/l7.png", alt: "Image" },
  { src: "/images/logos/l9.png", alt: "Image" },
  { src: "/images/logos/l10.png", alt: "Image" },
  { src: "/images/logos/l11.png", alt: "Image" },
  { src: "/images/logos/l12.jpeg", alt: "Image" },
  { src: "/images/logos/l13.png", alt: "Image" },
  { src: "/images/logos/l14.png", alt: "Image" },
];

const LogoGallery = () => {
  // Duplicate the array for infinite scroll effect
  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-white py-12">
      <motion.div
        className="flex gap-8 w-max animate-marquee"
        style={{ animationDuration: "30s" }}
      >
        {scrollingLogos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.4,
              rotate: 2,
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="w-32 h-20 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain max-h-16 transition-all duration-300 cursor-pointer" 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Tailwind keyframes for infinite marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoGallery;
