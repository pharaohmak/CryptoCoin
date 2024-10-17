import Image from 'next/image';
import React from 'react';

import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import icon5 from '../../assets/icon-5.png';
import icon7 from '../../assets/icon-7.png';
import icon8 from '../../assets/icon-8.png';
import icon9 from '../../assets/icon-9.png';

const Services = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Services</h1>
                    <p className="text-blue-600 text-lg mt-4">Track, Search And Explore Cryptocurrency</p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon7} alt="Currency Wallet" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Currency Wallet</h5>
                        <p className="text-gray-600 text-center">Manage your digital assets securely with our integrated wallet solution, designed for seamless transactions.</p>
                    </div>
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon3} alt="Real-Time Transactions" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Real-Time Transactions</h5>
                        <p className="text-gray-600 text-center">Execute transactions quickly and easily, backed by our robust infrastructure.</p>
                    </div>
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon9} alt="Investment Insights" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Investment Insights</h5>
                        <p className="text-gray-600 text-center">Get insights into Bitcoin and other cryptocurrencies to make informed investment decisions.</p>
                    </div>
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon5} alt="Market Analysis" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Market Analysis</h5>
                        <p className="text-gray-600 text-center">Access comprehensive market analysis and stay ahead of the trends in the crypto world.</p>
                    </div>
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon2} alt="Secure Transactions" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Secure Transactions</h5>
                        <p className="text-gray-600 text-center">Engage in secure transactions with our built-in escrow service, providing peace of mind with every trade.</p>
                    </div>
                    <div className="service-item bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <Image className="w-16 h-16 mb-4 mx-auto" src={icon8} alt="Exclusive Token Sales" />
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">Exclusive Token Sales</h5>
                        <p className="text-gray-600 text-center">Be the first to know about exclusive token sales and new investment opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;