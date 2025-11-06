import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import ServicesSection from '@/components/ServicesSection';
import CityShowcase from '@/components/CityShowcase';
import FleetShowcase from '@/components/FleetShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <BookingForm />
        <section id="fleet">
          <FleetShowcase />
        </section>
        <section id="destinations">
          <CityShowcase />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};


export default Index;
