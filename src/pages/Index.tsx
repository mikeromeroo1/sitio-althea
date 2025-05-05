
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import EquipmentCategories from '../components/EquipmentCategories';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <EquipmentCategories />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
