import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  const faqData = [
    {
      question: 'Who receives reports from NextGenCity?',
      answer: 'Reports are sent to the appropriate city departments and authorities for quick resolution.',
    },
    {
      question: 'Where is NextGenCity available?',
      answer: 'We currently serve users across major metro cities in India. Expansion to tier-2 cities is in progress.',
    },
    {
      question: 'Is NextGenCity free to use?',
      answer: 'Yes, NextGenCity is completely free for users.',
    },
    {
      question: 'Can organizations or NGOs collaborate?',
      answer: 'Yes, we welcome collaborations that support civic improvement.',
    },
    {
      question: 'What types of issues can I report?',
      answer: 'You can report potholes, garbage issues, streetlight problems, water leaks, and more.',
    },
    {
      question: 'How does NextGenCity make money?',
      answer: 'We rely on public funding, city partnerships, and donations from supporters.',
    },
    {
      question: 'Who pays for NextGenCity?',
      answer: 'Our project is funded through public grants and civic tech sponsorships.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full px-4 py-20 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          data-aos="zoom-in"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2937] border border-[#3b3f4e] rounded-xl shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-white focus:outline-none"
              >
                <span>{item.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-300">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;




