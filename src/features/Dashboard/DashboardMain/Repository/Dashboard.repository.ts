import { getDashboardPayloadIn } from "../DataMapper/Dashboard.mapper";
import { getDashboardListRemote } from "./Dashboard.remote";

export const getDashboardListRepo = async (id: number) => {
  const result = await getDashboardListRemote(id);
  const mappedArr = getDashboardPayloadIn(result?.data);
  return mappedArr;
};
