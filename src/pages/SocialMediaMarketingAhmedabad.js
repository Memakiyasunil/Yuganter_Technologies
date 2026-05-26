import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export default function SocialMediaMarketingAhmedabad() {
  return (
    <ServicePageTemplate
      title="Social Media Marketing in Ahmedabad"
      subtitle="SMM | Content Strategy | Paid Campaigns"
      description="Our social media marketing services in Ahmedabad help businesses build brand visibility, engagement, and leads through strategic content planning and campaign execution."
      highlights={[
        "Social media management for Instagram, Facebook, and LinkedIn",
        "Creative content strategy aligned with your target audience",
        "Paid campaign setup and optimization for lead generation",
        "Monthly performance reporting and growth recommendations",
      ]}
      faqItems={[
        {
          question: "Which social platforms do you manage?",
          answer:
            "We manage major platforms such as Instagram, Facebook, LinkedIn, and support paid ads where needed.",
        },
        {
          question: "Do you run lead generation campaigns?",
          answer:
            "Yes, we create and optimize social campaigns focused on inquiries, leads, and business growth.",
        },
      ]}
    />
  );
}
