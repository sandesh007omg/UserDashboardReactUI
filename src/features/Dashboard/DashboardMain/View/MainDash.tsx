import { Col, Row } from "react-flexbox-grid";
import { UserDetails } from "../../../../components/UserDetails";
import CardContainer from "../Components/CardContainer";
import UserTable from "./UserTable";
import CustomerReview from "../Components/CustomerReview/CustomerReview";
import { useContext } from "react";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import PackageTable from "./PackageTable";
import RadialBar from "./RadialBar";

const MainDash = () => {
  return (
    <main>
      <Row>
        <Col md={4}>
          <UserDetails title={"Sandesh Maharjan"} />
        </Col>
        <Col md={4}>
          <CardContainer title="Sales">
            <p>111</p>
          </CardContainer>
        </Col>
        <Col md={4}>
          <CardContainer title="Total User">
            <p>111</p>
          </CardContainer>
        </Col>
        <Col md={12}>
          <UserTable />
        </Col>
        <Col md={6}>
          <RadialBar />
        </Col>
        <Col md={6}>
          <PackageTable />
        </Col>
      </Row>
    </main>
  );
};
export default MainDash;
