const BASE_URL = "http://localhost:3000";

export const fetchSingleGejala = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  const data = await response.json();
  return data;
};
