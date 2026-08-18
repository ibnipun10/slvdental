import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import DoctorProfile from './components/DoctorProfile';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PatientReviews from './components/PatientReviews';
import ClinicGallery from './components/ClinicGallery';
import TimingsAndLocation from './components/TimingsAndLocation';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpenBooking = (treatmentName = null) => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <div className="app-wrapper">
      {/* Top Bar with Timings and Emergency Line */}
      <TopBar />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Stats Counter Strip */}
      <StatsBanner />

      {/* Meet the Lead Doctor Section */}
      <DoctorProfile onOpenBooking={handleOpenBooking} />

      {/* 22+ Surgeries & Treatments Showcase */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Why Choose SLV Dental */}
      <WhyChooseUs onOpenBooking={handleOpenBooking} />

      {/* Real Patient Feedback & Stories */}
      <PatientReviews />

      {/* Clinic Infrastructure & Gallery */}
      <ClinicGallery />

      {/* Timings Schedule & Google Map Directions */}
      <TimingsAndLocation onOpenBooking={handleOpenBooking} />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Clinic Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Appointment Booking Modal */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        preselectedTreatment={selectedTreatment}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
