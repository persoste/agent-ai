
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import PackagesPage from '@/pages/PackagesPage';
import LearnMorePage from '@/pages/LearnMorePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import FAQPage from '@/pages/FAQPage';
import ScrollIndicator from '@/components/ScrollIndicator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <div className="cyber-grid fixed inset-0 z-0"></div>
        <ScrollIndicator />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
