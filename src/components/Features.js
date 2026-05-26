import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const features = [
    {
      title: "Industry-Oriented Courses",
      desc: "Master MERN Stack, Python, AI & more with hands-on projects.",
      icon: <BookOpenIcon className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Expert Trainers",
      desc: "Learn from industry veterans with real-world experience.",
      icon: <AcademicCapIcon className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Live Project Training",
      desc: "Work on real-world projects to gain professional confidence.",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Placement Assistance",
      desc: "Resume grooming and mock interviews for job success.",
      icon: <BriefcaseIcon className="w-8 h-8" />,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Internship Support",
      desc: "Kickstart your career with top internship opportunities.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Modern Learning",
      desc: "Practical execution over outdated theory-based learning.",
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
            Excellence in Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Why Choose <span className="text-blue-400">YugAntar Technologies</span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed">
            We focus on practical learning, industry-ready skills, and career growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute -inset-1 bg-gradient-to-tr ${f.color} opacity-20 rounded-2xl blur-3xl group-hover:opacity-40 transition-all`}></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#071d34]/10 text-white group-hover:bg-[#071d34]/20 group-hover:text-black transition-all duration-500">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {f.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
