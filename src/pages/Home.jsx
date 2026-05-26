import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CourseHighlights from "../components/CourseHighlights";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import EnrollmentModal from "../components/EnrollmentModal";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.HOME);

  useEffect(() => {
    document.title =
      "YugAntar Technologies Ahmedabad - Best IT Company";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "YugAntar Technologies Ahmedabad - Leading IT company offering web development, mobile app development, and digital marketing services."
      );
    }
  }, []);

  const handleQuickEnroll = () => {
    setSelectedCourse({
      title: "Full Stack Development (MERN)",
      icon: "💻",
      duration: "6 Months",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071d34] text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero onQuickEnroll={handleQuickEnroll} />

        {/* OTHER SECTIONS */}
        <Features />
        <CourseHighlights />
        <Testimonials />
        <CTASection onQuickEnroll={handleQuickEnroll} />
        <FAQSection items={faqItems} schemaId="home-faq-schema" />
      </main>

      <EnrollmentModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={() => console.log("Enrollment success")}
      />

      <Footer />
    </div>
  );
}
