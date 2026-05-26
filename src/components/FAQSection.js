import React, { useEffect, useMemo } from "react";

export default function FAQSection({
  title = "Frequently Asked Questions",
  items = [],
  schemaId = "page-faq-schema",
}) {
  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }),
    [items]
  );

  useEffect(() => {
    if (!items.length) return undefined;

    let faqScript = document.head.querySelector(`#${schemaId}`);
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = schemaId;
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(schemaData);

    return () => {
      const existingScript = document.head.querySelector(`#${schemaId}`);
      if (existingScript) existingScript.remove();
    };
  }, [items, schemaData, schemaId]);

  if (!items.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-slate-300 md:text-2xl font-semibold mb-3">{item.question}</h3>
            <p className="text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
