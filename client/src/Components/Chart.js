import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Chartt(props) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Feb",
          "Mar",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
        ],
        datasets: [
          {
            label: "Performance",
            data: [
              "92.4",
              "38.4",
              "99.4",
              "58.4",
              "28.4",
              "66.4",
              "38.4",
              "8.4",
              "3.4",
              "18.4",
              "98.4",
              "78.4",
            ],
            backgroundColor: "#5046e4",
          },
        ],
      },
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="500" height="500" />
    </div>
  );
}
