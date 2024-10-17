import React from 'react';

const Settings = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-6 text-gray-700">Account Settings</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-200"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;