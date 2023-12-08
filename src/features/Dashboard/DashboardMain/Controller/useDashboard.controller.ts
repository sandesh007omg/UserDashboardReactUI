import { useEffect, useState } from "react";
import { getDashboardListRepo } from "../Repository/Dashboard.repository";

const useDashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const userList = await getDashboardListRepo();
      setData(userList);
    })();
  }, []);
  return {
    data,
  };
};
export default useDashboard;
