import React from 'react';

const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Support</h1>
            <p className="mb-4 text-gray-600">If you need assistance, please contact us via the form below.</p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <form>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            className="border border-gray-300 rounded-lg p-3 w-full h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Type your message here..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;