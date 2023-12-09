import { useContext } from "react";
import RecentPageHistory from "../Components/RecentPageHistory";
import Updates from "../Components/Updates/Updates";
import { DashboardMainContext } from "../Controller/useDashboard.controller";

const RadialBar = () => {
  const { packageObj } = useContext(DashboardMainContext);
  return (
    <aside>
      <Updates />
      <RecentPageHistory items={Object.keys(packageObj)} />
    </aside>
  );
};
export default RadialBar;
