import { userDetails } from "../../DrillDown/mockData/userDetails";
import { users } from "../mockData/data";

export const getDashboardListRemote = async () => {
  try {
    const data = users;
    const subscribedUser = userDetails;
    return { data, subscribedUser };
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
