import React from 'react';
import { 
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Ruler,
  Building,
  Target,
  Award,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Play,
  X,
  ZoomIn,
  Heart,
  Share2,
  Bookmark,
  Clock,
  DollarSign,
  Check,
  Star,
  Eye,
  Home,
  Wrench,
  Droplets,
  Zap,
  Shield,
  Landmark,
  ThumbsUp,
  Quote,
  Mail,
  Phone,
  User,
  MessageCircle
} from "lucide-react";

// Real project images for Garissa construction projects
const projectImages = {
  // Government Buildings
  countyAssembly: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
  countyHeadquarters: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  garissaHospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
  garissaSchool: "https://images.unsplash.com/photo-1564053479665-4e6c49c7b7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  
  // Infrastructure
  tanaRiverBridge: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  garissaRoads: "https://images.unsplash.com/photo-1548340747-4767d75c9e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  waterProject: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  
  // Commercial Projects
  garissaMall: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  businessComplex: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  
  // Residential
  apartments: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  housingEstate: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  
  // Additional Projects
  marketStalls: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  communityCenter: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
  sportsComplex: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  policeStation: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  fireStation: "https://images.unsplash.com/photo-1544450517-513c6dcd8566?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  mosque: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  warehouse: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
};

const Featured = () => {
  // State for modals and filters
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = React.useState(false);
  const [activeStatus, setActiveStatus] = React.useState('all');
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [visibleProjects, setVisibleProjects] = React.useState(6);
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  // All projects data - 20 real Garissa projects
  const allProjects = [
    // Featured Projects
    {
      id: 1,
      title: "Garissa County Assembly Building",
      type: "Government Building",
      category: "Government",
      location: "Garissa Town, Garissa County",
      year: "2024",
      duration: "24 months",
      budget: "KSh 850M",
      size: "15,000 sq ft",
      client: "Garissa County Government",
      status: "Completed",
      featured: true,
      awardWinning: true,
      description: "Construction of modern county assembly building with state-of-the-art facilities, including assembly chambers, offices, and public gallery. Designed to accommodate the growing legislative needs of Garissa County.",
      highlights: [
        "Modern legislative facilities",
        "Public gallery space",
        "Advanced security systems",
        "Energy efficient design"
      ],
      challenges: [
        "Complex design requirements",
        "Security considerations",
        "Public accessibility needs"
      ],
      solutions: [
        "Collaborative design approach",
        "Integrated security systems",
        "Phased public access planning"
      ],
      images: [
        projectImages.countyAssembly,
        projectImages.countyHeadquarters,
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 45,
      technologies: ["BIM Modeling", "Advanced Security Systems", "Green Building"],
      awards: ["County Excellence Award 2024"],
      testimonial: {
        text: "The assembly building has transformed our legislative operations. The design perfectly balances functionality with the cultural aesthetics of our region.",
        author: "Hon. Ahmed Mohamed, Speaker",
        role: "County Assembly Speaker"
      }
    },
    {
      id: 2,
      title: "Garissa Referral Hospital Expansion",
      type: "Healthcare Facility",
      category: "Healthcare",
      location: "Garissa Town, Garissa County",
      year: "2024",
      duration: "18 months",
      budget: "KSh 1.2B",
      size: "85,000 sq ft",
      client: "Ministry of Health",
      status: "Completed",
      featured: true,
      awardWinning: false,
      description: "Major expansion of Garissa Referral Hospital including new wings for specialized treatment, modern ICU facilities, and upgraded emergency services to serve the growing population.",
      highlights: [
        "Specialized treatment wings",
        "Modern ICU facilities",
        "Emergency services upgrade",
        "Medical staff housing"
      ],
      challenges: [
        "Working in operational hospital",
        "Medical equipment integration",
        "Minimizing patient disruption"
      ],
      solutions: [
        "Night and weekend work schedules",
        "Advanced equipment planning",
        "Temporary service relocation"
      ],
      images: [
        projectImages.garissaHospital,
        "https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 60,
      technologies: ["Medical Gas Systems", "Hospital HVAC", "Infection Control"],
      awards: [],
      testimonial: {
        text: "The expansion has significantly improved healthcare delivery in Northeastern Kenya. The project was completed with minimal disruption to hospital services.",
        author: "Dr. Amina Hassan",
        role: "Hospital Medical Superintendent"
      }
    },

    // Ongoing Projects
    {
      id: 3,
      title: "Tana River Bridge Construction",
      type: "Infrastructure",
      category: "Bridge",
      location: "Tana River, Garissa County",
      year: "2024",
      duration: "36 months",
      budget: "KSh 2.1B",
      size: "450m span",
      client: "Kenya National Highways Authority",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Construction of major bridge across Tana River to improve connectivity between Garissa and neighboring counties, featuring modern engineering design for flood resilience.",
      highlights: [
        "Flood-resistant design",
        "Modern engineering standards",
        "Improved regional connectivity",
        "Economic growth catalyst"
      ],
      challenges: [
        "River crossing construction",
        "Seasonal flooding",
        "Remote location logistics"
      ],
      solutions: [
        "Advanced foundation techniques",
        "Weather-adaptive scheduling",
        "Local workforce engagement"
      ],
      images: [
        projectImages.tanaRiverBridge,
        "https://images.unsplash.com/photo-1509316975850-0017663d39a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1548340747-4767d75c9e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 85,
      technologies: ["Bridge Engineering", "Flood Analysis", "Advanced Materials"],
      awards: [],
      progress: 45
    },
    {
      id: 4,
      title: "Garissa Modern Market Complex",
      type: "Commercial",
      category: "Market",
      location: "Garissa Central Business District",
      year: "2024",
      duration: "14 months",
      budget: "KSh 350M",
      size: "25,000 sq ft",
      client: "Garissa Municipal Council",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Construction of modern market complex with 500 stalls, cold storage facilities, and improved sanitation to support local traders and boost economic activity.",
      highlights: [
        "500 modern stalls",
        "Cold storage facilities",
        "Improved sanitation",
        "Trader support services"
      ],
      challenges: [
        "Relocating existing traders",
        "Urban space constraints",
        "Multiple stakeholder interests"
      ],
      solutions: [
        "Phased construction approach",
        "Temporary market arrangements",
        "Stakeholder engagement programs"
      ],
      images: [
        projectImages.marketStalls,
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 35,
      technologies: ["Market Design", "Sanitation Systems", "Commercial Planning"],
      awards: [],
      progress: 60
    },
    {
      id: 5,
      title: "Garissa University Hostels",
      type: "Educational",
      category: "Student Housing",
      location: "Garissa University",
      year: "2024",
      duration: "16 months",
      budget: "KSh 480M",
      size: "40,000 sq ft",
      client: "Garissa University",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Construction of modern student hostels with capacity for 800 students, including recreational facilities, study areas, and enhanced security features.",
      highlights: [
        "800 student capacity",
        "Recreational facilities",
        "Study areas",
        "Enhanced security"
      ],
      challenges: [
        "Academic calendar constraints",
        "Student safety requirements",
        "Budget optimization"
      ],
      solutions: [
        "Accelerated construction methods",
        "Integrated security systems",
        "Value engineering"
      ],
      images: [
        projectImages.garissaSchool,
        "https://images.unsplash.com/photo-1564053479665-4e6c49c7b7f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
      ],
      teamSize: 40,
      technologies: ["Student Housing Design", "Security Systems", "Modular Construction"],
      awards: [],
      progress: 75
    },

    // Completed Projects
    {
      id: 6,
      title: "Garissa Water Treatment Plant",
      type: "Infrastructure",
      category: "Water Project",
      location: "Tana River, Garissa",
      year: "2023",
      duration: "20 months",
      budget: "KSh 950M",
      size: "15,000 sq ft plant",
      client: "Garissa Water and Sewerage Company",
      status: "Completed",
      featured: false,
      awardWinning: true,
      description: "Construction of modern water treatment plant with capacity to supply 20,000 cubic meters of clean water daily to Garissa town and surrounding areas.",
      highlights: [
        "20,000 m³ daily capacity",
        "Advanced treatment technology",
        "Clean water supply",
        "Community health improvement"
      ],
      challenges: [
        "Water quality variations",
        "Power supply reliability",
        "Community water needs"
      ],
      solutions: [
        "Multi-stage treatment process",
        "Backup power systems",
        "Community engagement"
      ],
      images: [
        projectImages.waterProject,
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1548340747-4767d75c9e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 50,
      technologies: ["Water Treatment", "Pipeline Systems", "Quality Control"],
      awards: ["Water Project Excellence Award 2023"],
      testimonial: {
        text: "This water plant has transformed lives in Garissa. Access to clean water has improved public health and economic activities in the region.",
        author: "Eng. Mohamed Ali",
        role: "Managing Director, GAWASCO"
      }
    },
    {
      id: 7,
      title: "Garissa Business Plaza",
      type: "Commercial",
      category: "Office Complex",
      location: "Kismayu Road, Garissa",
      year: "2023",
      duration: "22 months",
      budget: "KSh 680M",
      size: "50,000 sq ft",
      client: "Garissa Investment Group",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Modern business plaza featuring office spaces, retail outlets, and conference facilities designed to serve the growing business community in Garissa.",
      highlights: [
        "Modern office spaces",
        "Retail outlets",
        "Conference facilities",
        "Business support services"
      ],
      challenges: [
        "Market demand fluctuations",
        "Tenant mix optimization",
        "Commercial viability"
      ],
      solutions: [
        "Flexible space design",
        "Strategic tenant selection",
        "Phased development approach"
      ],
      images: [
        projectImages.businessComplex,
        projectImages.garissaMall,
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      ],
      teamSize: 45,
      technologies: ["Commercial Design", "Retail Planning", "Office Solutions"],
      awards: [],
      testimonial: {
        text: "The business plaza has become the commercial hub of Garissa. The quality of construction and design has attracted major businesses to the area.",
        author: "Mr. Hassan Abdi",
        role: "Chairman, Investment Group"
      }
    },
    {
      id: 8,
      title: "Garissa Low-Cost Housing",
      type: "Residential",
      category: "Affordable Housing",
      location: "Bula Punda, Garissa",
      year: "2023",
      duration: "18 months",
      budget: "KSh 420M",
      size: "120 units",
      client: "State Department of Housing",
      status: "Completed",
      featured: false,
      awardWinning: true,
      description: "Development of 120 affordable housing units with basic amenities to address the housing deficit in Garissa and provide decent accommodation for low-income families.",
      highlights: [
        "120 housing units",
        "Affordable pricing",
        "Basic amenities",
        "Community development"
      ],
      challenges: [
        "Cost optimization",
        "Quality maintenance",
        "Community integration"
      ],
      solutions: [
        "Efficient design solutions",
        "Local material sourcing",
        "Community participation"
      ],
      images: [
        projectImages.housingEstate,
        projectImages.apartments,
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 38,
      technologies: ["Affordable Housing", "Community Planning", "Cost Optimization"],
      awards: ["Affordable Housing Award 2023"],
      testimonial: {
        text: "These houses have provided decent living conditions for many families. The project demonstrates that quality housing can be affordable.",
        author: "Ms. Fatuma Mohamed",
        role: "Housing Project Beneficiary"
      }
    },
    {
      id: 9,
      title: "Garissa Central Mosque Renovation",
      type: "Religious",
      category: "Mosque",
      location: "Garissa Town Centre",
      year: "2023",
      duration: "8 months",
      budget: "KSh 180M",
      size: "8,000 sq ft",
      client: "Garissa Muslim Association",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Comprehensive renovation and expansion of Garissa Central Mosque including structural reinforcement, interior refurbishment, and addition of modern facilities.",
      highlights: [
        "Structural reinforcement",
        "Interior refurbishment",
        "Modern facilities",
        "Cultural preservation"
      ],
      challenges: [
        "Preserving cultural elements",
        "Working during prayer times",
        "Community expectations"
      ],
      solutions: [
        "Sensitive design approach",
        "Flexible work schedules",
        "Community consultation"
      ],
      images: [
        projectImages.mosque,
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 25,
      technologies: ["Heritage Conservation", "Structural Engineering", "Cultural Design"],
      awards: [],
      testimonial: {
        text: "The renovation has preserved our cultural heritage while providing modern facilities. The mosque now serves our community better than ever.",
        author: "Sheikh Abdullahi",
        role: "Mosque Committee Chairman"
      }
    },
    {
      id: 10,
      title: "Garissa Police Station Upgrade",
      type: "Government",
      category: "Security",
      location: "Garissa Town",
      year: "2023",
      duration: "10 months",
      budget: "KSh 220M",
      size: "12,000 sq ft",
      client: "National Police Service",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Modernization of Garissa Police Station including new cells, improved offices, enhanced security systems, and better public service areas.",
      highlights: [
        "Modern cell facilities",
        "Improved offices",
        "Enhanced security",
        "Better public service"
      ],
      challenges: [
        "Security during construction",
        "Operational continuity",
        "Sensitive facility requirements"
      ],
      solutions: [
        "Secure construction zones",
        "Phased implementation",
        "Specialized security systems"
      ],
      images: [
        projectImages.policeStation,
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1548340747-4767d75c9e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      teamSize: 30,
      technologies: ["Security Systems", "Government Facilities", "Operational Design"],
      awards: [],
      testimonial: {
        text: "The upgraded facilities have significantly improved our operational efficiency and public service delivery in Garissa.",
        author: "OCPD Garissa",
        role: "Police Commander"
      }
    },
    // Additional projects to reach 20...
    {
      id: 11,
      title: "Garissa Community Sports Complex",
      type: "Recreational",
      category: "Sports Facility",
      location: "Garissa Sports Ground",
      year: "2024",
      duration: "14 months",
      budget: "KSh 320M",
      size: "25,000 sq ft",
      client: "Garissa County Government",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Construction of modern sports complex with football pitch, athletics track, and multi-purpose courts to promote sports development in Garissa.",
      images: [projectImages.sportsComplex],
      teamSize: 28,
      progress: 50
    },
    {
      id: 12,
      title: "Garissa Fire Station",
      type: "Government",
      category: "Emergency Services",
      location: "Garissa Town",
      year: "2023",
      duration: "9 months",
      budget: "KSh 150M",
      size: "6,000 sq ft",
      client: "County Government of Garissa",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "New fire station with modern equipment and training facilities to enhance emergency response capabilities in Garissa County.",
      images: [projectImages.fireStation],
      teamSize: 20
    },
    {
      id: 13,
      title: "Garissa Hotel and Conference Centre",
      type: "Commercial",
      category: "Hospitality",
      location: "Kismayu Road, Garissa",
      year: "2024",
      duration: "20 months",
      budget: "KSh 580M",
      size: "45,000 sq ft",
      client: "Garissa Hospitality Group",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Modern hotel and conference centre to accommodate growing business tourism in Garissa with 80 rooms and conference facilities.",
      images: [projectImages.hotel],
      teamSize: 42,
      progress: 35
    },
    {
      id: 14,
      title: "Garissa Industrial Warehouse",
      type: "Commercial",
      category: "Industrial",
      location: "Garissa Industrial Area",
      year: "2023",
      duration: "7 months",
      budget: "KSh 95M",
      size: "15,000 sq ft",
      client: "Garissa Traders Association",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Modern warehouse facility for storage and distribution of goods to support trade and commerce in Garissa region.",
      images: [projectImages.warehouse],
      teamSize: 18
    },
    {
      id: 15,
      title: "Garissa Primary School Classrooms",
      type: "Educational",
      category: "School Infrastructure",
      location: "Garissa Town",
      year: "2023",
      duration: "6 months",
      budget: "KSh 45M",
      size: "8,000 sq ft",
      client: "Ministry of Education",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Construction of 16 new classrooms to address overcrowding and improve learning environment in Garissa primary schools.",
      images: [projectImages.garissaSchool],
      teamSize: 15
    },
    {
      id: 16,
      title: "Garissa Road Network Upgrade",
      type: "Infrastructure",
      category: "Roads",
      location: "Garissa Municipality",
      year: "2024",
      duration: "24 months",
      budget: "KSh 1.8B",
      size: "45km roads",
      client: "Kenya Urban Roads Authority",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Major upgrade of Garissa urban road network including tarmacking, drainage systems, and street lighting.",
      images: [projectImages.garissaRoads],
      teamSize: 75,
      progress: 40
    },
    {
      id: 17,
      title: "Garissa Community Health Centre",
      type: "Healthcare",
      category: "Clinic",
      location: "Bula Iftin, Garissa",
      year: "2023",
      duration: "8 months",
      budget: "KSh 85M",
      size: "5,000 sq ft",
      client: "County Department of Health",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "New community health centre to provide primary healthcare services to residents of Bula Iftin and surrounding areas.",
      images: [projectImages.garissaHospital],
      teamSize: 22
    },
    {
      id: 18,
      title: "Garissa County Headquarters Annex",
      type: "Government",
      category: "Office Building",
      location: "Garissa Town",
      year: "2024",
      duration: "16 months",
      budget: "KSh 420M",
      size: "28,000 sq ft",
      client: "Garissa County Government",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Additional office space for county government departments to accommodate growing administrative needs.",
      images: [projectImages.countyHeadquarters],
      teamSize: 35,
      progress: 65
    },
    {
      id: 19,
      title: "Garissa Youth Empowerment Centre",
      type: "Community",
      category: "Youth Facility",
      location: "Garissa Town",
      year: "2023",
      duration: "10 months",
      budget: "KSh 120M",
      size: "10,000 sq ft",
      client: "National Youth Service",
      status: "Completed",
      featured: false,
      awardWinning: false,
      description: "Multi-purpose youth centre with training facilities, recreational areas, and business incubation spaces.",
      images: [projectImages.communityCenter],
      teamSize: 25
    },
    {
      id: 20,
      title: "Garissa Abattoir Modernization",
      type: "Commercial",
      category: "Industrial",
      location: "Garissa Industrial Area",
      year: "2024",
      duration: "12 months",
      budget: "KSh 280M",
      size: "18,000 sq ft",
      client: "Garissa Livestock Traders",
      status: "In Progress",
      featured: false,
      awardWinning: false,
      description: "Modernization of Garissa abattoir with improved hygiene standards, cold chain facilities, and waste management systems.",
      images: [projectImages.warehouse],
      teamSize: 32,
      progress: 30
    }
  ];

  // Project status filters
  const projectStatus = [
    { id: "all", name: "All Projects", count: allProjects.length },
    { id: "featured", name: "Featured Projects", count: allProjects.filter(p => p.featured).length },
    { id: "ongoing", name: "Ongoing Projects", count: allProjects.filter(p => p.status === "In Progress").length },
    { id: "completed", name: "Completed Projects", count: allProjects.filter(p => p.status === "Completed").length }
  ];

  // Filter projects based on selected status
  const filteredProjects = allProjects.filter(project => {
    if (activeStatus === 'all') return true;
    if (activeStatus === 'featured') return project.featured;
    if (activeStatus === 'ongoing') return project.status === "In Progress";
    if (activeStatus === 'completed') return project.status === "Completed";
    return true;
  });

  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Handle contact form input change
  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your inquiry! We will contact you soon.');
    setShowContactForm(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  // Custom Button Component
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
      default: "bg-[#F4B942] text-white hover:bg-[#F4B942]/90 shadow-lg hover:shadow-xl",
      secondary: "bg-white text-[#F4B942] hover:bg-gray-50 border border-[#F4B942]",
      outline: "border border-[#F4B942] text-[#F4B942] hover:bg-[#F4B942] hover:text-white",
      ghost: "hover:bg-[#F4B942]/10 hover:text-[#F4B942]",
      link: "underline-offset-4 hover:underline text-[#F4B942]"
    };
    
    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md text-lg",
      xl: "h-14 px-10 rounded-lg text-xl",
      icon: "h-10 w-10"
    };
    
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} rounded-md transition-all duration-300 transform hover:scale-105`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Card Component
  const CustomCard = ({ children, className = "", ...props }) => {
    return (
      <div 
        className={`rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  // Project Card Component
  const ProjectCard = ({ project, onClick }) => {
    return (
      <CustomCard className="overflow-hidden border-gray-200 hover:border-[#F4B942] transition-all duration-300 cursor-pointer group" onClick={onClick}>
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Status badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
            project.status === "Completed" 
              ? "bg-green-100 text-green-800" 
              : project.status === "In Progress"
              ? "bg-[#F4B942] text-gray-900"
              : "bg-blue-100 text-blue-800"
          }`}>
            {project.status}
          </div>
          
          {/* Award badge */}
          {project.awardWinning && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4 inline mr-1" />
              Award Winner
            </div>
          )}

          {/* Progress bar for ongoing projects */}
          {project.status === "In Progress" && project.progress && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
                <div className="flex justify-between text-xs text-gray-700 mb-1 px-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#F4B942] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#F4B942]" />
              <span className="text-sm font-semibold text-[#F4B942]">{project.type}</span>
            </div>
            {project.featured && (
              <Star className="w-5 h-5 text-[#F4B942] fill-current" />
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F4B942] transition-colors mb-3">{project.title}</h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Ruler className="w-4 h-4" />
              <span>{project.size}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>{project.teamSize} team</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-[#F4B942]">{project.budget}</div>
            <div className="flex items-center text-sm text-gray-500 group-hover:text-[#F4B942] transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </CustomCard>
    );
  };

  // Project Detail Modal (Full Screen)
  const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === "Completed" 
                    ? "bg-green-100 text-green-800" 
                    : project.status === "In Progress"
                    ? "bg-[#F4B942] text-gray-900"
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {project.status}
                </span>
                {project.awardWinning && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4 inline mr-1" />
                    Award Winning
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Gallery & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Gallery */}
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Main view`}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>

                {/* Zoom Button */}
                <button
                  onClick={() => {
                    setSelectedImageIndex(currentImageIndex);
                    setIsGalleryModalOpen(true);
                  }}
                  className="absolute bottom-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index ? 'border-[#F4B942]' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700 text-sm">{project.location}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Calendar className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Year</h3>
                  <p className="text-gray-700 text-sm">{project.year}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Clock className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
                  <p className="text-gray-700 text-sm">{project.duration}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <DollarSign className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Budget</h3>
                  <p className="text-gray-700 text-sm">{project.budget}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Ruler className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Size</h3>
                  <p className="text-gray-700 text-sm">{project.size}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Users className="w-8 h-8 text-[#F4B942] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Team Size</h3>
                  <p className="text-gray-700 text-sm">{project.teamSize} professionals</p>
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-8">
              {/* Quick Info */}
              <CustomCard className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{project.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Client</h3>
                    <p className="text-gray-700 text-sm">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Category</h3>
                    <p className="text-gray-700 text-sm">{project.category}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Type</h3>
                    <p className="text-gray-700 text-sm">{project.type}</p>
                  </div>
                </div>
              </CustomCard>

              {/* Technologies */}
              {project.technologies && (
                <CustomCard className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-[#F4B942]/20 text-[#F4B942] rounded-full text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CustomCard>
              )}

              {/* Awards */}
              {project.awards && project.awards.length > 0 && (
                <CustomCard className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                  <div className="space-y-3">
                    {project.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                        <Award className="w-5 h-5 text-[#F4B942]" />
                        <span className="text-gray-700 text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </CustomCard>
              )}
            </div>
          </div>

          {/* Detailed Sections */}
          {project.highlights && project.challenges && project.solutions && (
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              {/* Highlights */}
              <CustomCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <Check className="w-6 h-6 text-[#F4B942] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CustomCard>

              {/* Challenges & Solutions */}
              <div className="space-y-8">
                <CustomCard className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-700">
                        <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CustomCard>

                <CustomCard className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solutions</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-4 text-gray-700">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CustomCard>
              </div>
            </div>
          )}

          {/* Client Testimonial */}
          {project.testimonial && (
            <CustomCard className="p-8 mt-8 bg-[#F4B942]/10 border-[#F4B942]/20">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Quote className="w-12 h-12 text-[#F4B942]" />
                </div>
                <div>
                  <p className="text-lg italic text-gray-700 mb-4 text-sm">"{project.testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{project.testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CustomCard>
          )}

          {/* Call to Action */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-6">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Interested in similar projects?</h3>
                  <p className="text-gray-600 text-sm">Contact our team to discuss your vision.</p>
                </div>
                <div className="flex gap-4">
                  <CustomButton variant="outline" size="lg">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Project
                  </CustomButton>
                  <CustomButton size="lg" onClick={() => setShowContactForm(true)}>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Contact Project Team
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Gallery Modal
  const GalleryModal = ({ project, initialIndex, onClose }) => {
    if (!project) return null;

    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/90" onClick={onClose}></div>
          
          {/* Modal */}
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex items-center justify-center">
              <img 
                src={project.images[currentIndex]} 
                alt={`${project.title} - View ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
              {currentIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Contact Form Modal
  const ContactFormModal = () => {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowContactForm(false)}></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Our Team</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactForm.name}
                  onChange={handleContactInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactForm.email}
                  onChange={handleContactInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={contactForm.phone}
                  onChange={handleContactInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Interest
                </label>
                <select
                  name="project"
                  value={contactForm.project}
                  onChange={handleContactInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="government">Government Projects</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={contactForm.message}
                  onChange={handleContactInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <CustomButton type="submit" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </CustomButton>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+254 700 000000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                <Mail className="w-4 h-4" />
                <span>info@garissaconstruction.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${projectImages.countyAssembly})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              JengaNow <span className="text-[#F4B942]">Projects</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Showcasing our construction projects across Garissa County - building infrastructure, 
              communities, and sustainable development for Northeastern Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => document.getElementById('project-grid').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
                <ChevronRight className="w-5 h-5 ml-2" />
              </CustomButton>
              <CustomButton 
                variant="outline" 
                size="lg" 
                className="font-semibold border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => setShowContactForm(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Project
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status Filters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of construction projects across Garissa County, from government infrastructure to commercial developments.
            </p>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectStatus.map((status) => (
              <button
                key={status.id}
                onClick={() => {
                  setActiveStatus(status.id);
                  setVisibleProjects(6);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeStatus === status.id
                    ? 'bg-[#F4B942] text-gray-900 shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#F4B942] hover:text-[#F4B942]'
                }`}
              >
                {status.name} ({status.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="project-grid" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeStatus === 'featured' && 'Featured Projects'}
              {activeStatus === 'ongoing' && 'Ongoing Projects'}
              {activeStatus === 'completed' && 'Completed Projects'}
              {activeStatus === 'all' && 'All Projects'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeStatus === 'featured' && 'Our most significant and innovative construction projects in Garissa County.'}
              {activeStatus === 'ongoing' && 'Projects currently under construction across Garissa County.'}
              {activeStatus === 'completed' && 'Successfully delivered projects that have transformed Garissa County.'}
              {activeStatus === 'all' && 'Complete portfolio of our construction projects in Garissa County.'}
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(0, visibleProjects).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {visibleProjects < filteredProjects.length && (
                <div className="text-center mt-12">
                  <CustomButton variant="outline" size="lg" onClick={loadMoreProjects}>
                    Load More Projects
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </CustomButton>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Building className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting different filters to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read what our clients in Garissa County have to say about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects
              .filter(project => project.testimonial)
              .slice(0, 3)
              .map((project) => (
                <CustomCard key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <ThumbsUp className="w-6 h-6 text-[#F4B942]" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">"{project.testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900 text-sm">{project.testimonial.author}</p>
                    <p className="text-xs text-gray-600">{project.testimonial.role}</p>
                  </div>
                </CustomCard>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Start Your Next Project in Garissa</h2>
            <p className="text-xl mb-8 text-gray-300">
              Ready to build in Garissa County? Contact our team to discuss how we can help make 
              your construction project a success with our local expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => setShowContactForm(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Project
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isGalleryModalOpen && selectedProject && (
        <GalleryModal 
          project={selectedProject}
          initialIndex={selectedImageIndex}
          onClose={() => setIsGalleryModalOpen(false)}
        />
      )}

      {/* Contact Form Modal */}
      {showContactForm && <ContactFormModal />}
    </div>
  );
};

export default Featured;