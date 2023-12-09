import { userDetails } from "../mockData/userDetails";

export const getDrillDownListRemote = async (id: number) => {
  try {
    const data = userDetails?.find((a: any) => Number(a?.user_id) === id);
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
