"use client"
import React from 'react';

import { useAppSelector } from "@/redux/hooks"; // Importing hooks for accessing Redux state

const Card4 = () => {
    // Accessing user portfolio from Redux store (you might want to modify this to match your state)
    const { data } = useAppSelector((state) => state.crypto);
    
    // Sample portfolio for demonstration; you might want to integrate with user's actual portfolio
    const userPortfolio = [
        { name: 'Bitcoin', amount: 0.5, value: 25000 },
        { name: 'Ethereum', amount: 2, value: 3000 },
    ];

    const totalValue = userPortfolio.reduce((sum, asset) => sum + asset.value, 0);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg font-semibold">Total Value: ${totalValue.toLocaleString()}</p>
                <ul className="mt-2 space-y-2">
                    {userPortfolio.map((asset) => {
                        // Find the corresponding crypto data in the Redux state
                        const crypto = data.find((c) => c.name === asset.name);
                        return (
                            <li key={asset.name} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                                {/* Display asset image from Redux state */}
                                {crypto ? (
                                    <img src={crypto.imageUrl} alt={crypto.name} className="w-12 h-12 rounded-full mr-4" />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" /> // Placeholder for loading
                                )}
                                <span className="flex-1">{asset.name}</span>
                                <span>{asset.amount} (${asset.value.toLocaleString()})</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Card4;