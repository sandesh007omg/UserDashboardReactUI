import { useEffect, useState } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";
import useSearch from "./useSearch.controller";
import { STATUS_LIST } from "../View/config";

const useDashboard = () => {
  const [data, setData] = useState([]);
  const [clonedData, setCloneData] = useState<any>([]);
  const [selectedValues, setSelectedValues] = useState([...STATUS_LIST]);
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

  const handleMultiSelectChange = async (selectedOptions: any) => {
    const valueArr = await getMappedValue(selectedOptions, "value");
    const newValueArr =
      valueArr.length > 0
        ? valueArr
        : await getMappedValue(STATUS_LIST, "value");
    const rest =
      clonedData?.filter(({ status }: any) => newValueArr.includes(status)) ||
      [];
    setData(rest);
    setSelectedValues(selectedOptions);
  };
  return {
    data: filteredData,
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    clonedData,
    selectedValues,
    handleMultiSelectChange,
  };
};
export default useDashboard;

export const getMappedValue = async (list: any, param: string) => {
  return list?.map((item: any) => item[param]) || [];
};
