"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCryptos } from "@/redux/cryptoSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function MostPopular() {
    const dispatch = useAppDispatch();
    const { data, status } = useAppSelector((state) => state.crypto);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => {
        dispatch(fetchCryptos());
    }, [dispatch]);

    const toggleFavorite = (id: string) => {
        setFavorites((prev) => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(id)) {
                newFavorites.delete(id);
            } else {
                newFavorites.add(id);
            }
            return newFavorites;
        });
    };

    const top3Coins = [...(data || [])]
        .sort((a, b) => parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd))
        .slice(0, 2);

    // Skeleton loader JSX
    const SkeletonLoader = () => (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6 w-100 sm:w-1/2 lg:w-1/3 animate-pulse">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                    <div className="h-5 bg-gray-300 rounded w-24 mb-1"></div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-40 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-10 mt-4"></div>
        </div>
    );

    return (
        <div>
            {/* Top 3 Coins Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Most Popular</h2>
                <div className="gap-6">
                    {status === "loading"
                        ? [1, 2, 3].map((index) => <SkeletonLoader key={index} />) // Show skeleton loaders when data is loading
                        : top3Coins.map((crypto) => (
                            <div key={crypto.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6 transition-transform transform hover:scale-105 w-100 sm:w-1/2 lg:w-1/3">
                                <div className="flex items-center mb-4">
                                    <img src={crypto.imageUrl} alt={crypto.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{crypto.name}</h3>
                                        <p className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
                                    </div>
                                </div>
                                <p className="mb-1">
                                    <strong>Price:</strong> ${parseFloat(crypto.priceUsd).toFixed(2)}
                                </p>
                                <p className="mb-1">
                                    <strong>Market Cap:</strong> ${parseFloat(crypto.marketCapUsd).toLocaleString()}
                                </p>
                                <p className="mb-1">
                                    <strong>24h Change:</strong>{" "}
                                    <span className={`px-2 py-1 rounded-full text-sm ${parseFloat(crypto.changePercent24Hr) >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                        {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                                    </span>
                                </p>
                                <button
                                    onClick={() => toggleFavorite(crypto.id)}
                                    className="text-yellow-500 mt-2"
                                >
                                    {favorites.has(crypto.id) ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />}
                                </button>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
}

export default MostPopular;