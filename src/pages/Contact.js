import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BASE_URL from "../BASEURL";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact | YugAntar Technologies";
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, createdAt: new Date().toISOString() })
      });

      if (response.ok) {
        alert("Success! We'll reach out to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Unable to submit right now. Please try again in a moment.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#071d34] text-white min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section with Animated Glow */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-lg"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-lg delay-700"></div>
        <PageHeader 
          title="Start a Conversation" 
          subtitle="Whether you have a question or a project in mind, our team is ready to help." 
        />
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { t: "Drop by Office", c: "2nd floor, Yash Aqua, 204, Vijay Cross Rd, University Area, Ahmedabad, Gujarat 380009", i: "📍", b: "border-blue-500/20" },
            { t: "Call Directly", c: "+91 6355582605", i: "📞", b: "border-purple-500/20" },
            { t: "Work with Us", c: "info@yugantartechnologies.com", i: "✉️", b: "border-emerald-500/20" }
          ].map((item, i) => (
            <div key={i} className={`p-8 bg-[#071d34]/5 border ${item.b} rounded-[2rem]  hover:bg-[#071d34]/10 transition-all duration-500 group`}>
              <div className="text-4xl mb-4 group- transition-transform duration-300">{item.i}</div>
              <h3 className="text-xl font-bold mb-2">{item.t}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.c}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Futuristic Form */}
          <div className="w-full lg:w-3/5 bg-[#071d34]/5 border border-slate-700 p-8 md:p-12 rounded-[3rem]  relative">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Send us a <span className="text-blue-400 font-black">Digital Brief</span></h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-transparent border-b-2 border-slate-700 py-3 focus:border-secondary-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full bg-transparent border-b-2 border-slate-700 py-3 focus:border-secondary-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-transparent border-b-2 border-slate-700 py-3 focus:border-secondary-500 outline-none transition-all placeholder:text-gray-600"
                placeholder="Email Address"
              />

              <textarea
                name="message" rows="4" value={formData.message} onChange={handleChange} required
                className="w-full bg-transparent border-b-2 border-slate-700 py-3 focus:border-secondary-500 outline-none transition-all resize-none placeholder:text-gray-600"
                placeholder="Project details or questions..."
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-blue-700 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Map & Schedule */}
          <div className="w-full lg:w-2/5 space-y-8">
            {/* Map */}
            <div className="rounded-[3rem] overflow-hidden border border-slate-700 h-72 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979264149036!2d72.5482483!3d23.0348785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f9fd600001%3A0xe54d24172f3e0924!2sYash%20Aqua!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-secondary-500/10 to-primary-500/10 p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-2xl font-bold mb-6 italic">Support Hours</h3>
              <div className="space-y-4">
                {[
                  { d: "Weekdays", t: "09:00 - 19:00" },
                  { d: "Saturday", t: "09:00 - 17:00" },
                  { d: "Sunday", t: "Emergency Only", c: "text-blue-400" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-400">{row.d}</span>
                    <span className={`font-mono font-bold ${row.c || 'text-white'}`}>{row.t}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+919054372690" className="mt-8 block text-center py-4 rounded-2xl bg-[#071d34]/5 hover:bg-[#071d34]/10 transition-all font-bold tracking-widest text-xs uppercase">
                Direct Emergency Call
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
