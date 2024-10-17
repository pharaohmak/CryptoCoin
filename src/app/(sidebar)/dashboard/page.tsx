"use client";
import React, { useEffect, useState } from "react";
import AppNavbar from '@/app/components/AppNavbar';
import Header from '@/app/components/Header';
import MainGrid from '@/app/components/MainGrid';
import SearchBar from '@/app/components/SearchBar';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCryptos } from "@/redux/cryptoSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Dashboard = () => {
  const { data } = useAppSelector((state) => state.crypto);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();
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

  const filteredCoins = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <div className="flex">
        <div className="flex-1 p-6">
          <Header />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {searchTerm && (
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCoins.length > 0 ? (
                  filteredCoins.map((crypto) => (
                    <div key={crypto.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform">
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
                  ))
                ) : (
                  <p className="text-gray-500">No results found.</p>
                )}
              </div>
            </section>
          )}

          <MainGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;