import { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import Chart from "react-apexcharts";

const Aside = () => {
  const { updatedChartData } = useContext(DashboardMainContext);
  return (
    <div className="card">
      <Chart
        options={updatedChartData?.options}
        series={updatedChartData?.series}
        type="radialBar"
        height={390}
      />
    </div>
  );
};
export default Aside;
