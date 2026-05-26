import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import InternshipModal from "../components/InternshipModal";
import { motion } from "framer-motion";

export default function Internship() {

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Internship Programs - YugAntar Technologies";
  }, []);

  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3 Months",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description:
        "Build modern websites and web applications while working on real projects with our development team.",
    },
    {
      title: "Python Development Internship",
      duration: "3 Months",
      skills: ["Python", "Flask", "Django", "APIs", "Databases"],
      description:
        "Learn backend development and build scalable applications using modern Python frameworks.",
    },
    {
      title: "Mobile App Development Internship",
      duration: "3 Months",
      skills: ["Flutter", "React Native", "Firebase"],
      description:
        "Create cross-platform mobile applications and understand the full mobile development lifecycle.",
    },
    {
      title: "UI / UX Design Internship",
      duration: "3 Months",
      skills: ["Figma", "Wireframing", "Prototyping"],
      description:
        "Design modern user interfaces and learn how to create intuitive digital experiences.",
    },
    {
      title: "Data Science Internship",
      duration: "3 Months",
      skills: ["Python", "ML", "Data Analysis", "Visualization"],
      description:
        "Work with real datasets and learn machine learning, data analysis, and visualization techniques.",
    },
    {
      title: "Java Development Internship",
      duration: "3 Months",
      skills: ["Java", "Spring Boot", "REST APIs"],
      description:
        "Develop enterprise-grade applications using modern Java frameworks and backend architecture.",
    },
  ];

  const benefits = [
    { icon: "💼", title: "Live Projects", desc: "Work on real industry projects." },
    { icon: "👨‍🏫", title: "Expert Mentors", desc: "Guidance from experienced developers." },
    { icon: "📜", title: "Certification", desc: "Internship completion certificate." },
    { icon: "🚀", title: "Career Support", desc: "Interview preparation & career guidance." },
  ];

  const openModal = (program) => {
    setSelectedInternship(program);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#071d34] text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="py-24 text-center max-w-7xl mx-auto px-6">

        <h1 className="text-3xl lg:text-5xl font-bold leading-snug mb-4 text-white">
          Internship Programs
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Start your career with hands-on industry internships.  
          Gain practical experience, build real projects, and learn from expert mentors.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl "
        >
          Explore Programs
        </a>

      </section>

      {/* Benefits Section */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Internship?
        </h2>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-gray-800 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition text-white"
            >
              <div className="text-5xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-slate-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================== INTERNSHIP CONTENT ================== */}
        <div className="space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Internship Opportunities for Students
          </h2>

          <p className="text-gray-700 leading-8">
            We believe that practical experience is essential for building a successful career.
            That is why YugAntar Technologies offers an{" "}
            <a href="/internship-program-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              IT Internship Program in Ahmedabad
            </a>{" "}
            for students enrolled in our courses. Our internship programs are designed to bridge
            the gap between theoretical knowledge and real-world industry experience.
          </p>

          <p className="text-gray-700 leading-8">
            Students from our{" "}
            <a href="/mern-stack-course-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              MERN Stack Development Course
            </a>
            ,{" "}
            <a href="/ui-ux-design-course-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              UI UX Design Course
            </a>
            , and{" "}
            <a href="/digital-marketing-course-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              Digital Marketing Course
            </a>{" "}
            can participate in real-world projects during their internship. This hands-on
            experience helps students understand development workflows, teamwork, and
            client requirements. By working on live projects, students build confidence,
            improve problem-solving skills, and become job-ready for opportunities in
            IT and digital marketing industries.
          </p>
        </div>

        {/* ================== SERVICES SECTION ================== */}
        <div className="space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Digital Marketing and Website Development Services in Ahmedabad
          </h2>

          <p className="text-gray-700 leading-8">
            Along with training programs, YugAntar Technologies also provides professional
            digital solutions for businesses in Ahmedabad. Our services help companies
            build a strong online presence, reach their target audience, and generate
            more leads through effective digital strategies.
          </p>

          <p className="text-gray-700 leading-8">
            We offer{" "}
            <a href="/website-development-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              Website Development Services in Ahmedabad
            </a>{" "}
            including landing pages, static websites, dynamic applications, and
            e-commerce solutions tailored to business needs.
          </p>

          <p className="text-gray-700 leading-8">
            Our{" "}
            <a href="/seo-services-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              SEO Services in Ahmedabad
            </a>{" "}
            focus on improving search engine rankings using on-page SEO, technical SEO,
            and local SEO strategies to increase visibility and organic traffic.
          </p>

          <p className="text-gray-700 leading-8">
            Businesses can also grow their brand with our{" "}
            <a href="/social-media-marketing-ahmedabad" className="text-blue-600 font-semibold hover:underline">
              Social Media Marketing Services in Ahmedabad
            </a>{" "}
            where we manage platforms like Instagram, Facebook, and LinkedIn to
            engage audiences and drive conversions.
          </p>
        </div>

        {/* ================== WHY CHOOSE US ================== */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose YugAntar Technologies
          </h2>

          <p className="text-gray-700 leading-8">
            YugAntar Technologies is trusted by students and businesses across Ahmedabad
            because of our practical and industry-focused approach. Our courses are designed
            by experts and include hands-on training with real-world projects that help
            students build strong technical skills.
          </p>

          <p className="text-gray-700 leading-8">
            We focus on small batch sizes, personalized mentorship, and internship
            opportunities so that every student receives individual attention and
            guidance throughout their learning journey.
          </p>

          <p className="text-gray-700 leading-8">
            Businesses trust our digital marketing and development services because we
            deliver result-driven solutions. Whether you want to build a career in IT
            or grow your business online, YugAntar Technologies provides the right
            platform to achieve your goals.
          </p>
        </div>

      </div>

      </section>
 
      {/* Programs */}

      <section id="programs" className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Explore Internship Programs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {internshipPrograms.map((p, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >

                <div className="text-5xl mb-4">{p.icon}</div>

                <h3 className="text-xl font-bold mb-2">
                  {p.title}
                </h3>

                <span className="text-xs px-3 py-1 rounded-lg bg-blue-600">
                  {p.duration}
                </span>

                <p className="text-slate-400 mt-4 mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {p.skills.map((s, idx) => (

                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-lg"
                    >
                      {s}
                    </span>

                  ))}

                </div>

                <button
                  onClick={() => openModal(p)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl "
                >
                  Apply Now
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Career?
        </h2>

        <p className="text-slate-300 mb-8">
          Apply now and gain real-world experience with YugAntar Technologies.
        </p>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl font-bold text-white shadow-xl "
        >
          Apply for Internship
        </a>

      </section>

      <InternshipModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />

    </div>
  );
}
