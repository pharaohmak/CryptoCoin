"use client";
import MarketTrendsChart from '@/app/components/MarketTrends';
import PortfolioChart from '@/app/components/PortfolioChart';
import React from 'react';

const Analytics = () => {
    return (
        <div className="flex">
            <div className="flex-1 p-3 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Analytics Dashboard</h1>
                <p className="mb-4 text-gray-600">
                    Welcome to your analytics dashboard. Here, you can find detailed insights about your portfolio performance, market trends, and key metrics to help you make informed investment decisions.
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 min-w-[300px]">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Metrics</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span className="text-gray-600">Total Portfolio Value:</span>
                                <span className="font-semibold">$32,500</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Total Assets:</span>
                                <span className="font-semibold">5</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Daily Change:</span>
                                <span className="font-semibold text-green-600">+2.5%</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">7-Day Average Return:</span>
                                <span className="font-semibold text-green-600">+3.8%</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Market Capitalization:</span>
                                <span className="font-semibold">$1,200,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Current Allocation:</span>
                                <span className="font-semibold">70% Crypto, 30% Stocks</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 min-w-[300px]">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio Performance</h2>
                        <p className="text-gray-600 mb-4">
                            Your portfolio has shown a consistent growth pattern over the past few weeks. Here are some key performance indicators:
                        </p>
                        <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <PortfolioChart />
                        </div>
                        <ul className="space-y-2 mb-4">
                            <li className="flex justify-between">
                                <span className="text-gray-600">7-Day Return:</span>
                                <span className="font-semibold text-green-600">+5.0%</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">30-Day Return:</span>
                                <span className="font-semibold text-green-600">+15.2%</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">1-Year Return:</span>
                                <span className="font-semibold text-green-600">+45.7%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 min-w-[300px]">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Trends</h2>
                        <p className="text-gray-600 mb-4">
                            Stay updated with the latest market trends and data. Here are some recent movements in popular cryptocurrencies:
                        </p>
                        <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <MarketTrendsChart />
                        </div>
                        <ul className="space-y-2 mb-4">
                            <li className="flex justify-between">
                                <span className="text-gray-600">Bitcoin (BTC):</span>
                                <span className="font-semibold text-green-600">+4.2% in the last 24 hours</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Ethereum (ETH):</span>
                                <span className="font-semibold text-red-600">-1.3% in the last 24 hours</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Litecoin (LTC):</span>
                                <span className="font-semibold text-green-600">+2.8% in the last 24 hours</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-gray-600">Dogecoin (DOGE):</span>
                                <span className="font-semibold text-red-600">-0.5% in the last 24 hours</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Insights</h2>
                    <p className="text-gray-600 mb-4">
                        Here are some additional insights and recommendations based on your portfolio performance and market analysis.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Consider diversifying your portfolio to mitigate risks.</li>
                        <li>Keep an eye on upcoming market events that may impact prices.</li>
                        <li>Review your investment strategies regularly to adapt to market changes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Analytics;