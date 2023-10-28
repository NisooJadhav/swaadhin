import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [data, setData] = useState([]);
  const disabilityChartRef = useRef(null);
  const ageChartRef = useRef(null);
  const stateChartRef = useRef(null);
  const genderChartRef = useRef(null);

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
    if (disabilityChartRef.current) {
      disabilityChartRef.current.destroy();
    }
    if (ageChartRef.current) {
      ageChartRef.current.destroy();
    }
    if (stateChartRef.current) {
      stateChartRef.current.destroy();
    }
    if (genderChartRef.current) {
      genderChartRef.current.destroy();
    }

    const sortedData = [...data].sort(
      (a, b) => parseInt(a.total, 10) - parseInt(b.total, 10)
    );

    const aggregatedDisabilityData = {};
    const aggregatedAgeData = {};
    const aggregatedStateData = {};
    const aggregatedGenderData = {
      Male: 0,
      Female: 0,
    };

    sortedData.forEach((item) => {
      const disabilityType = item.disability_type;
      const ageGroup = item.age_group;
      const state = item.state_name;
      const total = parseInt(item.total, 10);
      const maleCount = parseInt(item.male_count, 10) || 0;
      const femaleCount = parseInt(item.female_count, 10) || 0;

      if (aggregatedDisabilityData[disabilityType]) {
        aggregatedDisabilityData[disabilityType] += total;
      } else {
        aggregatedDisabilityData[disabilityType] = total;
      }

      if (aggregatedAgeData[ageGroup]) {
        aggregatedAgeData[ageGroup] += total;
      } else {
        aggregatedAgeData[ageGroup] = total;
      }

      if (aggregatedStateData[state]) {
        aggregatedStateData[state] += total;
      } else {
        aggregatedStateData[state] = total;
      }

      aggregatedGenderData.Male += maleCount;
      aggregatedGenderData.Female += femaleCount;
    });

    const disabilityLabels = Object.keys(aggregatedDisabilityData);
    const disabilityCounts = Object.values(aggregatedDisabilityData);

    const ageLabels = Object.keys(aggregatedAgeData);
    const ageCounts = Object.values(aggregatedAgeData);

    const stateLabels = Object.keys(aggregatedStateData);
    const stateCounts = Object.values(aggregatedStateData);

    const genderLabels = Object.keys(aggregatedGenderData);
    const genderCounts = Object.values(aggregatedGenderData);

    const disabilityCtx = document
      .getElementById("disabilityChart")
      .getContext("2d");
    disabilityChartRef.current = new Chart(disabilityCtx, {
      type: "bar",
      data: {
        labels: disabilityLabels,
        datasets: [
          {
            label: "Total Users by Disability Type",
            data: disabilityCounts,
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

    const ageCtx = document.getElementById("ageChart").getContext("2d");
    ageChartRef.current = new Chart(ageCtx, {
      type: "bar",
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: "Total Disabled by Age Group",
            data: ageCounts,
            backgroundColor: "green",
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

    const stateCtx = document.getElementById("stateChart").getContext("2d");
    stateChartRef.current = new Chart(stateCtx, {
      type: "bar",
      data: {
        labels: stateLabels,
        datasets: [
          {
            label: "Total Disabled by State",
            data: stateCounts,
            backgroundColor: "orange",
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

    const genderCtx = document.getElementById("genderChart").getContext("2d");
    genderChartRef.current = new Chart(genderCtx, {
      type: "bar",
      data: {
        labels: genderLabels,
        datasets: [
          {
            label: "Total Disabled by Gender",
            data: genderCounts,
            backgroundColor: "purple",
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
        <canvas id="disabilityChart" width="400" height="100"></canvas>
        <h3>Total Users by Disability Type</h3>
        <hr />
        <canvas id="ageChart" width="400" height="100"></canvas>
        <h3>Total Disabled by Age Group</h3>
        <hr />
        <canvas id="stateChart" width="400" height="100"></canvas>
        <h3>Total Disabled by State</h3>
        <hr />
        <canvas id="genderChart" width="400" height="100"></canvas>
        <h3>Total Disabled by Gender</h3>
        <hr />
      </center>
    </>
  );
};

export default ChartComponent;
