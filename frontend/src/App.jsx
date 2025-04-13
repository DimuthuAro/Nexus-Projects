import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const RequestForm = lazy(() => import('./pages/RequestForm.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-fixed backdrop-blur-md"
        style={{
          backgroundImage: "url('bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
