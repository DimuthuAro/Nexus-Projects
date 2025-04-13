import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects, services, testimonials } from '../data/mockProjects';

function Home() {
  // Get 3 featured projects for the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Manage Your Web Projects with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Confidence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From concept to launch, our comprehensive project management system helps you deliver exceptional websites on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition text-center">
                Start New Project
              </Link>
              <Link to="/dashboard" className="px-6 py-3 bg-gray-700 bg-opacity-50 text-white font-medium rounded-lg hover:bg-gray-600 transition text-center">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center p-4">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">250+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-gray-300">Expert Developers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-900 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a complete range of web development services to make your online presence stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Take a look at some of our recent website project management successes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dashboard" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-900 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't take our word for it – here's what our clients have to say about our website management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Next Web Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let us help you bring your vision to life with our professional website project management system.
          </p>
          <Link to="/request" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;