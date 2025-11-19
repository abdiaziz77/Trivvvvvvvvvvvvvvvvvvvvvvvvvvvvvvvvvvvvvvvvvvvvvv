import React, { useState } from 'react';

const MaterialPlanning = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [budget, setBudget] = useState(50000);
  const [timeline, setTimeline] = useState(90);
  const [projectPhase, setProjectPhase] = useState('planning');

  // Sample projects
  const projects = [
    {
      id: 1,
      name: 'Modern Villa Construction',
      type: 'new-construction',
      area: 2500,
      location: 'Downtown District',
      startDate: '2024-03-01',
      status: 'planning'
    },
    {
      id: 2,
      name: 'Office Renovation',
      type: 'renovation',
      area: 1800,
      location: 'Business Park',
      startDate: '2024-02-15',
      status: 'in-progress'
    },
    {
      id: 3,
      name: 'Kitchen & Bath Remodel',
      type: 'remodel',
      area: 800,
      location: 'Residential Area',
      startDate: '2024-04-01',
      status: 'planning'
    }
  ];

  // Material categories with detailed items
  const materialCategories = [
    {
      id: 'structural',
      name: 'Structural Materials',
      icon: '🏗️',
      items: [
        { id: 1, name: 'Reinforced Concrete', unit: 'cubic meter', price: 150, quantity: 0, category: 'structural' },
        { id: 2, name: 'Steel Rebar', unit: 'ton', price: 650, quantity: 0, category: 'structural' },
        { id: 3, name: 'Structural Steel', unit: 'ton', price: 850, quantity: 0, category: 'structural' },
        { id: 4, name: 'Concrete Blocks', unit: 'piece', price: 2.5, quantity: 0, category: 'structural' }
      ]
    },
    {
      id: 'exterior',
      name: 'Exterior Finishes',
      icon: '🏠',
      items: [
        { id: 5, name: 'Bricks', unit: 'piece', price: 0.8, quantity: 0, category: 'exterior' },
        { id: 6, name: 'Exterior Paint', unit: 'gallon', price: 35, quantity: 0, category: 'exterior' },
        { id: 7, name: 'Roof Tiles', unit: 'square foot', price: 4.5, quantity: 0, category: 'exterior' },
        { id: 8, name: 'Siding Material', unit: 'square foot', price: 6.2, quantity: 0, category: 'exterior' }
      ]
    },
    {
      id: 'interior',
      name: 'Interior Finishes',
      icon: '🛋️',
      items: [
        { id: 9, name: 'Drywall', unit: 'sheet', price: 12, quantity: 0, category: 'interior' },
        { id: 10, name: 'Flooring Tiles', unit: 'square foot', price: 3.8, quantity: 0, category: 'interior' },
        { id: 11, name: 'Interior Paint', unit: 'gallon', price: 28, quantity: 0, category: 'interior' },
        { id: 12, name: 'Ceiling Material', unit: 'square foot', price: 2.5, quantity: 0, category: 'interior' }
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical & Lighting',
      icon: '💡',
      items: [
        { id: 13, name: 'Electrical Wire', unit: 'roll', price: 45, quantity: 0, category: 'electrical' },
        { id: 14, name: 'Circuit Breakers', unit: 'unit', price: 25, quantity: 0, category: 'electrical' },
        { id: 15, name: 'Light Fixtures', unit: 'unit', price: 85, quantity: 0, category: 'electrical' },
        { id: 16, name: 'Switches & Outlets', unit: 'unit', price: 3.5, quantity: 0, category: 'electrical' }
      ]
    },
    {
      id: 'plumbing',
      name: 'Plumbing Materials',
      icon: '🚿',
      items: [
        { id: 17, name: 'PVC Pipes', unit: 'foot', price: 1.2, quantity: 0, category: 'plumbing' },
        { id: 18, name: 'Copper Pipes', unit: 'foot', price: 4.5, quantity: 0, category: 'plumbing' },
        { id: 19, name: 'Fixtures Set', unit: 'set', price: 350, quantity: 0, category: 'plumbing' },
        { id: 20, name: 'Water Heater', unit: 'unit', price: 600, quantity: 0, category: 'plumbing' }
      ]
    },
    {
      id: 'windows-doors',
      name: 'Windows & Doors',
      icon: '🚪',
      items: [
        { id: 21, name: 'Windows', unit: 'unit', price: 250, quantity: 0, category: 'windows-doors' },
        { id: 22, name: 'Exterior Doors', unit: 'unit', price: 450, quantity: 0, category: 'windows-doors' },
        { id: 23, name: 'Interior Doors', unit: 'unit', price: 180, quantity: 0, category: 'windows-doors' },
        { id: 24, name: 'Hardware Set', unit: 'set', price: 85, quantity: 0, category: 'windows-doors' }
      ]
    }
  ];

  // Project phases
  const projectPhases = [
    { id: 'planning', name: 'Planning & Design', progress: 0 },
    { id: 'foundation', name: 'Foundation', progress: 20 },
    { id: 'framing', name: 'Framing', progress: 40 },
    { id: 'mechanical', name: 'Mechanical Systems', progress: 60 },
    { id: 'finishes', name: 'Interior Finishes', progress: 80 },
    { id: 'completion', name: 'Final Completion', progress: 100 }
  ];

  const handleMaterialSelect = (material, quantity) => {
    const existingMaterial = selectedMaterials.find(item => item.id === material.id);
    
    if (existingMaterial) {
      if (quantity === 0) {
        // Remove material if quantity is 0
        setSelectedMaterials(selectedMaterials.filter(item => item.id !== material.id));
      } else {
        // Update quantity
        setSelectedMaterials(selectedMaterials.map(item =>
          item.id === material.id ? { ...item, quantity } : item
        ));
      }
    } else if (quantity > 0) {
      // Add new material
      setSelectedMaterials([...selectedMaterials, { ...material, quantity }]);
    }
  };

  const calculateTotalCost = () => {
    return selectedMaterials.reduce((total, material) => {
      return total + (material.price * material.quantity);
    }, 0);
  };

  const calculateBudgetUsage = () => {
    return (calculateTotalCost() / budget) * 100;
  };

  const getMaterialsByCategory = (categoryId) => {
    return selectedMaterials.filter(material => material.category === categoryId);
  };

  const generateProcurementList = () => {
    const list = selectedMaterials.map(material => ({
      name: material.name,
      quantity: material.quantity,
      unit: material.unit,
      totalCost: material.price * material.quantity,
      priority: material.category === 'structural' ? 'High' : 'Medium'
    }));
    
    alert('Procurement list generated! Total items: ' + list.length);
    return list;
  };

  const saveMaterialPlan = () => {
    const plan = {
      project: activeProject,
      materials: selectedMaterials,
      budget: budget,
      totalCost: calculateTotalCost(),
      timeline: timeline,
      createdAt: new Date().toISOString()
    };
    
    alert('Material plan saved successfully!');
    console.log('Saved plan:', plan);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Material Planning</h1>
        <p className="text-gray-600 mt-2">
          Plan and manage construction materials for your projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Project Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Project Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Project</h3>
            <div className="space-y-3">
              {projects.map(project => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition duration-300 ${
                    activeProject?.id === project.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <h4 className="font-medium text-gray-800">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.type}</p>
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                    <span>{project.area} sq ft</span>
                    <span className={`px-2 py-1 rounded-full ${
                      project.status === 'planning' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget: ${budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$10K</span>
                  <span>$500K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline: {timeline} days
                </label>
                <input
                  type="range"
                  min="30"
                  max="365"
                  step="15"
                  value={timeline}
                  onChange={(e) => setTimeline(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>30 days</span>
                  <span>1 year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Phases */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Phases</h3>
            <div className="space-y-3">
              {projectPhases.map(phase => (
                <div
                  key={phase.id}
                  onClick={() => setProjectPhase(phase.id)}
                  className={`p-3 border-2 rounded-lg cursor-pointer transition duration-300 ${
                    projectPhase === phase.id
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-green-400'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{phase.name}</span>
                    <span className="text-sm text-gray-600">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Material Selection */}
        <div className="lg:col-span-2">
          {/* Budget Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Budget Overview</h3>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">${calculateTotalCost().toLocaleString()}</p>
                <p className="text-sm text-gray-600">of ${budget.toLocaleString()}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-500 ${
                  calculateBudgetUsage() > 90 ? 'bg-red-600' : 
                  calculateBudgetUsage() > 75 ? 'bg-yellow-600' : 'bg-green-600'
                }`}
                style={{ width: `${Math.min(calculateBudgetUsage(), 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{calculateBudgetUsage().toFixed(1)}% used</span>
              <span>${(budget - calculateTotalCost()).toLocaleString()} remaining</span>
            </div>
          </div>

          {/* Material Categories */}
          <div className="space-y-6">
            {materialCategories.map(category => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                  <span className="ml-auto px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {getMaterialsByCategory(category.id).length} items selected
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map(material => {
                    const selected = selectedMaterials.find(item => item.id === material.id);
                    return (
                      <div key={material.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-gray-800">{material.name}</h4>
                            <p className="text-sm text-gray-600">${material.price}/{material.unit}</p>
                          </div>
                          <span className="text-lg font-semibold text-green-600">
                            ${(material.price * (selected?.quantity || 0)).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleMaterialSelect(material, (selected?.quantity || 0) - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-medium">
                              {selected?.quantity || 0}
                            </span>
                            <button
                              onClick={() => handleMaterialSelect(material, (selected?.quantity || 0) + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Summary & Actions */}
        <div className="lg:col-span-1 space-y-6">
          {/* Selected Materials Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Materials</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedMaterials.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No materials selected</p>
              ) : (
                selectedMaterials.map(material => (
                  <div key={material.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{material.name}</p>
                      <p className="text-xs text-gray-600">
                        {material.quantity} {material.unit} × ${material.price}
                      </p>
                    </div>
                    <span className="font-semibold text-green-600">
                      ${(material.price * material.quantity).toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
            
            {selectedMaterials.length > 0 && (
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total Cost:</span>
                  <span className="text-blue-600">${calculateTotalCost().toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
            <div className="space-y-3">
              <button
                onClick={saveMaterialPlan}
                disabled={!activeProject || selectedMaterials.length === 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Save Material Plan
              </button>
              
              <button
                onClick={generateProcurementList}
                disabled={selectedMaterials.length === 0}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Generate Procurement List
              </button>
              
              <button
                onClick={() => setSelectedMaterials([])}
                disabled={selectedMaterials.length === 0}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Clear All Materials
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-semibold">{selectedMaterials.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Categories Used:</span>
                <span className="font-semibold">
                  {new Set(selectedMaterials.map(m => m.category)).size}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Budget Used:</span>
                <span className="font-semibold">{calculateBudgetUsage().toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Project Duration:</span>
                <span className="font-semibold">{timeline} days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialPlanning;