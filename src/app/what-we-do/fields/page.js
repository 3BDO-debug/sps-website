"use client";
import React, { use } from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// mui
import {
  Box,
  useMediaQuery,
  useTheme,
  alpha,
  Grid,
  Typography,
  Stack,
  Container,
} from "@mui/material";
// react-slick
import Slider from "react-slick";
// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// assets
import fieldsIntro from "@/assets/fields-intro.png";
import fieldsBg from "@/assets/fieldsBg.png";
// components
import InfoCard from "@/components/InfoCard";
import { Icon } from "@iconify/react";

function page() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const fieldsCardsData = [
    {
      color: "primary.main",
      icon: "game-icons:power-lightning",
      title: "Power Plants & Substations",
      value: "power_plants_and_substations",
    },
    {
      color: "primary.main",
      icon: "hugeicons:solar-panel-02",
      title: "Solar Energy",
      value: "solar_energy",
    },
    {
      color: "primary.main",
      icon: "fa6-solid:oil-well",
      title: "Oil & Gas",
      value: "oil_and_gas",
    },
    {
      color: "primary.main",
      icon: "mdi:transportation",
      title: "Transportation",
      value: "transportation",
    },
    {
      color: "primary.main",
      icon: "iconoir:industry",
      title: "Industry",
      value: "industry",
    },
    {
      color: "primary.main",
      icon: "gis:story-map",
      title: "Abroad",
      value: "abroad",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Icon color="white" icon="line-md:chevron-right" />,
    prevArrow: <Icon color="white" icon="line-md:chevron-left" />,
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

  return (
    <Box sx={{ mt: 20 }}>
      <Box
        sx={{
          backgroundImage: `url(${fieldsBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: isMdOrLarger ? "121vh" : "145vh",
            bgcolor: alpha(theme.palette.primary.main, 0.7),
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, p: isMdOrLarger ? 10 : 2 }}>
          <Grid container spacing={5} sx={{ mb: 10 }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 10 }}>
              <Stack gap={5}>
                <Typography variant="h3" sx={{ color: "grey.0" }}>
                  Flexibility and competitiveness are key strengths of SPS.
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.0" }}>
                  Thanks to its international corporate structure, SPS is fully
                  equipped to manage large-scale, multidisciplinary projects
                  with efficiency and precision.We continuously integrate our
                  expertise and knowledge to develop innovative solutions
                  tailored to each phase of the project.
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.0" }}>
                  Our team-oriented approach, problem-solving mindset, and the
                  ongoing evolution of our professional practices enable us to
                  deliver a wide range of services across various sectors.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image src={fieldsIntro} alt="intro" layout="responsive" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Container
              maxWidth="xl"
              sx={{
                position: "relative",
                zIndex: 2,
                paddingX: 3,
              }}
            >
              <Slider {...settings}>
                {fieldsCardsData.map((card, index) => (
                  <InfoCard
                    icon={card.icon}
                    color={card.color}
                    title={card.title}
                    value={card.value}
                  />
                ))}
              </Slider>
            </Container>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
