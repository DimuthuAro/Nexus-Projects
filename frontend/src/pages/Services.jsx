import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../data/mockProjects';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  
  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Services Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Web Development Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We offer comprehensive web development services tailored to meet your specific business needs.
          </p>
          <Link to="/request" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From simple websites to complex web applications, we have the expertise to bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-purple-500 transform scale-105' : 'hover:bg-gray-700'
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${selectedService === service.id ? 'max-h-96' : 'max-h-0'}`}>
                  <h4 className="text-purple-400 font-medium mb-2 mt-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/request" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                      Request this service
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {selectedService !== service.id && (
                  <div className="mt-4 text-purple-400 font-medium">
                    Click to learn more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-gray-900 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is delivered efficiently and meets your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 z-10 relative h-full">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery & Planning</h3>
                <p className="text-gray-400">
                  We start by understanding your business goals, target audience, and project requirements to create a comprehensive plan.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2 z-0 -ml-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 z-10 relative h-full">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Design & Prototyping</h3>
                <p className="text-gray-400">
                  We create wireframes and design mockups to visualize your website before development begins, ensuring alignment with your vision.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0 -ml-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 z-10 relative h-full">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                <p className="text-gray-400">
                  Our developers write clean, optimized code to bring your design to life, focusing on performance and functionality.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2 z-0 -ml-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 z-10 relative h-full">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-xl font-bold text-white mb-3">Testing & Launch</h3>
                <p className="text-gray-400">
                  We rigorously test your website across devices and browsers before launching it to ensure everything works flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to create powerful, scalable websites and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-orange-500 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.232-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
              </svg>
              <span className="text-white font-medium">HTML5</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-blue-500 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/>
              </svg>
              <span className="text-white font-medium">CSS3</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-yellow-500 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
              <span className="text-white font-medium">JavaScript</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-blue-400 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.64.35-.83 1.82-.32 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/>
              </svg>
              <span className="text-white font-medium">React</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-green-500 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.068-.179.311-.866-.068-1.809 0 0-.587-.189-1.924.717a6.619 6.619 0 00-1.749-.236 6.59 6.59 0 00-1.752.236c-1.337-.906-1.925-.717-1.925-.717-.379.943-.141 1.63-.067 1.809-.446.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.443.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.779 1.016 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337a6.996 6.996 0 01-4.8-6.618 7 7 0 117-7 6.997 6.997 0 01-4.777 6.641z"/>
              </svg>
              <span className="text-white font-medium">Node.js</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <svg className="w-16 h-16 text-cyan-500 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
              </svg>
              <span className="text-white font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/request" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition">
              Request a Quote
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Services;