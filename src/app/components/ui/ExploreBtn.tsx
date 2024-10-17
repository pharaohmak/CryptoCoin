import React from 'react';

const ExploreBtn = () => {
    return (
        <>
            <a
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md no-underline"
            >
                Explore
            </a>
        </>
    );
};

export default ExploreBtn;