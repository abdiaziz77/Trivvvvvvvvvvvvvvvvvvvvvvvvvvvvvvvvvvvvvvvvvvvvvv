import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

// About Pages
import OurCompany from './pages/about/OurCompany';
import Leaders from './pages/about/Leaders';
import Management from './pages/about/Management';
import JoinTeam from './pages/about/JoinTeam';

// Services Pages
import BuildingConstruction from './pages/services/BuildingConstruction';
import InteriorFinishing from './pages/services/InteriorFinishing';
import RoofingSolutions from './pages/services/RoofingSolutions';
import FoundationRepair from './pages/services/FoundationRepair';
import ElectricalAndPlumbing from './pages/services/ElectricalAndPumbing';
import Government from './pages/services/Government';

// Projects Pages
import Featured from './pages/projects/Featured';

// Equipment Pages
import OurMachinery from './pages/Equipments/OurMachinery';
import WorkshopAndMaintenanceYard from './pages/Equipments/WorkshopAndMaintenanceYard';
import MaterialsAndHardwareStores from './pages/Equipments/MaterialsAndHardwareStores';
import WarehouseAndLogistics from './pages/Equipments/WarehouseAndLogistics';
import SafetyAndProtectedGear from './pages/Equipments/SafetyAndProtectedGear';

// Technology Pages
import SmartConstruction from './pages/Technology/SmartConstruction';
import Sustainability from './pages/Technology/Sustainability';
import QualityAssurance from './pages/Technology/QualityAssurance';
import TrainingAndDevelopment from './pages/Technology/TrainingAndDevelopment';

// Blog Pages
import CompanyNews from './pages/Blogs/CompanyNews';
import ConstructionTips from './pages/Blogs/ConstructionTips';
import SafetyAndSustainability from './pages/Blogs/SafetyAndSustainability';
import IndustryUpdates from './pages/Blogs/IndustryUpdates';

// UserDashboard Layout
import UserLayout from './dashboards/Userdashboard/layout/UserLayout';

// UserDashboard Pages
import Dashboard from './dashboards/Userdashboard/pages/Dashboard';
import Profile from './dashboards/Userdashboard/pages/Profile';
import Notifications from './dashboards/Userdashboard/pages/Notifications';

import Jobs from './dashboards/Userdashboard/pages/Jobs';
import AvailableJobs from './dashboards/Userdashboard/pages/AvailableJobs';
import ApplyJob from './dashboards/Userdashboard/pages/ApplyJob';
import MyApplications from './dashboards/Userdashboard/pages/MyApplications';

import Marketplace from './dashboards/Userdashboard/pages/Marketplace';
import BuyMaterials from './dashboards/Userdashboard/pages/BuyMaterials';
import RentEquipment from './dashboards/Userdashboard/pages/RentEquipment';
import MyOrders from './dashboards/Userdashboard/pages/MyOrders';

import Equipment from './dashboards/Userdashboard/pages/Equipment';
import LatestEquipment from './dashboards/Userdashboard/pages/LatestEquipment';
import RequestEquipment from './dashboards/Userdashboard/pages/RequestEquipment';

import Resources from './dashboards/Userdashboard/pages/Resources';
import MaterialPrices from './dashboards/Userdashboard/pages/MaterialPrices';
import CommunitySolutions from './dashboards/Userdashboard/pages/CommunitySolutions';

import Experts from './dashboards/Userdashboard/pages/Experts';

import Support from './dashboards/Userdashboard/pages/Support';
import AskQuestion from './dashboards/Userdashboard/pages/AskQuestion';
import FAQ from './dashboards/Userdashboard/pages/FAQ';
import ContactSupport from './dashboards/Userdashboard/pages/ContactSupport';

import Settings from './dashboards/Userdashboard/pages/Settings';
import Logout from './dashboards/Userdashboard/pages/Logout';



function App() {
  return (
   
      <Routes>

        {/* -------------------------- PUBLIC LAYOUT -------------------------- */}
        <Route
          path="/*"
          element={
            <div className="App min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>

                  {/* Public Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />

                  {/* About Routes */}
                  <Route path="/about" element={<OurCompany />} />
                  <Route path="/about/company" element={<OurCompany />} />
                  <Route path="/about/leaders" element={<Leaders />} />
                  <Route path="/about/management" element={<Management />} />
                  <Route path="/about/join" element={<JoinTeam />} />

                  {/* Services */}
                  <Route path="/services/renovation" element={<BuildingConstruction />} />
                  <Route path="/services/interior" element={<InteriorFinishing />} />
                  <Route path="/services/roofing" element={<RoofingSolutions />} />
                  <Route path="/services/foundation" element={<FoundationRepair />} />
                  <Route path="/services/electrical" element={<ElectricalAndPlumbing />} />
                  <Route path="/services/government" element={<Government />} />

                  {/* Projects */}
                  <Route path="/projects/featured" element={<Featured />} />

                  {/* Equipment */}
                  <Route path="/equipment" element={<OurMachinery />} />
                  <Route path="/equipment/machinery" element={<OurMachinery />} />
                  <Route path="/equipment/workshop" element={<WorkshopAndMaintenanceYard />} />
                  <Route path="/equipment/materials" element={<MaterialsAndHardwareStores />} />
                  <Route path="/equipment/warehouse" element={<WarehouseAndLogistics />} />
                  <Route path="/equipment/safety" element={<SafetyAndProtectedGear />} />

                  {/* Technology */}
                  <Route path="/technology" element={<SmartConstruction />} />
                  <Route path="/technology/smart" element={<SmartConstruction />} />
                  <Route path="/technology/sustainability" element={<Sustainability />} />
                  <Route path="/technology/quality" element={<QualityAssurance />} />
                  <Route path="/technology/training" element={<TrainingAndDevelopment />} />

                  {/* Blogs */}
                  <Route path="/blog" element={<CompanyNews />} />
                  <Route path="/blog/company-news" element={<CompanyNews />} />
                  <Route path="/blog/construction-tips" element={<ConstructionTips />} />
                  <Route path="/blog/safety" element={<SafetyAndSustainability />} />
                  <Route path="/blog/industry-updates" element={<IndustryUpdates />} />

                  {/* 404 inside public layout */}
                  <Route
                    path="*"
                    element={
                      <div className="container mx-auto px-4 py-16 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                          404 - Page Not Found
                        </h1>
                        <p className="text-gray-600 mb-8">
                          The page you are looking for doesn't exist.
                        </p>
                        <a
                          href="/"
                          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                          Go Back Home
                        </a>
                      </div>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />



        {/* ------------------------- USER DASHBOARD LAYOUT ------------------------- */}
        <Route path="/dashboard/*" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Jobs */}
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/available" element={<AvailableJobs />} />
          <Route path="jobs/apply" element={<ApplyJob />} />
          <Route path="jobs/applications" element={<MyApplications />} />

          {/* Marketplace */}
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="marketplace/buy" element={<BuyMaterials />} />
          <Route path="marketplace/rent" element={<RentEquipment />} />
          <Route path="marketplace/orders" element={<MyOrders />} />

          {/* Equipment */}
          <Route path="equipment" element={<Equipment />} />
          <Route path="equipment/latest" element={<LatestEquipment />} />
          <Route path="equipment/request" element={<RequestEquipment />} />

          {/* Resources */}
          <Route path="resources" element={<Resources />} />
          <Route path="resources/prices" element={<MaterialPrices />} />
          <Route path="resources/community" element={<CommunitySolutions />} />

          {/* Experts */}
          <Route path="experts" element={<Experts />} />

          {/* Support */}
          <Route path="support" element={<Support />} />
          <Route path="support/ask" element={<AskQuestion />} />
          <Route path="support/faq" element={<FAQ />} />
          <Route path="support/contact" element={<ContactSupport />} />

          {/* Settings */}
          <Route path="settings" element={<Settings />} />

          {/* Logout */}
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
   
  );
}

export default App;
