import hiaringPopupImage from "./assets/hair.webp";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import Hires from "./pages/services/Hires";
import AeraOfWork from "./pages/industries/AeraOfWork";
import Referemces from "./pages/references/Referemces";
import AboutUpPage from "./pages/about/AboutUpPage";
import Contact from "./pages/contact/Contact";
import TrustedWorkForce from "./pages/services/TrustedWorkForce";
import WorkPermit from "./pages/services/WorkPermit";
import ThankYouPage from "./components/ThankYouPage";
import Carrer from "./pages/carrer/Carrer";
import HandOnJob from "./pages/handson/HandOnJob";
import AdministrativeJob from "./pages/AdministrativeJob/AdministrativeJob";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showHiringPopup, setShowHiringPopup] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("hiringPopupShown");
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowHiringPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRedirectToCareer = () => {
    sessionStorage.setItem("hiringPopupShown", "true");
    sessionStorage.setItem("popupAction", "redirected");
    sessionStorage.setItem("popupTimestamp", new Date().toISOString());

    setShowHiringPopup(false);
    navigate("/carrer");
  };

  const handleCancelPopup = () => {
    sessionStorage.setItem("hiringPopupShown", "true");
    sessionStorage.setItem("popupAction", "cancelled");
    sessionStorage.setItem("popupTimestamp", new Date().toISOString());

    setShowHiringPopup(false);
  };

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };
    const handleComplete = () => {
      NProgress.done();
      setIsLoading(false);
    };

    handleStart();

    const timer = setTimeout(() => {
      handleComplete();
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#023047] flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-0 h-2 bg-[#e9c46a] animate-border-top"></div>
          <div className="absolute top-0 right-0 w-2 h-0 bg-[#e9c46a] animate-border-right"></div>
          <div className="absolute bottom-0 right-0 w-0 h-2 bg-[#e9c46a] animate-border-bottom"></div>
          <div className="absolute bottom-0 left-0 w-2 h-0 bg-[#e9c46a] animate-border-left"></div>
          <span className="absolute inset-0 flex items-center justify-center">
            <img
              src="/off2worklogo.png"
              alt="Loading"
              width={160}
              height={80}
            />
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {showHiringPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100]">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={hiaringPopupImage}
                alt="We're Hiring!"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">We're Hiring!</h2>
                <p className="text-sm opacity-90">Join Our Growing Team</p>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Exciting Career Opportunities Await!
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover rewarding positions in construction, hospitality,
                  welding, and more. Competitive pay, great benefits, and room
                  for growth!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6+</div>
                  <div className="text-xs text-gray-500">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-xs text-gray-500">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRedirectToCareer}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                  View Careers
                </button>
                <button
                  onClick={handleCancelPopup}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Immediate openings available • Weekly pay • Training provided
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services/hires" element={<Hires />} />
          <Route
            path="/services/trustedworkforce"
            element={<TrustedWorkForce />}
          />
          <Route path="/services/workpermit" element={<WorkPermit />} />
          <Route path="/areas-of-work" element={<AeraOfWork />} />
          <Route path="/client-success-stories" element={<Referemces />} />
          <Route path="/about-us" element={<AboutUpPage />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hands-on-jobs" element={<HandOnJob />} />
          <Route path="/administrative-jobs" element={<AdministrativeJob />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 cursor-pointer rounded-full border-2 border-[#E5974A] shadow-lg hover:bg-primary-dark transition-colors z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="size-6 text-[#E5974A]" />
        </motion.button>
      )}
    </>
  );
}

export default App;
