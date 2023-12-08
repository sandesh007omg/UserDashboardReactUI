import { getDashboardPayloadIn } from "../DataMapper/Dashboard.mapper";
import { getDashboardListRemote } from "./Dashboard.remote";

export const getDashboardListRepo = async () => {
  const result = await getDashboardListRemote();
  const mappedArr = getDashboardPayloadIn(result);
  return mappedArr;
};
