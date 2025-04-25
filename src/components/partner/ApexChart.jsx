"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Import ApexChart dynamically to disable SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const ApexChart = () => {
    const [chartOptions, setChartOptions] = useState({
        series: [
            {
                name: "series1", // The name is required but will be hidden from the UI
                data: [31, 40, 28, 51, 42, 109, 100], // Data is functional, line is visible
            },
        ],
        options: {
            chart: {
                height: 250,
                type: "area",
                toolbar: {
                    show: false, // Disable toolbar (removes zoom, pan, etc.)
                },
            },
            dataLabels: {
                enabled: false, // Hide data labels on the line
            },
            stroke: {
                curve: "smooth",
                width: 2, // Make the line visible
                colors: ["#FFB224"], // Line color
            },
            fill: {
                type: "solid",
                colors: ["transparent"], // Make the fill transparent
            },
            markers: {
                size: 0, // Hide markers (dots on the chart)
            },
            xaxis: {
                type: "category", // Set x-axis type to "category" for string-based labels
                categories: [
                    "1 Nov",
                    "2 Nov",
                    "3 Nov",
                    "4 Nov",
                    "5 Nov",
                    "6 Nov",
                    "7 Nov",
                ], // Custom dates as strings
                labels: {
                    rotate: 0, // Prevent label rotation
                },
            },
            tooltip: {
                enabled: true, // Tooltip will still be visible on hover
                x: {
                    format: "dd MMM", // Tooltip will display date format like "01 Jul"
                },
            },
            grid: {
                show: true,
                borderColor: "#e0e0e0", // Light gray grid for better shadow contrast
            },
            legend: {
                show: false, // Hide the legend to remove the series data from the UI
            },
        },
    });

    return (
        <div>
            <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="area"
                height={250}
            />
        </div>
    );
};

export default ApexChart;
