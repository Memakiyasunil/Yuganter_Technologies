import React from "react";
import { Link } from "react-router-dom";
import { Code, PenTool, BarChart3, Globe, Search, Megaphone } from "lucide-react";

export default function HeroSection() {
  const programs = [
    {
      title: "MERN Stack Development",
      subtitle: "Development Course",
      icon: Code,
      path: "/courses/full-stack-mern",
    },
    {
      title: "UI / UX Designing",
      subtitle: "Design Course",
      icon: PenTool,
      path: "/courses/ui-ux-design",
    },
    {
      title: "Digital Marketing",
      subtitle: "Marketing Course",
      icon: BarChart3,
      path: "/courses/digital-marketing",
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
    <section className="relative min-h-screen flex items-center bg-[#071d34] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f2f] via-[#071d34] to-[#0f1f2f]" />
      <div className="absolute top-24 right-10 w-72 h-72 bg-blue-600/10 rounded-lg blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-500/10 rounded-lg blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4">
              IT Training & Digital Solutions
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Career With
              <span className="block text-blue-400">
                YugAntar Technologies
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Learn industry-focused courses, work on live projects, and grow
              your career with professional training, internship, placement
              support, and IT services.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold text-white transition"
              >
                Explore Courses
              </Link>

              <Link
                to="/contact"
                className="border border-slate-500 px-7 py-3 rounded-lg font-semibold text-white hover:bg-[#071d34] hover:text-slate-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-[#0f1f2f] border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Our Main Programs</h2>

            <div className="space-y-4">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Link
                    key={program.title}
                    to={program.path}
                    className="flex items-center gap-4 bg-[#071d34] border border-slate-700 rounded-2xl p-5 hover:border-blue-500 transition"
                  >
                    <div className="bg-blue-600/10 p-3 rounded-xl">
                      <Icon className="text-blue-400" size={30} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{program.subtitle}</p>
                      <h3 className="font-semibold text-lg">{program.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[#0f1f2f] border border-slate-700 p-6 rounded-2xl"
              >
                <Icon className="text-blue-400 mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

