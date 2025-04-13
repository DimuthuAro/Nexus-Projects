import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  const teamMembers = [
    {
      name: "Alexander Mitchell",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=60",
      bio: "With over 15 years of experience in web development and project management, Alex founded Nexus PM to help businesses succeed online through efficient project management."
    },
    {
      name: "Sophia Rodriguez",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=45",
      bio: "Sophia brings 10 years of full-stack development expertise, specializing in React and Node.js. She leads our development team with a focus on clean code and performance."
    },
    {
      name: "Marcus Johnson",
      role: "UX/UI Designer",
      image: "https://i.pravatar.cc/300?img=52",
      bio: "Marcus creates beautiful, intuitive interfaces that balance aesthetics with functionality. His background in psychology helps him create user-centered design solutions."
    },
    {
      name: "Olivia Chen",
      role: "Project Manager",
      image: "https://i.pravatar.cc/300?img=48",
      bio: "Olivia ensures projects are delivered on time and within budget. Her attention to detail and communication skills keep clients informed throughout the development process."
    },
    {
      name: "David Patel",
      role: "Backend Developer",
      image: "https://i.pravatar.cc/300?img=65",
      bio: "David specializes in building robust, scalable backend systems. His expertise in database design and API development powers our most complex projects."
    },
    {
      name: "Emma Wilson",
      role: "Marketing Specialist",
      image: "https://i.pravatar.cc/300?img=44",
      bio: "Emma helps our clients promote their websites effectively. Her knowledge of SEO, content strategy, and digital marketing drives traffic and conversions."
    }
  ];

  const values = [
    {
      title: "Client-Focused",
      description: "We prioritize our clients' needs and goals, ensuring every project delivers real business value.",
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Quality Driven",
      description: "We never compromise on quality, from clean code to pixel-perfect design and thorough testing.",
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of web technology, bringing the latest tools and techniques to every project.",
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Transparency",
      description: "We maintain open communication and provide real-time updates throughout the project lifecycle.",
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Nexus PM</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate web developers and project managers dedicated to creating exceptional website experiences.
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2010, Nexus Project Management began with a simple mission: to make website development projects more efficient, transparent, and successful.
                </p>
                <p>
                  Our founder, Alexander Mitchell, experienced firsthand the challenges of managing complex web projects and saw an opportunity to create a better approach. By combining technical expertise with strong project management principles, Nexus PM was born.
                </p>
                <p>
                  Over the past decade, we've grown from a small team of three to a diverse group of over 50 professionals. We've successfully delivered more than 250 projects for clients ranging from startups to Fortune 500 companies.
                </p>
                <p>
                  Today, we continue to evolve with the latest technologies while maintaining our core commitment to quality, communication, and client satisfaction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4 transform rotate-3">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" alt="Team meeting" className="rounded-lg shadow-lg" />
              </div>
              <div className="bg-gray-800 rounded-lg p-4 transform -rotate-2 mt-8">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60" alt="Development work" className="rounded-lg shadow-lg" />
              </div>
              <div className="bg-gray-800 rounded-lg p-4 transform -rotate-3 -mt-4">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60" alt="Office space" className="rounded-lg shadow-lg" />
              </div>
              <div className="bg-gray-800 rounded-lg p-4 transform rotate-2 mt-4">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60" alt="Collaboration" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-gray-900 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented people behind our successful projects and happy clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-gray-900 bg-opacity-60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">250+</div>
              <p className="text-gray-300 text-xl">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-gray-300 text-xl">Team Members</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">15</div>
              <p className="text-gray-300 text-xl">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">98%</div>
              <p className="text-gray-300 text-xl">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's start a conversation about your website project needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/request" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition">
              Start a Project
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default About;