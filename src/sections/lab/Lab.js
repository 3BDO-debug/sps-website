"use client";
import React, { useCallback, useEffect, useState } from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import LabCard from "@/components/LabCard";
import Iconify from "@/components/Iconify";

function Labs() {
  const { triggerAlert } = useAlertStore();

  const [labs, setLabs] = useState([]);

  const [labsSliderData, setLabsSliderData] = useState([]);

  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const [classification, setClassification] = useState(null);

  const fetchLabsSlider = useCallback(async () => {
    await labsFetcher()
      .then((response) => {
        setLabsSliderData(response);
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
    fetchLabsSlider();
  }, []);

  const fetchLabs = useCallback(async () => {
    await labsFetcher(classification)
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
  }, [classification]);

  useEffect(() => {
    fetchLabs();
  }, [classification]);

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

  const classifications = [
    [null, "ALL"],
    ["gis_sf6_tools", "GIS (SF6) Tools"],
    ["electrical_testers", "Electrical Testers"],
    ["mechanical_testers", "Mechanical Testers"],
  ];

  return (
    <Box sx={{ mt: 25 }}>
      <Slider {...settings}>
        {labsSliderData.map((lab, index) => (
          <Box>
            <Container
              key={index}
              sx={{
                bgcolor: "primary.main",
                padding: 3,
                borderRadius: 10,
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // horizontal center
                      alignItems: "center", // vertical center
                    }}
                  >
                    <Image
                      src={lab.image}
                      alt="device image"
                      width={isMdOrLarger ? 400 : 250}
                      height={200}
                      style={{ borderRadius: 15 }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
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
                    {lab.specifications && (
                      <Accordion
                        sx={{
                          color: "primary.main",
                          bgcolor: "grey.400",
                          width: "60%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<Iconify icon="lucide:chevron-down" />}
                        >
                          <Typography fontWeight="bold">
                            Specifications
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {lab.specifications.split(",").map((spec, index) => (
                            <Typography
                              key={index}
                              sx={{ wordBreak: "break-word" }}
                            >
                              • {spec.trim()}
                            </Typography>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ))}
      </Slider>
      <Divider sx={{ my: 3 }} />
      <Container maxWidth="xl">
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
            {classifications.map(([value, label]) => (
              <Button
                key={value}
                onClick={() => {
                  setClassification(value);
                }}
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  flexShrink: 0,
                  bgcolor: classification === value ? "primary.main" : "grey.0",
                  color: classification === value ? "grey.0" : "primary.main",
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
        <Grid container spacing={3}>
          {labs.map((lab, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <LabCard
                image={lab.image}
                name={lab.name}
                description={lab.description}
                specifications={lab.specifications}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Labs;
