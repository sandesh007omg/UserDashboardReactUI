import { useContext } from "react";
import PackageLinks from "../Components/PackageLinks";
import Updates from "../Components/Updates/Updates";
import { DashboardMainContext } from "../Controller/useDashboard.controller";

const Aside = () => {
  const { packageObj } = useContext(DashboardMainContext);
  return (
    <aside>
      <Updates />
      <PackageLinks items={Object.keys(packageObj)} />
    </aside>
  );
};
export default Aside;
