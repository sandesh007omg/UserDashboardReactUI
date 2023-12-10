import { Col, Row } from "react-flexbox-grid";
import { UserDetails } from "../../../../components/UserDetails";
import CardContainer from "../Components/CardContainer";
import UserTable from "./UserTable";
import PackageTable from "./PackageTable";
import RadialBars from "./RadialBars";
import CustomerReview from "../Components/CustomerReview";

const MainDash = () => {
  return (
    <main>
      <Row>
        <Col md={4}>
          <UserDetails title={"Admin"} />
        </Col>
        <Col md={4} className="sales">
          <CardContainer title="Total Active User" value={1111} />
        </Col>
        <Col md={4} className="users">
          <CardContainer title="Total Inactive User" value={1111} />
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
