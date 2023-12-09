import { Col, Row } from "react-flexbox-grid";
import DynamicTable from "../../../../components/Table";
import { UserDetails } from "../../../../components/UserDetails";
import useDashboard from "../Controller/useDashboard.controller";
import DashboardStyled from "./Dashboard.style";
import { STATUS_LIST, barChart, chartData, tableProps } from "./config";
import SearchBar from "../../../../components/Search";
import MultiSelect from "../../../../components/Select";
import CustomerReview from "../Components/CustomerReview/CustomerReview";
import Updates from "../Components/Updates/Updates";
import RecentPageHistory from "../Components/RecentPageHistory";
import CardContainer from "../Components/CardContainer";
import Chart from "react-apexcharts";

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
    <DashboardStyled className="custom-scroll">
      <Row>
        <Col md={9}>
          <section>
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
              <Col md={6}>
                <div className="card table-package">
                  <h3>Package Users Count</h3>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Package Name</th>
                          <th>Total User</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packageTable.map((item, index) => (
                          <tr key={index}>
                            <td>{item?.title}</td>
                            <td>{item?.users?.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <CustomerReview />
              </Col>
              <Col md={6}>
                <div className="card">
                  <Chart
                    options={updatedChartData?.options}
                    series={updatedChartData?.series}
                    type="radialBar"
                    height={390}
                  />
                </div>
              </Col>
            </Row>
          </section>
        </Col>
        <Col md={3}>
          <aside>
            <Updates />
            <RecentPageHistory items={Object.keys(packageObj)} />
          </aside>
        </Col>
      </Row>
    </DashboardStyled>
  );
};

export default Dashboard;

const columnWidth = (column: any) => column.width;
