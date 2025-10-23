import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaUserFriends,
  FaGlobe,
  FaBriefcase,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";
import { PiGenderFemaleBold } from "react-icons/pi";

const JobApplying = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    availability: "Immediate",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeShareDropdown, setActiveShareDropdown] = useState(null);
  const fileInputRef = useRef(null);

  // Country code mapping for react-country-flag
  const countryCodeMap = {
    Romania: "RO",
    Poland: "PL",
    Germany: "DE",
    Malta: "MT",
    Cyprus: "CY",
    Greece: "GR",
    Italy: "IT",
    Spain: "ES",
    Hungary: "HU",
    Portugal: "PT",
    "Czech Republic": "CZ",
  };

  const jobs = [
    {
      id: 1,
      title: "Construction Laborer",
      department: "Construction",
      type: "Full-time",
      salary: "$18 - $25/hour",
      experience: "0-2 years",
      description:
        "Perform various physical tasks at construction sites including material handling, site cleanup, and assisting skilled trades.",
      requirements: [
        "Physical Stamina",
        "Basic Tools Knowledge",
        "Teamwork",
        "Safety Awareness",
      ],
      posted: "1 day ago",
      urgency: "Urgent",
      shift: "Day Shift",
      vacancies: 8,
      employeeNationality: ["Nepal", "Sri Lanka", "Bangladesh"],
      destinationCountry: "Romania",
      gender: "Male",
      contractDuration: "12 months",
    },
    {
      id: 2,
      title: "Warehouse Associate",
      department: "Logistics",
      type: "Full-time",
      salary: "$16 - $22/hour",
      experience: "Entry Level",
      description:
        "Handle receiving, storing, and shipping products in a fast-paced warehouse environment.",
      requirements: [
        "Lifting 50+ lbs",
        "Forklift Certified",
        "Inventory Management",
        "Attention to Detail",
      ],
      posted: "3 days ago",
      urgency: "High",
      shift: "Various Shifts",
      vacancies: 12,
      employeeNationality: ["India", "Pakistan", "Philippines"],
      destinationCountry: "Malta",
      gender: "Male",
      contractDuration: "24 months",
    },
    {
      id: 3,
      title: "Landscape Laborer",
      department: "Landscaping",
      type: "Seasonal",
      salary: "$15 - $20/hour",
      experience: "Entry Level",
      description:
        "Perform landscaping duties including mowing, planting, trimming, and general grounds maintenance.",
      requirements: [
        "Physical Fitness",
        "Outdoor Work",
        "Basic Equipment Operation",
        "Team Player",
      ],
      posted: "2 days ago",
      urgency: "Medium",
      shift: "Day Shift",
      vacancies: 5,
      employeeNationality: ["Nepal", "Sri Lanka"],
      destinationCountry: "Spain",
      gender: "Male",
      contractDuration: "6 months",
    },
    {
      id: 4,
      title: "General Laborer",
      department: "Manufacturing",
      type: "Temp-to-Hire",
      salary: "$17 - $23/hour",
      experience: "0-1 year",
      description:
        "Assist in production line operations, material handling, and general factory maintenance tasks.",
      requirements: [
        "Basic Math",
        "Mechanical Aptitude",
        "Quality Focus",
        "Reliability",
      ],
      posted: "5 days ago",
      urgency: "High",
      shift: "Night Shift",
      vacancies: 6,
      employeeNationality: ["Bangladesh", "India"],
      destinationCountry: "Hungary",
      gender: "Male",
      contractDuration: "18 months",
    },
    {
      id: 5,
      title: "Mover / Helper",
      department: "Moving Services",
      type: "Part-time",
      salary: "$15 - $19/hour + Tips",
      experience: "Entry Level",
      description:
        "Assist with residential and commercial moving jobs, loading/unloading trucks, and furniture assembly.",
      requirements: [
        "Heavy Lifting",
        "Customer Service",
        "Driving Record",
        "Physical Strength",
      ],
      posted: "Just now",
      urgency: "Urgent",
      shift: "Flexible",
      vacancies: 4,
      employeeNationality: ["Philippines", "Sri Lanka"],
      destinationCountry: "Portugal",
      gender: "Male",
      contractDuration: "12 months",
    },
    {
      id: 6,
      title: "Production Assistant",
      department: "Manufacturing",
      type: "Full-time",
      salary: "$16 - $21/hour",
      experience: "0-2 years",
      description:
        "Support production operations by performing assembly tasks, quality checks, and material preparation.",
      requirements: [
        "Hand Tools",
        "Quality Control",
        "Assembly Skills",
        "Fast Learner",
      ],
      posted: "1 week ago",
      urgency: "Medium",
      shift: "Day Shift",
      vacancies: 10,
      employeeNationality: ["Nepal", "India", "Bangladesh"],
      destinationCountry: "Poland",
      gender: "Female",
      contractDuration: "24 months",
    },
  ];

  const socialMediaPlatforms = [
    {
      name: "Facebook",
      icon: <FaFacebook className="w-5 h-5" />,
      color: "hover:bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      shareUrl: (job) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}&quote=Check out this job opening: ${job.title} in ${
          job.destinationCountry
        } - ${job.salary}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      color: "hover:bg-blue-50 border-blue-100",
      iconColor: "text-blue-500",
      shareUrl: (job) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          window.location.href
        )}&summary=${encodeURIComponent(
          `${job.title} - ${job.department} - ${job.destinationCountry} - ${job.salary}`
        )}`,
    },
    {
      name: "Twitter",
      icon: <FaX className="w-5 h-5" />,
      color: "hover:bg-sky-50 border-sky-100",
      iconColor: "text-sky-500",
      shareUrl: (job) =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Check out this job: ${job.title} in ${job.destinationCountry} - ${job.salary}`
        )}&url=${encodeURIComponent(window.location.href)}`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: "hover:bg-green-50 border-green-100",
      iconColor: "text-green-600",
      shareUrl: (job) =>
        `https://wa.me/?text=${encodeURIComponent(
          `Check out this job opening: ${job.title} - ${job.destinationCountry}. ${job.salary}. Apply now: ${window.location.href}`
        )}`,
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-5 h-5" />,
      color: "hover:bg-blue-50 border-blue-100",
      iconColor: "text-blue-400",
      shareUrl: (job) =>
        `https://t.me/share/url?url=${encodeURIComponent(
          window.location.href
        )}&text=${encodeURIComponent(
          `Job Opportunity: ${job.title} - ${job.destinationCountry}`
        )}`,
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      color: "hover:bg-gray-50 border-gray-100",
      iconColor: "text-gray-600",
      shareUrl: (job) =>
        `mailto:?subject=${encodeURIComponent(
          `Job Opportunity: ${job.title}`
        )}&body=${encodeURIComponent(
          `Check out this job opening:\n\nPosition: ${job.title}\nDestination: ${job.destinationCountry}\nType: ${job.type}\nSalary: ${job.salary}\nDepartment: ${job.department}\n\nApply here: ${window.location.href}`
        )}`,
    },
  ];

  const openPopup = (job) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setUploadProgress(0);
    setActiveShareDropdown(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      resume: null,
      availability: "Immediate",
      message: "",
    });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedJob(null);
    setActiveShareDropdown(null);
  };

  const toggleShareDropdown = (jobId) => {
    setActiveShareDropdown(activeShareDropdown === jobId ? null : jobId);
  };

  const handleSocialShare = (platform, job, e) => {
    e.stopPropagation();
    const shareUrl = platform.shareUrl(job);
    window.open(shareUrl, "_blank", "width=600,height=400");
    setActiveShareDropdown(null);
  };

  const copyJobLink = (job, e) => {
    e.stopPropagation();
    const jobUrl = `${window.location.href}#job-${job.id}`;
    navigator.clipboard.writeText(jobUrl).then(() => {
      const button = e.target;
      const originalText = button.innerHTML;
      button.innerHTML = `
        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Copied!</span>
      `;
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    });
    setActiveShareDropdown(null);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadProgress(0);
      const fileSize = file.size;
      const maxSize = 5 * 1024 * 1024;

      if (fileSize > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }

      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setFormData((prev) => ({ ...prev, resume: file }));
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, resume: null }));
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    for (let i = 0; i <= 100; i += 20) {
      setUploadProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    console.log("Application submitted:", { job: selectedJob, ...formData });
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      closePopup();
    }, 3000);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "Urgent":
        return "bg-red-500 text-white";
      case "High":
        return "bg-orange-500 text-white";
      case "Medium":
        return "bg-yellow-500 text-gray-800";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const getVacancyColor = (vacancies) => {
    if (vacancies <= 3) return "text-red-600 bg-red-50 border-red-200";
    if (vacancies <= 6) return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".share-dropdown")) {
        setActiveShareDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="job-position"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            International Labor Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immediate openings for hardworking individuals from various
            countries. Start your international career today.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            🌍 International Placement
          </span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            💼 Multiple Positions
          </span>
          <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            ⚡ Quick Hiring
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 overflow-hidden transform hover:-translate-y-2 relative flex flex-col"
          >
            {/* Destination Country Flag & Name - Top Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 text-white">
              <div className="flex items-center justify-center gap-3">
                <ReactCountryFlag
                  countryCode={countryCodeMap[job.destinationCountry]}
                  svg
                  style={{
                    width: "32px",
                    height: "24px",
                    borderRadius: "4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                  title={job.destinationCountry}
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">
                    Destination: {job.destinationCountry}
                  </h3>
                </div>
              </div>
            </div>

            {/* Job Title Section */}
            <div className="p-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <h3 className="text-xl max-w-[60%] drop-shadow-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-lg drop-shadow-2xl flex items-center font-semibold ${getVacancyColor(
                  job.vacancies
                )}`}
              >
                <FaUserFriends className="inline w-4 h-4 mr-1" />
                {job.vacancies} {job.vacancies === 1 ? "Vacancy" : "Vacancies"}
              </span>
            </div>

            <div className="p-6 flex-1">
              {/* Employee Nationality Section */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm uppercase tracking-wide">
                  <FaGlobe className="w-4 h-4 mr-2 text-blue-500" />
                  Employee Nationality
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.employeeNationality.map((nationality, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-shadow"
                    >
                      {nationality}
                    </span>
                  ))}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(
                      job.urgency
                    )}`}
                  >
                    {job.urgency}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed border-l-4 border-blue-200 pl-3">
                {job.description}
              </p>

              {/* Job Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-700">
                  <FaBriefcase className="w-3 h-3 mr-2 text-blue-500" />
                  <span className="font-semibold mr-1">Dept:</span>
                  <span className="text-gray-600">{job.department}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaClock className="w-3 h-3 mr-2 text-green-500" />
                  <span className="font-semibold mr-1">Type:</span>
                  <span className="text-gray-600">{job.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg
                    className="w-3 h-3 mr-2 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold mr-1">Shift:</span>
                  <span className="text-gray-600">{job.shift}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <PiGenderFemaleBold className="w-3 h-3 mr-2" />

                  <span className="font-semibold mr-1">Gender:</span>
                  <span className="text-gray-600">{job.gender}</span>
                </div>
              </div>

              {/* Salary and Urgency */}
              <div className="flex justify-between items-center mb-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <div className="flex items-center text-sm">
                  <FaMoneyBillWave className="w-3 h-3 mr-1 text-green-500" />
                  <span className="font-semibold text-gray-700">Salary:</span>
                  <span className="text-green-600 font-bold ml-1">
                    {job.salary}
                  </span>
                </div>
              </div>

              {/* Requirements Section */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Requirements:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-200 transition-colors"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section with Apply, Share, and Posted Date */}
            <div className="px-6 pb-6 pt-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">{job.posted}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="share-dropdown relative">
                    <button
                      onClick={() => toggleShareDropdown(job.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50 cursor-pointer border border-gray-200 hover:border-blue-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Share</span>
                    </button>

                    {activeShareDropdown === job.id && (
                      <div className="absolute bottom-full mb-2 -right-6 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 animate-scale-in z-10">
                        <div className="space-y-2">
                          <button
                            onClick={(e) => copyJobLink(job, e)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-gray-900 text-sm">
                                Copy Job Link
                              </div>
                              <div className="text-gray-500 text-xs">
                                Share via any platform
                              </div>
                            </div>
                          </button>
                          <div className="grid grid-cols-2 gap-2">
                            {socialMediaPlatforms.map((platform) => (
                              <button
                                key={platform.name}
                                onClick={(e) =>
                                  handleSocialShare(platform, job, e)
                                }
                                className={`flex items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${platform.color} group`}
                              >
                                <span
                                  className={`text-lg ${platform.iconColor}`}
                                >
                                  {platform.icon}
                                </span>
                                <span className="font-medium text-gray-700 text-sm">
                                  {platform.name}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => openPopup(job)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of the code remains the same for the popup modal */}
      {isPopupOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-in">
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Thank you for applying to the{" "}
                  <strong className="text-blue-600">{selectedJob.title}</strong>{" "}
                  position in {selectedJob.destinationCountry}.
                </p>
                <p className="text-gray-500 mb-8">
                  We've received your application and will contact you within
                  2-3 business days.
                </p>
                <button
                  onClick={closePopup}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Apply for {selectedJob.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 flex-wrap">
                      <div className="flex items-center">
                        <ReactCountryFlag
                          countryCode={
                            countryCodeMap[selectedJob.destinationCountry]
                          }
                          svg
                          style={{
                            width: "20px",
                            height: "15px",
                            marginRight: "8px",
                          }}
                          title={selectedJob.destinationCountry}
                        />
                        <span className="font-semibold">
                          {selectedJob.destinationCountry}
                        </span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">
                        {selectedJob.department}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getVacancyColor(
                          selectedJob.vacancies
                        )}`}
                      >
                        <FaUserFriends className="inline w-3 h-3 mr-1" />
                        {selectedJob.vacancies}{" "}
                        {selectedJob.vacancies === 1 ? "Vacancy" : "Vacancies"}{" "}
                        Left
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closePopup}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>

                {/* International Placement Details in Popup */}
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-emerald-800">
                    <FaGlobe className="w-4 h-4 mr-2" />
                    International Placement Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">
                        Nationality:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedJob.employeeNationality.map(
                          (nationality, index) => (
                            <span
                              key={index}
                              className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                            >
                              {nationality}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Destination:
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <ReactCountryFlag
                          countryCode={
                            countryCodeMap[selectedJob.destinationCountry]
                          }
                          svg
                          style={{
                            width: "20px",
                            height: "15px",
                          }}
                          title={selectedJob.destinationCountry}
                        />
                        <span className="text-gray-600 font-medium">
                          {selectedJob.destinationCountry}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Gender:</span>
                      <span className="ml-2 text-gray-600">
                        {selectedJob.gender}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Shift:</span>
                      <span className="ml-2 text-gray-600">
                        {selectedJob.shift}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                      >
                        <option value="">Select experience</option>
                        <option value="No Experience">No Experience</option>
                        <option value="0-1 year">0-1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3+ years">3+ years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Availability *
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                      >
                        <option value="Immediate">Immediate</option>
                        <option value="1 week">Within 1 week</option>
                        <option value="2 weeks">Within 2 weeks</option>
                        <option value="1 month">Within 1 month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Say Something About Yourself *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Tell us why you're interested in this position, any relevant experience, or anything else you'd like to share..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume Upload *
                    </label>
                    <div className="space-y-3">
                      {!formData.resume ? (
                        <div
                          className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <svg
                            className="w-12 h-12 text-gray-400 mx-auto mb-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="text-gray-600 font-medium">
                            Click to upload resume
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            PDF, DOC, DOCX up to 5MB
                          </p>
                        </div>
                      ) : (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-green-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {formData.resume.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {formatFileSize(formData.resume.size)}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}

                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="animate-fade-in">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      <input
                        type="file"
                        ref={fileInputRef}
                        name="resume"
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Application...</span>
                      </div>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx="true">{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobApplying;
