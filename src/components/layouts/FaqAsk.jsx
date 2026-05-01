import { useState } from "react";

const FaqAsk = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is RSL Web Solutions?",
      answer: "RSL Web Solutions is a digital platform dedicated to turning ideas into digital reality through modern web development and design.",
    },
    {
      question: "How can RSL Web Solutions help my business?",
      answer: "We build high-performance MERN stack applications, professional portfolios, and e-commerce solutions tailored to your business needs.",
    },
    {
      question: "What technologies do you use?",
      answer: "We specialize in React.js, Tailwind CSS, Node.js, Express, and MongoDB to ensure fast and scalable digital products.",
    },
    {
      question: "Do you provide responsive design?",
      answer: "Yes, every project we build is fully responsive, ensuring a perfect look and feel on desktops, tablets, and mobile devices.",
    },
    {
      question: "How can I start a project with you?",
      answer: "You can reach out via our contact section to discuss your vision, and we will handle the rest from planning to deployment.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="w-full">
          <span className="bg-sunC text-nightC px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-10 leading-tight">
            Have any questions?
          </h2>

          <div className="space-y-2">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  className="flex items-center justify-between w-full py-5 text-left transition-all group"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index ? "text-nightC" : "text-gray-500 group-hover:text-black"
                    }`}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180 text-black" : "text-gray-400 group-hover:text-black"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pr-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/faq.png"
              alt="FAQ Illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAsk;