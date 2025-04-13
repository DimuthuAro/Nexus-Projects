import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  // Calculate progress percentage
  const progress = Math.round((project.completedTasks / project.totalTasks) * 100) || 0;
  
  // Determine status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-green-500';
      case 'in progress': return 'bg-blue-500';
      case 'on hold': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <div>
            <span className="block">Deadline</span>
            <span className="text-white">{project.deadline}</span>
          </div>
          <div className="text-right">
            <span className="block">Client</span>
            <span className="text-white">{project.client}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {project.team.map((member, index) => (
              <img 
                key={index}
                src={member.avatar} 
                alt={member.name}
                title={member.name}
                className="w-8 h-8 rounded-full border-2 border-gray-800" 
              />
            ))}
          </div>
          <Link 
            to={`/project/${project.id}`} 
            className="text-sm text-purple-400 hover:text-purple-300 font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;