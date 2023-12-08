import { Col, Row } from "react-flexbox-grid";
import DynamicTable from "../../../../components/Table";
import { UserDetails } from "../../../../components/UserDetails";
import useDashboard from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import { STATUS_LIST, tableProps } from "./config";
import SearchBar from "../Components/Search";
import MultiSelect from "../../../../components/Select";
import Cards from "../../../../components/Cards/Cards";
import CustomerReview from "../../../../components/CustomerReview/CustomerReview";

const Dashboard = () => {
  const {
    data,
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    clonedData,
    selectedValues,
    handleMultiSelectChange,
  } = useDashboard();
  console.log(data, "data", selectedValues);
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
            <MultiSelect
              options={STATUS_LIST}
              selectedValues={selectedValues}
              onChange={handleMultiSelectChange}
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
        <Col md={4}>
          {" "}
          <CustomerReview />
        </Col>
      </Row>
    </DashboardStyled>
  );
};

export default Dashboard;

const columnWidth = (column: any) => column.width;
