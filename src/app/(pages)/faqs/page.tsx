"use client";

import React from "react";

const FaqsPage = () => {
  const faqs = [
    {
      question: "What is CryptoCoin?",
      answer: "CryptoCoin is a crypto tracking platform that provides real-time price data, analytics, and portfolio management tools for over 1,000 cryptocurrencies."
    },
    {
      question: "How can I participate in the token sale?",
      answer: "To participate in the token sale, create an account, complete the KYC verification, and use ETH or BTC to purchase tokens during the sale period."
    },
    {
      question: "Is my data secure on CryptoCoin?",
      answer: "Yes, we use advanced encryption protocols to ensure that your data remains secure and private at all times."
    },
    {
      question: "Do I need to pay to use CryptoCoin?",
      answer: "Basic features are free to use, but we offer premium plans with additional tools and analytics for more advanced users."
    },
    {
      question: "Can I track multiple portfolios?",
      answer: "Yes, our platform allows you to create and manage multiple portfolios, making it easy to monitor different investments."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "We support tracking for over 1,000 cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and many others."
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about CryptoCoin, our features, and the token sale process.
        </p>
      </section>

      <section className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqsPage;