import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Benefits from '../components/Benefits';
import AdditionalBenefits from '../components/AdditionalBenefits';
import Requirements from '../components/Requirements';
import Faqs from '../components/Faqs';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <AdditionalBenefits />
      <Requirements />
      <Faqs />
      <AboutUs />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
