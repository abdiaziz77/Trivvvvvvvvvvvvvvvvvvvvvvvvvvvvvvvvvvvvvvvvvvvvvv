import React, { useState, useEffect } from 'react';
import { 
  FiHome, 
  FiMapPin, 
  FiCalendar, 
  FiDollarSign, 
  FiUser, 
  FiFilter,
  FiSearch,
  FiEye,
  FiEdit,
  FiTrash2,
  FiDownload,
  FiShare2,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiPlayCircle,
  FiFileText
} from 'react-icons/fi';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - In real app, this would come from your backend API
  const mockProjects = [
    {
      id: 1,
      type: 'private',
      title: 'Modern 4-Bedroom Bungalow',
      clientName: 'John Kamau',
      location: 'Karen, Nairobi',
      budget: 'KES 8,500,000',
      startDate: '2024-03-15',
      expectedCompletion: '2024-09-15',
      status: 'in-progress',
      progress: 65,
      description: 'Construction of a modern 4-bedroom bungalow with swimming pool and landscaped garden',
      coordinates: { lat: -1.2921, lng: 36.8219 },
      documents: ['architectural-plan.pdf', 'budget-breakdown.xlsx'],
      team: ['Site Engineer', 'Project Manager', 'Architect'],
      lastUpdated: '2024-05-20'
    },
    {
      id: 2,
      type: 'government',
      title: 'County Referral Hospital Construction',
      clientName: 'Ministry of Health',
      location: 'Kisumu County',
      budget: 'KES 250,000,000',
      startDate: '2024-02-01',
      expectedCompletion: '2025-02-01',
      status: 'planning',
      progress: 25,
      description: 'Construction of a 200-bed referral hospital with specialized medical facilities',
      coordinates: { lat: -0.1022, lng: 34.7617 },
      documents: ['tender-documents.pdf', 'government-approval.pdf', 'budget-allocation.pdf'],
      team: ['Project Director', 'Chief Engineer', 'Government Liaison'],
      tenderReference: 'MOH/REF/2024/001',
      lastUpdated: '2024-05-18'
    },
    {
      id: 3,
      type: 'private',
      title: 'Commercial Office Building',
      clientName: 'Sarah Johnson',
      location: 'Westlands, Nairobi',
      budget: 'KES 15,000,000',
      startDate: '2024-01-10',
      expectedCompletion: '2024-07-10',
      status: 'completed',
      progress: 100,
      description: '3-story commercial office building with retail space on ground floor',
      coordinates: { lat: -1.2584, lng: 36.7926 },
      documents: ['completion-certificate.pdf', 'final-invoice.pdf'],
      team: ['Project Manager', 'Structural Engineer'],
      lastUpdated: '2024-05-15'
    },
    {
      id: 4,
      type: 'government',
      title: 'Rural Road Construction Project',
      clientName: 'Ministry of Transport',
      location: 'Machakos County',
      budget: 'KES 180,000,000',
      startDate: '2024-04-01',
      expectedCompletion: '2024-12-01',
      status: 'in-progress',
      progress: 40,
      description: 'Construction of 50km rural access road with drainage systems',
      coordinates: { lat: -1.5177, lng: 37.2634 },
      documents: ['environmental-impact.pdf', 'community-engagement-report.pdf'],
      team: ['Road Engineer', 'Site Supervisor', 'Community Liaison'],
      tenderReference: 'MOT/ROAD/2024/015',
      lastUpdated: '2024-05-22'
    },
    {
      id: 5,
      type: 'private',
      title: 'Luxury Apartment Complex',
      clientName: 'Greenfield Developers',
      location: 'Runda, Nairobi',
      budget: 'KES 45,000,000',
      startDate: '2024-06-01',
      expectedCompletion: '2025-06-01',
      status: 'pending',
      progress: 0,
      description: '8-unit luxury apartment complex with amenities',
      coordinates: { lat: -1.2086, lng: 36.7958 },
      documents: ['architectural-designs.pdf', 'building-permit.pdf'],
      team: ['Project Manager', 'Architect', 'Quantity Surveyor'],
      lastUpdated: '2024-05-10'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterProjects();
  }, [activeFilter, searchTerm, projects]);

  const filterProjects = () => {
    let filtered = projects;

    // Filter by type
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.type === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="text-green-500" />;
      case 'in-progress':
        return <FiPlayCircle className="text-blue-500" />;
      case 'planning':
        return <FiClock className="text-yellow-500" />;
      case 'pending':
        return <FiAlertCircle className="text-gray-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'private' ? <FiHome className="text-[#F4B942]" /> : <FiHome className="text-red-600" />;
  };

  const handleViewProject = (projectId) => {
    console.log('View project:', projectId);
    // Navigate to project details page
  };

  const handleEditProject = (projectId) => {
    console.log('Edit project:', projectId);
    // Navigate to edit project page
  };

  const handleDownloadDocuments = (projectId) => {
    console.log('Download documents for project:', projectId);
    // Implement document download logic
  };

  const handleShareProject = (projectId) => {
    console.log('Share project:', projectId);
    // Implement share functionality
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F4B942] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">My Projects</h1>
          <p className="text-gray-600">Manage and track all your construction projects in one place</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
              </div>
              <div className="p-3 bg-[#F4B942]/10 rounded-lg">
                <FiHome className="text-2xl text-[#F4B942]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'in-progress').length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiPlayCircle className="text-2xl text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'completed').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FiCheckCircle className="text-2xl text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#F4B942]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">
                  KES {projects.reduce((sum, project) => {
                    const amount = parseInt(project.budget.replace(/[^\d]/g, ''));
                    return sum + (isNaN(amount) ? 0 : amount);
                  }, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <FiDollarSign className="text-2xl text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-[#F4B942]/20">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by title, client, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#F4B942] focus:ring-2 focus:ring-[#F4B942]/20 transition duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-[#F4B942] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('private')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center gap-2 ${
                  activeFilter === 'private'
                    ? 'bg-[#F4B942] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FiHome className="text-sm" />
                Private
              </button>
              <button
                onClick={() => setActiveFilter('government')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center gap-2 ${
                  activeFilter === 'government'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FiHome className="text-sm" />
                Government
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-[#F4B942]/20">
            <FiHome className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || activeFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by creating your first project'
              }
            </p>
            <button className="bg-gradient-to-r from-[#F4B942] to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:from-[#F4B942]/90 hover:to-red-600/90 transition duration-300">
              Start New Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(project.type)}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.type === 'private' 
                          ? 'bg-[#F4B942]/10 text-[#F4B942]' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {project.type === 'private' ? 'Private' : 'Government'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiUser className="text-gray-400" />
                      <span>{project.clientName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiMapPin className="text-gray-400" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiDollarSign className="text-gray-400" />
                      <span className="font-semibold">{project.budget}</span>
                    </div>
                    {project.tenderReference && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiFileText className="text-gray-400" />
                        <span>Tender: {project.tenderReference}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-[#F4B942]">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#F4B942] to-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Start Date</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(project.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Expected Completion</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(project.expectedCompletion).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewProject(project.id)}
                        className="p-2 text-gray-600 hover:text-[#F4B942] hover:bg-[#F4B942]/10 rounded-lg transition duration-300"
                        title="View Project"
                      >
                        <FiEye className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleEditProject(project.id)}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
                        title="Edit Project"
                      >
                        <FiEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDownloadDocuments(project.id)}
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition duration-300"
                        title="Download Documents"
                      >
                        <FiDownload className="text-lg" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShareProject(project.id)}
                        className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition duration-300"
                        title="Share Project"
                      >
                        <FiShare2 className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Map View Toggle (Future Enhancement) */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition duration-300">
            <FiMapPin className="text-lg" />
            View Projects on Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;