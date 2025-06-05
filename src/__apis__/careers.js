import axiosInstance from "./axios";

export const vacanciesFetcher = async () =>
  axiosInstance
    .get("vacancies/fetch-vacancies")
    .then((response) => response.data);
