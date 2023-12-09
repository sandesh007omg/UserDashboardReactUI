import { useContext } from "react";
import DynamicTable from "../../../../components/DynamicTable";
import SearchBar from "../../../../components/Search";
import MultiSelect from "../../../../components/Select";
import { DashboardMainContext } from "../Controller/useDashboard.controller";
import { STATUS_LIST, tableProps } from "./config";

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
  );
};
export default UserTable;
const columnWidth = (column: any) => column.width;
