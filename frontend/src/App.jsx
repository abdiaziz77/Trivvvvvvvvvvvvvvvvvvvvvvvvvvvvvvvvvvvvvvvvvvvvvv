import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

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
import Ongoing from './pages/projects/Ongoing';
import Completed from './pages/projects/Completed';
import Featured from './pages/projects/Featured';
import SuccessStories from './pages/projects/SuccessStories';

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



// Additional Pages


function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* About Us Routes */}
            <Route path="/about" element={<OurCompany />} />
            <Route path="/about/company" element={<OurCompany />} />
            <Route path="/about/leaders" element={<Leaders />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/join" element={<JoinTeam />} />

            {/* Services Routes */}
            <Route path="/services/renovation" element={<BuildingConstruction />} />
            <Route path="/services/interior" element={<InteriorFinishing />} />
            <Route path="/services/roofing" element={<RoofingSolutions />} />
            <Route path="/services/foundation" element={<FoundationRepair />} />
            <Route path="/services/electrical" element={<ElectricalAndPlumbing />} />
            <Route path="/services/government" element={<Government />} />

            {/* Projects Routes */}
            <Route path="/projects/featured" element={<Featured />} />
            <Route path="/projects/ongoing" element={<Ongoing />} />
            <Route path="/projects/completed" element={<Completed />} />
            <Route path="/projects/success" element={<SuccessStories />} />

            {/* Equipment Routes */}
            <Route path="/equipment" element={<OurMachinery />} />
            <Route path="/equipment/machinery" element={<OurMachinery />} />
            <Route path="/equipment/workshop" element={<WorkshopAndMaintenanceYard />} />
            <Route path="/equipment/materials" element={<MaterialsAndHardwareStores />} />
            <Route path="/equipment/warehouse" element={<WarehouseAndLogistics />} />
            <Route path="/equipment/safety" element={<SafetyAndProtectedGear />} />

            {/* Technology Routes */}
            <Route path="/technology" element={<SmartConstruction />} />
            <Route path="/technology/smart" element={<SmartConstruction />} />
            <Route path="/technology/sustainability" element={<Sustainability />} />
            <Route path="/technology/quality" element={<QualityAssurance />} />
            <Route path="/technology/training" element={<TrainingAndDevelopment />} />

            {/* Blog/News Routes */}
            <Route path="/blog" element={<CompanyNews />} />
            <Route path="/blog/company-news" element={<CompanyNews />} />
            <Route path="/blog/construction-tips" element={<ConstructionTips />} />
            <Route path="/blog/safety" element={<SafetyAndSustainability />} />
            <Route path="/blog/industry-updates" element={<IndustryUpdates />} />

            {/* Additional Main Pages */}
            
            <Route path="/contact" element={<Contact />} />

           

            {/* Catch all route - 404 */}
            <Route path="*" element={
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you are looking for doesn't exist.</p>
                <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
                  Go Back Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;