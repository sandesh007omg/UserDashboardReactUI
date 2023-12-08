import { useEffect, useState } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";
import useSearch from "./useSearch.controller";

const useDashboard = () => {
  const [data, setData] = useState([]);
  const {
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    filteredData,
  } = useSearch(data);
  useEffect(() => {
    (async () => {
      const userList = await getDashboardListRepo();
      setData(userList);
    })();
  }, []);
  return {
    data: filteredData,
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
  };
};
export default useDashboard;
