import { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import Chart from "react-apexcharts";

const RadialBars = () => {
  const { updatedChartData } = useContext(DashboardMainContext);
  return (
    <div className="card">
      <h3>PACKAGE USERS RADIAL BAR</h3>
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
