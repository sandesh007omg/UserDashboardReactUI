import { useEffect, useState } from "react";
import { getDrillDownListRepo } from "../Repository/DrillDown.repository";
import { useLocation, useParams } from "react-router-dom";
import { getDetailForm } from "../DataMapper/DrillDown.mapper";

const useDrillDown = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [details, setDetails] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const userDetails = await getDrillDownListRepo(Number(id));
      const newUserDetails = { ...userDetails, ...state };
      const detailsList = getDetailForm(newUserDetails);
      setDetails([...detailsList]);
    })();
  }, []);
  return {
    details,
    state,
  };
};
export default useDrillDown;

export const getMappedValue = async (list: any, param: string) => {
  return list?.map((item: any) => item[param]) || [];
};
