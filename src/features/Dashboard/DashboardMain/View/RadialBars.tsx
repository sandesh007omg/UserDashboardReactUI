import React, { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import Chart from "react-apexcharts";

const RadialBars: React.FC = () => {
  const { updatedChartData } = useContext(DashboardMainContext);

  return (
    <div className="card">
      <h3>PACKAGE Customers RADIAL BAR</h3>
      <Chart
        options={updatedChartData?.options}
        series={updatedChartData?.series}
        type="radialBar"
        height={390}
      />
    </div>
  );
};

export default RadialBars;
