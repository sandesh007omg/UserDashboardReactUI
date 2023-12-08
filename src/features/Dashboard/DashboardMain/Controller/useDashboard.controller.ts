import { useEffect, useState } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";
import useSearch from "./useSearch.controller";

const useDashboard = () => {
  const [data, setData] = useState([]);
  const [clonedData, setCloneData] = useState([]);
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
      const newUserList = structuredClone(userList);
      setData(userList);
      setCloneData(newUserList);
    })();
  }, []);
  return {
    data: filteredData,
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    clonedData,
  };
};
export default useDashboard;
