"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About CryptoCoin</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          CryptoCoin is your go-to platform for tracking and analyzing the cryptocurrency market in real-time.
          Whether you’re a seasoned trader or just starting out, our user-friendly interface and comprehensive
          data provide you with the tools you need to make informed decisions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            At CryptoCoin, our mission is to empower individuals and investors with accurate,
            real-time data about the world of cryptocurrency. We believe in transparency, innovation,
            and making crypto accessible to everyone, from novices to experts.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Live price tracking for over 1,000 cryptocurrencies</li>
            <li>Advanced charting tools and performance analytics</li>
            <li>Customizable portfolio management features</li>
            <li>Real-time alerts and news updates from the crypto world</li>
            <li>Seamless user experience with a focus on accuracy and speed</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose CryptoCoin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="https://www.pngitem.com/pimgs/m/298-2984144_ease-of-use-icon-hd-png-download.png" alt="Ease of Use" className="mx-auto mb-4 w-20 h-20" />

            <h3 className="text-xl font-bold">Ease of Use</h3>
            <p className="text-gray-600">
              Intuitive design makes navigating the crypto market easy, even for beginners.
            </p>
          </div>
          <div className="text-center">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/real-time-2.png" alt="Real-Time Data" className="mx-auto mb-4 w-20 h-20" />
            <h3 className="text-xl font-bold">Real-Time Data</h3>
            <p className="text-gray-600">
              Stay updated with live prices and market trends, ensuring you never miss an opportunity.
            </p>
          </div>
          <div className="text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/102/102649.png" alt="Security" className="mx-auto mb-4 w-20 h-20" />
            <h3 className="text-xl font-bold">Security</h3>
            <p className="text-gray-600">
              Your data and information are secure with us, thanks to industry-leading security protocols.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the CryptoCoin Community</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Become part of a growing community of crypto enthusiasts and professionals who trust CryptoCoin for their market insights.
          Stay ahead of the curve with our latest updates, features, and market trends.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition contact-btn"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default AboutPage;