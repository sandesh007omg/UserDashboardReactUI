import { useEffect, useState } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";
import useSearch from "./useSearch.controller";
import { STATUS_LIST } from "../View/config";
import { userDetails } from "../../DrillDown/mockData/userDetails";
import { DASHBOARD_DRILL_DOWN } from "../../../../constants/route";
import { useNavigate } from "react-router-dom";

const useDashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [clonedData, setCloneData] = useState<any>([]);
  const [packageObj, setPackage] = useState<any>({});
  const [packageTable, setPackageTable] = useState<any>([]);
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
      const packageList = await getGroupedByPackage(userDetails);
      const newPackageTable = await getPackageUserList(packageList);
      setData(userList);
      setPackage({ ...packageList });
      setPackageTable([...newPackageTable]);
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
  const onRowClick = (data: any) => {
    navigate(`${DASHBOARD_DRILL_DOWN}/${data?.id}`, { state: data });
  };
  return {
    data: filteredData,
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
  };
};
export default useDashboard;

export const getMappedValue = async (list: any, param: string) => {
  return list?.map((item: any) => item[param]) || [];
};

export const getGroupedByPackage = async (data: any) => {
  const groupedByPackage = data.reduce((result: any, current: any) => {
    const packageKey = current.package;
    if (!result[packageKey]) {
      result[packageKey] = [];
    }
    result[packageKey].push(current);
    return result;
  }, {});
  return groupedByPackage;
};
export const getPackageUserList = async (data: any) => {
  const resultArray = Object.entries(data).map(([title, users]) => ({
    title,
    users,
  }));
  return resultArray;
};
