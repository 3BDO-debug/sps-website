"use client";
import React, { useCallback, useEffect, useState } from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// __apis__
import { labsFetcher } from "@/__apis__/labs";
// react-slick
import Slider from "react-slick";
// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// compoenets
import ProjectAndLabCard from "@/components/ProjectAndLabCard";
// assets
import labIntro from "@/assets/labIntro.png";
// stores
import useAlertStore from "@/stores/useAlertStore";
import { Icon } from "@iconify/react";
import { projectsFetcher } from "@/__apis__/projects";

function Labs() {
  const { triggerAlert } = useAlertStore();

  const [labs, setLabs] = useState([]);

  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const fetchLabs = useCallback(async () => {
    await labsFetcher()
      .then((response) => {
        setLabs(response);
      })
      .catch((error) => {
        triggerAlert({
          triggered: true,
          type: "error",
          message: "Error fetching devices",
        });
      });
  }, []);

  useEffect(() => {
    fetchLabs();
  }, []);

  const settings = {
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // rtl: currentLang.value === "ar", // Adjust direction based on current language
    nextArrow: (
      <Icon
        color="primary.main"
        // icon={currentLang.value === "ar" ? "bx:left-arrow" : "bx:right-arrow"}
        icon="line-md:chevron-right"
      />
    ),
    prevArrow: (
      <Icon
        color="primary.main"
        // icon={currentLang.value === "ar" ? "bx:right-arrow" : "bx:left-arrow"}
        icon="line-md:chevron-left"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  //-----------------------------------------
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

  console.log("gg", labs);

  return (
    <Box sx={{ mt: 20 }}>
      <Slider {...settings}>
        {labs.map((lab, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "primary.main",
              padding: 3,
              height: "40vh",
            }}
          >
            <Stack
              direction={isMdOrLarger ? "row" : "column"}
              alignItems="center"
              gap={isMdOrLarger ? 3 : 0}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: isMdOrLarger ? 400 : 300,
                  height: 200,
                }}
              >
                <Image
                  src={lab.image}
                  alt="device image"
                  width={400}
                  height={300}
                />
              </Box>
              <Stack gap={1}>
                <Typography variant="h4" sx={{ color: "grey.0" }}>
                  {lab.name}
                </Typography>
                {lab.description && (
                  <Typography
                    sx={{
                      color: "grey.0",
                      wordBreak: "break-word",
                      width: "70%",
                    }}
                  >
                    {lab.description}
                  </Typography>
                )}
                {lab.specifications &&
                  lab.specifications?.split(",").map((spec, index) => (
                    <Typography
                      key={index}
                      sx={{ color: "grey.0", wordBreak: "break-word" }}
                    >
                      • {spec.trim()}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>
        ))}
      </Slider>
      <Divider sx={{ my: 3 }} />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={3} key={index}>
              <ProjectAndLabCard
                id={project.id}
                image={project.image}
                name={project.name}
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
