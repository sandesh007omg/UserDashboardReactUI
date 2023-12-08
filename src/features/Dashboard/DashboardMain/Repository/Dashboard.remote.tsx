import { users } from "../View/data";

export const getDashboardListRemote = async () => {
  try {
    // const response = await fetch("https://api.example.com/users");
    const data = users;
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
