import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import FAQSection from "../components/FAQSection";
import { CodeBracketIcon, CpuChipIcon, ChartBarIcon, GlobeAltIcon, CheckCircleIcon, ClockIcon, UserGroupIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

export default function PythonCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqItems = [
    {
      question: "Is this Python course beginner friendly?",
      answer: "Yes, we start from Python fundamentals and gradually move to Django and real projects.",
    },
    {
      question: "Do you include live project practice in Python training?",
      answer: "Yes, students work on practical assignments and real-world project modules.",
    },
    {
      question: "Do you provide internship after Python course?",
      answer: "Yes, internship opportunities are available after completing the training program.",
    },
  ];

  useEffect(() => {
    document.title = 'Python Development Course Ahmedabad - YugAntar Technologies';
  }, []);

  const course = {
    title: "Python Development",
    description: "Learn Python programming, Django framework, and build scalable web applications.",
    icon: <CodeBracketIcon className="w-16 h-16 text-indigo-500" />,
    duration: "3 Months",
    features: [
      "Python Fundamentals",
      "Django Framework",
      "Database Management",
      "API Development",
      "Web Scraping",
      "Data Analysis"
    ],
    syllabus: [
      "Python Basics and Syntax",
      "Object-Oriented Programming",
      "Django Web Framework",
      "Database Integration",
      "REST API Development",
      "Web Scraping with BeautifulSoup",
      "Data Analysis with Pandas",
      "Project Development"
    ],
    prerequisites: "Basic programming knowledge",
    technologies: [
      { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg", color: "#3776AB" },
      { name: "Django", icon: "https://cdn.worldvectorlogo.com/logos/django.svg", color: "#092E20" },
      { name: "SQLite", icon: "https://cdn.worldvectorlogo.com/logos/sqlite.svg", color: "#003B57" },
      { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", color: "#4169E1" },
      { name: "Pandas", icon: "https://pandas.pydata.org/static/img/pandas_mark.svg", color: "#150458" },
      { name: "Numpy", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/numpy.svg", color: "#5C8FBC" }
    ],
    careerOpportunities: [
      { title: "Python Developer", description: "Develop applications using Python programming language.", icon: <CodeBracketIcon className="w-8 h-8 text-blue-500" /> },
      { title: "Django Developer", description: "Build web applications with Django framework.", icon: <GlobeAltIcon className="w-8 h-8 text-green-500" /> },
      { title: "Data Analyst", description: "Analyze data using Python libraries like Pandas.", icon: <ChartBarIcon className="w-8 h-8 text-purple-500" /> },
      { title: "Web Scraper", description: "Extract data from websites using Python tools.", icon: <CpuChipIcon className="w-8 h-8 text-orange-500" /> },
    ],
    stats: [
      { label: "Duration", value: "3 Months", icon: <ClockIcon className="w-6 h-6 text-blue-400" /> },
      { label: "Mode", value: "Online / Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-400" /> },
      { label: "Students Enrolled", value: "450+", icon: <UserGroupIcon className="w-6 h-6 text-purple-400" /> },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071d34] text-white">

      <Navbar />

      <PageHeader
        title={course.title}
        subtitle="Master Python Development"
        
  bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop"
      />

      <main className="flex-grow py-24 bg-[#071d34]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">

              {course.icon}

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {course.title}
                </h2>

                <p className="text-lg text-slate-300 max-w-2xl">
                  {course.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {course.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">

                  {stat.icon}

                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                  </div>

                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">

                    <CheckCircleIcon className="w-6 h-6 text-green-400" />

                    <span className="text-slate-200">{feature}</span>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Technologies */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technologies You'll Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

              {course.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />

                  <span
                    className="text-sm font-semibold"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Syllabus */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <h3 className="text-2xl font-bold text-white mb-8">
              Course Syllabus
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">

                  <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>

                  <span className="text-slate-200">{item}</span>

                </div>
              ))}

            </div>

          </div>

          {/* Career */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Career Opportunities
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              {course.careerOpportunities.map((opportunity, idx) => (
                <div key={idx} className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition">

                  <div className="flex items-center gap-4 mb-3">
                    {opportunity.icon}
                    <h4 className="font-bold text-white">
                      {opportunity.title}
                    </h4>
                  </div>

                  <p className="text-slate-300">
                    {opportunity.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Prerequisites */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <h3 className="text-2xl font-bold text-white mb-6">
              Prerequisites
            </h3>

            <p className="text-slate-300 text-lg">
              {course.prerequisites}
            </p>

          </div>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-12 text-center shadow-2xl">

            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>

            <p className="text-lg mb-8 text-gray-100">
              Join thousands of students who built their careers with YugAntar Technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#071d34] text-indigo-600 font-semibold rounded-xl hover:bg-[#071d34]"
              >
                Enroll Now
              </button>

              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white rounded-xl hover:bg-[#071d34]/10"
              >
                Back to Courses
              </Link>

            </div>

          </div>

        </div>
      </main>

      <EnrollmentModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FAQSection items={faqItems} schemaId="python-course-faq-schema" />

      <Footer />

    </div>
  );
}
