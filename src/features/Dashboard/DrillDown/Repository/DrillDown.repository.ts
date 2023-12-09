import { getDrillDownPayloadIn } from "../DataMapper/DrillDown.mapper";
import { getDrillDownListRemote } from "./DrillDown.remote";

export const getDrillDownListRepo = async (id: number) => {
  const result = await getDrillDownListRemote(id);
  const mappedArr = getDrillDownPayloadIn(result);
  return mappedArr;
};
