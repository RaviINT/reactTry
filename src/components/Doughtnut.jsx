import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutBar = () => {
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
    cutout: 30,
    elements: {
      arc: {
        borderWidth: 0,
        // borderRadius: 10,
        //   borderColor: "rgb(134, 252, 139, 1)",
      },
    },
    layout:{padding:20},
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

  const plugins = [{
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      chart.data.datasets.forEach((dataset,i)=>{
        chart.getDatasetMeta(i).data.forEach((datapoint,index)=>{
          console.log(dataset)
          const {x,y}=datapoint.tooltipPosition();
          // ctx.fillStyle=dataset.backgroundColor[index];
          // ctx.fill()
          // ctx.fillRect(x,y,10,10)
          // draw line
          const halfWidth=width/2;
          const halfHeight=height/2;
          const xLine=x>=halfWidth?x+15:x-15
          const yLine=y>=halfWidth?y+15:y-15
          const extraLine=x>=halfWidth?100:-100
          // line
          ctx.beginPath()
          ctx.moveTo(x,y)
          ctx.lineTo(xLine,yLine)
          ctx.lineTo(xLine+extraLine,yLine)
          // ctx.strokeStyle=dataset.backgroundColor[index]
          ctx.strokeStyle="black"
          ctx.stroke()
          //text
          const textWidth=ctx.measureText(chart.data.labels[index]).width;
          const textPosition=x>=halfWidth?"left":"right"
          const plus=x>=halfWidth?5:-5
          ctx.font="15px Arial";
          ctx.textAlign=textPosition
          //control the position
          ctx.textBaseline="middle"
          ctx.fillStyle=dataset.backgroundColor[index]
          // ctx.fillStyle="black"
          ctx.fillText(chart.data.labels[index],xLine+extraLine+plus,yLine)
        })
      })
    },
  }]

  return (
    <div>
      {/* <div style={{ border: "1px solid red" }}> */}
        <Doughnut
       
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
     {/* </div> */}
    </div>
  );
};

export default DoughnutBar;
