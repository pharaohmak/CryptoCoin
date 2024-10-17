import React from 'react';
import MostPopular from './dashboard/MostPopular';
import TopPerforming from './dashboard/TopPerforming';
import WorstPerforming from './dashboard/WorstPerforming';

const MainGrid = () => {
    return (
        <div className="flex flex-wrap justify-between gap-6 p-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[300px] transition-transform transform">
                <MostPopular />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[300px] transition-transform transform">
                <TopPerforming />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[300px] transition-transform transform">
                <WorstPerforming />
            </div>
        </div>
    );
};

export default MainGrid;