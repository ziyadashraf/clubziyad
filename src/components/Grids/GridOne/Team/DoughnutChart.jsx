// components/DoughnutChart.js
import React, { useRef, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const data = {
        labels: ['Development', 'Operations', 'Design', 'Founders'],
        datasets: [
            {
                label: '# of Votes',
                data: [4, 2, 1, 2],
                backgroundColor: [
                    '#FF7676',
                    '#79BFF3',
                    '#FFB58A',
                    '#21BBB1',

                ],
                borderRadius: 10,
                borderColor: 'transparent', // Add border radius to arcs
                spacing: -50,
                borderAlign: 'inner', // Align border to the inner part of arcs
                offset: 0,

            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
                generateLabels: (chart) => {
                    const data = chart.data;
                    return data.labels.map((label, i) => {
                        const dataset = data.datasets[0];
                        const backgroundColor = dataset.backgroundColor[i];
                        const borderColor = dataset.borderColor[i];
                        return {
                            text: label,
                            fillStyle: backgroundColor,
                            strokeStyle: borderColor,
                            pointStyle: 'circle',
                            fontWeight: 600,
                            marginLeft: 200
                        };
                    });
                },
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart Example',
            },
        },
        cutout: '85%', // Set cutout to 0% to make it look like small circles
        hover: 'none',
        animation: {
            duration: 0, // Disable all animations
        },

    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(chartRef.current);
                    }
                });
            },
            { threshold: 0.1 }
        );


        observer.observe(chartRef.current);

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, []);

    return (
        <div ref={chartRef} style={{ height: "90%" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;
