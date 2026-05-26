import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Services() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.SERVICE);

  useEffect(() => {
    document.title = "IT Services Ahmedabad - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Best IT services in Ahmedabad - Web, Mobile, Game, E-Commerce, CRM, ERP, API & Field Force solutions.'
      );
    }
  }, []);

  const handleBookService = (service) => setBookingModal({ isOpen: true, service });
  const handleCloseBookingModal = () => setBookingModal({ isOpen: false, service: null });

  const services = [
    {
      title: "Website Development",
      description: "Landing page, static website, dynamic website, and e-commerce website development services.",
      icon: "🌐",
      popular: true,
      features: ["Landing pages", "Static websites", "Dynamic websites", "E-commerce development", "Support & maintenance"],
      detailPath: "/website-development-ahmedabad"
    },
    {
      title: "SEO Service",
      description: "Complete SEO services for businesses in Ahmedabad including local, on-page, off-page, and technical SEO.",
      icon: "🔍",
      popular: false,
      features: ["Local SEO", "On-page SEO", "Off-page SEO", "Technical SEO", "Monthly SEO reports"],
      detailPath: "/seo-services-ahmedabad"
    },
    {
      title: "Social Media Management (SMM)",
      description: "Social media marketing and management services to grow your brand and engagement.",
      icon: "📣",
      popular: false,
      features: ["Content strategy", "Account management", "Audience growth", "Paid campaign support", "Performance tracking"],
      detailPath: "/social-media-marketing-ahmedabad"
    },
     {
      title: "E-Commerce Development",
      description: "Custom e-commerce solutions to sell products online securely and efficiently.",
      icon: "🛒",
      popular: true,
      features: ["Custom stores", "Payment integration", "Order management", "SEO-friendly", "Cart & checkout"]
    },
    {
      title: "Mobile Application Development",
      description: "End-to-end mobile app development for Android and iOS platforms with robust UI/UX.",
      icon: "📱",
      popular: false,
      features: ["Android & iOS apps", "Flutter / React Native", "UI/UX design", "App deployment", "Ongoing support"]
    },
    {
      title: "Game Development",
      description: "Interactive and engaging games for mobile and web using modern game engines.",
      icon: "🎮",
      popular: false,
      features: ["2D & 3D games", "Unity & Web games", "Game UI/UX", "Multiplayer integration", "Optimization"]
    },
    {
      title: "GBM (Google Business Management)",
      description: "Google Business Profile management to improve local maps visibility and lead generation.",
      icon: "📍",
      popular: false,
      features: ["GBP setup", "Profile optimization", "Local map visibility", "Review management support", "Insights tracking"],
      detailPath: "/google-business-profile-management-ahmedabad"
    },
    {
      title: "API Development & Integration",
      description: "Secure and scalable API development for seamless integration between applications and third-party services.",
      icon: "🔗",
      popular: false,
      features: ["REST & GraphQL APIs", "Third-party integrations", "Authentication & security", "High performance APIs", "API documentation"]
    },
    {
      title: "Field Force Management System",
      description: "Smart field force management solutions to track, manage, and optimize your on-field workforce operations.",
      icon: "📍",
      popular: false,
      features: ["Live location tracking", "Task & attendance management", "Reports & analytics", "Mobile app integration", "Real-time notifications"]
    },
  ];

  return (
    <div className="bg-[#071d34] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#071d34] mt-16">
  <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
        Our <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
      </h1>

      <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
        Transform your business with cutting-edge IT solutions crafted for your success. We provide modern web development, mobile applications, and scalable software solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl ">
          Book Free Consultation
        </Link>

        <a
          href="tel:+916355582605"
          className="px-6 py-3 border-2 border-secondary-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
        >
          Call: +91 6355582605
        </a>

      </div>
    </div>

    {/* Image */}
    <div className="lg:w-1/2 flex justify-center">
      <div className="relative group max-w-md w-full">

        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>

        <div className="relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="IT Services"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-"
          />
        </div>

      </div>
    </div>

  </div>
</section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          Explore Our Services
        </h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden p-6 bg-gray-800 shadow-lg transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                minHeight: "400px"
              }}
            >
              {service.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 text-black z-10">
                  Popular
                </span>
              )}
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-300 text-sm md:text-base mb-4">{service.description}</p>
              <ul className="text-slate-400 mb-4 space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">✔</span> {f}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleBookService(service)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl "
                >
                  Book Service
                </button>
                {service.detailPath ? (
                  <Link
                    to={service.detailPath}
                    className="w-full inline-flex items-center justify-center gap-3 border border-secondary-400 px-5 py-2 rounded-xl font-bold text-secondary-300 hover:bg-blue-600/10"
                  >
                    View Details
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-[#071d34] rounded-3xl p-12 text-center shadow-2xl mx-6 lg:mx-auto max-w-7xl">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg lg:text-xl mb-8 text-slate-300">
          Partner with YugAntar Technologies for end-to-end IT solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl "
          >
            Book Free Consultation
          </Link>
          <a
            href="tel:+916355582605"
            className="px-6 py-3 border-2 border-gradient-500 text-indigo-500 font-semibold rounded-xl hover:bg-gradient-700 hover:text-white transition-all duration-300 text-center"
          >
            Call: +91 6355582605
          </a>
        </div>
      </section>

      <ServiceBookingModal
        service={bookingModal.service}
        isOpen={bookingModal.isOpen}
        onClose={handleCloseBookingModal}
      />

      <FAQSection items={faqItems} schemaId="services-faq-schema" />

      <Footer />
    </div>
  );
}
