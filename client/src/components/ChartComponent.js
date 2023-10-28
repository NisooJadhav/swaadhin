import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    Papa.parse("./UDIDDATA.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const aggregatedData = {};
    data.forEach((item) => {
      const disabilityType = item.disability_type;
      const total = parseInt(item.total, 10);
      if (aggregatedData[disabilityType]) {
        aggregatedData[disabilityType] += total;
      } else {
        aggregatedData[disabilityType] = total;
      }
    });

    const labels = Object.keys(aggregatedData);
    const counts = Object.values(aggregatedData);

    const ctx = document.getElementById("myChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Total Users",
            data: counts,
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <>
      <center>
        <h3>UDID Stats</h3>
        <canvas id="myChart" width="200" height="100"></canvas>
        <h3>Total Users by Disability Type</h3>
        <hr />
      </center>
    </>
  );
};

export default ChartComponent;
