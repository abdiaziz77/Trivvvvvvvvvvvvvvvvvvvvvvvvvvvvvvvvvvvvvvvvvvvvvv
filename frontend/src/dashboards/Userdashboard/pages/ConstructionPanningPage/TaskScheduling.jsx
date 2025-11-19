import React, { useState, useEffect } from 'react';

const TaskScheduling = () => {
  // State for projects
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    type: 'new', // 'new', 'renovation', 'planning'
    startDate: '',
    endDate: '',
    status: 'planned', // 'planned', 'in-progress', 'completed'
    tasks: []
  });
  
  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: '',
    projectId: '',
    assignedTo: '',
    startDate: '',
    endDate: '',
    status: 'pending', // 'pending', 'in-progress', 'completed'
    priority: 'medium' // 'low', 'medium', 'high'
  });
  
  // State for team members
  const [teamMembers] = useState([
    { id: 1, name: 'John Smith', role: 'Project Manager' },
    { id: 2, name: 'Sarah Johnson', role: 'Architect' },
    { id: 3, name: 'Mike Davis', role: 'Contractor' },
    { id: 4, name: 'Emily Wilson', role: 'Interior Designer' },
    { id: 5, name: 'David Brown', role: 'Engineer' }
  ]);
  
  // Initialize with sample data
  useEffect(() => {
    const sampleProjects = [
      {
        id: 1,
        name: 'Modern Family Home',
        type: 'new',
        startDate: '2023-09-01',
        endDate: '2024-03-15',
        status: 'in-progress',
        tasks: [1, 2, 3]
      },
      {
        id: 2,
        name: 'Kitchen Renovation',
        type: 'renovation',
        startDate: '2023-10-15',
        endDate: '2023-12-20',
        status: 'planned',
        tasks: [4, 5]
      },
      {
        id: 3,
        name: 'Office Building',
        type: 'planning',
        startDate: '2024-01-10',
        endDate: '2024-06-30',
        status: 'planned',
        tasks: [6]
      }
    ];
    
    const sampleTasks = [
      {
        id: 1,
        name: 'Site Preparation',
        projectId: 1,
        assignedTo: 2,
        startDate: '2023-09-01',
        endDate: '2023-09-15',
        status: 'completed',
        priority: 'high'
      },
      {
        id: 2,
        name: 'Foundation Work',
        projectId: 1,
        assignedTo: 3,
        startDate: '2023-09-16',
        endDate: '2023-10-15',
        status: 'in-progress',
        priority: 'high'
      },
      {
        id: 3,
        name: 'Framing',
        projectId: 1,
        assignedTo: 3,
        startDate: '2023-10-16',
        endDate: '2023-11-30',
        status: 'pending',
        priority: 'medium'
      },
      {
        id: 4,
        name: 'Demolition',
        projectId: 2,
        assignedTo: 3,
        startDate: '2023-10-15',
        endDate: '2023-10-25',
        status: 'pending',
        priority: 'medium'
      },
      {
        id: 5,
        name: 'Cabinet Installation',
        projectId: 2,
        assignedTo: 4,
        startDate: '2023-11-10',
        endDate: '2023-11-30',
        status: 'pending',
        priority: 'low'
      },
      {
        id: 6,
        name: 'Architectural Design',
        projectId: 3,
        assignedTo: 2,
        startDate: '2024-01-10',
        endDate: '2024-02-28',
        status: 'pending',
        priority: 'high'
      }
    ];
    
    setProjects(sampleProjects);
    setTasks(sampleTasks);
  }, []);
  
  // Handle project form submission
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const project = {
      ...newProject,
      id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
      tasks: []
    };
    setProjects([...projects, project]);
    setNewProject({
      name: '',
      type: 'new',
      startDate: '',
      endDate: '',
      status: 'planned',
      tasks: []
    });
  };
  
  // Handle task form submission
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const task = {
      ...newTask,
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
    };
    setTasks([...tasks, task]);
    
    // Add task to project
    const updatedProjects = projects.map(project => {
      if (project.id === parseInt(newTask.projectId)) {
        return {
          ...project,
          tasks: [...project.tasks, task.id]
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    
    setNewTask({
      name: '',
      projectId: '',
      assignedTo: '',
      startDate: '',
      endDate: '',
      status: 'pending',
      priority: 'medium'
    });
  };
  
  // Get tasks for a specific project
  const getProjectTasks = (projectId) => {
    return tasks.filter(task => task.projectId === projectId);
  };
  
  // Get team member by ID
  const getTeamMember = (id) => {
    return teamMembers.find(member => member.id === id);
  };
  
  // Calculate project progress
  const calculateProjectProgress = (project) => {
    const projectTasks = getProjectTasks(project.id);
    if (projectTasks.length === 0) return 0;
    
    const completedTasks = projectTasks.filter(task => task.status === 'completed').length;
    return Math.round((completedTasks / projectTasks.length) * 100);
  };
  
  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'planned': return 'bg-yellow-500';
      case 'pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Get priority color
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Get type color
  const getTypeColor = (type) => {
    switch(type) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'renovation': return 'bg-purple-100 text-purple-800';
      case 'planning': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Construction Project Scheduler</h1>
          <p className="text-gray-600 mt-2">Manage your new construction, renovation, and planning projects</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Project and Task Forms */}
          <div className="lg:col-span-1 space-y-6">
            {/* Add Project Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Project</h2>
              <form onSubmit={handleProjectSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                    <input
                      type="text"
                      value={newProject.name}
                      onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select
                      value={newProject.type}
                      onChange={(e) => setNewProject({...newProject, type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="new">New Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="planning">Planning</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={newProject.startDate}
                        onChange={(e) => setNewProject({...newProject, startDate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="date"
                        value={newProject.endDate}
                        onChange={(e) => setNewProject({...newProject, endDate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={newProject.status}
                      onChange={(e) => setNewProject({...newProject, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="planned">Planned</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Add Project
                  </button>
                </div>
              </form>
            </div>
            
            {/* Add Task Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
              <form onSubmit={handleTaskSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                    <input
                      type="text"
                      value={newTask.name}
                      onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                    <select
                      value={newTask.projectId}
                      onChange={(e) => setNewTask({...newTask, projectId: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a project</option>
                      {projects.map(project => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
                    <select
                      value={newTask.assignedTo}
                      onChange={(e) => setNewTask({...newTask, assignedTo: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a team member</option>
                      {teamMembers.map(member => (
                        <option key={member.id} value={member.id}>{member.name} - {member.role}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={newTask.startDate}
                        onChange={(e) => setNewTask({...newTask, startDate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="date"
                        value={newTask.endDate}
                        onChange={(e) => setNewTask({...newTask, endDate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={newTask.status}
                        onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                      <select
                        value={newTask.priority}
                        onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column - Project and Task Lists */}
          <div className="lg:col-span-2 space-y-6">
            {/* Projects List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {projects.map(project => (
                  <div key={project.id} className="p-6 hover:bg-gray-50 transition duration-150">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                          <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(project.type)}`}>
                            {project.type === 'new' ? 'New Construction' : 
                             project.type === 'renovation' ? 'Renovation' : 'Planning'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {project.startDate} to {project.endDate}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)} text-white`}>
                          {project.status === 'in-progress' ? 'In Progress' : 
                           project.status === 'completed' ? 'Completed' : 'Planned'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{calculateProjectProgress(project)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${calculateProjectProgress(project)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Tasks for this project */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Tasks</h4>
                      <div className="space-y-2">
                        {getProjectTasks(project.id).map(task => (
                          <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center">
                              <span className={`w-2 h-2 rounded-full mr-2 ${getPriorityColor(task.priority)}`}></span>
                              <span className="text-sm">{task.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">
                                {getTeamMember(task.assignedTo)?.name}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)} text-white`}>
                                {task.status === 'in-progress' ? 'In Progress' : 
                                 task.status === 'completed' ? 'Completed' : 'Pending'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tasks List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">All Tasks</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tasks.map(task => {
                      const project = projects.find(p => p.id === task.projectId);
                      return (
                        <tr key={task.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{task.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project?.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{getTeamMember(task.assignedTo)?.name}</div>
                            <div className="text-xs text-gray-500">{getTeamMember(task.assignedTo)?.role}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{task.startDate} to {task.endDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)} text-white`}>
                              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)} text-white`}>
                              {task.status === 'in-progress' ? 'In Progress' : 
                               task.status === 'completed' ? 'Completed' : 'Pending'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskScheduling;