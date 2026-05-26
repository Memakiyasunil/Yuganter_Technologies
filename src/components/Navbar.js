import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPath from "../constants/logoPath";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Internship", path: "/internship" },
    { name: "Attendance", path: "/attendance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071d34] border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoPath}
            alt="YugAntar Technologies"
            className="w-11 h-11 md:w-13 md:h-13 rounded-lg object-contain"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-white leading-tight">
              YugAntar Technologies
            </h1>
            <p className="text-[11px] md:text-xs text-slate-400 tracking-wide">
              TRAINING & IT SERVICES
            </p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 bg-[#0f1f2f] border border-slate-700 px-2 py-1 rounded-xl">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-semibold text-white transition"
        >
          Join Now
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-white bg-[#0f1f2f] rounded-lg border border-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-[#071d34] border-t border-slate-800">
          <nav className="flex flex-col p-5 gap-3">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 bg-[#0f1f2f]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

