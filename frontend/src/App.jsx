import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// -------------------------- PUBLIC PAGES --------------------------
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

// -------------------------- ADMIN DASHBOARD --------------------------
import AdminLayout from './dashboards/Admindashboard/layout/AdminLayout';

import AdminOverview from './dashboards/Admindashboard/pages/AdminDashboard/Overview';

// User Management
import AllUsers from './dashboards/Admindashboard/pages/UserManagement/AllUsers';
import CreateUser from './dashboards/Admindashboard/pages/UserManagement/CreateUser';
import Contractors from './dashboards/Admindashboard/pages/UserManagement/Contractors';
import Clients from './dashboards/Admindashboard/pages/UserManagement/Clients';
import RolesPermissions from './dashboards/Admindashboard/pages/UserManagement/RolesPermissions';

// Construction Planning
import CPOverview from './dashboards/Admindashboard/pages/ConstructionPlanning/Overview';
import ManagePlans from './dashboards/Admindashboard/pages/ConstructionPlanning/ManagePlans';
import Approvals from './dashboards/Admindashboard/pages/ConstructionPlanning/Approvals';
import ProgressReports from './dashboards/Admindashboard/pages/ConstructionPlanning/ProgressReports';

// Equipment Management
import EQInventory from './dashboards/Admindashboard/pages/EquipmentManagement/Inventory';
import EQApproveRequests from './dashboards/Admindashboard/pages/EquipmentManagement/ApproveRequests';
import AddEquipment from './dashboards/Admindashboard/pages/EquipmentManagement/AddEquipment';
import Maintenance from './dashboards/Admindashboard/pages/EquipmentManagement/Maintenance';
import UsageTracking from './dashboards/Admindashboard/pages/EquipmentManagement/UsageTracking';

// Materials Management
import MMInventory from './dashboards/Admindashboard/pages/MaterialsManagement/Inventory';
import SuppliersPage from './dashboards/Admindashboard/pages/MaterialsManagement/Suppliers';
import MMApproveRequests from './dashboards/Admindashboard/pages/MaterialsManagement/ApproveRequests';
import Deliveries from './dashboards/Admindashboard/pages/MaterialsManagement/Deliveries';
import PurchaseOrders from './dashboards/Admindashboard/pages/MaterialsManagement/PurchaseOrders';

// Project Management
import AllProjects from './dashboards/Admindashboard/pages/ProjectManagement/AllProjects';
import CreateProject from './dashboards/Admindashboard/pages/ProjectManagement/CreateProject';
import Teams from './dashboards/Admindashboard/pages/ProjectManagement/Teams';
import Scheduling from './dashboards/Admindashboard/pages/ProjectManagement/Scheduling';
import Budget from './dashboards/Admindashboard/pages/ProjectManagement/Budget';
import Reports from './dashboards/Admindashboard/pages/ProjectManagement/Reports';

// Finances
import Invoices from './dashboards/Admindashboard/pages/Finances/Invoices';
import Payments from './dashboards/Admindashboard/pages/Finances/Payments';
import Expenses from './dashboards/Admindashboard/pages/Finances/Expenses';
import BudgetAllocation from './dashboards/Admindashboard/pages/Finances/BudgetAllocation';

// Documents
import Contracts from './dashboards/Admindashboard/pages/Documents/Contracts';
import Blueprints from './dashboards/Admindashboard/pages/Documents/Blueprints';
import Permits from './dashboards/Admindashboard/pages/Documents/Permits';
import SafetyDocs from './dashboards/Admindashboard/pages/Documents/SafetyDocs';

// Notifications
import SystemNotifications from './dashboards/Admindashboard/pages/Notifications/SystemNotifications';

// Settings
import SystemSettings from './dashboards/Admindashboard/pages/Settings/SystemSettings';
import AdminAccountSettings from './dashboards/Admindashboard/pages/Settings/AccountSettings';
import AuditLogs from './dashboards/Admindashboard/pages/Settings/AuditLogs';
import SecurityControls from './dashboards/Admindashboard/pages/Settings/SecurityControls';

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

      {/* -------------------------- ADMIN DASHBOARD -------------------------- */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Admin Dashboard */}
        <Route path="dashboard" element={<AdminOverview />} />

        {/* User Management */}
        <Route path="users/all" element={<AllUsers />} />
        <Route path="users/create" element={<CreateUser />} />
        <Route path="users/contractors" element={<Contractors />} />
        <Route path="users/clients" element={<Clients />} />
        <Route path="users/roles-permissions" element={<RolesPermissions />} />

        {/* Construction Planning */}
        <Route path="planning/overview" element={<CPOverview />} />
        <Route path="planning/manage-plans" element={<ManagePlans />} />
        <Route path="planning/approvals" element={<Approvals />} />
        <Route path="planning/progress-reports" element={<ProgressReports />} />

        {/* Equipment Management */}
        <Route path="equipment/inventory" element={<EQInventory />} />
        <Route path="equipment/approve-requests" element={<EQApproveRequests />} />
        <Route path="equipment/add" element={<AddEquipment />} />
        <Route path="equipment/maintenance" element={<Maintenance />} />
        <Route path="equipment/usage-tracking" element={<UsageTracking />} />

        {/* Materials Management */}
        <Route path="materials/inventory" element={<MMInventory />} />
        <Route path="materials/suppliers" element={<SuppliersPage />} />
        <Route path="materials/approve-requests" element={<MMApproveRequests />} />
        <Route path="materials/deliveries" element={<Deliveries />} />
        <Route path="materials/purchase-orders" element={<PurchaseOrders />} />

        {/* Project Management */}
        <Route path="projects/all" element={<AllProjects />} />
        <Route path="projects/create" element={<CreateProject />} />
        <Route path="projects/teams" element={<Teams />} />
        <Route path="projects/scheduling" element={<Scheduling />} />
        <Route path="projects/budget" element={<Budget />} />
        <Route path="projects/reports" element={<Reports />} />

        {/* Finances */}
        <Route path="finances/invoices" element={<Invoices />} />
        <Route path="finances/payments" element={<Payments />} />
        <Route path="finances/expenses" element={<Expenses />} />
        <Route path="finances/budget-allocation" element={<BudgetAllocation />} />

        {/* Documents */}
        <Route path="documents/contracts" element={<Contracts />} />
        <Route path="documents/blueprints" element={<Blueprints />} />
        <Route path="documents/permits" element={<Permits />} />
        <Route path="documents/safety-docs" element={<SafetyDocs />} />

        {/* Notifications */}
        <Route path="notifications/system" element={<SystemNotifications />} />

        {/* Settings */}
        <Route path="settings/system" element={<SystemSettings />} />
        <Route path="settings/account" element={<AdminAccountSettings />} />
        <Route path="settings/audit-logs" element={<AuditLogs />} />
        <Route path="settings/security-controls" element={<SecurityControls />} />

      </Route>
    </Routes>
  );
}

export default App;
