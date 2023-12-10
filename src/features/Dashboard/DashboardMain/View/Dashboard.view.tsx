import { Col, Row } from "react-flexbox-grid";
import useDashboard, {
  DashboardMainContext,
} from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import MainDash from "./MainDash";
import Aside from "./Aside";

const Dashboard = () => {
  const {
    data,
    searchTerm,
    packageObj,
    packageTable,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    clonedData,
    selectedValues,
    handleMultiSelectChange,
    onRowClick,
    updatedChartData,
  } = useDashboard();
  return (
    <DashboardMainContext.Provider
      value={{
        data,
        searchTerm,
        packageObj,
        packageTable,
        isSearchVisible,
        handleSearchChange,
        handleSearchToggle,
        clonedData,
        selectedValues,
        handleMultiSelectChange,
        onRowClick,
        updatedChartData,
      }}
    >
      <DashboardStyled>
        <Row>
          <Col md={9}>
            <MainDash />
          </Col>
          <Col md={3}>
            <Aside />
          </Col>
        </Row>
      </DashboardStyled>
    </DashboardMainContext.Provider>
  );
};

export default Dashboard;
