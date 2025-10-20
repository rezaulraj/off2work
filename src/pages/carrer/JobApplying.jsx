import React, { useState } from "react";

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
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Construction Laborer",
      department: "Construction",
      type: "Full-time",
      location: "Chicago, IL",
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
    },
    {
      id: 2,
      title: "Warehouse Associate",
      department: "Logistics",
      type: "Full-time",
      location: "Dallas, TX",
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
    },
    {
      id: 3,
      title: "Landscape Laborer",
      department: "Landscaping",
      type: "Seasonal",
      location: "Phoenix, AZ",
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
    },
    {
      id: 4,
      title: "General Laborer",
      department: "Manufacturing",
      type: "Temp-to-Hire",
      location: "Detroit, MI",
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
    },
    {
      id: 5,
      title: "Mover / Helper",
      department: "Moving Services",
      type: "Part-time",
      location: "Denver, CO",
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
    },
    {
      id: 6,
      title: "Production Assistant",
      department: "Manufacturing",
      type: "Full-time",
      location: "Atlanta, GA",
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
    },
  ];

  const openPopup = (job) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      resume: null,
      availability: "Immediate",
    });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Application submitted:", { job: selectedJob, ...formData });
    setIsSubmitted(true);

    // Reset form after 3 seconds
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Labor & Physical Work Jobs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Immediate openings for hardworking individuals. No experience required
          for many positions!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Same Day Pay Available
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Weekly Pay
          </span>
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            Overtime Available
          </span>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 overflow-hidden"
          >
            {/* Job Header */}
            <div className="p-6 border-b border-blue-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(
                        job.urgency
                      )}`}
                    >
                      {job.urgency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  {job.location}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
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
                  {job.shift}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
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
                  Exp: {job.experience}
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-sm">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Requirements:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{job.posted}</span>
                <button
                  onClick={() => openPopup(job)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Popup */}
      {isPopupOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to the{" "}
                  <strong>{selectedJob.title}</strong> position. We'll contact
                  you soon.
                </p>
                <button
                  onClick={closePopup}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6">
                {/* Popup Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedJob.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedJob.department} • {selectedJob.location}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closePopup}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Application Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relevant Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="No Experience">No Experience</option>
                      <option value="0-1 year">0-1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3+ years">3+ years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="1 week">Within 1 week</option>
                      <option value="2 weeks">Within 2 weeks</option>
                      <option value="1 month">Within 1 month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume (Optional)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplying;
