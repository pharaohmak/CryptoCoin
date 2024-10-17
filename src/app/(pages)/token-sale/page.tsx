"use client";

import React from "react";

const TokenSalePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Token Sale</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in on the ground floor with our upcoming token sale. Purchase tokens to become a part of the CryptoCoin ecosystem and gain access to exclusive benefits.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Pre-Sale</h2>
          <p className="text-gray-600 mb-4">
            <strong>Starts:</strong> November 1, 2024<br />
            <strong>Ends:</strong> November 15, 2024<br />
            <strong>Price:</strong> $0.05 per token
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Public Sale</h2>
          <p className="text-gray-600 mb-4">
            <strong>Starts:</strong> November 16, 2024<br />
            <strong>Ends:</strong> December 1, 2024<br />
            <strong>Price:</strong> $0.10 per token
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Token Distribution</h2>
          <p className="text-gray-600">
            <strong>Total Supply:</strong> 10,000,000 tokens<br />
            <strong>Distribution:</strong> 50% Public Sale, 30% Founders, 10% Advisors, 10% Reserve
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">How to Participate</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          To join the token sale, create an account, complete the KYC process, and make your purchase using ETH or BTC.
          Detailed instructions are available on the registration page.
        </p>
        <div className="text-center mt-6">
          <a
            className="cursor-not-allowed inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition contact-btn"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default TokenSalePage;