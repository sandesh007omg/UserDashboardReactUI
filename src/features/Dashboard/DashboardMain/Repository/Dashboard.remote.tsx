import { users } from "../View/data";

export const getDashboardListRemote = async () => {
  try {
    const data = users;
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
