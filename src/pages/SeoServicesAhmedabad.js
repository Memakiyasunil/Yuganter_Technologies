import React from "react";
import ServicePageTemplate from "../components/ServicePageTemplate";

export default function SeoServicesAhmedabad() {
  return (
    <ServicePageTemplate
      title="SEO Services in Ahmedabad"
      subtitle="Local SEO | On-Page SEO | Off-Page SEO | Technical SEO"
      description="YugAntar Technologies provides result-driven SEO services in Ahmedabad for local businesses, startups, and growing brands. We improve search visibility, local rankings, and quality traffic."
      highlights={[
        "Local SEO for Google Business Profile and Ahmedabad area targeting",
        "On-page SEO optimization for titles, headings, internal links, and content",
        "Off-page SEO including quality backlinks and citation building",
        "Technical SEO fixes for crawlability, indexing, and page performance",
      ]}
      faqItems={[
        {
          question: "Do you provide local SEO for Ahmedabad businesses?",
          answer:
            "Yes, we provide dedicated local SEO services including Google Business Profile optimization and local keyword targeting.",
        },
        {
          question: "How long does SEO take to show results?",
          answer:
            "Most businesses start seeing measurable improvement within 2 to 4 months based on competition and website condition.",
        },
      ]}
    />
  );
}
