import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RequestForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    features: [],
    otherFeature: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 3;
  
  const projectTypes = [
    'E-Commerce Website',
    'Corporate Website',
    'Blog/Content Website',
    'Landing Page',
    'Web Application',
    'Website Redesign',
    'Other'
  ];
  
  const featureOptions = [
    'Responsive Design',
    'Content Management System (CMS)',
    'User Authentication',
    'Payment Processing',
    'Contact Form',
    'Search Functionality',
    'Social Media Integration',
    'SEO Optimization',
    'Analytics Integration',
    'Multilingual Support',
    'Blog/News Section',
    'Custom Web Forms',
    'Newsletter Subscription',
    'Live Chat',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, value] });
    } else {
      setFormData({ 
        ...formData, 
        features: formData.features.filter(feature => feature !== value) 
      });
    }
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
    // Here you would typically send this data to your backend
  };
  
  // Form step validation checks
  const isStep1Valid = () => {
    return formData.projectName && formData.clientName && formData.email && formData.phone;
  };
  
  const isStep2Valid = () => {
    return formData.projectType && formData.budget && formData.deadline;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        {submitted ? (
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg text-center">
            <div className="bg-green-500 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Project Request Submitted!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for submitting your project request. Our team will review your requirements and get in touch with you soon.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/dashboard" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition">
                View Dashboard
              </Link>
              <Link to="/" className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition">
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Request a New Project</h1>
            <p className="text-gray-400 mb-8">Fill out the form below to submit a request for your new website project.</p>
            
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${currentStep >= step ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-700'}`}>
                      {step}
                    </div>
                    <span className="text-sm mt-2 text-gray-400">
                      {step === 1 ? 'Basic Info' : step === 2 ? 'Project Details' : 'Requirements'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 shadow-lg">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Basic Information</h2>
                  
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="projectName">Project Name*</label>
                    <input
                      id="projectName"
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="E.g., Company Website Redesign"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="clientName">Your Name / Company Name*</label>
                    <input
                      id="clientName"
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="E.g., John Smith / Acme Inc."
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="email">Email Address*</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="phone">Phone Number*</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStep1Valid()}
                      className={`px-6 py-3 rounded-lg font-medium ${
                        isStep1Valid()
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      } transition`}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Project Details</h2>
                  
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="projectType">Project Type*</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">-- Select Project Type --</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="budget">Estimated Budget*</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      >
                        <option value="">-- Select Budget Range --</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="Over $50,000">Over $50,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="deadline">Desired Completion Date*</label>
                      <input
                        id="deadline"
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="description">Project Description*</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Please describe your project goals, target audience, and any specific requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStep2Valid()}
                      className={`px-6 py-3 rounded-lg font-medium ${
                        isStep2Valid()
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      } transition`}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Features & Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Features & Requirements</h2>
                  
                  <div>
                    <p className="text-gray-300 mb-4">Select the features you need for your project:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {featureOptions.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            id={`feature-${index}`}
                            type="checkbox"
                            name="features"
                            value={feature}
                            checked={formData.features.includes(feature)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-purple-500 rounded focus:ring-purple-500 focus:ring-offset-gray-800"
                          />
                          <label htmlFor={`feature-${index}`} className="ml-2 text-gray-300">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {formData.features.includes('Other') && (
                    <div>
                      <label className="block text-gray-300 mb-2" htmlFor="otherFeature">Please specify other features:</label>
                      <textarea
                        id="otherFeature"
                        name="otherFeature"
                        value={formData.otherFeature}
                        onChange={handleChange}
                        rows="3"
                        className="w-full bg-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Describe any other features you need..."
                      ></textarea>
                    </div>
                  )}
                  
                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition"
                    >
                      Submit Project Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default RequestForm;