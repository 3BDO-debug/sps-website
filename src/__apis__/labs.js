import axiosInstance from "./axios";

export const labsFetcher = async () =>
  axiosInstance.get("labs/fetch-labs").then((response) => response.data);
