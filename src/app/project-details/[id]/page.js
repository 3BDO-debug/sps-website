"use client";
import React, { useCallback, useEffect, useState } from "react";
// next
import Image from "next/image";
import { useParams } from "next/navigation";
// mui
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// __apis__
import { projectsFetcher } from "@/__apis__/projects";
// stores
import useAlertStore from "@/stores/useAlertStore";
// assets
import img from "@/assets/fieldsBg.png";
// components
import ProjectAndLabCard from "@/components/ProjectAndLabCard";

function page() {
  const { triggerAlert } = useAlertStore();

  const { id } = useParams();

  const [projectData, setProjectData] = useState([]);

  const [relatedProjects, setRelatedProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    await projectsFetcher(id)
      .then((response) => {
        setProjectData(response[0]);
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error loading project details",
        });
      });
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchProjects();
    }
  }, [id]);

  const fetchRelatedProjects = useCallback(async () => {
    await projectsFetcher(null, null, projectData.category)
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.length);
        setRelatedProjects(response[randomIndex]);
      })
      .catch((error) => {});
  }, [id]);

  useEffect(() => {
    if (projectData) {
      fetchRelatedProjects();
    }
  }, [projectData]);

  return (
    <Container maxWidth="xl" sx={{ mt: 20 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          // src={projectData?.image}
          alt="image"
          objectFit="contain"
          style={{ width: "50%", height: "auto" }}
        />
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={9}>
          <Stack gap={3}>
            <Stack direction="row" gap={2}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: 5,
                  borderRadius: 50,
                }}
              />
              <Box>
                <Typography
                  sx={{ color: "primary.main", wordBreak: "break-word" }}
                  variant="h4"
                >
                  {projectData.name}
                </Typography>
                {projectData.subtitle && (
                  <Typography
                    sx={{
                      color: "primary.main",
                      wordBreak: "break-word",
                      fontWeight: "bold",
                    }}
                  >
                    {projectData.subtitle}
                  </Typography>
                )}
                {projectData.description && (
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                  >
                    {projectData.description
                      .split("•")
                      .filter((point) => point.trim() !== "")
                      .map((point, index) => (
                        <div key={index}>• {point.trim()}</div>
                      ))}
                  </Typography>
                )}
              </Box>
            </Stack>
            {projectData.client && (
              <Stack direction="row" gap={2} alignItems="stretch">
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: 5,
                    borderRadius: 50,
                  }}
                />
                <Box>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                    variant="h4"
                  >
                    Client
                  </Typography>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                  >
                    {projectData.client}
                  </Typography>
                </Box>
              </Stack>
            )}
            {projectData.owner && (
              <Stack direction="row" gap={2} alignItems="stretch">
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: 5,
                    borderRadius: 50,
                  }}
                />
                <Box>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                    variant="h4"
                  >
                    Project Owner
                  </Typography>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                  >
                    {projectData.owner}
                  </Typography>
                </Box>
              </Stack>
            )}
            {projectData.location && (
              <Stack direction="row" gap={2} alignItems="stretch">
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: 5,
                    borderRadius: 50,
                  }}
                />
                <Box>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                    variant="h4"
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{ color: "primary.main", wordBreak: "break-word" }}
                  >
                    {projectData.location}
                  </Typography>
                </Box>
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={0.2}>
          <Divider
            sx={{
              bgcolor: "grey.400",
              height: "100%",
              width: 3,
              borderRadius: 50,
            }}
          />
        </Grid>
        <Grid item xs={12} md={2.8}>
          <Typography variant="h4" sx={{ mb: 3, color: "primary.main" }}>
            Other Projects
          </Typography>
          <ProjectAndLabCard
            id={relatedProjects.id}
            width={330}
            // image={relatedProjects.image}
            name={relatedProjects.name}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default page;
