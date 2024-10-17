"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCryptos } from "@/redux/cryptoSlice";

function Overview() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.crypto);
    const [userPortfolio] = useState([
        { id: "bitcoin", amount: 0.5 },
        { id: "ethereum", amount: 2 },
        { id: "litecoin", amount: 1.5 }, // Added Litecoin to the portfolio
    ]);
    const watchlist = ["bitcoin", "ethereum", "litecoin", "dogecoin"];

    useEffect(() => {
        dispatch(fetchCryptos());
    }, [dispatch]);

    const totalValue = userPortfolio.reduce((sum, asset) => {
        const crypto = data.find((c) => c.id === asset.id);
        return sum + (crypto ? parseFloat(crypto.priceUsd) * asset.amount : 0);
    }, 0);

    const recentTransactions = [
        { id: "bitcoin", type: "buy", amount: 0.2, date: "2024-10-10" },
        { id: "ethereum", type: "sell", amount: 1, date: "2024-10-11" },
        { id: "bitcoin", type: "buy", amount: 0.3, date: "2024-10-12" },
        { id: "bitcoin", type: "buy", amount: 0.3, date: "2024-10-12" },
        { id: "bitcoin", type: "buy", amount: 0.3, date: "2024-10-12" },
    ];

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">My Portfolio</h2>
                <p className="text-lg font-semibold text-gray-600">
                    Total Value: ${totalValue.toLocaleString()}
                </p>
                <ul className="mt-4 space-y-3">
                    {userPortfolio.map((asset, index) => {
                        const crypto = data.find((c) => c.id === asset.id);
                        return (
                            <li
                                key={index}
                                className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                            >
                                {crypto && (
                                    <>
                                        <img
                                            src={crypto.imageUrl}
                                            alt={crypto.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <span className="font-medium text-gray-700">{crypto.name}</span>
                                        <span className="text-gray-600">
                                            {asset.amount} (${(parseFloat(crypto.priceUsd) * asset.amount).toFixed(2)})
                                        </span>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
                <ul className="space-y-3">
                    {recentTransactions.map((transaction, index) => {
                        const crypto = data.find((c) => c.id === transaction.id);
                        return (
                            <li
                                key={index}
                                className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                            >
                                {crypto && (
                                    <>
                                        <span className="font-medium text-gray-700">
                                            {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} {transaction.amount} {crypto.symbol.toUpperCase()}
                                        </span>
                                        <span className="text-gray-600">{transaction.date}</span>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Crypto Watchlist</h2>
                <ul className="space-y-3">
                    {watchlist.map((id, index) => {
                        const crypto = data.find((c) => c.id === id);
                        return (
                            <li
                                key={index}
                                className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                            >
                                {crypto ? (
                                    <>
                                        <img
                                            src={crypto.imageUrl}
                                            alt={crypto.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <span className="font-medium text-gray-700">{crypto.name}</span>
                                        <span className="text-gray-600">${parseFloat(crypto.priceUsd).toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span className="text-gray-700">Loading...</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Overview;