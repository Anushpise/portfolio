import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AcademicTable from './components/AcademicTable';
import Features from './components/Features';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import WorkingSector from './components/WorkingSector';
import UpcomingProjects from './components/UpcomingProjects';
import SocialConnections from './components/SocialConnections';
import Testimonials from './components/Testimonials';
import ExploreMore from './components/ExploreMore';
import Loader from './components/Loader';
import ResearchPage from './components/ResearchPage';
import GenericPage from './components/GenericPage';

// Main Homepage Component
const Home = () => (
  <>
    <Profile />
    <AboutMe />
    <WorkingSector />
    <Features />
    <Hero />
    <AcademicTable />
    <UpcomingProjects />
    <SocialConnections />
    <Testimonials />
    <ExploreMore />
  </>
);

// Wrapper to handle global layout if needed
const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simmons loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:sectorId" element={<ResearchPage />} />
          <Route path="/publications/:id" element={<GenericPage />} />
          <Route path="/services/:id" element={<GenericPage />} />
          <Route path="/certifications" element={<GenericPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


