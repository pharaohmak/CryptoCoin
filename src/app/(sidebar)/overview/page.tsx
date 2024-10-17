import OverviewCard from '@/app/components/dashboard/OverviewCard';
import React from 'react';

const Overview = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
            <p className="mb-4 text-gray-600">
                Welcome to your dashboard! Here you can find a comprehensive overview of your portfolio, recent activities, and key metrics to help you make informed investment decisions.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <OverviewCard />
            </div>



            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Insights</h2>
                <p className="text-gray-600 mb-2">
                    Understanding market trends is essential for optimizing your investment strategies. This section provides insights into current market conditions.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Bitcoin has reached an all-time high as of October 2024.</li>
                    <li>Ethereum&apos;s transition to Ethereum 2.0 is projected to boost its scalability and security.</li>
                    <li>Keep an eye on upcoming cryptocurrency events that may affect market dynamics.</li>
                </ul>
            </div>
        </div>
    );
};

export default Overview;