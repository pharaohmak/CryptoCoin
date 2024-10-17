import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faTachometerAlt, faChartLine, faCog, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import icon1 from '../assets/icon-1.png';

const SideMenu = () => {
    return (
        <div className="sidebar h-full w-64 bg-gray-800 text-white p-6 flex flex-col justify-between">
            <div>
                <a href="/" className="flex justify-center items-center mb-20 mt-6">
                    <div className="flex items-center justify-center">
                        <Image className="rounded-full mr-3" src={icon1} alt="CryptoCoin Logo" height={50} width={50} />
                        <h2 className="text-primary font-semibold text-white text-3xl">CryptoCoin</h2>
                    </div>
                </a>
                <nav className="flex flex-col gap-8">
                    <a className="flex items-center hover:text-blue-400 transition duration-200 cursor-pointer text-xl" href="/dashboard">
                        <FontAwesomeIcon icon={faDashcube} className="mr-4 h-10" />
                        <span className='ml-4'>Dashboard</span>
                    </a>
                    <a className="flex items-center hover:text-blue-400 transition duration-200 cursor-pointer text-xl mr-12" href="/overview">
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-8 h-10" />
                        <span>Overview</span>
                    </a>
                    <a className="flex items-center hover:text-blue-400 transition duration-200 cursor-pointer text-xl mr-12" href="/analytics">
                        <FontAwesomeIcon icon={faChartLine} className="mr-8 h-10" />
                        <span>Analytics</span>
                    </a>
                </nav>
            </div>

            <div className="flex flex-col gap-8">
                <a className="flex items-center hover:text-blue-400 transition duration-200 cursor-pointer text-xl mr-12" href="/support">
                    <FontAwesomeIcon icon={faLifeRing} className="mr-10 h-10" />
                    <span>Support</span>
                </a>
                <a className="flex items-center hover:text-blue-400 transition duration-200 cursor-pointer text-xl mr-12" href="/settings">
                    <FontAwesomeIcon icon={faCog} className="mr-10 h-10" />
                    <span>Settings</span>
                </a>
            </div>
        </div>
    );
};

export default SideMenu;