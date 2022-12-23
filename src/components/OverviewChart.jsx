import React from "react";
import visavail from "visavail";
import "../../node_modules/visavail/visavail.min.css";
import "../../node_modules/visavail/visavail.min.js";

class OverviewChart extends React.Component {
  alarm_bar = {};
  constructor(props) {
    super(props);
    this.alarm_bar["dataset"] = [
      {
        measure: "Balance",
        interval_s: 3 * 30.5 * 24 * 60 * 60,
        data: [
          ["2022-12-03 07:30:29", 0, "2022-12-03 08:51:56"],
          ["2022-12-03 08:51:56", 1, "2022-12-03 10:52:30"],
          ["2022-12-03 10:52:30", 0, "2022-12-03 13:38:29"],
          ["2022-12-03 13:38:29", 0, "2022-12-03 14:29:59"],
          ["2022-12-04 06:30:30", 1, "2022-12-04 06:40:13"],
        ],
      },
    ];

    this.alarm_bar["options"] = {
      id_div_container: "alarm_bar_container",
      id_div_graph: "alarm_bar_div",
      date_in_utc: false,
      //width: document.getElementById("alarm_bar_div").offsetWidth,
      line_spacing: 24,
      tooltip: {
        height: 18,
        position: "overlay",
        left_spacing: 20,
        only_first_date: false,
        date_plus_time: true,
      },
      responsive: {
        enabled: true,
      },
      show_y_title: false,
      title: {
        enabled: false,
      },
      sub_title: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      emphasize_year_ticks: true,
      emphasize_month_ticks: false,
    };
  }

  renderChart() {
    this.alarm_bar["chart"] = visavail.generate(
      this.alarm_bar.options,
      this.alarm_bar.dataset
    );
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    return (
      <div
        style={{ width: "100%", overflow: "hidden" }}
        className="visavail"
        id="alarm_bar_container"
      >
        <p id="alarm_bar_div" style={{ overflow: "hidden" }}></p>
      </div>
    );
  }
}

export default OverviewChart;
