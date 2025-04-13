import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/mockProjects';

function Dashboard() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter projects based on status and search term
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.status.toLowerCase() === filter.toLowerCase();
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Calculate counts for different statuses
  const statusCounts = {
    all: projects.length,
    inProgress: projects.filter(p => p.status.toLowerCase() === 'in progress').length,
    completed: projects.filter(p => p.status.toLowerCase() === 'completed').length,
    onHold: projects.filter(p => p.status.toLowerCase() === 'on hold').length,
    notStarted: projects.filter(p => p.status.toLowerCase() === 'not started').length
  };
  
  // Calculate overall progress
  const totalTasks = projects.reduce((sum, project) => sum + project.totalTasks, 0);
  const completedTasks = projects.reduce((sum, project) => sum + project.completedTasks, 0);
  const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Project Dashboard</h1>
          <Link to="/request" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition">
            + New Project
          </Link>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium">Overall Progress</h3>
              <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full">{overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{completedTasks} completed</span>
              <span>{totalTasks} total tasks</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-white font-medium mb-2">Active Projects</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-white">{statusCounts.inProgress}</span>
              <span className="text-blue-400">In Progress</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-white font-medium mb-2">Completed Projects</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-green-400">{statusCounts.completed}</span>
              <span className="text-green-400">Success Rate: 98%</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h3 className="text-white font-medium mb-2">Upcoming Deadlines</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-yellow-400">4</span>
              <span className="text-yellow-400">This Week</span>
            </div>
          </div>
        </div>
        
        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex bg-gray-800 rounded-lg overflow-hidden flex-grow-0">
            <button 
              className={`px-4 py-2 ${filter === 'all' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setFilter('all')}
            >
              All ({statusCounts.all})
            </button>
            <button 
              className={`px-4 py-2 ${filter === 'in progress' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setFilter('in progress')}
            >
              In Progress ({statusCounts.inProgress})
            </button>
            <button 
              className={`px-4 py-2 ${filter === 'completed' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({statusCounts.completed})
            </button>
            <button 
              className={`px-4 py-2 ${filter === 'on hold' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setFilter('on hold')}
            >
              On Hold ({statusCounts.onHold})
            </button>
          </div>
          
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full py-2 pl-10 pr-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-xl text-white mb-2">No projects found</h3>
            <p className="text-gray-400">
              {filter !== 'all' 
                ? `There are no ${filter} projects matching your search.` 
                : 'No projects match your search criteria.'}
            </p>
          </div>
        )}
        
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;