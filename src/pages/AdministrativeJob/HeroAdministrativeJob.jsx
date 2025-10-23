import React from "react";
import { MdArrowCircleDown } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroAdministrativeJob = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/70 to-slate-900/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-emerald-400/40 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto w-full">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white tracking-wide">
              PREMIUM ADMINISTRATIVE CAREERS
            </span>
            <svg
              className="w-4 h-4 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Executive {""}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 my-4">
              Administrative
            </span>{" "}
            Excellence
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
            Discover prestigious administrative roles where precision meets
            professionalism. Join companies that value your organizational
            mastery and executive support expertise.
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto mb-8">
            {[
              "Executive Assistant Roles",
              "Office Management",
              "Virtual Administration",
              "Project Coordination",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to={"/hands-on-jobs"}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center">
                Find Hands-On Jobs
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            <button
              onClick={() => {
                const section = document.querySelector("#job-application");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md bg-white/5 hover:bg-white/10 min-w-[200px] cursor-pointer"
            >
              <span className="flex items-center justify-center">
                View Jobs
                <MdArrowCircleDown className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl animate-float delay-500"></div>
      <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-pink-400/10 rounded-full blur-xl animate-float delay-1500"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroAdministrativeJob;
