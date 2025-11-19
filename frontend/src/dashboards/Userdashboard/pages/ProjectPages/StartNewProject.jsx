import React, { useState } from "react";
import { 
  FiHome, 
  FiDollarSign, 
  FiMapPin, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiFileText, 
  FiUpload, 
  FiCheck,
  FiTool,
  FiCalendar,
  FiClipboard,
  FiAward,
  FiShield,
  FiLayers,
  FiTarget,
  FiClock
} from "react-icons/fi";

function StartNewProject() {
  const [projectType, setProjectType] = useState("private");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-3">
          Start a New Construction Project
        </h1>
        <p className="text-gray-600 text-lg">
          Begin your construction journey with JengaNow - From dream to reality
        </p>
      </div>

      {/* Project Type Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-[#F4B942]/20">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FiHome className="text-[#F4B942]" />
          Select Project Type
        </h2>
        
        <div className="flex gap-4">
          <button
            onClick={() => setProjectType("private")}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
              projectType === "private"
                ? "bg-[#F4B942]/20 border-[#F4B942] text-[#F4B942] shadow-lg"
                : "bg-white border-gray-300 text-gray-600 hover:border-[#F4B942]/50"
            }`}
          >
            <FiHome className="text-xl" />
            <div className="text-left">
              <div className="font-bold">Private Project</div>
              <div className="text-sm">Residential & Commercial Buildings</div>
            </div>
          </button>

          <button
            onClick={() => setProjectType("government")}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
              projectType === "government"
                ? "bg-[#F4B942]/20 border-[#F4B942] text-[#F4B942] shadow-lg"
                : "bg-white border-gray-300 text-gray-600 hover:border-[#F4B942]/50"
            }`}
          >
            <FiTool className="text-xl" />
            <div className="text-left">
              <div className="font-bold">Government Project</div>
              <div className="text-sm">Public Infrastructure & Facilities</div>
            </div>
          </button>
        </div>
      </div>

      {/* Project Information Card */}
      <div className="bg-gradient-to-r from-[#F4B942]/10 to-red-600/10 rounded-xl p-6 mb-8 border border-[#F4B942]/30">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FiCheck className="text-[#F4B942]" />
          Why Choose JengaNow for Your Project?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Professional Project Management</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Quality Materials & Equipment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Timely Project Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Expert Engineering Team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Competitive Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>After-Construction Support</span>
          </div>
        </div>
      </div>

      {/* Show forms */}
      {projectType === "private" ? (
        <PrivateProjectForm />
      ) : (
        <GovernmentProjectForm />
      )}
    </div>
  );
}

export default StartNewProject;





/* ================================================================
   PRIVATE PROJECT FORM - Full Professional Version
================================================================= */

function PrivateProjectForm() {
  const [files, setFiles] = useState({
    blueprint: null,
    sitePhotos: null,
    designReferences: null
  });
  const [budget, setBudget] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    // Client Information
    fullName: "",
    email: "",
    phoneNumber: "",
    physicalAddress: "",
    idNumber: "",
    
    // Project Details
    projectTitle: "",
    projectLocation: "",
    buildingType: "",
    landSize: "",
    numberOfFloors: "",
    preferredStartDate: "",
    expectedDuration: "",
    
    // Project Scope
    projectDescription: "",
    specificRequirements: "",
    preferredMaterials: "",
    specialFeatures: "",
    
    // Budget & Timeline
    budgetBreakdown: "",
    paymentPlan: "",
    financingMethod: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (fileType, file) => {
    setFiles(prev => ({
      ...prev,
      [fileType]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Private project submitted successfully! Our team will contact you within 24 hours.");
  };

  const formatBudget = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const nextStage = () => {
    setCurrentStage(prev => Math.min(prev + 1, 4));
  };

  const prevStage = () => {
    setCurrentStage(prev => Math.max(prev - 1, 1));
  };

  const stages = [
    { number: 1, title: "Client Info", icon: <FiUser /> },
    { number: 2, title: "Project Details", icon: <FiHome /> },
    { number: 3, title: "Scope & Design", icon: <FiClipboard /> },
    { number: 4, title: "Documents", icon: <FiUpload /> }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
        <div className="flex justify-between items-center mb-6">
          {stages.map((stage, index) => (
            <div key={stage.number} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStage >= stage.number 
                  ? 'bg-[#F4B942] border-[#F4B942] text-white' 
                  : 'border-gray-300 text-gray-400'
              }`}>
                {stage.icon}
              </div>
              <div className="ml-3">
                <div className={`font-bold ${
                  currentStage >= stage.number ? 'text-[#F4B942]' : 'text-gray-400'
                }`}>
                  Stage {stage.number}
                </div>
                <div className="text-sm text-gray-600">{stage.title}</div>
              </div>
              {index < stages.length - 1 && (
                <div className={`w-16 h-1 mx-4 ${
                  currentStage > stage.number ? 'bg-[#F4B942]' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8 border border-[#F4B942]/20">
        
        {/* Stage 1: Client Information */}
        {currentStage >= 1 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiUser className="text-lg" />
                </div>
                Stage 1: Client Information
              </h2>
              <span className="bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-bold">Required</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="+254 XXX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">ID Number</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="National ID number"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Physical Address *</label>
                <input
                  type="text"
                  name="physicalAddress"
                  value={formData.physicalAddress}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Complete physical address"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Stage 2: Project Details */}
        {currentStage >= 2 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiHome className="text-lg" />
                </div>
                Stage 2: Project Details & Specifications
              </h2>
              <span className="bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-bold">Required</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Title *</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="e.g., Modern 4-Bedroom Bungalow with Swimming Pool"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Location *</label>
                <input
                  type="text"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="County / Town / Area / Estate"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Building Type *</label>
                <select 
                  name="buildingType"
                  value={formData.buildingType}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300" 
                  required
                >
                  <option value="">Select Building Type</option>
                  <option>1 Bedroom House</option>
                  <option>2 Bedroom House</option>
                  <option>3 Bedroom House</option>
                  <option>4 Bedroom House</option>
                  <option>5+ Bedroom House</option>
                  <option>Bungalow</option>
                  <option>Maisonette</option>
                  <option>Apartment Building</option>
                  <option>Commercial Building</option>
                  <option>Office Space</option>
                  <option>Retail Building</option>
                  <option>Industrial Facility</option>
                  <option>Mixed-Use Development</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Land Size (Acres)</label>
                <input
                  type="text"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="e.g., 0.25 acres"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Floors</label>
                <select 
                  name="numberOfFloors"
                  value={formData.numberOfFloors}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                >
                  <option value="">Select Floors</option>
                  <option>Ground Floor Only</option>
                  <option>1 Floor</option>
                  <option>2 Floors</option>
                  <option>3 Floors</option>
                  <option>4+ Floors</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Estimated Budget (KES) *</label>
                <div className="relative">
                  <FiDollarSign className="absolute left-4 top-4 text-gray-400 text-xl" />
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(formatBudget(e.target.value))}
                    className="w-full pl-12 p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    placeholder="Enter amount in KES"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Start Date *</label>
                <input
                  type="date"
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Expected Duration (Months) *</label>
                <input
                  type="number"
                  name="expectedDuration"
                  value={formData.expectedDuration}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Estimated duration"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Project Scope & Design */}
        {currentStage >= 3 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiClipboard className="text-lg" />
                </div>
                Stage 3: Project Scope & Design Preferences
              </h2>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Detailed Info</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="4"
                  placeholder="Describe your vision for the project, architectural style preferences, and overall objectives..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Specific Requirements</label>
                <textarea
                  name="specificRequirements"
                  value={formData.specificRequirements}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="3"
                  placeholder="Any specific requirements like solar panels, water harvesting, security features, etc."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Materials</label>
                  <textarea
                    name="preferredMaterials"
                    value={formData.preferredMaterials}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    rows="3"
                    placeholder="Any specific material preferences (flooring, roofing, finishes, etc.)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Special Features</label>
                  <textarea
                    name="specialFeatures"
                    value={formData.specialFeatures}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    rows="3"
                    placeholder="Special features like swimming pool, garden, parking, etc."
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Budget Breakdown</label>
                  <textarea
                    name="budgetBreakdown"
                    value={formData.budgetBreakdown}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    rows="3"
                    placeholder="Any specific budget allocations for different aspects of the project"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Financing Method</label>
                  <select 
                    name="financingMethod"
                    value={formData.financingMethod}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  >
                    <option value="">Select Financing</option>
                    <option>Personal Savings</option>
                    <option>Bank Loan</option>
                    <option>Mortgage</option>
                    <option>Construction Loan</option>
                    <option>Staged Payment</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 4: Document Upload */}
        {currentStage >= 4 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-gradient-to-r from-[#F4B942]/5 to-red-600/5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiUpload className="text-lg" />
                </div>
                Stage 4: Project Documents & References
              </h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Optional</span>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Blueprint Upload */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiFileText className="text-[#F4B942]" />
                    Blueprint / Architectural Drawings
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.dwg"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => handleFileChange('blueprint', e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Blueprint</p>
                    <p className="text-gray-400 text-sm">PDF, JPG, PNG, DWG up to 10MB</p>
                  </div>
                  {files.blueprint && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{files.blueprint.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileChange('blueprint', null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Site Photos */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiLayers className="text-[#F4B942]" />
                    Site Photos
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => handleFileChange('sitePhotos', e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Site Photos</p>
                    <p className="text-gray-400 text-sm">JPG, PNG up to 10MB</p>
                  </div>
                  {files.sitePhotos && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{files.sitePhotos.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileChange('sitePhotos', null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Design References */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiTarget className="text-[#F4B942]" />
                    Design References
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => handleFileChange('designReferences', e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Reference Images</p>
                    <p className="text-gray-400 text-sm">PDF, JPG, PNG up to 10MB</p>
                  </div>
                  {files.designReferences && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{files.designReferences.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileChange('designReferences', null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Additional Documents */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiFileText className="text-[#F4B942]" />
                    Additional Documents
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      multiple
                    />
                    <p className="text-gray-600">Upload Additional Files</p>
                    <p className="text-gray-400 text-sm">Various formats up to 10MB each</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Recommended Documents:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>✓ Site Survey Report</li>
                  <li>✓ Land Title Deed</li>
                  <li>✓ Architectural Drawings</li>
                  <li>✓ Design Inspiration Images</li>
                  <li>✓ Any Existing Construction Permits</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStage}
            disabled={currentStage === 1}
            className={`px-8 py-3 rounded-lg font-bold transition duration-300 ${
              currentStage === 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>

          {currentStage < 4 ? (
            <button
              type="button"
              onClick={nextStage}
              className="bg-[#F4B942] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#F4B942]/90 transition duration-300"
            >
              Next Stage
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-[#F4B942] to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-[#F4B942]/90 hover:to-red-600/90 transition duration-300 shadow-lg"
            >
              Submit Private Project
            </button>
          )}
        </div>
      </form>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border border-[#F4B942]/20 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Need Assistance?</h3>
        <p className="text-gray-600 mb-4">Our Private Projects Team is ready to help you bring your dream to life</p>
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#F4B942]" />
            <span>+254 700 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-[#F4B942]" />
            <span>private@jenganow.co.ke</span>
          </div>
        </div>
      </div>
    </div>
  );
}





/* ================================================================
   GOVERNMENT PROJECT FORM - Full Professional Version
================================================================= */

function GovernmentProjectForm() {
  const [clearanceFile, setClearanceFile] = useState(null);
  const [budgetDocuments, setBudgetDocuments] = useState(null);
  const [tenderDocuments, setTenderDocuments] = useState(null);
  const [additionalDocuments, setAdditionalDocuments] = useState(null);
  const [error, setError] = useState("");
  const [budget, setBudget] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    ministryName: "",
    sector: "",
    contactPerson: "",
    officialEmail: "",
    phoneNumber: "",
    department: "",
    procurementMethod: "",
    projectTitle: "",
    projectDescription: "",
    projectLocation: "",
    projectTimeline: "",
    tenderReference: "",
    projectScope: "",
    environmentalImpact: "",
    communityBenefit: "",
    technicalSpecifications: "",
    implementationPlan: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clearanceFile || !budgetDocuments) {
      setError("Government clearance form and budget documents are required for submission.");
      return;
    }

    setError("");
    alert("Government project successfully submitted! Our government liaison team will contact you shortly.");
  };

  const formatBudget = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const nextStage = () => {
    setCurrentStage(prev => Math.min(prev + 1, 4));
  };

  const prevStage = () => {
    setCurrentStage(prev => Math.max(prev - 1, 1));
  };

  const stages = [
    { number: 1, title: "Department Info", icon: <FiUser /> },
    { number: 2, title: "Project Details", icon: <FiClipboard /> },
    { number: 3, title: "Scope & Impact", icon: <FiAward /> },
    { number: 4, title: "Documents", icon: <FiUpload /> }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
        <div className="flex justify-between items-center mb-6">
          {stages.map((stage, index) => (
            <div key={stage.number} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStage >= stage.number 
                  ? 'bg-[#F4B942] border-[#F4B942] text-white' 
                  : 'border-gray-300 text-gray-400'
              }`}>
                {stage.icon}
              </div>
              <div className="ml-3">
                <div className={`font-bold ${
                  currentStage >= stage.number ? 'text-[#F4B942]' : 'text-gray-400'
                }`}>
                  Stage {stage.number}
                </div>
                <div className="text-sm text-gray-600">{stage.title}</div>
              </div>
              {index < stages.length - 1 && (
                <div className={`w-16 h-1 mx-4 ${
                  currentStage > stage.number ? 'bg-[#F4B942]' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Project Benefits */}
      <div className="bg-gradient-to-r from-[#F4B942]/10 to-red-600/10 rounded-xl p-6 border border-[#F4B942]/30">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FiShield className="text-[#F4B942]" />
          Why JengaNow for Government Projects?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>PPDA Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Timely Project Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Quality Assurance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Transparent Reporting</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Expert Engineering Team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Budget Adherence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Community Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F4B942] rounded-full"></div>
            <span>Environmental Compliance</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8 border border-[#F4B942]/20">
        
        {/* Stage 1: Government Department Information */}
        {currentStage >= 1 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiUser className="text-lg" />
                </div>
                Stage 1: Government Department Information
              </h2>
              <span className="bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-bold">Required</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Ministry / Department Name *</label>
                <input
                  type="text"
                  name="ministryName"
                  value={formData.ministryName}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="e.g., Ministry of Infrastructure, Transport & Public Works"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Sector *</label>
                <select 
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300" 
                  required
                >
                  <option value="">Select Sector</option>
                  <option>Roads & Infrastructure</option>
                  <option>Water & Irrigation</option>
                  <option>Housing & Urban Development</option>
                  <option>Education Facilities</option>
                  <option>Health Facilities</option>
                  <option>Energy & Power</option>
                  <option>Public Works</option>
                  <option>Transportation</option>
                  <option>Environmental Projects</option>
                  <option>Agricultural Infrastructure</option>
                  <option>Public Safety</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Contact Person *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Full Name with Title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Official Email *</label>
                <input
                  type="email"
                  name="officialEmail"
                  value={formData.officialEmail}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="official@government.go.ke"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Official contact number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Department / Unit</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Specific department or unit"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Procurement Method</label>
                <select 
                  name="procurementMethod"
                  value={formData.procurementMethod}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                >
                  <option value="">Select Method</option>
                  <option>Open Tender</option>
                  <option>Restricted Tender</option>
                  <option>Direct Procurement</option>
                  <option>Request for Proposal</option>
                  <option>Framework Agreement</option>
                  <option>Public Private Partnership</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Stage 2: Project Details */}
        {currentStage >= 2 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiClipboard className="text-lg" />
                </div>
                Stage 2: Project Details & Specifications
              </h2>
              <span className="bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-bold">Required</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Title *</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="e.g., Construction of County Referral Hospital"
                  required
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="4"
                  placeholder="Detailed description of project objectives, scope, and expected outcomes..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Location *</label>
                <input
                  type="text"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="County / Constituency / Ward / Specific Location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Estimated Budget (KES) *</label>
                <div className="relative">
                  <FiDollarSign className="absolute left-4 top-4 text-gray-400 text-xl" />
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(formatBudget(e.target.value))}
                    className="w-full pl-12 p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    placeholder="Enter amount in KES"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Timeline (Months) *</label>
                <input
                  type="number"
                  name="projectTimeline"
                  value={formData.projectTimeline}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="Estimated duration"
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Tender Reference Number</label>
                <input
                  type="text"
                  name="tenderReference"
                  value={formData.tenderReference}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  placeholder="If applicable"
                />
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Project Scope & Impact */}
        {currentStage >= 3 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiAward className="text-lg" />
                </div>
                Stage 3: Project Scope & Community Impact
              </h2>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Detailed Info</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Detailed Project Scope *</label>
                <textarea
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="5"
                  placeholder="Detailed technical specifications, construction methodology, materials to be used, and specific deliverables..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Technical Specifications</label>
                <textarea
                  name="technicalSpecifications"
                  value={formData.technicalSpecifications}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="4"
                  placeholder="Detailed technical requirements and specifications..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Environmental Impact Assessment</label>
                  <textarea
                    name="environmentalImpact"
                    value={formData.environmentalImpact}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    rows="4"
                    placeholder="Environmental considerations and mitigation measures..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Community Benefits & Impact</label>
                  <textarea
                    name="communityBenefit"
                    value={formData.communityBenefit}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                    rows="4"
                    placeholder="Expected community benefits, job creation, and social impact..."
                  ></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Implementation Plan</label>
                <textarea
                  name="implementationPlan"
                  value={formData.implementationPlan}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
                  rows="4"
                  placeholder="Proposed implementation timeline, phases, and key milestones..."
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {/* Stage 4: Document Upload */}
        {currentStage >= 4 && (
          <div className="border-2 border-gray-200 p-8 rounded-xl space-y-6 bg-gradient-to-r from-[#F4B942]/5 to-red-600/5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F4B942] rounded-full flex items-center justify-center text-white">
                  <FiUpload className="text-lg" />
                </div>
                Stage 4: Required Documents & Attachments
              </h2>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Mandatory</span>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Government Clearance */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiFileText className="text-[#F4B942]" />
                    Government Clearance Form *
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setClearanceFile(e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Clearance Document</p>
                    <p className="text-gray-400 text-sm">PDF, JPG, PNG up to 10MB</p>
                  </div>
                  {clearanceFile && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{clearanceFile.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setClearanceFile(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Budget Documents */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiDollarSign className="text-[#F4B942]" />
                    Budget Allocation Proof *
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setBudgetDocuments(e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Budget Documents</p>
                    <p className="text-gray-400 text-sm">PDF, JPG, PNG up to 10MB</p>
                  </div>
                  {budgetDocuments && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{budgetDocuments.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBudgetDocuments(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Tender Documents */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiClipboard className="text-[#F4B942]" />
                    Tender Documents
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setTenderDocuments(e.target.files[0])}
                    />
                    <p className="text-gray-600">Upload Tender Documents</p>
                    <p className="text-gray-400 text-sm">PDF, JPG, PNG up to 10MB</p>
                  </div>
                  {tenderDocuments && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{tenderDocuments.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTenderDocuments(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Additional Documents */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FiFileText className="text-[#F4B942]" />
                    Additional Documents
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition duration-300">
                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-3" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => setAdditionalDocuments(e.target.files[0])}
                      multiple
                    />
                    <p className="text-gray-600">Upload Additional Files</p>
                    <p className="text-gray-400 text-sm">Various formats up to 10MB each</p>
                  </div>
                  {additionalDocuments && (
                    <div className="bg-[#F4B942]/10 border border-[#F4B942] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-[#F4B942] text-xl" />
                        <span className="font-semibold">{additionalDocuments.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAdditionalDocuments(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 font-semibold">{error}</p>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Required Documents Checklist:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>✓ Government Clearance/Approval Letter</li>
                  <li>✓ Budget Allocation Certificate</li>
                  <li>✓ Project Technical Specifications</li>
                  <li>✓ Environmental Impact Assessment (if applicable)</li>
                  <li>✓ Tender Documents (if applicable)</li>
                  <li>✓ Implementation Timeline</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStage}
            disabled={currentStage === 1}
            className={`px-8 py-3 rounded-lg font-bold transition duration-300 ${
              currentStage === 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>

          {currentStage < 4 ? (
            <button
              type="button"
              onClick={nextStage}
              className="bg-[#F4B942] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#F4B942]/90 transition duration-300"
            >
              Next Stage
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-[#F4B942] to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-[#F4B942]/90 hover:to-red-600/90 transition duration-300 shadow-lg"
            >
              Submit Government Project
            </button>
          )}
        </div>
      </form>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border border-[#F4B942]/20 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Need Assistance?</h3>
        <p className="text-gray-600 mb-4">Our Government Projects Team is ready to help you with the submission process</p>
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#F4B942]" />
            <span>+254 700 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-[#F4B942]" />
            <span>government@jenganow.co.ke</span>
          </div>
        </div>
      </div>
    </div>
  );
}