import useDashboard from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import { DASHBOARD_TITLE } from "./config";

const Dashboard = () => {
  const {} = useDashboard();

  return (
    <DashboardStyled>
      <h2>{DASHBOARD_TITLE}</h2>
    </DashboardStyled>
  );
};

export default Dashboard;
