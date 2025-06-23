import axiosInstance from "./axios";

export const labsFetcher = async (classification) =>
  axiosInstance
    .get("labs/fetch-labs", { params: { classification } })
    .then((response) => response.data);
