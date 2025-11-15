import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// -------------------------- PUBLIC PAGES --------------------------
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

// -------------------------- USER DASHBOARD --------------------------
import UserLayout from './dashboards/Userdashboard/layout/UserLayout';
import Dashboard from './dashboards/Userdashboard/pages/Dashboard';
import Projects from './dashboards/Userdashboard/pages/Projects';
import EquipmentRental from './dashboards/Userdashboard/pages/EquipmentRental';
import MaterialsSuppliesMain from './dashboards/Userdashboard/pages/MaterialsSuppliesMain';
import AccountSettings from './dashboards/Userdashboard/pages/AccountSettings';

// -------------------------- SUB DASHBOARDS --------------------------
import ProjectDashboard from './dashboards/Userdashboard/layout/ProjectDashboard';
import EquipmentRentalDashboard from './dashboards/Userdashboard/layout/Equipment&RentalDashboard';
import MaterialsSuppliesDashboard from './dashboards/Userdashboard/layout/Materials&SuppliesDashboard';
import AccountSettingDashboard from './dashboards/Userdashboard/layout/Account&SettingDashboard';

// -------------------------- PROJECT SUB PAGES --------------------------
import ProjectOverview from './dashboards/Userdashboard/pages/ProjectPages/ProjectOverview';
import MyProjects from './dashboards/Userdashboard/pages/ProjectPages/MyProjects';
import StartNewProject from './dashboards/Userdashboard/pages/ProjectPages/StartNewProject';
import ProjectBudgetCosting from './dashboards/Userdashboard/pages/ProjectPages/ProjectBudgetCosting';
import ProjectTimelineGanttChart from './dashboards/Userdashboard/pages/ProjectPages/ProjectTimelineGanttChart';
import DocumentsBlueprints from './dashboards/Userdashboard/pages/ProjectPages/DocumentsBlueprints';
import EngineersExperts from './dashboards/Userdashboard/pages/ProjectPages/EngineersExperts';
import CommunicationChat from './dashboards/Userdashboard/pages/ProjectPages/CommunicationChat';

// -------------------------- EQUIPMENT SUB PAGES --------------------------
import BrowseEquipment from './dashboards/Userdashboard/pages/EquipmentPages/BrowseEquipment';
import MyRentals from './dashboards/Userdashboard/pages/EquipmentPages/MyRentals';
import RentalHistory from './dashboards/Userdashboard/pages/EquipmentPages/RentalHistory';
import RentalOverview from './dashboards/Userdashboard/pages/EquipmentPages/RentalOverview';
import RentalPayments from './dashboards/Userdashboard/pages/EquipmentPages/RentalPayments';
import HelpContactTeam from './dashboards/Userdashboard/pages/EquipmentPages/HelpContactTeam';

// -------------------------- MATERIALS SUB PAGES --------------------------
import BrowseMaterials from './dashboards/Userdashboard/pages/MaterialsPages/BrowseMaterials';
import MaterialCategories from './dashboards/Userdashboard/pages/MaterialsPages/MaterialCategories';
import MaterialsOverview from './dashboards/Userdashboard/pages/MaterialsPages/MaterialsOverview';
import MyOrders from './dashboards/Userdashboard/pages/MaterialsPages/MyOrders';
import Payment from './dashboards/Userdashboard/pages/MaterialsPages/Payment';
import Suppliers from './dashboards/Userdashboard/pages/MaterialsPages/Suppliers';

// -------------------------- ACCOUNT SUB PAGES --------------------------
import Profile from './dashboards/Userdashboard/pages/Account&SettingPages/Profile';
import AccountSettingsub from './dashboards/Userdashboard/pages/Account&SettingPages/AccountSettingsub';
import PaymentMethods from './dashboards/Userdashboard/pages/Account&SettingPages/PaymentMethods';
import Security from './dashboards/Userdashboard/pages/Account&SettingPages/Security';
import Logout from './dashboards/Userdashboard/pages/Account&SettingPages/Logout';

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

                {/* 404 */}
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

      {/* -------------------------- MAIN USER DASHBOARD -------------------------- */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="equipment-rental" element={<EquipmentRental />} />
        <Route path="materials-supplies" element={<MaterialsSuppliesMain />} />
        <Route path="account-settings" element={<AccountSettings />} />
      </Route>

      {/* -------------------------- SUB DASHBOARDS -------------------------- */}

      {/* Project Dashboard */}
      <Route path="/user/projects-dashboard" element={<ProjectDashboard />}>
        <Route path="overview" element={<ProjectOverview />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="start-new" element={<StartNewProject />} />
        <Route path="budget-costing" element={<ProjectBudgetCosting />} />
        <Route path="timeline" element={<ProjectTimelineGanttChart />} />
        <Route path="documents" element={<DocumentsBlueprints />} />
        <Route path="engineers" element={<EngineersExperts />} />
        <Route path="chat" element={<CommunicationChat />} />
      </Route>

      {/* Equipment & Rental Dashboard */}
      <Route path="/user/equipment-dashboard" element={<EquipmentRentalDashboard />}>
        <Route path="browse-equipment" element={<BrowseEquipment />} />
        <Route path="my-rentals" element={<MyRentals />} />
        <Route path="rental-history" element={<RentalHistory />} />
        <Route path="rental-overview" element={<RentalOverview />} />
        <Route path="rental-payments" element={<RentalPayments />} />
        <Route path="help" element={<HelpContactTeam />} />
      </Route>

      {/* Materials & Supplies Dashboard */}
      <Route path="/user/materials-dashboard" element={<MaterialsSuppliesDashboard />}>
        <Route path="browse-materials" element={<BrowseMaterials />} />
        <Route path="material-categories" element={<MaterialCategories />} />
        <Route path="materials-overview" element={<MaterialsOverview />} />
        <Route path="my-orders" element={<MyOrders />} />
        <Route path="payment" element={<Payment />} />
        <Route path="suppliers" element={<Suppliers />} />
      </Route>

      {/* Account & Settings Dashboard */}
      <Route path="/user/account-dashboard" element={<AccountSettingDashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="account-settings-sub" element={<AccountSettingsub />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
        <Route path="security" element={<Security />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
