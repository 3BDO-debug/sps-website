import axiosInstance from "./axios";

export const vacanciesFetcher = async () =>
  axiosInstance
    .get("vacancies/fetch-vacancies")
    .then((response) => response.data);

export const applicationSubmissionRequest = async (requestData) =>
  axiosInstance
    .post("vacancies/application-handler", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
