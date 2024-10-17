import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MarketTrendsChart = () => {
    const data = {
        labels: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Litecoin (LTC)', 'Dogecoin (DOGE)'],
        datasets: [
            {
                label: '24 Hour Price Change (%)',
                data: [4.2, -1.3, 2.8, -0.5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price Change (%)',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default MarketTrendsChart;