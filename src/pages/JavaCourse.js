import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import FAQSection from "../components/FAQSection";
import { CodeBracketIcon, CpuChipIcon, ComputerDesktopIcon, BuildingOfficeIcon, CheckCircleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function JavaCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqItems = [
    {
      question: "What does the Java Full Stack course cover?",
      answer: "The course covers Core Java, Spring Boot, Hibernate, microservices, and full stack project development.",
    },
    {
      question: "Is Java Full Stack training practical?",
      answer: "Yes, the program includes practical coding exercises and real project-based implementation.",
    },
    {
      question: "Do you provide internship opportunities?",
      answer: "Yes, students can access internship opportunities after course completion.",
    },
  ];

  const course = {
    title: "Java Full Stack",
    description: "Comprehensive Java training with Spring Boot, Hibernate, and modern Java technologies.",
    icon: <CodeBracketIcon className="w-16 h-16 text-indigo-500" />,
    duration: "3 Months",
    popular: false,
    features: [
      "Core Java & Advanced Java",
      "Spring Boot Framework",
      "Hibernate ORM",
      "Microservices",
      "JSP & Servlets",
      "Enterprise Applications"
    ],
    syllabus: [
      "Core Java Programming",
      "Advanced Java Concepts",
      "Spring Framework",
      "Spring Boot Development",
      "Hibernate ORM",
      "Microservices Architecture",
      "JSP and Servlets",
      "Enterprise Application Development"
    ],
    prerequisites: "Basic programming knowledge",
    mode: "Online/Offline",
    technologies: [
      { name: "Java", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg", color: "#ED8B00" },
      { name: "Spring Boot", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/springboot.svg", color: "#6DB33F" },
      { name: "Hibernate", icon: "https://cdn.worldvectorlogo.com/logos/hibernate.svg", color: "#59666C" },
      { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", color: "#4479A1" },
      { name: "JSP", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg", color: "#007396" },
      { name: "Servlets", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg", color: "#ED8B00" }
    ],
    careerOpportunities: [
      { title: "Java Developer", description: "Develop applications using Java programming language.", icon: <CodeBracketIcon className="w-8 h-8 text-blue-500" /> },
      { title: "Spring Boot Developer", description: "Build enterprise applications with Spring Boot.", icon: <CpuChipIcon className="w-8 h-8 text-green-500" /> },
      { title: "Backend Developer", description: "Focus on server-side development with Java.", icon: <ComputerDesktopIcon className="w-8 h-8 text-purple-500" /> },
      { title: "Enterprise Architect", description: "Design and implement enterprise-level solutions.", icon: <BuildingOfficeIcon className="w-8 h-8 text-orange-500" /> },
    ],
    stats: [
      { label: "Duration", value: "3 Months", icon: <ClockIcon className="w-6 h-6 text-blue-400" /> },
      { label: "Mode", value: "Online/Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-400" /> },
      { label: "Students Enrolled", value: "350+", icon: <UserGroupIcon className="w-6 h-6 text-purple-400" /> },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071d34] text-white">

      <Navbar />

      <PageHeader
        title={course.title}
        subtitle="Master Java Full Stack Development"
          bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop"
      />

      <main className="flex-grow py-24 bg-[#071d34]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">

              <div className="flex-shrink-0">
                {course.icon}
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {course.title}
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {course.description}
                </p>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

              {course.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl">

                  {stat.icon}

                  <div>
                    <p className="text-sm text-slate-400">
                      {stat.label}
                    </p>

                    <p className="text-xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* Key Features */}
            <div className="mb-12">

              <h3 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">

                    <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />

                    <span className="text-slate-200 font-medium">
                      {feature}
                    </span>

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
                  className="flex flex-col items-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform border border-gray-600"
                >

                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />

                  <span
                    className="text-sm font-semibold text-center"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg border border-gray-600">

                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>

                  <span className="text-slate-200 font-medium">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Career Opportunities */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">

            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Career Opportunities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {course.careerOpportunities.map((opportunity, idx) => (
                <div key={idx} className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform border border-gray-600">

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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">

            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>

            <p className="text-lg mb-8 opacity-90">
              Join thousands of students who have transformed their careers with YugAntar Technologies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#071d34] text-indigo-600 font-semibold text-lg rounded-xl hover:bg-[#071d34] transition-all duration-300 transform"
              >
                Enroll Now
              </button>

              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-[#071d34]/10 transition-all duration-300"
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
        onSuccess={() => {
          console.log("Enrollment successful!");
        }}
      />

      <FAQSection items={faqItems} schemaId="java-course-faq-schema" />

      <Footer />

    </div>
  );
}
