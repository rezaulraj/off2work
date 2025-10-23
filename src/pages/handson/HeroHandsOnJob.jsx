import React from "react";
import { Link } from "react-router-dom";

const HeroHandsOnJob = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-300 text-sm font-medium">
              Find Your Perfect Hands-On Career
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              With Your Hands
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover skilled trades, craftsmanship, and hands-on careers that
            shape our world. From construction to creative arts, find
            opportunities that match your passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => {
                const section = document.querySelector("#job-position");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 border-2 border-blue-700/30 hover:border-blue-700/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md bg-blue-700 hover:bg-blue-800 min-w-[200px] cursor-pointer"
            >
              <span className="flex items-center justify-center">
                View Jobs
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </span>
            </button>

            <Link
              to={"/administrative-jobs"}
              className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
            >
              <span className="flex items-center justify-center">
                Find Administrative Jobs
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">14+</div>
              <div className="text-gray-300 text-sm">Active Jobs</div>
            </div>
            <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">5K+</div>
              <div className="text-gray-300 text-sm">
                Skilled Employer Places
              </div>
            </div>
            <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroHandsOnJob;
