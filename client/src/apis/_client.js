import { create } from "apisauce";

const apiClient = create({
  // Development
  baseURL: "http://localhost:3001",

  timeout: 20000,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  return response;
};

export default apiClient;
