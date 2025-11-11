import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setIsOpen(false);
  };

  // Close dropdowns when route changes
  useEffect(() => {
    closeDropdowns();
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-[#F4B942]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center group"
              onClick={closeDropdowns}
            >
              <div className="h-12 w-12 bg-gradient-to-br from-[#F4B942] to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition duration-300">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">TRIBULD</h1>
                <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase">CONSTRUCTION</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1 dropdown-container">
            {/* Home */}
            <Link
              to="/"
              className={`px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                isActiveRoute('/') 
                  ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                  : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('about')}
                className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                  isActiveRoute('/about') 
                    ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                }`}
              >
                About
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`} 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'about' && (
                <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                  <Link
                    to="/about/company"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Our Company</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">History, mission & values</div>
                  </Link>
                  <Link
                    to="/about/leaders"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Leadership Team</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Executive management</div>
                  </Link>
                  <Link
                    to="/about/Management"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Our Experts</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Professional team members</div>
                  </Link>
                  <Link
                    to="/about/join"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Join Our Team</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Career opportunities</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('services')}
                className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                  isActiveRoute('/services') 
                    ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                }`}
              >
                Services
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className="absolute left-0 w-80 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                  <Link
                    to="/services/renovation"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Building Renovation</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Modernization & upgrades</div>
                  </Link>
                  <Link
                    to="/services/interior"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Interior Finishing</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Premium quality finishes</div>
                  </Link>
                  <Link
                    to="/services/roofing"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Roofing Solutions</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Durable roof systems</div>
                  </Link>
                  <Link
                    to="/services/foundation"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Foundation Repair</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Structural integrity</div>
                  </Link>
                  <Link
                    to="/services/electrical"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Electrical & Plumbing</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">MEP systems</div>
                  </Link>
                  <Link
                    to="/services/government"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Government Projects</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Roads, schools & public works</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('projects')}
                className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                  isActiveRoute('/projects') 
                    ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                }`}
              >
                Projects
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'projects' ? 'rotate-180' : ''}`} 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'projects' && (
                <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                  <Link
                    to="/projects/featured"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Featured Projects</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Showcase developments</div>
                  </Link>
                  <Link
                    to="/projects/ongoing"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Ongoing Projects</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Current developments</div>
                  </Link>
                  <Link
                    to="/projects/completed"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Completed Projects</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Our portfolio</div>
                  </Link>
                  <Link
                    to="/projects/success"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Success Stories</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Client testimonials</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Equipment Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('equipment')}
                className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                  isActiveRoute('/equipment') 
                    ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                }`}
              >
                Equipment
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'equipment' ? 'rotate-180' : ''}`} 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'equipment' && (
                <div className="absolute left-0 w-80 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                  <Link
                    to="/equipment/machinery"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Our Machinery</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Heavy equipment fleet</div>
                  </Link>
                  <Link
                    to="/equipment/workshop"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Workshop & Maintenance</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Equipment servicing</div>
                  </Link>
                  <Link
                    to="/equipment/materials"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Materials & Hardware</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Quality construction materials</div>
                  </Link>
                  <Link
                    to="/equipment/warehouse"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Warehouse & Logistics</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Storage & distribution</div>
                  </Link>
                  <Link
                    to="/equipment/safety"
                    className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                    onClick={closeDropdowns}
                  >
                    <div className="font-bold">Safety Gear</div>
                    <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Protective equipment</div>
                  </Link>
                </div>
              )}
    <>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-[#F4B942] to-red-600 text-white py-2 px-4">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          {/* Construction Info */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>123 Construction Ave, Building City</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@tribuldconstruction.com</span>
            </div>
          </div>

          {/* Header Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-md text-sm font-semibold hover:bg-white/30 transition duration-300 border border-white/30"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="px-4 py-1.5 bg-white text-[#F4B942] rounded-md text-sm font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex-shrink-0 flex items-center group"
                onClick={closeDropdowns}
              >
                <div className="h-12 w-12 bg-gradient-to-br from-[#F4B942] to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition duration-300">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-black text-gray-900 tracking-tight">JengaNow</h1>
                  <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase">CONSTRUCTION</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-1 dropdown-container">
              {/* Home */}
              <Link
                to="/"
                className={`px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                  isActiveRoute('/') 
                    ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('about')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/about') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  About
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/about/company"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Our Company</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">History, mission & values</div>
                    </Link>
                    <Link
                      to="/about/leaders"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Leadership Team</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Executive management</div>
                    </Link>
                    <Link
                      to="/about/team"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Our Experts</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Professional team members</div>
                    </Link>
                    <Link
                      to="/about/join"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Join Our Team</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Career opportunities</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('services')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/services') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  Services
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute left-0 w-80 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/services/renovation"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Building Renovation</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Modernization & upgrades</div>
                    </Link>
                    <Link
                      to="/services/interior"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Interior Finishing</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Premium quality finishes</div>
                    </Link>
                    <Link
                      to="/services/roofing"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Roofing Solutions</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Durable roof systems</div>
                    </Link>
                    <Link
                      to="/services/foundation"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Foundation Repair</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Structural integrity</div>
                    </Link>
                    <Link
                      to="/services/electrical"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Electrical & Plumbing</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">MEP systems</div>
                    </Link>
                    <Link
                      to="/services/government"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Government Projects</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Roads, schools & public works</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('projects')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/projects') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  Projects
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'projects' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'projects' && (
                  <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/projects/featured"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Featured Projects</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Showcase developments</div>
                    </Link>
                    <Link
                      to="/projects/ongoing"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Ongoing Projects</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Current developments</div>
                    </Link>
                    <Link
                      to="/projects/completed"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Completed Projects</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Our portfolio</div>
                    </Link>
                    <Link
                      to="/projects/success"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Success Stories</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Client testimonials</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Equipment Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('equipment')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/equipment') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  Equipment
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'equipment' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'equipment' && (
                  <div className="absolute left-0 w-80 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/equipment/machinery"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Our Machinery</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Heavy equipment fleet</div>
                    </Link>
                    <Link
                      to="/equipment/workshop"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Workshop & Maintenance</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Equipment servicing</div>
                    </Link>
                    <Link
                      to="/equipment/materials"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Materials & Hardware</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Quality construction materials</div>
                    </Link>
                    <Link
                      to="/equipment/warehouse"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Warehouse & Logistics</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Storage & distribution</div>
                    </Link>
                    <Link
                      to="/equipment/safety"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Safety Gear</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Protective equipment</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Technology Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('technology')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/technology') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  Technology
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'technology' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'technology' && (
                  <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/technology/smart"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Smart Construction</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Digital solutions</div>
                    </Link>
                    <Link
                      to="/technology/sustainability"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Sustainability</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Green building practices</div>
                    </Link>
                    <Link
                      to="/technology/quality"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Quality Assurance</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Standards & compliance</div>
                    </Link>
                    <Link
                      to="/technology/training"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Training & Development</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Skill enhancement</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog/News Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('blog')}
                  className={`px-5 py-3 rounded-lg text-sm font-bold flex items-center transition-all duration-300 ${
                    isActiveRoute('/blog') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-b-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942] hover:border-b-4 hover:border-[#F4B942]'
                  }`}
                >
                  Blog/News
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${openDropdown === 'blog' ? 'rotate-180' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'blog' && (
                  <div className="absolute left-0 w-72 mt-2 py-3 bg-white rounded-xl shadow-2xl z-50 border border-gray-200">
                    <Link
                      to="/blog/company-news"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Company News</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Latest updates</div>
                    </Link>
                    <Link
                      to="/blog/construction-tips"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Construction Tips</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Expert insights</div>
                    </Link>
                    <Link
                      to="/blog/safety"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Safety & Sustainability</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Best practices</div>
                    </Link>
                    <Link
                      to="/blog/industry-updates"
                      className="block px-6 py-4 text-sm text-gray-800 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 border-l-4 border-transparent hover:border-[#F4B942] group"
                      onClick={closeDropdowns}
                    >
                      <div className="font-bold">Industry Updates</div>
                      <div className="text-xs text-gray-600 mt-1 group-hover:text-[#F4B942]">Market trends</div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-lg text-gray-800 hover:text-[#F4B942] hover:bg-[#F4B942]/10 focus:outline-none focus:ring-2 focus:ring-[#F4B942] transition duration-300"
              >
                <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden bg-white border-t border-gray-200 shadow-2xl dropdown-container">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {/* Mobile Home */}
                <Link
                  to="/"
                  className={`block px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                    isActiveRoute('/') 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                  }`}
                  onClick={closeDropdowns}
                >
                  Home
                </Link>

                {/* Mobile About Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('about-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/about') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    About
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'about-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/about/company', name: 'Our Company' },
                        { path: '/about/leaders', name: 'Leadership Team' },
                        { path: '/about/team', name: 'Our Experts' },
                        { path: '/about/join', name: 'Join Our Team' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Services Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('services-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/services') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    Services
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'services-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/services/renovation', name: 'Building Renovation' },
                        { path: '/services/interior', name: 'Interior Finishing' },
                        { path: '/services/roofing', name: 'Roofing Solutions' },
                        { path: '/services/foundation', name: 'Foundation Repair' },
                        { path: '/services/electrical', name: 'Electrical & Plumbing' },
                        { path: '/services/government', name: 'Government Projects' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Projects Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('projects-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/projects') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    Projects
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'projects-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'projects-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/projects/featured', name: 'Featured Projects' },
                        { path: '/projects/ongoing', name: 'Ongoing Projects' },
                        { path: '/projects/completed', name: 'Completed Projects' },
                        { path: '/projects/success', name: 'Success Stories' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Equipment Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('equipment-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/equipment') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    Equipment
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'equipment-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'equipment-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/equipment/machinery', name: 'Our Machinery' },
                        { path: '/equipment/workshop', name: 'Workshop & Maintenance' },
                        { path: '/equipment/materials', name: 'Materials & Hardware' },
                        { path: '/equipment/warehouse', name: 'Warehouse & Logistics' },
                        { path: '/equipment/safety', name: 'Safety Gear' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Technology Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('technology-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/technology') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    Technology
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'technology-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'technology-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/technology/smart', name: 'Smart Construction' },
                        { path: '/technology/sustainability', name: 'Sustainability' },
                        { path: '/technology/quality', name: 'Quality Assurance' },
                        { path: '/technology/training', name: 'Training & Development' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Blog Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('blog-mobile')}
                    className={`flex justify-between items-center w-full px-4 py-4 rounded-xl text-base font-bold transition duration-300 ${
                      isActiveRoute('/blog') 
                        ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    Blog/News
                    <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'blog-mobile' ? 'rotate-180' : ''}`} 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'blog-mobile' && (
                    <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                      {[
                        { path: '/blog/company-news', name: 'Company News' },
                        { path: '/blog/construction-tips', name: 'Construction Tips' },
                        { path: '/blog/safety', name: 'Safety & Sustainability' },
                        { path: '/blog/industry-updates', name: 'Industry Updates' },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-[#F4B942]/10 hover:text-[#F4B942] transition duration-300 font-semibold"
                          onClick={closeDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;