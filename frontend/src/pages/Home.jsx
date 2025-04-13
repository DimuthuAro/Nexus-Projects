import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects, services, testimonials } from '../data/mockProjects';

function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col text-white ">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 blur-[100px]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full  opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full  opacity-20 filter blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto lg:mx-0 backdrop-blur-lg back bg-black/60 p-10 rounded-2xl shadow-[0_20px_50px_rgba(42,_92,_123,_0.4)] border border-white/10 transform hover:scale-[1.01] transition-all duration-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#eee5dc] mb-6 leading-tight">
              Manage Your Web Projects with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5293b6] via-[#ffa5ac] to-[#b6774a] animate-gradient">Confidence</span>
            </h1>
            <p className="text-xl text-[#eee5dc] mb-8 leading-relaxed max-w-2xl">
              From concept to launch, our comprehensive project management system helps you deliver exceptional websites on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request" className="px-8 py-4 bg-gradient-to-r from-[#2a5c7b] to-[#5293b6] text-[#eee5dc] font-medium rounded-xl hover:shadow-[0_0_15px_rgba(182,_119,_74,_0.5)] transition-all duration-300 text-center transform hover:-translate-y-1">
                Start New Project
              </Link>
              <Link to="/dashboard" className="px-8 py-4 bg-[#1c3c5d] bg-opacity-70 backdrop-blur-sm text-[#eee5dc] font-medium rounded-xl hover:bg-[#2a5c7b] hover:shadow-lg transition-all duration-300 text-center border border-[#5293b6]/30 transform hover:-translate-y-1">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 mx-auto lg:mx-0 backdrop-blur-lg hover:bg-black/70 p-8 rounded-2xl shadow-[0_10px_30px_rgba(42,_92,_123,_0.3)] border border-[#5293b6]/20 transform hover:shadow-[0_10px_40px_rgba(42,_92,_123,_0.4)] transition-all duration-300">
            <div className="text-center p-4 border-r border-[#5293b6]/30 last:border-0 md:border-r">
              <h3 className="text-3xl md:text-4xl font-bold text-[#5293b6] mb-2">250+</h3>
              <p className="text-[#eee5dc]">Projects Completed</p>
            </div>
            <div className="text-center p-4 md:border-r border-[#5293b6]/30">
              <h3 className="text-3xl md:text-4xl font-bold text-[#b6774a] mb-2">98%</h3>
              <p className="text-[#eee5dc]">Client Satisfaction</p>
            </div>
            <div className="text-center p-4 border-r border-[#5293b6]/30 md:border-r">
              <h3 className="text-3xl md:text-4xl font-bold text-[#5293b6] mb-2">15+</h3>
              <p className="text-[#eee5dc]">Years Experience</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#b6774a] mb-2">50+</h3>
              <p className="text-[#eee5dc]">Expert Developers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-[#1c3c5daa] backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#eee5dc] mb-4">Our Web Development Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5293b6] to-[#b6774a] mx-auto mb-6"></div>
            <p className="text-xl text-[#eee5dc]/80 max-w-3xl mx-auto">
              We offer a complete range of web development services to make your online presence stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-[#132742] bg-opacity-70 rounded-lg p-6 hover:bg-[#2a5c7b] transition duration-300 shadow-lg backdrop-blur-lg border border-[#5293b6]/20 h-full">
                <div className="text-4xl mb-4 text-[#b6774a]">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#eee5dc] mb-3">{service.title}</h3>
                <p className="text-[#eee5dc]/80 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-[#eee5dc]/90 flex items-start">
                      <svg className="w-4 h-4 text-[#5293b6] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            <Link to="/services" className="px-6 py-3 bg-[#2a5c7b] hover:bg-[#5293b6] text-[#eee5dc] font-medium rounded-lg transition shadow-md">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-black/60 bg-opacity-70 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#eee5dc] mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5293b6] to-[#b6774a] mx-auto mb-6"></div>
            <p className="text-xl text-[#eee5dc]/80 max-w-3xl mx-auto">
              Take a look at some of our recent website project management successes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dashboard" className="px-6 py-3 bg-[#2a5c7b] hover:bg-[#5293b6] text-[#eee5dc] font-medium rounded-lg transition shadow-md">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-[#1c3c5daa] bg-opacity-70 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#eee5dc] mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5293b6] to-[#b6774a] mx-auto mb-6"></div>
            <p className="text-xl text-[#eee5dc]/80 max-w-3xl mx-auto">
              Don't take our word for it – here's what our clients have to say about our website management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#132742] bg-opacity-70 rounded-lg p-6 shadow-lg backdrop-blur-lg border border-[#5293b6]/20">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-[#5293b6] mr-4"
                  />
                  <div>
                    <h4 className="text-[#eee5dc] font-medium text-lg">{testimonial.name}</h4>
                    <p className="text-[#eee5dc]/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#eee5dc]/90 italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex mt-4">
                  <svg className="w-5 h-5 text-[#b6774a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-[#b6774a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-[#b6774a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-[#b6774a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-[#b6774a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black/60 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#eee5dc] mb-6">Ready to Start Your Next Web Project?</h2>
            <p className="text-xl text-[#eee5dc]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us help you bring your vision to life with our professional website project management system.
            </p>
            <Link 
            to="/request" 
            className="px-8 py-4 bg-black/30 border-1 border-red-50/10  text-[#eee5dc] font-bold rounded-lg hover:bg-black/70  inline-block shadow-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;