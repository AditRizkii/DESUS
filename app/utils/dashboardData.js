const BASE_URL = "http://localhost:3000";

export const dashboardData = async () => {
  const response = await fetch(`${BASE_URL}/api/dashboard`);
  const data = await response.json();
  return data;
};
