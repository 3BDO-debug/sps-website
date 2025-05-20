"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  useMediaQuery,
  useTheme,
  alpha,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
// assets
import fieldsIntro from "@/assets/fields-intro.png";
import fieldsBg from "@/assets/fieldsBg.png";
import engineering from "@/assets/icons/engineering.png";
import management from "@/assets/icons/management.png";
import security from "@/assets/icons/security.png";
// components
import InfoCard from "@/components/InfoCard";

function page() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const fieldsCardsData = [
    {
      color: "secondary.main",
      image: engineering,
      title: "Engineering",
      items: [
        "Architectural & Interior Design",
        "Urban Design",
        "Sustainability & Environmental ",
      ],
    },
    {
      color: "secondary.main",
      image: management,
      title: "Management",
      items: [
        "Structural Engineering",
        "Mechanical & Electrical Engineering",
        "Infrastructure & Water Systems Design",
      ],
    },
    {
      color: "secondary.main",
      image: security,
      title: "Security",
      items: [
        "Procurement Strategy",
        "Tender Evaluation",
        "Contract Management",
      ],
    },
  ];

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
            height: isMdOrLarger ? "115vh" : "227vh",
            bgcolor: alpha(theme.palette.secondary.dark, 0.3),
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, p: isMdOrLarger ? 10 : 2 }}>
          <Grid container spacing={5} sx={{ mb: 10 }}>
            <Grid item xs={12} md={6} sx={{ mt: 10 }}>
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
            <Grid item xs={12} md={6}>
              <Image src={fieldsIntro} alt="intro" layout="responsive" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {fieldsCardsData.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
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
        </Box>
      </Box>
    </Box>
  );
}

export default page;
