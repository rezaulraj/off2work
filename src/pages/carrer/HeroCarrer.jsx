import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroCarrer = () => {
  const [activeJobsCount, setActiveJobsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);
  const fetchJobs = async () => {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Off2Work"
    );
    const data = response.data;
    const activeJobs = data.filter((job) => job.Status === "Active");
    setActiveJobsCount(activeJobs.length);
    const uniqueCountries = [...new Set(data.map((job) => job.Country))];
    setLocationsCount(uniqueCountries.length);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 mx-auto">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-white text-sm font-medium">
            We're Hiring! Multiple Positions Open
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Build Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block lg:inline">
            {" "}
            Career
          </span>{" "}
          With Purpose
        </h1>

        <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join our mission to create innovative solutions and make a real
          impact. Grow professionally while working on cutting-edge projects.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {activeJobsCount}+
            </div>
            <div className="text-gray-300 text-sm">Open Positions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {locationsCount}+
            </div>
            <div className="text-gray-300 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-300 text-sm">Placement Guarantee</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
          <Link
            to="/hands-on-jobs"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span>Hands-on Jobs</span>
            <svg
              className="w-5 h-5 ml-2"
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
          </Link>

          <Link
            to="/administrative-jobs"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <span>Administrative & Management Jobs</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute top-20 right-20 w-8 h-8 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-pulse delay-75"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse delay-150"></div>
      <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-cyan-300 rounded-full opacity-25 animate-pulse delay-100"></div>
    </div>
  );
};

export default HeroCarrer;
