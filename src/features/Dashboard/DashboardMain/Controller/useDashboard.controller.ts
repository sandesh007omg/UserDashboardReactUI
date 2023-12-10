import { createContext, useEffect, useState, ChangeEvent } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";
import useSearch from "./useSearch.controller";
import { STATUS_LIST } from "../View/config";
import { userDetails } from "../../DrillDown/mockData/userDetails";
import { DASHBOARD_DRILL_DOWN } from "../../../../constants/route";
import { useNavigate } from "react-router-dom";
import { chartData } from "../View/config";

interface User {
  id: number;
}

interface Package {
  [key: string]: User[];
}

interface DashboardContextProps {
  data: User[];
  searchTerm: string;
  packageObj: Package;
  packageTable: { title: string; users: User[] }[];
  isSearchVisible: boolean;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchToggle: () => void;
  clonedData: User[];
  selectedValues: any[];
  handleMultiSelectChange: (selectedOptions: any) => void;
  onRowClick: (data: User) => void;
  updatedChartData: { labels: string[]; series: number[] };
}

const useDashboard = (): DashboardContextProps => {
  const navigate = useNavigate();

  const [data, setData] = useState<User[]>([]);
  const [isMounted, setIsMounted] = useState(true);
  const [clonedData, setCloneData] = useState<User[]>([]);
  const [packageObj, setPackageData] = useState<Package>({});
  const [packageTable, setPackageTable] = useState<
    { title: string; users: User[] }[]
  >([]);
  const [selectedValues, setSelectedValues] = useState<any[]>([...STATUS_LIST]);
  const {
    searchTerm,
    isSearchVisible,
    handleSearchChange,
    handleSearchToggle,
    filteredData,
  } = useSearch(data);

  useEffect(() => {
    setIsMounted(true);
    fetchData();
    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  const fetchData = async () => {
    try {
      const userList = await getDashboardListRepo();
      const newUserList = structuredClone(userList);
      const packageList = await getGroupedByPackage(userDetails);
      const newPackageTable = await getPackageUserList(packageList);
      if (isMounted) {
        setData(userList);
        setPackageData({ ...packageList });
        setPackageTable([...newPackageTable]);
        setCloneData(newUserList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const onRowClick = (data: User) => {
    navigate(`${DASHBOARD_DRILL_DOWN}/${data?.id}`, { state: data });
  };

  const labels = packageTable?.map((a: any) => a?.title) || [];
  const series = packageTable?.map((a: any) => a?.users?.length) || [];
  const updatedChartData = { ...chartData, labels, series };

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
    updatedChartData,
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

export const DashboardMainContext = createContext<DashboardContextProps | null>(
  null
);
