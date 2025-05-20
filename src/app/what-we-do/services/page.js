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
      image: feasibility,
      title: "Feasibility",
      items: [
        "Master Planning",
        "Feasibility Studies",
        "Transport & Traffic Planning",
      ],
    },
    {
      color: "primary.main",
      image: planning,
      title: "Planning",
      items: [
        "Architectural & Interior Design",
        "Urban Design",
        "Sustainability & Environmental ",
      ],
    },
    {
      color: "primary.main",
      image: design,
      title: "Design",
      items: [
        "Structural Engineering",
        "Mechanical & Electrical Engineering",
        "Infrastructure & Water Systems Design",
      ],
    },
    {
      color: "primary.main",
      image: procurement,
      title: "Procurement",
      items: [
        "Procurement Strategy",
        "Tender Evaluation",
        "Contract Management",
      ],
    },
    {
      color: "primary.main",
      image: construction,
      title: "Construction",
      items: ["Construction Management", "Site Supervision", "Quality Control"],
    },
    {
      color: "primary.main",
      image: operation,
      title: "Operation & Maintenance",
      items: [
        "Facility Management",
        "Maintenance Planning",
        "Technology Transfer & Training",
      ],
    },
  ];

  return (
    <Box sx={{ mt: 20 }}>
      <Box
        sx={{
          backgroundImage: `url(${servicesBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: isMdOrLarger ? "108vh" : "347vh",
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
                  image={card.image}
                  color={card.color}
                  title={card.title}
                  item1={card.items[0]}
                  item2={card.items[1]}
                  item3={card.items[2]}
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
