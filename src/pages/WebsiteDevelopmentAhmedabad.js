import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export default function WebsiteDevelopmentAhmedabad() {
  return (
    <ServicePageTemplate
      title="Website Development in Ahmedabad"
      subtitle="Landing Page | Static Website | Dynamic Website | E-commerce"
      description="YugAntar Technologies delivers professional website development services in Ahmedabad for startups and businesses that need modern, fast, and conversion-focused websites."
      highlights={[
        "High-converting landing pages for campaigns and lead generation",
        "Static websites for fast and secure business presence",
        "Dynamic websites with custom features and admin controls",
        "E-commerce websites with product, payment, and order management",
      ]}
      faqItems={[
        {
          question: "Do you build e-commerce websites?",
          answer:
            "Yes, we build complete e-commerce websites with secure checkout, product management, and scalable architecture.",
        },
        {
          question: "Can you redesign an existing business website?",
          answer:
            "Yes, we can redesign and optimize existing websites for better speed, SEO, and conversions.",
        },
      ]}
    />
  );
}
