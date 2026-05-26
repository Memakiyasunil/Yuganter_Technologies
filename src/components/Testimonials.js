import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const reviews = [
    {
      name: "Shrushti Patel",
      role: "MERN Stack Student",
      body: "I had a great experience during my internship at YugAntar Technologies and Group of Companies. The teaching style was very clear and practical. The mentors explained every concept step by step and helped us whenever we had doubts. We also got hands-on practice, which improved my skills and confidence. Overall, it was a very helpful and learning-focused internship experience.",
      rating: 5,
    },
    {
      name: "Mihir Gajar",
      role: "Python Developer",
      body: "I found this institute from Google and this is the one of the best technical institute I ever found. I'm doing python course from this institution and to be honest this is the best institute for a people who seriously want to learn something ....there teaching techniques is so amazing that made learning easy...i honestly prefer this institute to learn any engineering concepts",
      rating: 4,
    },
    {
      name: "Khushal Choudary",
      role: "UI/UX Designer",
      body: "I enrolled in the UI/UX + Digital Marketing combo course at YugAntar Technologies & Training Institute in Navrangpura, Ahmedabad. This combination is perfect for students who want both design and marketing skills. The institute provides practical Figma training along with SEO and social media marketing. One of the best combo courses in Ahmedabad.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden"
    >
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What Our Students Say 
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hear from our students who transformed their careers with YugAntar Technologies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              style={{
                background: "linear-gradient(135deg, #0f1f2f, #071d34)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Glow effect */}
              <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-500"></span>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(r.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-blue-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  “{r.body}”
                </p>

                {/* Divider */}
                <div className="h-[1px] w-full bg-[#071d34]/10 mb-5"></div>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{r.name}</h4>
                    <p className="text-sm text-slate-400">{r.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
