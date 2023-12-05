export const getDashboardListRemote = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
