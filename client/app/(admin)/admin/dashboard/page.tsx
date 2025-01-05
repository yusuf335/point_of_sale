"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Statistics from "@/app/components/ui/card/statistics/Statistics";
import styles from "./page.module.scss";

import { IoStatsChartSharp } from "react-icons/io5";

const stats = [
  { title: "Orders", value: 100, icon: <IoStatsChartSharp /> },
  { title: "Sales", value: 100, icon: <IoStatsChartSharp /> },
  { title: "Stores", value: 100, icon: <IoStatsChartSharp /> },
  { title: "Products", value: 100, icon: <IoStatsChartSharp /> },
];

// Dynamically import ApexCharts with ssr disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const series1 = [
  {
    name: "Orders",
    data: [44, 55, 57, 56, 61, 58, 63, 60],
  },
  {
    name: "Total Sales",
    data: [76, 85, 101, 98, 87, 105, 91, 114],
  },
];

const options = {
  chart: {
    type: "bar" as "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      borderRadiusApplication: "end" as "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Mon", "Sun", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val: number) => `$ ${val} thousands`,
    },
  },
};

export default function Home() {
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);

  useEffect(() => {
    setSeries(series1);
  }, []);

  return (
    <>
      {/* Stat */}
      <div className={styles.statContainer}>
        {stats.map((stat, index) => (
          <Statistics
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Chart */}
      <div className={styles.chartContainer}>
        <h2> Sales Overview</h2>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
}
