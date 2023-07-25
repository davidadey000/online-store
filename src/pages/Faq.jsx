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
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards (Visa, MasterCard, American Express) and PayPal.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to most countries. Shipping times may vary based on the destination.',
    },
    {
      question: 'Can I cancel my order after it\'s been placed?',
      answer:
        'If your order hasn\'t been shipped yet, you can request a cancellation by contacting our customer support team.',
    },
    {
      question: 'Are your products covered by a warranty?',
      answer:
        'Yes, our products come with a standard warranty. Please check the product description or contact support for specific warranty details.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach our customer support team through our Contact Us page, where you\'ll find various contact options.',
    },
    {
      question: 'Are the prices displayed in my local currency?',
      answer:
        'By default, prices are displayed in USD (United States Dollar). However, during the checkout process, you can choose your preferred currency for conversion.',
    },
    {
      question: 'Do you offer expedited shipping options?',
      answer:
        'Yes, we offer expedited shipping services for faster delivery. Additional fees may apply.',
    },
    {
      question: 'Can I change my shipping address after placing an order?',
      answer:
        'If your order hasn\'t been shipped yet, you may be able to update your shipping address by contacting customer support.',
    },
    {
      question: 'Do you have a rewards program or loyalty discounts for frequent customers?',
      answer:
        'Yes, we have a rewards program that offers discounts and special perks for our loyal customers. You can find more information on our website.',
    },
  ];
  
  return (
    <div className="flex-grow px-3 md:px-5 lg:px-10 py-4">
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
