import React from "react";
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
// next
import Image from "next/image";
// components
import Intro from "@/components/Intro";
import InfoCard from "@/components/InfoCard";
// assets
import WhySpsIntro from "@/assets/projectsIntro.jpg";
import iso1 from "@/assets/certificates/ISO 1.jpg";
import iso2 from "@/assets/certificates/ISO 2.jpg";
import iso3 from "@/assets/certificates/ISO 3.jpg";

function intro() {
  const infoCardData = [
    {
      title: "Our Mission",
      item1:
        "To deliver world-class testing, Commissioning, and diagnostic services across the energy sector using advanced tools, certified processes and a team of passionate experts.",
      item2: "We are commited to:",
      item3:
        "supporting utilities, EPCs, and developers with fast, accurate and dependable lab services.",
      item4:
        "Continuously evolving with new technologies to meet industry demands.",
      item5:
        "Creating a safe and growth-oriented work environment for our team.",
      item6:
        "Operating with integrity, efficiency and full compliance with international standards.",
      item7:
        "Our mission is simple: precise results, professional service and long-term value for our clients and partners.",
    },
    {
      title: "Our Vision",
      item1:
        "At SPS Lab, we envision Becoming a trusted regional leader in electrical testing and diagnostics - Empowering our partners to deliver safe, efficient, and sustainable energy solutions.",
      item2:
        "we aim to be more than a service provider - We strive to be an integrated part of our clients success story by offering reliable support, so they can focus on the core operations while we handled the critical aspects of testing, commissioning and quality assurance.",
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
            Mission and Vision
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {infoCardData.map((card, index) => (
            <Grid item xs={12} key={index}>
              <InfoCard
                title={card.title}
                item1={card.item1}
                item2={card.item2}
                item3={card.item3}
                item4={card.item4}
                item5={card.item5}
                item6={card.item6}
                item7={card.item7}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h3" sx={{ my: 5, color: "primary.main" }}>
                Certificates
              </Typography>
            </Box>
          </Grid>
          {[iso1, iso2, iso3].map((src, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ width: "100%", height: 650, position: "relative" }}>
                <Image
                  src={src}
                  alt={`ISO ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default intro;
