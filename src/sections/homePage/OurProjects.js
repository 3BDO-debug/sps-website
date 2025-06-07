"use client";
import React, { useCallback, useEffect, useState } from "react";
// next
import { useRouter } from "next/navigation";
// mui
import {
  Box,
  Container,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// __apis__
import { projectsFetcher } from "@/__apis__/projects";
// assets
import ourProjectsBg from "@/assets/ourProjectsBg.png";
// components
import ProjectAndLabCard from "@/components/ProjectAndLabCard";
import CustomButton from "@/components/CustomButton";

function OurProjects() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const { push } = useRouter();

  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    await projectsFetcher()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error loading projects",
        });
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Box>
      <Box sx={{ bgcolor: "secondary.main", height: 50 }} />
      <Box
        sx={{
          backgroundImage: `url(${ourProjectsBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "75vh",
            bgcolor: alpha(theme.palette.secondary.main, 0.3),
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Stack>
            <Stack>
              <Typography
                variant="h2"
                sx={{ color: "grey.0", mt: 5, textAlign: "center" }}
              >
                Our Projects
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey.0", textAlign: "center" }}
              >
                SPS EXCELS IN DELIVERING LARGE-SCALE, MULTIDISCIPLINARY
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey.0", textAlign: "center" }}
              >
                PROJECTS ACROSS A WIDE RANGE OF SECTORS.
              </Typography>
            </Stack>
            <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
              <Stack direction={isMdOrLarger ? "row" : "column"} gap={3}>
                {projects.slice(0, 3).map((project) => (
                  <ProjectAndLabCard
                    key={project.id}
                    id={project.id}
                    image={project.image}
                    name={project.name}
                  />
                ))}

                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    width: isMdOrLarger ? 400 : 280,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 350,
                    }}
                  >
                    <CustomButton
                      label="See more"
                      color="grey.0"
                      bgColor="secondary.main"
                      onClick={() => push("./projects")}
                    />
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default OurProjects;
