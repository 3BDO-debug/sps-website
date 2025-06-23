"use client";
// react
import React, { useCallback, useEffect, useState } from "react";
// mui
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
// __apis__
import { vacanciesFetcher } from "@/__apis__/careers";
// stores
import useAlertStore from "@/stores/useAlertStore";
import JobApplicationPopUp from "@/components/JobApplicationPopUp";

function page() {
  const { triggerAlert } = useAlertStore();

  const [vacancies, setVacancies] = useState([]);

  const [popUp, triggerPopUp] = useState(false);

  const [jobId, setJobId] = useState(null);

  const fetchVacancies = useCallback(async () => {
    await vacanciesFetcher()
      .then((response) => {
        setVacancies(response);
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error loading vacancies",
        });
      });
  }, []);

  useEffect(() => {
    fetchVacancies();
  }, []);

  console.log("vvv", vacancies);

  return (
    <Container sx={{ mt: 25 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Available Vacancies
      </Typography>
      <Stack gap={3}>
        {vacancies.map((vacancy, index) => (
          <Stack gap={1} key={index}>
            <Typography
              sx={{ color: "primary.main", wordBreak: "break-word" }}
              variant="h4"
            >
              {vacancy.title}
            </Typography>
            <Typography sx={{ color: "primary.main", wordBreak: "break-word" }}>
              <span style={{ fontWeight: "bold" }}>Job description: </span>{" "}
              {vacancy.description}
            </Typography>
            <Typography sx={{ color: "primary.main", wordBreak: "break-word" }}>
              <span style={{ fontWeight: "bold" }}>Job requirements:</span>
              <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                {vacancy.requirements
                  ?.split("•")
                  .filter((item) => item.trim() !== "")
                  .map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                  ))}
              </ul>
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => {
                setJobId(vacancy.id);
                triggerPopUp(true);
              }}
            >
              Apply Now
            </Button>
            <Divider
              sx={{ my: 1, border: 1, color: "grey.400", borderRadius: 100 }}
            />
          </Stack>
        ))}
      </Stack>
      <JobApplicationPopUp
        isTriggered={popUp}
        closeHandler={() => {
          triggerPopUp(false);
        }}
        jobId={jobId}
      />
    </Container>
  );
}

export default page;
