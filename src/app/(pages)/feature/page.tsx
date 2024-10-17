"use client";

import React from "react";

const FeaturesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the powerful features that make CryptoCoin your best choice for tracking and analyzing the cryptocurrency market.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn-icons-png.freepik.com/256/8727/8727750.png?semt=ais_hybrid" alt="Real-Time Prices" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Real-Time Prices</h2>
          <p className="text-gray-600">
            Stay updated with live prices of over 1,000 cryptocurrencies, providing you with accurate and up-to-the-minute market data.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn-icons-png.freepik.com/512/6340/6340759.png" alt="Advanced Charts" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Charts</h2>
          <p className="text-gray-600">
            Analyze market trends with our interactive charting tools, designed to help you make informed trading decisions.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/12285/12285915.png" alt="Portfolio Management" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Portfolio Management</h2>
          <p className="text-gray-600">
            Manage your crypto investments with ease using our portfolio tracker, helping you monitor performance and track gains.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png" alt="Alerts and Notifications" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Alerts & Notifications</h2>
          <p className="text-gray-600">
            Get instant alerts for price changes, market movements, and breaking news, so you never miss an opportunity.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/8430/8430139.png" alt="Secure Platform" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Secure Platform</h2>
          <p className="text-gray-600">
            Experience peace of mind with our robust security measures, keeping your data and information safe at all times.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1884/1884184.png" alt="Community Support" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Community Support</h2>
          <p className="text-gray-600">
            Join a growing community of crypto enthusiasts, with access to discussions, insights, and expert advice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;