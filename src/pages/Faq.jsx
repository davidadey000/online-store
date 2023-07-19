import React from 'react';
import FaqItem from '../components/FaqItem';

const Faq = () => {
  // Mock data for FAQs
  const faqs = [
    {
      question: 'How long does shipping take?',
      answer:
        'Shipping times vary depending on your location. Generally, orders are delivered within 3-5 business days.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 30 days of the purchase date. Please refer to our Returns & Exchanges page for more information.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website.',
    },
    // Add more FAQs here
  ];

  return (
    <div className="flex-grow px-3 md:px-5 lg:px-10 py-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq, index) => (
           <div className="inline" key={index}>
          <FaqItem question={faq.question} answer={faq.answer} />
       </div> ))}
      </div>
    </div>
  );
};

export default Faq;
