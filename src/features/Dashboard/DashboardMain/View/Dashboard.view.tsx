import { Col, Row } from "react-flexbox-grid";
import DynamicTable from "../../../../components/Table";
import { UserDetails } from "../../../../components/UserDetails";
import useDashboard from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import { STATUS_LIST, tableProps } from "./config";
import SearchBar from "../../../../components/Search";
import MultiSelect from "../../../../components/Select";
import CustomerReview from "../Components/CustomerReview/CustomerReview";
import Updates from "../Components/Updates/Updates";
import RecentPageHistory from "../Components/RecentPageHistory";
import CardContainer from "../Components/CardContainer";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_DRILL_DOWN } from "../../../../constants/route";

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
  const navigate = useNavigate();
  const onRowClick = (data: any) => {
    navigate(`${DASHBOARD_DRILL_DOWN}/${data?.id}`, { state: data });
  };
  console.log(data, "data", selectedValues);
  return (
    <DashboardStyled>
      <Row>
        <Col md={9}>
          <section>
            <Row>
              <Col md={4}>
                <UserDetails title={"Sand"} />
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
                <div className="card">
                  <div className="header-wrapper">
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
                  </div>
                  <DynamicTable
                    data={data}
                    clonedData={clonedData}
                    columns={tableProps?.tableColumns}
                    rowHeight={tableProps?.rowHeight}
                    columnWidth={columnWidth}
                    onRowClick={onRowClick}
                  />
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col md={3}>
          <aside>
            <Updates />
            <CustomerReview />
            <RecentPageHistory
              items={[
                { title: "Package 1" },
                { title: "Package 2" },
                { title: "Package 3" },
              ]}
            />
          </aside>
        </Col>
      </Row>
    </DashboardStyled>
  );
};

export default Dashboard;

const columnWidth = (column: any) => column.width;
