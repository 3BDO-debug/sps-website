"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Grid,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  alpha,
  Container,
} from "@mui/material";
// assets
import servicesBg from "@/assets/servicesBg.png";
import construction from "@/assets/icons/construction.png";
import design from "@/assets/icons/design.png";
import feasibility from "@/assets/icons/feasibility.png";
import operation from "@/assets/icons/operation.png";
import procurement from "@/assets/icons/procurement.png";
import planning from "@/assets/icons/planning.png";
import InfoCard from "@/components/InfoCard";

function page() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const servicesCardsData = [
    {
      color: "primary.main",
      icon: "material-symbols:engineering",
      title: "Engineering",
      value: "engineering",
    },
    {
      color: "primary.main",
      icon: "emojione-monotone:building-construction",
      title: "Construction",
      value: "construction",
    },
    {
      color: "primary.main",
      icon: "pajamas:rocket-launch",
      title: "Testing & Commissioning",
      value: "testing_and_commissioning",
    },
    {
      color: "primary.main",
      icon: "fa:group",
      title: "Staffing",
      value: "staffing",
    },
  ];

  return (
    <Box sx={{ mt: 20 }}>
      <Box
        sx={{
          cursor: "pointer",
          backgroundImage: `url(${servicesBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: isMdOrLarger ? "85vh" : "225vh",
            bgcolor: alpha(theme.palette.primary.main, 0.7),
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 2, py: 10 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack gap={5} sx={{ mt: 10 }}>
                <Typography sx={{ color: "grey.0" }} variant="h4">
                  Flexibility and competitiveness are key strengths of SPS.
                </Typography>
                <Typography sx={{ color: "grey.0" }} variant="subtitle1">
                  Thanks to its international corporate structure, SPS is fully
                  equipped to manage large-scale, multidisciplinary projects
                  with efficiency and precision.We continuously integrate our
                  expertise and knowledge to develop innovative solutions
                  tailored to each phase of the project.
                </Typography>
                <Typography sx={{ color: "grey.0" }} variant="subtitle1">
                  Our team-oriented approach, problem-solving mindset, and the
                  ongoing evolution of our professional practices enable us to
                  deliver a wide range of services across various sectors.
                </Typography>
              </Stack>
            </Grid>
            {servicesCardsData.map((card, index) => (
              <Grid item xs={12} md={3} key={index}>
                <InfoCard
                  icon={card.icon}
                  color={card.color}
                  title={card.title}
                  value={card.value}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default page;
