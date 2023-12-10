import { Col, Row } from "react-flexbox-grid";
import { UserDetails } from "../../../../components/UserDetails";
import CardContainer from "../Components/CardContainer";
import UserTable from "./UserTable";
import PackageTable from "./PackageTable";
import RadialBars from "./RadialBars";
import CustomerReview from "../Components/CustomerReview";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import { useContext } from "react";

const MainDash = () => {
  const { totalInActiveUserCount, totalActiveUserCount } =
    useContext(DashboardMainContext);
  return (
    <main>
      <Row>
        <Col md={4}>
          <UserDetails title={"Admin"} />
        </Col>
        <Col md={4} className="active">
          <CardContainer
            title="Total Active Customers"
            value={totalActiveUserCount}
          />
        </Col>
        <Col md={4} className="inactive">
          <CardContainer
            title="Total Inactive Customers"
            value={totalInActiveUserCount}
          />
        </Col>
        <Col md={12}>
          <UserTable />
        </Col>
        <Col md={6}>
          <RadialBars />
        </Col>
        <Col md={6}>
          <CustomerReview />
        </Col>
        <Col md={6}>
          <PackageTable />
        </Col>
      </Row>
    </main>
  );
};
export default MainDash;
