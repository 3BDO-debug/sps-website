import axiosInstance from "./axios";

export const projectsFetcher = async (id, variant, category) =>
  axiosInstance
    .get("projects/fetch-projects", { params: { id, variant, category } })
    .then((response) => response.data);
