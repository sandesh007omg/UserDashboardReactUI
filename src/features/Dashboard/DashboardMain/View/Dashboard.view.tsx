import { Col, Row } from "react-flexbox-grid";
import DynamicTable from "../../../../components/Table";
import { UserDetails } from "../../../../components/UserDetails";
import useDashboard from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import { tableProps } from "./config";
import SearchBar from "../Components/Search";

const Dashboard = () => {
  const {
    data,
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    clonedData,
  } = useDashboard();

  return (
    <DashboardStyled>
      <Row>
        <Col md={4}>
          <UserDetails title={"Sand"} />
        </Col>
        <Col md={12}>
          <div className="card">
            <caption>Users</caption>
            <SearchBar
              searchTerm={searchTerm}
              isSearchVisible={isSearchVisible}
              onSearchChange={handleSearchChange}
              onSearchToggle={handleSearchToggle}
            />
            <DynamicTable
              data={data}
              clonedData={clonedData}
              columns={tableProps?.tableColumns}
              rowHeight={tableProps?.rowHeight}
              columnWidth={columnWidth}
            />
          </div>
        </Col>
      </Row>
    </DashboardStyled>
  );
};

export default Dashboard;

const columnWidth = (column: any) => column.width;
