import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQSection from "./FAQSection";

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  highlights = [],
  faqItems = [],
}) {
  return (
    <div className="min-h-screen bg-[#071d34] text-white">
      <Navbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 font-semibold mb-3">{subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-slate-300 text-lg max-w-4xl">{description}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-indigo-600 rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need This Service in Ahmedabad?</h3>
          <p className="text-gray-100 mb-6">
            Talk to our team for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-7 py-3 bg-[#071d34] text-indigo-700 rounded-xl font-semibold"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+916355582605"
              className="px-7 py-3 border-2 border-white rounded-xl font-semibold"
            >
              Call +91 6355582605
            </a>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} schemaId={`faq-${title.toLowerCase().replace(/\s+/g, "-")}`} />
      <Footer />
    </div>
  );
}

