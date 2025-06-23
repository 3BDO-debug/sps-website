"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
// next
import { useSearchParams } from "next/navigation";
// mui
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
// __apis__
import { projectsFetcher } from "@/__apis__/projects";
// stores
import useAlertStore from "@/stores/useAlertStore";
// assets
import projectsIntro from "@/assets/projectsIntro.jpg";
// compoenets
import Intro from "@/components/Intro";
import ProjectAndLabCard from "@/components/ProjectAndLabCard";
import { Icon } from "@iconify/react";

function Projects() {
  const { triggerAlert } = useAlertStore();

  const searchParams = useSearchParams();

  const [projects, setProjects] = useState([]);

  const [category, setCategory] = useState(null);

  const categoryRef = useRef(null);

  const fetchProjects = useCallback(async () => {
    await projectsFetcher(null, null, category)
      .then((response) => {
        setProjects(response);
        if (searchParams.get("category")) {
          setCategory(searchParams.get("category"));
          categoryRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error loading projects",
        });
      });
  }, [category]);

  useEffect(() => {
    fetchProjects();
  }, [category]);

  const categories = [
    [null, "ALL"],
    ["engineering", "Engineering Projects"],
    ["construction", "Construction Projects"],
    ["testing_and_commissioning", "Testing & Commissioning Projects"],
    ["staffing", "Staffing Projects"],
    ["power_plants_and_substations", "Power Plants & Substations Projects"],
    ["solar_energy", "Solar Energy Projects"],
    ["oil_and_gas", "Oil & Gas Projects"],
    ["transportation", "Transportation Projects"],
    ["industry", "Industry Projects"],
    ["abroad", "Abroad Projects"],
  ];

  return (
    <Box sx={{ mt: 20 }}>
      <Intro
        image={projectsIntro}
        title="SPS excels in managing large-scale, multidisciplinary projects across all sectors."
        item1="SPS excels in managing large-scale, multidisciplinary projects across all sectors"
        item2="What makes the difference between a good job and an outstanding one is the relentless drive for improvement and attention to the smallest details.For us, this means blending integrity, precision, and professionalism with innovation, vision, and genuine passion."
        dividerColor="secondary.main"
      />
      <Container maxWidth="xl" sx={{ mt: 2 }} ref={categoryRef}>
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          <Icon icon="line-md:filter-twotone" />
          Filter by
        </Typography>
        <Box
          sx={{
            p: 3,
            overflowX: "auto",
            width: "100%",
            /* Hide scrollbar for WebKit browsers */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            /* Hide scrollbar for Firefox */
            scrollbarWidth: "none",
            /* Hide scrollbar for IE, Edge */
            "-ms-overflow-style": "none",
          }}
        >
          <Stack direction="row" spacing={2} flexWrap="nowrap">
            {categories.map(([value, label]) => (
              <Button
                key={value}
                onClick={() => {
                  setCategory(value);
                }}
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  flexShrink: 0,
                  bgcolor: category === value ? "primary.main" : "grey.0",
                  color: category === value ? "grey.0" : "primary.main",
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProjectAndLabCard
                id={project.id}
                image={project.image}
                name={project.name}
                width={300}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
