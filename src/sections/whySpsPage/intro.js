import React from "react";
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
// components
import Intro from "@/components/Intro";
// assets
import WhySpsIntro from "@/assets/projectsIntro.jpg";
import InfoCard from "@/components/InfoCard";

function intro() {
  const infoCardData = [
    {
      title: "Our Mission",
      item1:
        "To deliver world-class testing, Commissioning, and diagnostic services across the energy sector using advanced tools, certified processes and a team of passionate experts",
    },
    {
      title: "Our Vision",
      item1: "Client needs are always a top priority",
    },
  ];

  return (
    <Box sx={{ mt: 20 }}>
      <Intro
        image={WhySpsIntro}
        title="SPS builds its success on the seamless integration of values, expertise, and innovation."
        item1="The combination of experienced professionals and dynamic young talent, the diverse international team, and the deep technical know-how developed through the delivery of complex projects — all these factors have driven our fast-paced growth on the global stage."
        item2="At SPS, we believe that excellence in integrated design and project management comes from ambition, a strong sense of aesthetics and collaboration, and a careful balance between technical precision, financial responsibility, and strategic insight."
        item3="– That’s why SPS stands out as a trusted partner in international markets and a benchmark in multidisciplinary project delivery."
        dividerColor="primary.main"
        height="45vh"
        mobileHeight="100vh"
        mt={5}
      />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" sx={{ my: 5, color: "primary.main" }}>
            Our Mission and Vision
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            {infoCardData.map((card, index) => (
              <Grid item xs={12} key={index}>
                <InfoCard
                  title={card.title}
                  item1={card.item1}
                  item2={card.item2}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default intro;
