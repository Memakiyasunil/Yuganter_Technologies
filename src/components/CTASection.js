// import React from "react";
// import { Link } from "react-router-dom";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// export default function CTASection({ onQuickEnroll }) {
//   const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

//   return (
//     <section className="relative py-28 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] overflow-hidden">

//       {/* Subtle background texture */}
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
//       <div className="absolute inset-0 bg-black/30"></div>

//       <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

//         {/* Tag */}
//         <div
//           className={`inline-block mb-6 px-4 py-1.5 border border-slate-700 rounded-lg text-sm font-semibold text-blue-400 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//         >
//           Career Growth Program
//         </div>

//         {/* Heading */}
//         <h2
//           className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//           style={{ transitionDelay: "0.15s" }} 
//         >
//           Build Your Career With Industry-Focused Training
//         </h2>

//         {/* Description */}
//         <p
//           className={`text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//           style={{ transitionDelay: "0.3s" }}
//         >
//           Gain real-world skills through live projects, expert mentorship, and structured programs designed
//           to prepare you for today’s technology-driven careers.
//         </p>

//         {/* Buttons */}
//         <div
//           className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//           style={{ transitionDelay: "0.45s" }}
//         >
//           <button
//             onClick={onQuickEnroll}
//             className="group px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:bg-primary-700 transition-all flex items-center gap-2"
//           >
//             Enroll Now
//             <svg
//               className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </button>

//           <Link
//             to="/contact"
//             className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-[#071d34]/10 transition-all"
//           >
//             Book Consultation
//           </Link>
//         </div>

//         {/* Trust Indicators */}
//         <div
//           className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-slate-300 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//           style={{ transitionDelay: "0.6s" }}
//         >
//           <div className="flex items-center justify-center gap-3">
//             <span className="w-2 h-2 rounded-lg bg-primary-400"></span>
//             <span className="text-sm md:text-base font-medium">Job Assistance</span>
//           </div>

//           <div className="flex items-center justify-center gap-3">
//             <span className="w-2 h-2 rounded-lg bg-primary-400"></span>
//             <span className="text-sm md:text-base font-medium">Live Projects</span>
//           </div>

//           <div className="flex items-center justify-center gap-3">
//             <span className="w-2 h-2 rounded-lg bg-primary-400"></span>
//             <span className="text-sm md:text-base font-medium">Expert Mentors</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
  

import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function CTASection({ onQuickEnroll }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { label: "Students Trained", value: "1200+" },
    { label: "Live Projects", value: "75+" },
    { label: "Job Placements", value: "500+" },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#071d34] via-[#0f1f2f] to-[#071d34] overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Kickstart Your <span className="text-blue-400">Tech Career</span> Today
        </h2>
 
        {/* Dynamic Subheading */}
        <p className={`text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Master <span className="text-blue-400 font-semibold">MERN, Python, AI/ML</span> and other in-demand skills through <span className="text-blue-400 font-semibold">hands-on projects, expert mentorship</span>, and career guidance.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <button onClick={onQuickEnroll} className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl ">
            Enroll Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <Link to="/contact" className="px-5 py-2  border text-white font-semibold text-lg hover:bg-[#071d34]/10 transition-all">
            Book Consultation
          </Link>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <span className="text-3xl md:text-4xl font-extrabold text-blue-400">{stat.value}</span>
              <span className="text-sm md:text-base text-slate-300">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3">
            <UserGroupIcon className="w-8 h-8 text-blue-400" />
            <span className="text-sm md:text-base font-medium">Job Assistance</span>
          </div>

          <div className="flex items-center gap-3">
            <AcademicCapIcon className="w-8 h-8 text-blue-400 delay-150" />
            <span className="text-sm md:text-base font-medium">Live Projects</span>
          </div>

          <div className="flex items-center gap-3">
            <BriefcaseIcon className="w-8 h-8 text-blue-400 delay-300" />
            <span className="text-sm md:text-base font-medium">Expert Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
