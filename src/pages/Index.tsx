import React from 'react';
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
