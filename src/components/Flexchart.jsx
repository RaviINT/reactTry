import React from "react";
import moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineCaretUp } from "react-icons/ai";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import ProgressData from "../data.json";

const ProgressChart = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [interval, setinterval] = useState(0);
  const [subInterval, setsubInterval] = useState([]);
  useEffect(() => {
    let interval = [];
    let c = 0;
    ProgressData?.map((item) => {
      if (
        c !== moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH")
      ) {
        c = moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH");
        interval.push(c + ":00");
      }
    });
    var subIntervals = new Array(interval);
    for (var i = 0; i < interval.length; ++i) subIntervals[i] = 0;
    let sub_c = moment(
      ProgressData[0]?.MachineStatusTime,
      "YYYY-M-D H:m s"
    ).format("HH");
    let index = 0;
    ProgressData?.map((item) => {
      if (
        sub_c === moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH")
      ) {
        subIntervals[index]++;
      } else {
        sub_c = moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH");
        index = index + 1;
      }
    });
    
    setsubInterval(subIntervals);
    setinterval(interval);
  }, [ProgressData]);
  console.log({interval})
  useLayoutEffect(() => {
    setWidth(ref?.current?.offsetWidth);
  }, [ref, interval]);

  let paintIndex = 0;
  let paintCurrent = moment(
    ProgressData[0]?.MachineStatusTime,
    "YYYY-M-D H:m s"
  ).format("HH");
  return (
    <div style={{ padding: "20px 10px 0px 10px", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {ProgressData &&
          ProgressData?.map((item, index) => {
            console.log("check", paintCurrent,moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH"))
            if (
              paintCurrent !==
              moment(item?.MachineStatusTime, "YYYY-M-D H:m s").format("HH")
            ) {
              paintCurrent = moment(
                item?.MachineStatusTime,
                "YYYY-M-D H:m s"
              ).format("HH");
              paintIndex++;
            }
            console.log("----", width,subInterval,paintIndex);
            return (
              <div
                style={{ width: width / subInterval[paintIndex] / 2 + "%" }}
                key={index}
              >
                <Tooltip
                  placement="top"
                  arrow
                  title={
                    <span style={{ fontSize: "14px" }}>
                      {item?.MachineStatus}
                      {` from ${moment(item?.MachineStatusTime).format(
                        "HH:mm:ss"
                      )}`}{" "}
                      {` ${
                        ProgressData[index + 1]?.MachineStatusTime
                          ? "to " +
                            moment(
                              ProgressData[index + 1]?.MachineStatusTime
                            ).format("HH:mm:ss")
                          : ""
                      }`}
                    </span>
                  }
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: item?.MachineStatusColorCode,
                    }}
                  ></div>
                </Tooltip>
              </div>
            );
          })}
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        {interval?.length > 0 &&
          interval?.map((item, index) => {
            return (
              <div
                ref={ref}
                style={{
                  minWidth: `${100 / interval.length}%`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                key={index}
              >
                <AiOutlineCaretUp />
                <p style={{ padding: 0, marginTop: "-5px", fontSize: "12px" }}>
                  {item}
                </p>
              </div>
            );
          })}
        <div
          style={{
            minWidth: `${100 / interval.length}%`,
            display: "flex",
            flexDirection: "column",
            marginLeft: -10,
          }}
        >
          <AiOutlineCaretUp />
          <p
            style={{
              padding: 0,
              marginTop: "-5px",
              fontSize: "12px",
              marginLeft: -12,
            }}
          >
            {moment(
              ProgressData[ProgressData.length - 1]?.MachineStatusTime,
              "YYYY-M-D H:m s"
            ).format("HH:mm")}
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: 0,
          fontSize: "12px",
        }}
      >
        {moment().format("DD/MM/YYYY")}
      </div>
    </div>
  );
};

export default ProgressChart;
