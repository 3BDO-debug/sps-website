"use client";
import React from "react";
// mui
import { Box, Container, Grid } from "@mui/material";
// compoenets
import Intro from "@/components/Intro";
import ProjectAndLabCard from "@/components/ProjectAndLabCard";
// assets
import projectsIntro from "@/assets/projectsIntro.jpg";
import project1 from "@/assets/homeProjects/project1.png";
import project2 from "@/assets/homeProjects/project2.png";
import project3 from "@/assets/homeProjects/project3.png";
import labIntro from "@/assets/labIntro.png";

function Labs() {
  const projectCards = [
    {
      image: project1,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project1,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project1,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project2,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project2,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project2,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project3,
      description: "Scope is Installation testing and Commissioning",
    },
    {
      image: project3,
      description: "Scope is Installation testing and Commissioning",
    },
  ];

  return (
    <Box sx={{ mt: 20 }}>
      <Intro
        image={labIntro}
        title="SPS excels in managing large-scale, multidisciplinary projects across all sectors."
        item1="SPS excels in managing large-scale, multidisciplinary projects across all sectors"
        item2="What makes the difference between a good job and an outstanding one is the relentless drive for improvement and attention to the smallest details.For us, this means blending integrity, precision, and professionalism with innovation, vision, and genuine passion."
        dividerColor="secondary.main"
      />
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mt: 10 }}>
          {projectCards.map((card, index) => (
            <Grid item xs={12} md={3} key={index}>
              <ProjectAndLabCard
                image={card.image}
                description={card.description}
                width={350}
                color="primary.main"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Labs;
