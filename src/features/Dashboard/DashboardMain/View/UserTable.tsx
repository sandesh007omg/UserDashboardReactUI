import { useContext } from "react";
import DynamicTable from "../../../../components/DynamicTable";
import SearchBar from "../../../../components/Search";
import MultiSelect from "../../../../components/Select";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import { STATUS_LIST, tableProps } from "./config";
import styled from "styled-components";

const UserTable = () => {
  const {
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    selectedValues,
    handleMultiSelectChange,
    data,
    clonedData,
    onRowClick,
  } = useContext(DashboardMainContext);
  return (
    <DynamicTableStyled>
      <div className="card">
        <div className="header-wrapper">
          <caption>Customers</caption>
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
            placeholder={"Select Status"}
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
    </DynamicTableStyled>
  );
};
export default UserTable;
const columnWidth = (column: any) => column.width;

export const DynamicTableStyled = styled.section`
  .table-header {
    display: flex;
  }
  .header-wrapper {
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
  }
  .table {
    overflow: auto;
    & > div {
      display: inline-flex;
    }
  }
  h3,
  caption {
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    text-transform: uppercase;
    margin-bottom: 20px;
    flex: 1;
    text-align: left;
  }
  .table-header {
    background-color: transparent;
    border: 0;
    font-size: 12px;
    line-height: 15px;
    color: #6b6c7e;
    font-weight: 400;
    height: 18px;
    & > div {
      padding-left: 8px;
      cursor: pointer;
    }
  }
  .row {
    font-weight: 600;
    border-radius: 4px 0 0 4px;
    padding: 4px 8px 4px 14px;
    white-space: nowrap;
    width: auto;
    border-top: 1px solid rgba(46, 91, 255, 0.08);
    border-bottom: 1px solid rgba(46, 91, 255, 0.08);
    border-radius: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .zindex-2__control {
    min-width: 200px;
  }
  .css-b62m3t-container,
  .zindex-2__control,
  .css-4xgw5l-IndicatorsContainer2 {
    height: 32px;
    min-height: 32px;
  }
`;
