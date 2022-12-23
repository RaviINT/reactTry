import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutUpdate = () => {
  const data = {
    labels: [
      "Rejection 5",
      "Rejection 4",
      "Rejection 3",
      "Rejection 2",
      "Rejection 1",
    ], //[5,4,3,2,1]
    datasets: [
      {
        data: [30, 30, 5, 15, 20],
        backgroundColor: [
          "#B9AB84",
          "#3F426B",
          "#972454",
          "#C23545",
          "#D7943F", ///[5,4,3,2,1]
        ],
        // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],

    plugins: {
      labels: {
        render: "percentage",
        fontColor: ["green", "white", "red"],
        precision: 2,
      },
    },
    text: "23%",
  };
  const options = {
    cutout: 50,
    elements: {
      arc: {
        borderWidth: 0,
        // borderRadius: 10,
        //   borderColor: "rgb(134, 252, 139, 1)",
      },
    },
    layout: { padding: 20 },
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        // labels:{
        //   font:{
        //     size:44
        //   }
        // }
      },
    },
  };

  const plugins = [
    {
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        const text = data.labels[data.labels.length - 1];
        ctx.save();
        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;
        // ctx.fillRect(x-10,y-10,20,20)
        ctx.font = "bold 12px  sans-serif";
        ctx.fillText(text, x, y);
      },
    },
  ];

  const canvas = document.getElementsByTagNameNS("Doughnut");
  console.log(canvas); // 👉️ canvas#canvas

  // ✅ works
  const ctx = canvas.getContext("2d");

  console.log(ctx);
//   const update = () => {
//     myChart.data.datasets[0].data.push(3);
//     myChart.data.labels.push("New");
//     myChart.update();
//   };

  return (
    <div>
      <div>
        {/* <button onClick={update}>update</button> */}
      </div>
      <div>
        {/* <div style={{ border: "1px solid red" }}> */}
        <Doughnut
          id="myChart"
          data={data}
          plugins={plugins}
          options={options}
          height={300}
          //   options={{
          //     elements: {
          //       center: {
          //         legend: { display: true, position: "right" },
          //         text: "Red is 2/3 the total numbers",
          //         color: "#FF6384", // Default is #000000
          //         fontStyle: "Arial", // Default is Arial
          //         sidePadding: 20, // Default is 20 (as a percentage)
          //         minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
          //         lineHeight: 25, // Default is 25 (in px), used for when text wraps
          //       },
          //     },
          //   }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default DoughnutUpdate;
