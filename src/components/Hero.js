import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  PenTool,
  BarChart3,
  Globe,
  Search,
  Megaphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function HeroSection() {
  const programs = [
    {
      title: "MERN Stack Development",
      subtitle: "Development Course",
      icon: Code,
      path: "/courses/full-stack-mern",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI / UX Designing",
      subtitle: "Design Course",
      icon: PenTool,
      path: "/courses/ui-ux-design",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Digital Marketing",
      subtitle: "Marketing Course",
      icon: BarChart3,
      path: "/courses/digital-marketing",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const services = [
    {
      title: "Website Development",
      text: "Professional websites for business growth.",
      icon: Globe,
    },
    {
      title: "SEO Services",
      text: "Rank higher and generate quality inquiries.",
      icon: Search,
    },
    {
      title: "Social Media Marketing",
      text: "Grow your brand with professional campaigns.",
      icon: Megaphone,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071d34] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#071d34] to-[#020617]" />

      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="text-blue-400" size={18} />

              <span className="text-blue-300 text-sm font-medium">
                IT Training & Digital Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">

              Build Your Future With

              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                YugAntar Technologies
              </span>

            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Learn industry-ready skills with live projects,
              internship support, placement guidance and
              professional IT services for your business growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mb-10">

              <Link
                to="/courses"
                className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-2"
              >
                Explore Courses

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/contact"
                className="border border-slate-600 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold text-white hover:bg-white hover:text-[#071d34] transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">

              <div className="bg-white/5 border border-slate-700 p-5 rounded-2xl backdrop-blur-lg hover:border-blue-500 transition">
                <h3 className="text-3xl font-bold text-blue-400">
                  500+
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Students
                </p>
              </div>

              <div className="bg-white/5 border border-slate-700 p-5 rounded-2xl backdrop-blur-lg hover:border-blue-500 transition">
                <h3 className="text-3xl font-bold text-blue-400">
                  50+
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-slate-700 p-5 rounded-2xl backdrop-blur-lg hover:border-blue-500 transition">
                <h3 className="text-3xl font-bold text-blue-400">
                  100%
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Programs */}
          <div className="relative">

            <div className="bg-white/5 border border-slate-700 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-3xl font-bold">
                    Our Main Programs
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Industry-focused professional courses
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                  🚀
                </div>

              </div>

              <div className="space-y-5">

                {programs.map((program) => {
                  const Icon = program.icon;

                  return (
                    <Link
                      key={program.title}
                      to={program.path}
                      className="group relative overflow-hidden flex items-center gap-5 bg-[#071d34] border border-slate-700 rounded-2xl p-5 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                    >

                      {/* Hover Glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${program.color} transition`} />

                      <div className={`bg-gradient-to-r ${program.color} p-4 rounded-2xl shadow-lg`}>
                        <Icon className="text-white" size={30} />
                      </div>

                      <div className="flex-1">

                        <p className="text-sm text-slate-400 mb-1">
                          {program.subtitle}
                        </p>

                        <h3 className="font-bold text-xl group-hover:text-blue-400 transition">
                          {program.title}
                        </h3>

                      </div>

                      <ArrowRight
                        className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition"
                        size={22}
                      />

                    </Link>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* Services Section */}
        <div className="mt-24">

          <div className="text-center mb-14">

            <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Professional IT Services
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-white/5 border border-slate-700 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                >

                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition">

                    <Icon
                      className="text-blue-400 group-hover:text-white transition"
                      size={34}
                    />

                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {service.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}