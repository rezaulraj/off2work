import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
  FaPinterestSquare,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowUp } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/off2worklogo.png"
                alt="Off2Work Logo"
                width={160}
                height={45}
                className="h-16 object-contain filter -brightness-300 invert"
              />
            </Link>
            <p className="text-lg leading-relaxed">{t("footer.footert2")}</p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookSquare className="w-6 h-6" />,
                  url: "https://www.facebook.com/off2work",
                },
                {
                  icon: <FaLinkedin className="w-6 h-6" />,
                  url: "https://www.linkedin.com/company/off2-work",
                },
                {
                  icon: <FaTwitterSquare className="w-6 h-6" />,
                  url: "https://x.com/off2_work",
                },
                {
                  icon: <FaPinterestSquare className="w-6 h-6" />,
                  url: "https://in.pinterest.com/off_2_work",
                },
                {
                  icon: <FaYoutube className="w-6 h-6" />,
                  url: "https://www.youtube.com/@Off2Work",
                },
                {
                  icon: <AiFillTikTok className="w-6 h-6" />,
                  url: "https://www.tiktok.com/@off2.work",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#652D90] hover:translate-y-2 transition-transform duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white/80 uppercase tracking-wider">
              {t("footer.fquilern")}
            </h3>
            <ul className="space-y-3">
              {[
                { text: t("footer.service"), path: "/services/hires" },
                { text: t("footer.areow"), path: "/areas-of-work" },
                { text: t("footer.clents"), path: "/client-success-stories" },
                { text: t("footer.abous"), path: "/about-us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start"
                  >
                    <span className="mr-2">•</span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white/80 uppercase tracking-wider">
              {t("footer.support")}
            </h3>
            <ul className="space-y-3">
              {[
                { text: t("footer.faqs"), path: "/contact/#faq" },
                { text: t("footer.cdum"), path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start"
                  >
                    <span className="mr-2">•</span>
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="inline-flex px-4 py-2 hover:bg-[#652D90] text-xl rounded-full items-center gap-3 bg-gray-600 justify-center">
                <IoMailOutline />
                info@off2.work
              </li>
              <li className="inline-flex px-4 py-2 hover:bg-[#652D90] text-xl rounded-full items-center gap-3 bg-gray-600 justify-center">
                <IoMailOutline />
                contact@off2.work
              </li>
              <li className="inline-flex px-4 py-2 hover:bg-[#652D90] text-xl rounded-full items-center gap-3 bg-gray-600 justify-center">
                <LuPhone className="" />
                +385 91 7831 699
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white/80 uppercase tracking-wider">
              {t("footer.address")}
            </h3>
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
                phone: "+385 91 7831 699",
              },
            ].map((office, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white/80">
                      {office.country}
                    </h4>
                    <p className="text-gray-400 text-sm">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-center">
          <p className="text-gray-500 text-center text-lg">
            © {new Date().getFullYear()} Off2Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
