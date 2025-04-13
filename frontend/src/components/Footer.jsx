import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-purple-400">Nexus</span>
              <span className="text-blue-400">PM</span>
            </h3>
            <p className="text-gray-400">
              Professional website project management solutions for businesses and developers.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-purple-400">Dashboard</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-purple-400">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link></li>
              <li><Link to="/request" className="text-gray-400 hover:text-purple-400">Request New Project</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@nexuspm.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h12.82v-9.294H10.7v-3.622h3.445V8.41c0-3.409 2.083-5.27 5.128-5.27.935-.001 1.869.044 2.802.135v3.24h-1.924c-1.51 0-1.801.715-1.801 1.767v2.313h3.603l-.47 3.622h-3.133V24h6.275c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-pink-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexus Project Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;