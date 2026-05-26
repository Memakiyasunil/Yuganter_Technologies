import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import logoPath from "../constants/logoPath";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071d34] border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoPath}
                alt="YugAntar Technologies"
                className="w-14 h-14 rounded-lg object-contain"
              />
              <div>
                <h2 className="text-xl font-bold text-white whitespace-nowrap">
                  YugAntar Technologies
                </h2>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  TRAINING & IT SERVICES
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Professional IT Training & IT Services, Internship Support, Website
              Development, SEO & Digital Marketing Services in Ahmedabad.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/share/16Ao4uJg7S/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f1f2f] border border-slate-700 p-3 rounded-lg hover:bg-blue-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/yugantar_technologies?igsh=Z2Q5cXMxaXg2dm93"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f1f2f] border border-slate-700 p-3 rounded-lg hover:bg-blue-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/yugantartechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f1f2f] border border-slate-700 p-3 rounded-lg hover:bg-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/internship" className="hover:text-blue-400 transition">Internship</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Popular Courses</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>MERN Stack Development</li>
              <li>UI / UX Designing</li>
              <li>Digital Marketing</li>
              <li>Python Development</li>
              <li>Java Full Stack</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <p>204, Yash Aqua,<br />Vijay Cross Road,<br />Navrangpura, Ahmedabad</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={18} />
                <p>7859982605 / 6355582605</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />
                <p>info@yugantartechnologies.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-sm">
          © {currentYear} YugAntar Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

