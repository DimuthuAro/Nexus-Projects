import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl">
            <Link to="/" className="flex items-center">
              <span className="text-purple-400">Nexus</span>
              <span className="text-blue-400 ml-1">PM</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-purple-400 transition duration-300">Home</Link>
            <Link to="/dashboard" className="hover:text-purple-400 transition duration-300">Dashboard</Link>
            <Link to="/services" className="hover:text-purple-400 transition duration-300">Services</Link>
            <Link to="/about" className="hover:text-purple-400 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-purple-400 transition duration-300">Contact</Link>
          </div>
          <div>
            <Link to="/request" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300">
              New Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;